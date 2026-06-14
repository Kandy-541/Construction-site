// ==================== CONSTRUCTION MATERIALS E-COMMERCE APP ====================

// Configuration
const CONFIG = {
  CURRENCY: 'XAF',
  COMPANY_NAME: 'MAKIAS CONSTRUCTION',
  WHATSAPP_NUMBER: '+237672794019',
  DELIVERY_REGIONS: {
    'Yaoundé': 2000,
    'Douala': 2500,
    'Buea': 3000,
    'Bamenda': 3500,
    'Bafoussam': 3000,
    'Yaounde': 2000,
    'Kinshasa': 5000,
    'Other': 4000
  }
};

// Products Database (In production, this would come from backend API)
const PRODUCTS_DB = [
  {
    id: 1,
    name: 'Dangote Cement 50kg',
    category: 'Cement',
    price: 3500,
    originalPrice: 3500,
    discount: 0,
    image: 'images/dangote-cement.png',
    description: 'High-strength Dangote Portland cement, ideal for all concrete construction works.',
    specifications: {
      weight: '50kg',
      grade: '42.5R',
      material: 'Portland Cement'
    },
    stock: 500,
    sku: 'CEM-DANG-50KG',
    featured: true,
    rating: 4.8,
    reviews: 240
  },
  {
    id: 2,
    name: 'Cimencam Cement 50kg',
    category: 'Cement',
    price: 3200,
    originalPrice: 3368,
    discount: 5,
    image: 'images/cimencam-cement.png',
    description: 'Premium Cameroon-made Cimencam cement, perfect for brick laying and plastering.',
    specifications: {
      weight: '50kg',
      grade: '32.5R',
      origin: 'Cameroon'
    },
    stock: 400,
    sku: 'CEM-CIM-50KG',
    featured: true,
    rating: 4.7,
    reviews: 185
  },
  {
    id: 3,
    name: 'Iron Rod 10mm',
    category: 'Iron Rods',
    price: 3200,
    originalPrice: 3555,
    discount: 10,
    image: 'images/iron-rod-10mm.png',
    description: 'High tensile strength 10mm reinforcing steel rebar for concrete reinforcement.',
    specifications: {
      diameter: '10mm',
      length: '12m',
      standard: 'FE500'
    },
    stock: 300,
    sku: 'ROD-IRON-10MM',
    featured: false,
    rating: 4.6,
    reviews: 95
  },
  {
    id: 4,
    name: 'Iron Rod 12mm',
    category: 'Iron Rods',
    price: 4500,
    originalPrice: 4500,
    discount: 0,
    image: 'images/iron-rod-12mm.png',
    description: 'Standard 12mm steel rebar for structural reinforcement in building construction.',
    specifications: {
      diameter: '12mm',
      length: '12m',
      standard: 'FE500'
    },
    stock: 250,
    sku: 'ROD-IRON-12MM',
    featured: true,
    rating: 4.8,
    reviews: 150
  },
  {
    id: 5,
    name: 'Iron Rod 16mm',
    category: 'Iron Rods',
    price: 8000,
    originalPrice: 8000,
    discount: 0,
    image: 'images/iron-rod-16mm.png',
    description: 'Heavy-duty 16mm structural steel reinforcing bars for pillars and beams.',
    specifications: {
      diameter: '16mm',
      length: '12m',
      standard: 'FE500'
    },
    stock: 150,
    sku: 'ROD-IRON-16MM',
    featured: true,
    rating: 4.9,
    reviews: 112
  },
  {
    id: 6,
    name: 'Aluminum Roofing Sheet',
    category: 'Roofing Sheets',
    price: 15000,
    originalPrice: 15000,
    discount: 0,
    image: 'images/aluminum-roofing.png',
    description: 'Durable, lightweight aluminum roofing sheets, resistant to corrosion.',
    specifications: {
      material: 'Aluminum',
      thickness: '0.4mm',
      width: '0.75m'
    },
    stock: 180,
    sku: 'ROOF-ALUM-STD',
    featured: true,
    rating: 4.7,
    reviews: 88
  },
  {
    id: 7,
    name: 'Zinc Roofing Sheet',
    category: 'Roofing Sheets',
    price: 12000,
    originalPrice: 12000,
    discount: 0,
    image: 'images/zinc-roofing.svg',
    description: 'Traditional zinc roofing sheets, cost-effective and highly durable.',
    specifications: {
      material: 'Zinc-coated Steel',
      thickness: '0.35mm',
      length: '3m'
    },
    stock: 220,
    sku: 'ROOF-ZINC-STD',
    featured: false,
    rating: 4.5,
    reviews: 74
  },
  {
    id: 8,
    name: 'Stone-Coated Roofing Sheet',
    category: 'Roofing Sheets',
    price: 25000,
    originalPrice: 29411,
    discount: 15,
    image: 'images/stone-coated-roofing.svg',
    description: 'Luxury stone-coated steel roof tiles, fireproof and elegant.',
    specifications: {
      material: 'Stone-Coated Steel',
      style: 'Bond Tile',
      warranty: '50 Years'
    },
    stock: 120,
    sku: 'ROOF-STONE-PREM',
    featured: true,
    rating: 4.9,
    reviews: 63
  },
  {
    id: 9,
    name: 'Cement Bricks',
    category: 'Accessories',
    price: 5000,
    originalPrice: 5000,
    discount: 0,
    image: 'images/cement-bricks.svg',
    description: 'High-quality compressed cement blocks for external and internal walls.',
    specifications: {
      dimensions: '15cm x 20cm x 40cm',
      type: 'Hollow Block',
      weight: '16kg'
    },
    stock: 1000,
    sku: 'ACC-BRICK-CEM',
    featured: false,
    rating: 4.6,
    reviews: 52
  },
  {
    id: 10,
    name: 'Nails Assorted Pack',
    category: 'Accessories',
    price: 1500,
    originalPrice: 1579,
    discount: 5,
    image: 'images/nails-pack.svg',
    description: 'Assorted steel nails box containing various sizes for woodwork and concrete.',
    specifications: {
      weight: '2kg',
      material: 'Carbon Steel',
      sizes: '2 to 4 inches'
    },
    stock: 350,
    sku: 'ACC-NAILS-PK',
    featured: false,
    rating: 4.4,
    reviews: 40
  },
  {
    id: 11,
    name: 'Aluminum Glass Sliding Door',
    category: 'Glass Work',
    price: 150000,
    originalPrice: 150000,
    discount: 0,
    image: 'images/WhatsApp Image 2026-06-14 at 5.25.36 PM.jpeg',
    description: 'Modern aluminum glass sliding patio door with secure locking mechanism.',
    specifications: {
      material: 'Aluminum & Tempered Glass',
      type: 'Sliding Door',
      width: '1.8m',
      height: '2.1m'
    },
    stock: 30,
    sku: 'GLASS-SLIDE-DR',
    featured: true,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 12,
    name: 'Frosted Glass Office Partition',
    category: 'Glass Work',
    price: 250000,
    originalPrice: 250000,
    discount: 0,
    image: 'images/WhatsApp Image 2026-06-14 at 5.25.35 PM.jpeg',
    description: 'Frosted tempered glass partition wall for office spaces, providing privacy and natural light.',
    specifications: {
      material: 'Frosted Glass',
      thickness: '10mm',
      frame: 'Aluminum'
    },
    stock: 15,
    sku: 'GLASS-OFF-PART',
    featured: false,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 13,
    name: 'Aluminum Kitchen Cabinet',
    category: 'Glass Work',
    price: 180000,
    originalPrice: 180000,
    discount: 0,
    image: 'images/WhatsApp Image 2026-06-14 at 5.25.34 PM.jpeg',
    description: 'Stylish, waterproof aluminum kitchen cabinet with glass panels and drawers.',
    specifications: {
      material: 'Aluminum & Tinted Glass',
      style: 'L-shape',
      compartments: '6'
    },
    stock: 25,
    sku: 'GLASS-KIT-CAB',
    featured: true,
    rating: 4.7,
    reviews: 31
  },
  {
    id: 14,
    name: 'Aluminum Security Kiosk',
    category: 'Glass Work',
    price: 350000,
    originalPrice: 350000,
    discount: 0,
    image: 'images/WhatsApp Image 2026-06-14 at 5.25.35 PM (1).jpeg',
    description: 'Prefabricated outdoor security guard booth with sliding glass windows.',
    specifications: {
      dimensions: '1.2m x 1.2m',
      material: 'Aluminum & ACP panels',
      roof: 'Waterproof insulated'
    },
    stock: 10,
    sku: 'GLASS-SEC-KIOSK',
    featured: false,
    rating: 4.8,
    reviews: 12
  },
  {
    id: 15,
    name: 'Glass & Wooden Pulpit (Podium)',
    category: 'Glass Work',
    price: 120000,
    originalPrice: 120000,
    discount: 0,
    image: 'images/WhatsApp Image 2026-06-14 at 5.25.33 PM.jpeg',
    description: 'Elegant, modern podium made from thick tempered glass and polished mahogany wood.',
    specifications: {
      material: 'Glass & Mahogany Wood',
      height: '1.2m',
      base: 'Stable timber base'
    },
    stock: 8,
    sku: 'GLASS-PULPIT-POD',
    featured: false,
    rating: 4.9,
    reviews: 22
  }
];

