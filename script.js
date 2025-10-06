// Sample product data
const products = [
  {
    id: 1,
    name: "Classic Dress",
    price: "KSH 8,500",
    category: "dresses",
    image: "dress1.jpg",
    description: "Elegant classic dress suitable for all occasions.",
    featured: true,
  },
  {
    id: 2,
    name: "Classic Jacket",
    price: "KSH 6,500",
    category: "tops",
    image: "top1.jpg",
    description: "Stylish and comfortable classic jacket for all seasons.",
    featured: true,
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: "KSH 5,500",
    category: "accessories",
    image: "accessory1.jpg",
    description: "Trendy leather handbag to complement your outfit.",
    featured: true,
  },
  {
    id: 4,
    name: "Summer Maxi Dress",
    price: "KSH 7,200",
    category: "dresses",
    image: "dress2.jpg",
    description: "Light and flowy maxi dress perfect for summer days.",
    featured: true,
  },
  {
    id: 5,
    name: "Premium Suede Sweater",
    price: "KSH 4,800",
    category: "tops",
    image: "top2.jpg",
    description: "Cozy suede sweater for a chic look.",
    featured: false,
  },
  {
    id: 6,
    name: "Leather Handbag",
    price: "KSH 5,500",
    category: "accessories",
    image: "images/accessory2.jpg",
    description: "Genuine leather handbag with multiple compartments.",
    featured: true,
  },
  {
    id: 7,
    name: "Evening Gown",
    price: "KSH 12,000",
    category: "dresses",
    image: "dress3.jpg",
    description: "Elegant evening gown for special occasions.",
    featured: false,
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: "KSH 6,000",
    category: "tops",
    image: "top3.jpg",
    description: "Classic denim jacket that never goes out of style.",
    featured: true,
  },
];

// Cart functionality
let cart = [];
let currentSlideIndex = 0;
let carouselInterval;

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const cartIcon = document.getElementById("cartIcon");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.querySelector(".cart-count");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contactForm");

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  displayProducts(products);
  initializeCarousel();
  setupEventListeners();
  setupModalClose();
  setupCarouselButtons();
});

// NEW: Setup carousel CTA buttons to scroll to collections
function setupCarouselButtons() {
  const ctaButtons = document.querySelectorAll('.cta-button');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      document.getElementById('collections').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  });
}

// Setup modal close button properly
function setupModalClose() {
  const closeBtn = document.querySelector('.modal .close');
  if (closeBtn) {
    closeBtn.onclick = closeQuickView;
  }
}

// Display products
function displayProducts(productsToShow) {
  productsGrid.innerHTML = "";
  productsToShow.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-overlay">
                <button class="quick-view" onclick="openQuickView(${product.id})">Quick View</button>
            </div>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <p class="product-description">${product.description}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    productsGrid.appendChild(productCard);
  });
}

// Filter products
function filterProducts(category) {
  if (category === "all") displayProducts(products);
  else displayProducts(products.filter((p) => p.category === category));
}

// Search
function searchProducts(query) {
  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );
  displayProducts(results);
}

// Cart functions - FIXED for KSH prices
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ 
      ...product, 
      quantity: 1,
      // Extract numeric price for calculations
      numericPrice: extractNumericPrice(product.price)
    });
  }

  updateCart();
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Helper function to extract numeric price from "KSH X,XXX" format
function extractNumericPrice(priceString) {
  const numericString = priceString.replace(/[^\d.]/g, '');
  return parseFloat(numericString) || 0;
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.numericPrice * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} x ${item.quantity}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">&times;</button>
        `;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = `KSH ${total.toLocaleString()}`;
  cartCount.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
}

// FIXED Carousel functionality - SIMPLIFIED AND WORKING
function initializeCarousel() {
  // Make sure we have slides
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;
  
  // Set initial active slide
  slides[0].classList.add('active');
  
  // Start auto-advancing
  startAutoCarousel();
  
  // Pause auto-advance on hover
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', pauseAutoCarousel);
    carousel.addEventListener('mouseleave', startAutoCarousel);
  }
}

function startAutoCarousel() {
  // Clear any existing interval
  if (carouselInterval) clearInterval(carouselInterval);
  
  // Start new interval
  carouselInterval = setInterval(() => {
    moveSlide(1);
  }, 5000);
}

function pauseAutoCarousel() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

function moveSlide(direction) {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  
  if (!slides.length) return;

  // Remove active class from current slide
  slides[currentSlideIndex].classList.remove("active");
  if (dots.length) dots[currentSlideIndex].classList.remove("active");

  // Calculate new slide index
  currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;

  // Add active class to new slide
  slides[currentSlideIndex].classList.add("active");
  if (dots.length) dots[currentSlideIndex].classList.add("active");
}

function currentSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  
  if (!slides.length) return;

  // Remove active class from current slide
  slides[currentSlideIndex].classList.remove("active");
  if (dots.length) dots[currentSlideIndex].classList.remove("active");

  // Set new slide index
  currentSlideIndex = n - 1;

  // Add active class to new slide
  slides[currentSlideIndex].classList.add("active");
  if (dots.length) dots[currentSlideIndex].classList.add("active");
  
  // Restart auto-carousel
  startAutoCarousel();
}

// Quick View Modal
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  const modal = document.getElementById('quickViewModal');
  
  if (!modal) return;
  
  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = product.price;
  document.getElementById('modalDescription').textContent = product.description;
  
  // Set up add to cart button in modal
  const modalAddToCart = document.getElementById('modalAddToCart');
  if (modalAddToCart) {
    modalAddToCart.onclick = () => {
      addToCart(productId);
      closeQuickView();
    };
  }
  
  modal.style.display = "block";
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("quickViewModal");
  if (event.target === modal) {
    closeQuickView();
  }
};

// Notifications
function showNotification(message) {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1002;
        animation: slideInRight 0.3s ease;
    `;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Smooth scroll function for navigation
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Event listeners
function setupEventListeners() {
  // Cart functionality
  cartIcon.addEventListener("click", () => cartSidebar.classList.add("active"));
  closeCart.addEventListener("click", () => cartSidebar.classList.remove("active"));
  
  // Search functionality
  searchInput.addEventListener("input", (e) => searchProducts(e.target.value));

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterProducts(btn.dataset.filter);
    });
  });

  // Contact form
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! MiMa will get back to you soon.");
    contactForm.reset();
  });

  // Close cart when clicking outside
  document.addEventListener("click", (e) => {
    if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
      cartSidebar.classList.remove("active");
    }
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      smoothScroll(targetId);
    });
  });
}