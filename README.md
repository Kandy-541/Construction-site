# 🏗️ BuildCam - Construction Materials E-Commerce Platform

A modern, fully-responsive e-commerce website for selling construction materials in Cameroon, built with pure **HTML, CSS, and JavaScript** (no frameworks required).

## ✨ Features

### 🛍️ Core E-Commerce Features

- ✅ **Product Catalog** - Browse 10+ construction materials with detailed specifications
- ✅ **Shopping Cart** - Add/remove items, update quantities, persistent storage
- ✅ **Product Filtering** - Filter by category, price range, search functionality
- ✅ **Product Details** - Full specifications, images, related products
- ✅ **Checkout System** - Multi-step form with validation
- ✅ **Order Management** - Generate unique order references
- ✅ **WhatsApp Integration** - Automatic order forwarding to WhatsApp

### 💳 Payment Methods

- MTN Money (Mobile Money Cameroon)
- Orange Money (Orange Cameroon)
- Bank Transfer
- Cash on Delivery

### 📦 Product Categories

1. **Cement** - Dangote, Cimencam (50kg bags)
2. **Iron Rods** - Various diameters (10mm, 12mm, 16mm)
3. **Roofing Sheets** - Aluminum, Zinc, Stone-coated
4. **Construction Accessories** - Bricks, Nails, etc.

### 🌍 Cameroon Localization

- Currency: **FCFA (XAF)** with proper formatting
- Delivery fee calculation by region
- Cameroon regions: Yaoundé, Douala, Buea, Bamenda, Bafoussam, etc.
- WhatsApp support with +237 phone number

### 🛡️ Admin Dashboard

- View all products with pricing and stock
- Edit product prices in real-time
- Update inventory levels
- View all orders with status tracking
- Analytics dashboard (total products, orders, revenue)

### 📱 Mobile Responsive

- Fully responsive design for mobile, tablet, desktop
- Mobile navigation menu
- Touch-friendly buttons and forms

### 🎨 Modern UI/UX

- Clean, professional construction industry design
- Smooth animations and transitions
- Professional color scheme (construction theme)
- Accessible form controls and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- For local development: Any simple HTTP server

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Kandy-541/Construction-site.git
   cd Construction-site
   ```

2. **Start a Local Server**

   Option A: Using Python 3

   ```bash
   python -m http.server 8000
   ```

   Option B: Using Node.js http-server

   ```bash
   npm install -g http-server
   http-server -p 8000
   ```

   Option C: Using PHP

   ```bash
   php -S localhost:8000
   ```

3. **Open in Browser**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
Construction-site/
├── index.html                 # Homepage
├── products.html             # Product catalog with filters
├── product-details.html      # Single product details page
├── cart.html                 # Shopping cart
├── checkout.html             # Checkout form
├── order-confirmation.html   # Order confirmation page
├── admin.html                # Admin dashboard
├── styles.css                # All styling (fully responsive)
├── app.js                    # Core application logic (1600+ lines)
├── package.json              # Project metadata
├── database/
│   └── schema.sql            # Database schema for production
└── README.md                 # This file
```

## 🎯 Pages Overview

### **1. Homepage (index.html)**

- Hero section with call-to-action
- Categories showcase
- Featured products (10 items)
- Why Choose Us benefits
- Customer testimonials
- Contact form
- Footer with social links

### **2. Products Catalog (products.html)**

- Full product listing with grid layout
- Filters: Category, Price Range, Search
- Sort options: Price, Rating, Newest
- Real-time filtering and sorting
- Responsive product cards

### **3. Product Details (product-details.html)**

- Full product specifications
- Multiple images support
- Quantity selector
- Customer ratings and reviews
- Related products section
- Add to Cart functionality

### **4. Shopping Cart (cart.html)**

- View all cart items
- Modify quantities
- Remove items
- Cart summary with totals
- Delivery fee preview
- Proceed to checkout button

### **5. Checkout (checkout.html)**

- Customer information form
- Delivery address and region selection
- Payment method selection
- Order notes field
- Order summary with real-time calculations
- Region-based delivery fee calculation

### **6. Order Confirmation (order-confirmation.html)**

- Order reference display
- What's next instructions
- WhatsApp contact information
- Continue shopping option

### **7. Admin Dashboard (admin.html)**

- Three tabs: Products, Orders, Analytics
- Product inventory management
- Edit prices and stock
- View all orders with status
- Analytics with key metrics
- Top-selling products

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript (ES6+)** - No external dependencies
- **LocalStorage** - Client-side data persistence
- **WhatsApp API** - Order forwarding