// ==================== CART MANAGEMENT ====================

class ShoppingCart {
  constructor() {
    this.items = this.loadFromStorage();
  }

  loadFromStorage() {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  }

  saveToStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.updateCartCount();
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        product: product
      });
    }
    
    this.saveToStorage();
    this.showNotification('Product added to cart!', 'success');
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveToStorage();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveToStorage();
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getSubtotal() {
    return this.getTotal();
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
    this.saveToStorage();
  }

  updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const count = this.getItemCount();
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.innerHTML = `<span>${message}</span>`;
    
    const container = document.body;
    container.insertBefore(notification, container.firstChild);
    
    setTimeout(() => notification.remove(), 3000);
  }
}

// ==================== PRODUCT MANAGEMENT ====================

class ProductManager {
  constructor() {
    this.products = PRODUCTS_DB;
    this.filteredProducts = [...this.products];
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    return this.products.find(p => p.id === parseInt(id));
  }

  getByCategory(category) {
    return this.products.filter(p => p.category === category);
  }

  getFeatured() {
    return this.products.filter(p => p.featured);
  }

  search(query) {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  filter(options) {
    let filtered = [...this.products];

    if (options.category) {
      filtered = filtered.filter(p => p.category === options.category);
    }

    if (options.minPrice) {
      filtered = filtered.filter(p => p.price >= options.minPrice);
    }

    if (options.maxPrice) {
      filtered = filtered.filter(p => p.price <= options.maxPrice);
    }

    if (options.search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(options.search.toLowerCase()) ||
        p.description.toLowerCase().includes(options.search.toLowerCase())
      );
    }

    if (options.sort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (options.sort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (options.sort === 'rating') {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (options.sort === 'newest') {
      filtered.reverse();
    }

    this.filteredProducts = filtered;
    return filtered;
  }

  getCategories() {
    return [...new Set(this.products.map(p => p.category))];
  }

  updatePrice(productId, newPrice) {
    const product = this.getById(productId);
    if (product) {
      product.originalPrice = product.price;
      product.price = newPrice;
    }
  }

  updateStock(productId, newStock) {
    const product = this.getById(productId);
    if (product) {
      product.stock = newStock;
    }
  }
}

// ==================== ORDER MANAGEMENT ====================

class OrderManager {
  constructor() {
    this.orders = this.loadOrders();
  }

  loadOrders() {
    const stored = localStorage.getItem('orders');
    return stored ? JSON.parse(stored) : [];
  }

  saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  generateOrderReference() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `ORD-${timestamp}-${random}`;
  }

  createOrder(data, cartItems) {
    const order = {
      id: Date.now(),
      reference: this.generateOrderReference(),
      timestamp: new Date(),
      customer: data,
      items: cartItems,
      subtotal: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      deliveryFee: data.deliveryFee || 0,
      total: 0,
      paymentMethod: data.paymentMethod,
      status: 'pending',
      notes: data.orderNotes || ''
    };

    order.total = order.subtotal + order.deliveryFee;
    this.orders.push(order);
    this.saveOrders();
    return order;
  }

  getOrder(reference) {
    return this.orders.find(o => o.reference === reference);
  }

  getAllOrders() {
    return this.orders;
  }

  updateOrderStatus(reference, status) {
    const order = this.getOrder(reference);
    if (order) {
      order.status = status;
      this.saveOrders();
    }
  }

  generateWhatsAppMessage(order) {
    let message = `*ORDER CONFIRMATION*\n\n`;
    message += `Reference: ${order.reference}\n`;
    message += `Name: ${order.customer.fullName}\n`;
    message += `Phone: ${order.customer.phoneNumber}\n`;
    message += `Email: ${order.customer.email}\n`;
    message += `Address: ${order.customer.deliveryAddress}\n`;
    message += `Region: ${order.customer.region}\n`;
    message += `City: ${order.customer.city}\n\n`;
    
    message += `*PRODUCTS ORDERED:*\n`;
    order.items.forEach(item => {
      message += `• ${item.name} x${item.quantity} = ${this.formatCurrency(item.price * item.quantity)}\n`;
    });
    
    message += `\n*PAYMENT DETAILS:*\n`;
    message += `Subtotal: ${this.formatCurrency(order.subtotal)}\n`;
    message += `Delivery Fee: ${this.formatCurrency(order.deliveryFee)}\n`;
    message += `Total: ${this.formatCurrency(order.total)}\n`;
    message += `Payment Method: ${order.paymentMethod}\n\n`;
    
    if (order.notes) {
      message += `Notes: ${order.notes}\n`;
    }

    return encodeURIComponent(message);
  }

  formatCurrency(amount) {
    return `${amount.toLocaleString('fr-FR')} ${CONFIG.CURRENCY}`;
  }
}

// ==================== UTILS ====================

class Utils {
  static formatCurrency(amount) {
    return amount.toLocaleString('fr-FR', {
      style: 'currency',
      currency: CONFIG.CURRENCY
    }).replace('XAF', CONFIG.CURRENCY);
  }

  static formatPrice(amount) {
    return `${amount.toLocaleString('fr-FR')} ${CONFIG.CURRENCY}`;
  }

  static getDeliveryFee(region) {
    return CONFIG.DELIVERY_REGIONS[region] || CONFIG.DELIVERY_REGIONS['Other'];
  }

  static generateStars(rating) {
    const stars = Math.round(rating);
    return '⭐'.repeat(stars) + '☆'.repeat(5 - stars);
  }

  static calculateDiscount(original, discount) {
    return original - (original * (discount / 100));
  }

  static isInStock(product) {
    return product.stock > 0;
  }

  static getStockStatus(stock) {
    if (stock === 0) return 'Out of Stock';
    if (stock < 50) return `Only ${stock} left`;
    return 'In Stock';
  }
}

// ==================== GLOBAL INSTANCES ====================

const cart = new ShoppingCart();
const productManager = new ProductManager();
const orderManager = new OrderManager();

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
  initializeNavbar();
  cart.updateCartCount();
  initializePage();
});

