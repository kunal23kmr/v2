# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.


## Introduction

This document describes the software requirements for the Food Ordering and Delivery System, a web-based platform that facilitates the seamless ordering and delivery of food from various restaurants or eateries to customers. The system aims to provide a user-friendly interface for customers to create accounts, browse menus, place orders (one order can contain multiple items), track deliveries, cancel orders, and make payments. Additionally, the system includes an administration panel for restaurant owners to manage menus, track orders, handle payments, set prices, apply extra charges/discounts, hire delivery carriers, and handle customer feedback. The system also enables providers to receive custom food recipes from customers, allowing customers to publish their recipes through blogs/simple note. Furthermore, if providers wish to add customer-described recipes to their menu, they must pay 1% of every successful order to the customers.
Problem Statement 
The objective of the Food Ordering and Delivery System is to create an efficient and user-friendly platform for customers to order food from various restaurants or eateries. The key features of the system include:
-	Customer Interface: Customers can create accounts, browse menus, place orders (including multiple items), track deliveries, cancel orders, and make payments easily.
-	Administration Panel: Restaurant owners can manage menus, track orders, handle payments, set prices, apply extra charges/discounts, hire delivery carriers, and respond to customer feedback through the administration panel.
-	Custom Food Recipes: The system allows customers to submit custom food recipes with all the necessary descriptions.
-	Additional Charges for Custom Recipes: For custom recipes, owners can charge extra money based on the used ingredients and cooking time.
-	Recipe Selling: Customers who wish to sell their recipes can receive 1% of the recipe cost for each order.
-	Provider Agreement: Providers cannot add customer-described recipes to their menu without the customer's explicit agreement.
-	Recipe Blog: Users can publish their recipes through personal blogs accessible to the public.
Functional Requirements
•	Customer Interface:
1.	User Registration: Customers can create accounts with necessary details.
2.	Browse Menus: Customers can view menus from various restaurants or eateries.
3.	Place Orders: Customers can place orders for food items, including multiple items in a single order.
4.	Order Tracking: Customers can track the real-time status of their orders.
5.	Order Cancellation: Customers can cancel orders if the order status allows it.
6.	Order Replacement: Customers can replace orders with eligible items if the order status allows it.
7.	Payment Processing: Customers can securely make payments for their orders.
•	Administration Panel:
1.	Menu Management: Restaurant owners can manage menus, including adding, modifying, or removing items.
2.	Order Tracking: Restaurant owners can track and manage incoming orders.
3.	Payment Management: Restaurant owners can receive and handle customer payments securely.
4.	Price Management: Owners can set and modify prices, apply extra charges or discounts as needed.
5.	Delivery Carriers: Owners can hire and manage delivery carriers, assigning them to full fill orders.
6.	Customer Feedback: Owners can handle customer feedback and respond appropriately.
7.	Recipe Approval: Owners can review and approve customer-submitted recipes for addition to the menu.
•	Recipe Management:
1.	Recipe Publication: Customers can publish their recipes on the platform through personal blogs.
2.	Recipe Reading: Users can read public blogs and view recipes shared by other users.
3.	Recipe Selling: Customers willing to sell their recipes can charge 1% of the recipe cost for each order.
4.	Provider Agreement: Providers cannot use customer-described recipes without the customer's explicit agreement.
Non-Functional Requirements  
•	Performance:
1.	The system should handle multiple concurrent users efficiently without performance degradation.
2.	Response time for order tracking and updates should be minimal.
•	Security:
1.	User authentication and authorization mechanisms should be in place to safeguard sensitive data.
2.	Payment transactions should be encrypted and secure.
•	Reliability:
1.	The system should have robust error handling to handle unexpected scenarios gracefully.
2.	Data backups should be periodically performed to prevent data loss.
Constraints  
•	Recipe Cost Calculation:
-	The minimum charge for a custom recipe should be calculated based on ingredients and cooking time.
Legal Requirements  
•	Intellectual Property Rights:
-	The system should ensure proper handling of intellectual property rights for recipes.
Glossary  
1.	Customers: Users who place orders through the system.
2.	Administration Panel: The backend interface for restaurant owners to manage the system.
3.	Delivery Carriers: Individuals hired by restaurant owners to handle order deliveries.
 