## 🗂️ Data Storage

### Client-Side (LocalStorage)

- Shopping cart items
- Order history
- Admin product updates

### Production Ready (Database Schema)

The project includes a complete PostgreSQL/SQLite schema in `database/schema.sql`:

- Users table (customers & admin)
- Products table with dynamic pricing
- Orders table with reference numbers
- Order items table
- Cart items table
- Categories table

## 🔑 Key JavaScript Classes

### 1. **ShoppingCart**

```javascript
// Manages cart operations
cart.addItem(product, quantity);
cart.removeItem(productId);
cart.updateQuantity(productId, quantity);
cart.getTotal();
cart.clear();
```

### 2. **ProductManager**

```javascript
// Product operations and filtering
productManager.getAll();
productManager.getById(id);
productManager.filter(options);
productManager.search(query);
productManager.updatePrice(id, price);
```

### 3. **OrderManager**

```javascript
// Order operations
orderManager.createOrder(data, cartItems);
orderManager.generateOrderReference();
orderManager.generateWhatsAppMessage(order);
orderManager.updateOrderStatus(reference, status);
```

### 4. **Utils**

```javascript
// Utility functions
Utils.formatCurrency(amount);
Utils.getDeliveryFee(region);
Utils.formatPrice(amount);
Utils.generateStars(rating);
```

## 📊 Sample Data

The app comes with 10 pre-loaded products:

1. Dangote Cement 50kg - 3,500 XAF
2. Cimencam Cement 50kg - 3,200 XAF (5% discount)
3. Iron Rod 12mm - 4,500 XAF
4. Iron Rod 16mm - 8,000 XAF
5. Iron Rod 10mm - 3,200 XAF (10% discount)
6. Aluminum Roofing Sheet - 15,000 XAF
7. Zinc Roofing Sheet - 12,000 XAF
8. Stone-Coated Roofing Sheet - 25,000 XAF (15% discount)
9. Cement Bricks - 5,000 XAF
10. Nails Assorted Pack - 1,500 XAF (5% discount)

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free Static Hosting)

```bash
git push origin main
# Enable GitHub Pages in Settings
```

### Option 2: Netlify (Free)

- Connect GitHub repository
- Deploy automatically

### Option 3: Vercel (Free)

- Import GitHub project
- Deploy with one click

### Option 4: Traditional Hosting

- Upload files via FTP to web hosting
- Works with any HTTP server

## 📞 Contact & Configuration

Edit these values in `app.js` to customize for your business:

```javascript
const CONFIG = {
  CURRENCY: "XAF",
  COMPANY_NAME: "BuildCam Construction Materials",
  WHATSAPP_NUMBER: "+237612345678", // Your WhatsApp number
  DELIVERY_REGIONS: {
    Yaoundé: 2000,
    Douala: 2500,
    // ... add more regions
  },
};
```

## 🔄 Workflow

### Customer Journey

1. Browse homepage → See categories & featured products
2. Visit Products page → Filter & search
3. Click "View Details" → See full specifications
4. Add to Cart → Quantity selector
5. Go to Cart → Review items & total
6. Checkout → Fill delivery info
7. Select Payment Method → Place Order
8. Redirected to WhatsApp → Send order confirmation

### Admin Workflow

1. Visit /admin.html
2. Switch between Products/Orders/Analytics tabs
3. Click "Edit" on products to update prices/stock
4. Monitor orders and customer information
5. Track revenue and analytics

## 🎓 Learning Resources

This project demonstrates:

- ✅ Object-Oriented JavaScript (Classes)
- ✅ DOM Manipulation
- ✅ Form Validation
- ✅ LocalStorage API
- ✅ Grid & Flexbox layouts
- ✅ Responsive Design
- ✅ URL parameters parsing
- ✅ Data formatting (currency)

## 🐛 Browser Compatibility

- ✅ Chrome/Chromium (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## 📝 Future Enhancements

- [ ] Backend API integration (Node.js/Express)
- [ ] Real payment gateway integration
- [ ] User authentication & accounts
- [ ] Product reviews & ratings system
- [ ] Inventory management system
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Bulk order management

## 📄 License

This project is open source and available for use.

## 👨‍💼 Support

For issues, questions, or suggestions:

- 📞 WhatsApp: +237 672794019
- 📧 Email: info@buildcam.cm
- 💬 Create an issue on GitHub

---

**Built with ❤️ for Construction Materials Businesses in Cameroon**

Made in Cameroon 🇨🇲 | 2024