function initializePage() {
  const page = document.body.getAttribute('data-page');
  
  switch(page) {
    case 'home':
      initializeHome();
      break;
    case 'products':
      initializeProducts();
      break;
    case 'product-details':
      initializeProductDetails();
      break;
    case 'cart':
      initializeCartPage();
      break;
    case 'checkout':
      initializeCheckout();
      break;
    case 'admin':
      initializeAdmin();
      break;
  }
}

// ==================== NAVBAR ====================

function initializeNavbar() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
    });
  });
}

// ==================== HOME PAGE ====================

function initializeHome() {
  renderFeaturedProducts();
  renderCategories();
  renderTestimonials();
  setupFormHandlers();
}

function renderFeaturedProducts() {
  const container = document.getElementById('featured-products');
  if (!container) return;

  const featured = productManager.getFeatured();
  container.innerHTML = featured.map(product => createProductCard(product)).join('');
  
  attachProductCardListeners();
}

function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  const categories = productManager.getCategories();
  container.innerHTML = categories.map(category => `
    <div class="category-card" onclick="window.location.href='products.html?category=${encodeURIComponent(category)}'">
      <div class="category-card-image">
        <img src="${getCategoryPhoto(category)}" alt="${category}" loading="lazy">
      </div>
      <h3>${category}</h3>
      <p>${productManager.getByCategory(category).length} products</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  const testimonials = [
    {
      name: 'Jean Nkomo',
      role: 'Contractor',
      text: 'Excellent quality materials at very competitive prices. Fast delivery and great customer service!',
      rating: 5
    },
    {
      name: 'Marie Wansi',
      role: 'Home Builder',
      text: 'I\'ve been ordering from BuildCam for over a year now. Always reliable and professional.',
      rating: 5
    },
    {
      name: 'Pierre Kamdem',
      role: 'Hardware Store Owner',
      text: 'Their prices are unbeatable and the quality is consistent. Highly recommend to all.',
      rating: 4.5
    }
  ];

  container.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${Utils.generateStars(testimonial.rating)}</div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <p class="testimonial-author">${testimonial.name}</p>
      <p class="testimonial-role">${testimonial.role}</p>
    </div>
  `).join('');
}

