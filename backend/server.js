const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


var currentUser = -1;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "foodiestudio"
});

//checking the conection
// Add a database ping operation
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Database is connected');
});

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});



app.post('/signup', (req, res) => {
    const mobileNumber = req.body.mobile_number;

    // Check if the mobile number already exists in the database
    db.query('SELECT * FROM users WHERE mobile_number = ?', [mobileNumber], (err, results) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Error' });
        }

        // If results.length is greater than 0, the mobile number already exists
        if (results.length > 0) {
            return res.status(400).json({ message: 'Mobile number already exists' });
        }

        // If the mobile number is not found, proceed to insert the new user
        const sql = "INSERT INTO users (`first_name`, `last_name`, `mobile_number`, `city`, `state`, `country`, `pincode`, `password`) VALUES(?)";
        const values = [
            req.body.first_name,
            req.body.last_name,
            mobileNumber, // Use the variable here
            req.body.city,
            req.body.state,
            req.body.country,
            req.body.pincode,
            req.body.password
        ];

        db.query(sql, [values], (err, data) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Error' });
            }
            return res.status(200).json(data);
        });
    }
    );
});


app.post('/login', (req, res) => {
    const mobileNumber = req.body.mobile_number;
    const password = req.body.password;

    console.log(mobileNumber);
    console.log(password);
    db.query('SELECT * FROM users WHERE mobile_number = ? and password = ?', [mobileNumber, password], (err, results) => {
        // Query execution and callback
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Error' });
        }
        if (results.length > 0) {
            console.log('mil gya');
            // console.log(results[0].user_id);
            currentUser = results[0].user_id;
            return res.status(200).json(results);
        }
        console.log("baigan");
        return res.status(400).json({ message: 'Wrong phone number or, password.' });

    });
});

//to geting the current user from server.
app.get('/getuser', (req, res) => {
    res.status(200).json(currentUser);
});

app.post('/logout', (req, res) => {
    currentUser = -1; // You can set currentUser to null to indicate a user is not logged in.
    res.status(200).send('Logged out successfully');
});


app.post('/singleBlog', (req, res) => {
    //inserting id into table
    console.log('request is :', req.body.item_id);
    const id = +req.body.item_id;
    if (currentUser !== -1) {
        var query = 'insert into cart value(?,?)';
        db.query(query, [id, +currentUser], (err, result) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Error' });
            }
            return res.status(200).json(result);
        })
    } else {
        return res.status(500).json({ message: 'Error' });
    }
})

//get cart list
app.get(`/getcartList`, (req, res) => {
    if (currentUser !== -1) {
        var query = 'select id from cart where user_id = ?';//SELECT user_id FROM foodiestudio.cart;
        db.query(query, [currentUser], (err, result) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Error' });
            }
            return res.status(200).json(result);
        })
    } else {
        return res.status(200).json({ message: 'not loged in' });
    }
})

app.get('/viewProfile/:id', (req, res) => {
    // console.log('hi')
    const id = +req.params.id; // Access the user_id from URL parameters

    console.log(id);

    db.query('SELECT user_id, first_name, last_name, mobile_number, city, state, country, pincode FROM users WHERE user_id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Error' });
        }
        if (results.length > 0) {
            console.log('Found user profile');
            return res.status(200).json(results);
        }
        console.log("User not found");
        return res.status(404).json({ message: 'User not found.' });
    });
});