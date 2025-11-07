# FitCycle

FitCycle is a B2C e-commerce platform for sports and fitness equipment rentals and sales.

## Features

- Equipment rentals (weekly/monthly)
- High-quality used item sales with FitScore™
- New products from partners
- Personalized accessories
- AR Body Scan virtual try-on
- AI-powered recommendations
- FitScore™ quality index

## Project Structure

```
fitcycle/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── modules/
│   ├── admin/
│   ├── auth/
│   ├── customer/
│   ├── order/
│   ├── payment/
│   ├── product/
│   ├── public/
│   └── vendor/
└── index.html
```

## Getting Started

1. Clone the repository
2. Open the project in Visual Studio Code
3. Install the Live Server extension
4. Right-click `index.html` and select "Open with Live Server"
5. The application will open in your default browser at `http://localhost:5500`

## Development

This project uses vanilla HTML, CSS, and JavaScript. Each module is organized in its own directory under the `modules/` folder.

## Modules

1. Public/Guest (8.1)

   - Home page
   - Featured products
   - Search functionality
   - FAQ

2. Authentication (8.2)

   - Login
   - Registration
   - Password recovery
   - Profile management

3. Customer (8.3)

   - Product rental
   - Purchase history
   - AR try-on
   - Recommendations

4. Vendor/Partner (8.4)

   - Dashboard
   - Product management
   - Sales analytics

5. Product Management (8.5)

   - Catalog management
   - FitScore™ calculation
   - Product quality control

6. Order Management (8.6)

   - Order processing
   - Returns handling
   - Status tracking

7. Payment (8.7)

   - Payment processing
   - Transaction history
   - Refund management

8. Admin (8.8)
   - System dashboard
   - User management
   - Analytics
   - Settings

## License

Copyright © 2025 FitCycle. All rights reserved.