function setupFormHandlers() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In production, this would send to a backend
      alert('Thank you! We\'ll get back to you soon.');
      this.reset();
    });
  }
}

function getCategoryPhoto(category) {
  const photos = {
    'Cement': 'images/dangote-cement.png',
    'Iron Rods': 'images/iron-rod-12mm.png',
    'Roofing Sheets': 'images/aluminum-roofing.png',
    'Accessories': 'images/nails-pack.svg',
    'Glass Work': 'images/WhatsApp Image 2026-06-14 at 5.25.36 PM.jpeg'
  };
  return photos[category] || 'images/background-image.jpeg';
}

// ==================== PRODUCTS PAGE ====================

function initializeProducts() {
  setupFilters();
  
  // Parse category parameter from URL query string if present
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  const categoryFilter = document.getElementById('category-filter');
  if (categoryFilter && categoryParam) {
    categoryFilter.value = categoryParam;
    applyFilters();
  } else {
    renderAllProducts();
  }
}

function setupFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const priceSort = document.getElementById('price-sort');
  const searchInput = document.getElementById('search-input');
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const applyFiltersBtn = document.getElementById('apply-filters');

  // Populate category filter
  if (categoryFilter) {
    const categories = productManager.getCategories();
    categoryFilter.innerHTML = '<option value="">All Categories</option>' + 
      categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
  }

  // Apply filters on button click
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', applyFilters);
  }

  // Real-time search
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
}

function applyFilters() {
  const category = document.getElementById('category-filter')?.value;
  const minPrice = parseFloat(document.getElementById('min-price')?.value) || 0;
  const maxPrice = parseFloat(document.getElementById('max-price')?.value) || Infinity;
  const search = document.getElementById('search-input')?.value;
  const sort = document.getElementById('price-sort')?.value || 'newest';

  const filtered = productManager.filter({
    category: category || null,
    minPrice,
    maxPrice,
    search,
    sort
  });

  renderProductsGrid(filtered);
}

function renderAllProducts() {
  const products = productManager.getAll();
  renderProductsGrid(products);
}

function renderProductsGrid(products) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem;"><p>No products found.</p></div>';
    return;
  }

  container.innerHTML = products.map(product => createProductCard(product)).join('');
  attachProductCardListeners();
}

function createProductCard(product) {
  const discountDisplay = product.discount > 0 ? 
    `<div class="product-badge">${product.discount}% OFF</div>` : '';
  
  const badgeClass = product.featured ? 'featured' : '';
  const stockStatus = Utils.getStockStatus(product.stock);
  const stockClass = product.stock === 0 ? 'out-of-stock' : product.stock < 50 ? 'low-stock' : 'in-stock';

  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23ddd%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2216%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3ENo Image%3C/text%3E%3C/svg%3E'">
        ${discountDisplay}
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-stock ${stockClass}">${stockStatus}</div>
        <div class="product-price">
          ${product.discount > 0 ? `<span class="product-price-original">${Utils.formatPrice(product.originalPrice)}</span>` : ''}
          ${Utils.formatPrice(product.price)}
          ${product.discount > 0 ? `<span class="product-discount">Save ${product.discount}%</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" data-product-id="${product.id}">Add to Cart</button>
          <button class="btn-details" data-product-id="${product.id}">View Details</button>
        </div>
      </div>
    </div>
  `;
}

function attachProductCardListeners() {
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = parseInt(this.dataset.productId);
      const product = productManager.getById(productId);
      if (product && product.stock > 0) {
        cart.addItem(product, 1);
      }
    });
  });

  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = this.dataset.productId;
      window.location.href = `product-details.html?id=${productId}`;
    });
  });
}

// ==================== PRODUCT DETAILS PAGE ====================

function initializeProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  if (!productId) {
    window.location.href = 'products.html';
    return;
  }

  const product = productManager.getById(productId);
  if (!product) {
    window.location.href = 'products.html';
    return;
  }

  displayProductDetails(product);
  setupQuantitySelector();
  setupAddToCartButton(product);
  renderRelatedProducts(product);
}

function displayProductDetails(product) {
  const container = document.getElementById('product-details-container');
  if (!container) return;

  const stockStatus = Utils.getStockStatus(product.stock);
  const stockClass = product.stock === 0 ? 'out-of-stock' : product.stock < 50 ? 'low-stock' : 'in-stock';

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
      <div>
        <div style="background: var(--light-gray); border-radius: 8px; overflow: hidden; margin-bottom: 1rem;">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; display: block;">
        </div>
      </div>
      <div>
        <div class="product-category">${product.category}</div>
        <h1>${product.name}</h1>
        
        <div style="margin: 1.5rem 0;">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 1.2rem;">${Utils.generateStars(product.rating || 4)}</span>
            <span style="color: var(--text-light);">(${product.reviews || 0} reviews)</span>
          </div>
        </div>

        <div style="margin-bottom: 2rem; padding: 1.5rem; background: var(--light-gray); border-radius: 8px;">
          <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color); margin-bottom: 0.5rem;">
            ${Utils.formatPrice(product.price)}
            ${product.discount > 0 ? `<span style="font-size: 0.6em; text-decoration: line-through; color: var(--text-light); margin-left: 1rem;">${Utils.formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          ${product.discount > 0 ? `<span style="background: var(--error-color); color: white; padding: 5px 10px; border-radius: 3px; font-weight: 600;">Save ${product.discount}%</span>` : ''}
        </div>

        <p style="color: var(--text-light); margin-bottom: 1.5rem; font-size: 1.1rem;">${product.description}</p>

        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem;">Specifications</h3>
          <ul style="list-style: none;">
            ${Object.entries(product.specifications || {}).map(([key, value]) => 
              `<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                <strong>${key.replace(/_/g, ' ')}:</strong> ${value}
              </li>`
            ).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding: 1rem; background: ${product.stock === 0 ? '#ffe6e6' : '#e6ffe6'}; border-radius: 5px; border-left: 4px solid ${product.stock === 0 ? 'var(--error-color)' : 'var(--success-color)'};">
          <div class="product-stock ${stockClass}" style="font-size: 1.1rem; font-weight: 600;">${stockStatus}</div>
        </div>

        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
          <label style="font-weight: 600;">Quantity:</label>
          <div class="quantity-input">
            <button type="button" class="qty-minus">−</button>
            <input type="number" id="quantity" value="1" min="1" max="${product.stock}" style="width: 60px;">
            <button type="button" class="qty-plus">+</button>
          </div>
        </div>

        <button id="add-to-cart-btn" class="btn btn-primary btn-lg" style="width: 100%; margin-bottom: 1rem;">
          Add to Cart
        </button>
        <button class="btn btn-secondary btn-lg" style="width: 100%;" onclick="window.location.href='products.html'">
          Continue Shopping
        </button>
      </div>
    </div>
  `;
}

function setupQuantitySelector() {
  const qtyMinus = document.querySelector('.qty-minus');
  const qtyPlus = document.querySelector('.qty-plus');
  const qtyInput = document.getElementById('quantity');

  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      const max = parseInt(qtyInput.max);
      qtyInput.value = Math.min(max, parseInt(qtyInput.value) + 1);
    });
  }
}

function setupAddToCartButton(product) {
  const btn = document.getElementById('add-to-cart-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const quantity = parseInt(document.getElementById('quantity').value);
      if (product.stock > 0) {
        cart.addItem(product, quantity);
      }
    });
  }
}

function renderRelatedProducts(currentProduct) {
  const container = document.getElementById('related-products');
  if (!container) return;

  const related = productManager
    .getByCategory(currentProduct.category)
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  if (related.length === 0) return;

  container.innerHTML = `
    <h2 style="margin-bottom: 2rem; text-align: center;">Related Products</h2>
    <div class="products-grid">
      ${related.map(product => createProductCard(product)).join('')}
    </div>
  `;

  attachProductCardListeners();
}

// ==================== CART PAGE ====================

function initializeCartPage() {
  renderCartItems();
  setupCartActions();
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.isEmpty()) {
    container.innerHTML = `
      <div style="grid-column: 1/-1;">
        <div class="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Start shopping to add items to your cart!</p>
          <a href="products.html" class="btn btn-primary btn-lg">Continue Shopping</a>
        </div>
      </div>
    `;
    document.getElementById('cart-summary').style.display = 'none';
    return;
  }

  const itemsHTML = cart.items.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p class="cart-item-price">${Utils.formatPrice(item.price)}</p>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-input">
          <button type="button" class="qty-minus" data-product-id="${item.id}">−</button>
          <input type="number" value="${item.quantity}" min="1" data-product-id="${item.id}" class="qty-input">
          <button type="button" class="qty-plus" data-product-id="${item.id}">+</button>
        </div>
        <div style="min-width: 100px; text-align: right;">
          <div style="font-weight: 600; color: var(--primary-color);">${Utils.formatPrice(item.price * item.quantity)}</div>
        </div>
        <button class="remove-btn" data-product-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join('');

  container.innerHTML = `<div class="cart-items">${itemsHTML}</div>`;

  updateCartSummary();
  attachCartListeners();
}

function updateCartSummary() {
  const summaryContainer = document.getElementById('cart-summary');
  if (!summaryContainer) return;

  const subtotal = cart.getSubtotal();
  const deliveryFee = 0; // Will be calculated at checkout
  const total = subtotal + deliveryFee;

  summaryContainer.innerHTML = `
    <div class="cart-summary-item">
      <span>Subtotal:</span>
      <span>${Utils.formatPrice(subtotal)}</span>
    </div>
    <div class="cart-summary-item">
      <span>Delivery Fee:</span>
      <span>Calculated at checkout</span>
    </div>
    <div class="cart-summary-total">
      <span>Total:</span>
      <span>${Utils.formatPrice(total)}</span>
    </div>
    <button class="btn btn-primary btn-lg" style="width: 100%; margin-bottom: 0.5rem;" onclick="window.location.href='checkout.html'">
      Proceed to Checkout
    </button>
    <button class="btn btn-outline btn-lg" style="width: 100%; margin-bottom: 0.5rem;" onclick="openWhatsAppCartModal()">
      💬 Chat with Admin on WhatsApp
    </button>
    <button class="btn btn-outline btn-lg" style="width: 100%;" onclick="window.location.href='products.html'">
      Continue Shopping
    </button>
  `;
}

function attachCartListeners() {
  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = parseInt(this.dataset.productId);
      const currentQty = parseInt(this.parentElement.querySelector('.qty-input').value);
      if (currentQty > 1) {
        cart.updateQuantity(productId, currentQty - 1);
        renderCartItems();
      }
    });
  });

  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = parseInt(this.dataset.productId);
      const currentQty = parseInt(this.parentElement.querySelector('.qty-input').value);
      cart.updateQuantity(productId, currentQty + 1);
      renderCartItems();
    });
  });

  document.querySelectorAll('.qty-input').forEach(input => {
    input.addEventListener('change', function() {
      const productId = parseInt(this.dataset.productId);
      const newQty = Math.max(1, parseInt(this.value));
      cart.updateQuantity(productId, newQty);
      renderCartItems();
    });
  });

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = parseInt(this.dataset.productId);
      cart.removeItem(productId);
      renderCartItems();
    });
  });
}

function setupCartActions() {
  const clearCartBtn = document.getElementById('clear-cart-btn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your cart?')) {
        cart.clear();
        renderCartItems();
      }
    });
  }
}

// ==================== CHECKOUT PAGE ====================

function initializeCheckout() {
  if (cart.isEmpty()) {
    window.location.href = 'cart.html';
    return;
  }

  populateRegions();
  renderCheckoutSummary();
  setupCheckoutForm();
}

function populateRegions() {
  const regionSelect = document.getElementById('region');
  if (regionSelect) {
    regionSelect.innerHTML = '<option value="">Select Region</option>' +
      Object.keys(CONFIG.DELIVERY_REGIONS).map(region => 
        `<option value="${region}">${region}</option>`
      ).join('');

    regionSelect.addEventListener('change', updateDeliveryFee);
  }
}

function updateDeliveryFee() {
  const region = document.getElementById('region').value;
  const fee = Utils.getDeliveryFee(region);
  
  const feeDisplay = document.getElementById('checkout-delivery-fee');
  if (feeDisplay) {
    feeDisplay.textContent = Utils.formatPrice(fee);
    feeDisplay.dataset.fee = fee;
  }

  updateCheckoutSummary();
}

function renderCheckoutSummary() {
  const container = document.getElementById('order-items-summary');
  if (!container) return;

  let html = '<div style="max-height: 300px; overflow-y: auto;">';
  cart.items.forEach(item => {
    html += `
      <div class="order-item">
        <span>${item.name} x${item.quantity}</span>
        <span>${Utils.formatPrice(item.price * item.quantity)}</span>
      </div>
    `;
  });
  html += '</div>';

  container.innerHTML = html;

  const subtotal = cart.getSubtotal();
  const deliveryFee = parseFloat(document.getElementById('checkout-delivery-fee')?.dataset.fee) || 0;
  const total = subtotal + deliveryFee;

  document.getElementById('checkout-subtotal').textContent = Utils.formatPrice(subtotal);
  document.getElementById('checkout-total').textContent = Utils.formatPrice(total);
}

function updateCheckoutSummary() {
  const subtotal = cart.getSubtotal();
  const deliveryFee = parseFloat(document.getElementById('checkout-delivery-fee')?.dataset.fee) || 0;
  const total = subtotal + deliveryFee;

  document.getElementById('checkout-subtotal').textContent = Utils.formatPrice(subtotal);
  document.getElementById('checkout-delivery-fee').textContent = Utils.formatPrice(deliveryFee);
  document.getElementById('checkout-total').textContent = Utils.formatPrice(total);
}

function setupCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validate form
      if (!this.checkValidity()) {
        alert('Please fill all required fields');
        return;
      }

      const formData = new FormData(this);
      const data = {
        fullName: formData.get('full-name'),
        phoneNumber: formData.get('phone'),
        email: formData.get('email'),
        deliveryAddress: formData.get('address'),
        region: formData.get('region'),
        city: formData.get('city'),
        orderNotes: formData.get('notes'),
        paymentMethod: formData.get('payment-method'),
        deliveryFee: parseFloat(document.getElementById('checkout-delivery-fee')?.dataset.fee) || 0
      };

      // Create order
      const order = orderManager.createOrder(data, cart.items);

      // Generate WhatsApp message
      const whatsAppMessage = orderManager.generateWhatsAppMessage(order);
      const whatsAppUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${whatsAppMessage}`;

      // Show confirmation and redirect to WhatsApp
      alert(`Order ${order.reference} created successfully! You'll be redirected to WhatsApp.`);
      
      // Clear cart
      cart.clear();

      // Redirect to WhatsApp
      window.open(whatsAppUrl, '_blank');

      // Redirect to order confirmation
      setTimeout(() => {
        window.location.href = `order-confirmation.html?reference=${order.reference}`;
      }, 1000);
    });
  }
}

// ==================== ADMIN PANEL ====================

function initializeAdmin() {
  setupAdminTabs();
  renderAdminProducts();
  renderAdminOrders();
}

function setupAdminTabs() {
  const tabs = document.querySelectorAll('.admin-tab');
  const contents = document.querySelectorAll('.admin-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;
      
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.style.display = 'none');
      
      tab.classList.add('active');
      document.getElementById(tabName).style.display = 'block';
    });
  });
}

function renderAdminProducts() {
  const container = document.getElementById('admin-products-list');
  if (!container) return;

  const products = productManager.getAll();
  container.innerHTML = `
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
      <thead>
        <tr style="background: var(--light-gray); border-bottom: 2px solid var(--border-color);">
          <th style="padding: 1rem; text-align: left;">Name</th>
          <th style="padding: 1rem; text-align: left;">Category</th>
          <th style="padding: 1rem; text-align: right;">Price</th>
          <th style="padding: 1rem; text-align: right;">Stock</th>
          <th style="padding: 1rem; text-align: center;">Actions</th>
        </tr>
      </thead>
      <tbody>
        ${products.map(product => `
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 1rem;">${product.name}</td>
            <td style="padding: 1rem;">${product.category}</td>
            <td style="padding: 1rem; text-align: right;">${Utils.formatPrice(product.price)}</td>
            <td style="padding: 1rem; text-align: right; color: ${product.stock < 50 ? 'var(--error-color)' : 'var(--success-color)'}; font-weight: 600;">${product.stock}</td>
            <td style="padding: 1rem; text-align: center;">
              <button class="btn btn-sm btn-outline" onclick="editProduct(${product.id})">Edit</button>
              <button class="btn btn-sm btn-outline" style="background: var(--error-color); color: white; border: none;" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderAdminOrders() {
  const container = document.getElementById('admin-orders-list');
  if (!container) return;

  const orders = orderManager.getAllOrders();
  
  if (orders.length === 0) {
    container.innerHTML = '<p>No orders yet.</p>';
    return;
  }

  container.innerHTML = `
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: var(--light-gray); border-bottom: 2px solid var(--border-color);">
          <th style="padding: 1rem; text-align: left;">Reference</th>
          <th style="padding: 1rem; text-align: left;">Customer</th>
          <th style="padding: 1rem; text-align: right;">Total</th>
          <th style="padding: 1rem; text-align: center;">Status</th>
          <th style="padding: 1rem; text-align: center;">Date</th>
        </tr>
      </thead>
      <tbody>
        ${orders.map(order => `
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 1rem; font-weight: 600;">${order.reference}</td>
            <td style="padding: 1rem;">${order.customer.fullName}</td>
            <td style="padding: 1rem; text-align: right;">${Utils.formatPrice(order.total)}</td>
            <td style="padding: 1rem; text-align: center;">
              <span style="background: ${order.status === 'pending' ? 'var(--accent-color)' : 'var(--success-color)'}; color: white; padding: 4px 8px; border-radius: 3px; font-size: 0.9rem;">
                ${order.status}
              </span>
            </td>
            <td style="padding: 1rem; text-align: center;">${new Date(order.timestamp).toLocaleDateString()}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function editProduct(productId) {
  const product = productManager.getById(productId);
  const newPrice = prompt(`Enter new price for ${product.name}:`, product.price);
  if (newPrice && !isNaN(newPrice)) {
    productManager.updatePrice(productId, parseFloat(newPrice));
    renderAdminProducts();
    alert('Product price updated!');
  }

  const newStock = prompt(`Enter new stock for ${product.name}:`, product.stock);
  if (newStock && !isNaN(newStock)) {
    productManager.updateStock(productId, parseInt(newStock));
    renderAdminProducts();
    alert('Product stock updated!');
  }
}

function deleteProduct(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    const index = productManager.products.findIndex(p => p.id === productId);
    if (index > -1) {
      productManager.products.splice(index, 1);
      renderAdminProducts();
      alert('Product deleted!');
    }
  }
}

function openWhatsAppCartModal() {
  // Create modal HTML
  const modalHTML = `
    <div id="whatsapp-modal" style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    ">
      <div style="
        background: white;
        border-radius: 10px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      ">
        <h2 style="margin-top: 0; color: var(--primary-color);">Contact Information</h2>
        <p style="color: var(--text-light);">Please provide your details so we can assist you better on WhatsApp.</p>
        
        <form id="whatsapp-contact-form" style="margin-top: 1.5rem;">
          <div class="form-group">
            <label class="form-required">Your Name</label>
            <input type="text" name="customer-name" required placeholder="e.g., Jean Kamdem" style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 5px; font-size: 1rem; box-sizing: border-box;">
          </div>
          
          <div class="form-group">
            <label class="form-required">Phone Number</label>
            <input type="tel" name="customer-phone" required placeholder="e.g., +237 6XX XXX XXX" style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 5px; font-size: 1rem; margin-top: 0.5rem; box-sizing: border-box;">
          </div>
          
          <div class="form-group">
            <label>Email (optional)</label>
            <input type="email" name="customer-email" placeholder="your.email@example.com" style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 5px; font-size: 1rem; margin-top: 0.5rem; box-sizing: border-box;">
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
            <button type="button" class="btn btn-outline" onclick="closeWhatsAppModal()" style="width: 100%;">Cancel</button>
            <button type="submit" class="btn btn-primary" style="width: 100%;">Send to WhatsApp</button>
          </div>
        </form>
      </div>
    </div>
  `;
  
  // Add modal to page
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Setup form submission
  document.getElementById('whatsapp-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    sendCartToWhatsApp({
      name: this.querySelector('[name="customer-name"]').value,
      phone: this.querySelector('[name="customer-phone"]').value,
      email: this.querySelector('[name="customer-email"]').value
    });
  });
}

function closeWhatsAppModal() {
  const modal = document.getElementById('whatsapp-modal');
  if (modal) modal.remove();
}

function sendCartToWhatsApp(customerInfo) {
  // Build cart message
  let message = `*ORDER FROM BuildCam*\n\n`;
  message += `*Customer Information:*\n`;
  message += `Name: ${customerInfo.name}\n`;
  message += `Phone: ${customerInfo.phone}\n`;
  if (customerInfo.email) {
    message += `Email: ${customerInfo.email}\n`;
  }
  message += `\n*Products Ordered:*\n`;
  
  let total = 0;
  cart.items.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `• ${item.name} x${item.quantity} = ${Utils.formatPrice(itemTotal)}\n`;
  });
  
  message += `\n*Order Summary:*\n`;
  message += `Subtotal: ${Utils.formatPrice(total)}\n`;
  message += `\nPlease confirm availability, calculate delivery fee for your location, and confirm payment method.\n`;
  message += `\nThank you for choosing BuildCam! 🏗️`;
  
  // Encode and create WhatsApp URL
  const encodedMessage = encodeURIComponent(message);
  const whatsAppUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  // Close modal
  closeWhatsAppModal();
  
  // Clear cart
  cart.clear();
  
  // Show notification
  cart.showNotification('Redirecting to WhatsApp... 💬');
  
  // Redirect to WhatsApp
  setTimeout(() => {
    window.open(whatsAppUrl, '_blank');
    // Redirect to home after a short delay
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 500);
  }, 500);
}
