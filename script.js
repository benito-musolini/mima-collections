// Sample product data
// Updated product data with color variants
const products = [
  {
    id: 1,
    name: "Shirt Dress",
    basePrice: "KSH 2,499",
    category: "dresses",
    description: "Shirt dresses blend comfort with class — crisp, effortless, and perfect for any occasion. Dress it up or keep it casual, either way you’ll slay",
    featured: true,
    variants: [
      {
        color: "Black",
        colorCode: "#2C3E50",
        image: "images/shirtblack.jpg",
        price: "KSH 2,499"
      },
      {
        color: "Sky Blue",
        colorCode: "#87CEEB",
        image: "images/shirtskyblue.jpg", 
        price: "KSH 2,499"
      },
      {
        color: "Emerald Green",
        colorCode: "#27AE60",
        image: "images/shirt-white.jpg",
        price: "KSH 2,499"
      },
      {
        color: "Black",
        colorCode: "#FFFF00",
        image: "images/shirtyellow.jpg",
        price: "KSH 2,499"
      }
    ]
  },
  {
    id: 2,
    name: "Polka Satin Jumpsuit",
    basePrice: "KSH 2,799", 
    category: "dresses",
    description: "Chic, comfy, and stunning in every print, from playful polka dots to dreamy florals.",
    featured: true,
    variants: [
      {
        color: "Black with White Dots",
        colorCode: "#2C3E50",
        image: "images/satinblack.jpg",
        price: "KSH 2,799"
      },
      {
        color: "White with Black Dots",
        colorCode: "#ECF0F1",
        image: "images/satinwhite.jpg",
        price: "KSH 2,799"
      },
      {
        color: "Red with White Dots",
        colorCode: "#E74C3C",
        image: "images/satinred.jpg",
        price: "KSH 2,799"
      },

      {
        color: "Black with Red flaura",
        colorCode: "#8B0000",
        image: "images/satinredfloura.jpg",
        price: "KSH 2,799"
      },

      {
        color: "White with Red flaura",
        colorCode: "#F5F5F5",
        image: "images/satinwhitefloura.jpg",
        price: "KSH 2,799"
      }
    ]
  },
  
  {
    id: 3,
    name: "Crimson Luxe Sneakers",
    basePrice: "KSH 2,800",
    category: "shoes", 
    description: "Step up your style with our Crimson Luxe Sneakers. Crafted for comfort and designed to turn heads, these sneakers are perfect for any casual outing or sporty adventure.",
    featured: true,
    variants: [
      {
        color: "Crimson Red",
        colorCode: "#DC143C",
        image: "images/shu2.jpg",
        price: "KSH 2,800"
      },
      {
        color: "Pale Pink",
        colorCode: "#FFC0CB",
        image: "images/shu1.jpg",
        price: "KSH 2,800"
      },
      {
        color: "Crimson Maroon",
        colorCode: "#800000",
        image: "images/shu3.jpg",
        price: "KSH 2,800"
      }
      
    ] // No variants for this one
  },

  {
    id: 4,
    name: "Baroque Maxi Dress",
    basePrice: "KSH 2,499",
    category: "dresses",
    description: "Flowy, elegant, and perfect for making a statement at any event.",
    featured: false,
    variants: [
      {
        color: "White with Gold Patterns",
        colorCode: "#F5F5DC",
        image: "images/maxiwhite.jpg",
        price: "KSH 2,499"
      },
      {
        color: "Green with bold Patterns",
        colorCode: "#27AE60",
        image: "images/maxigreen.jpg",
        price: "KSH 2,499"
      },
      {
        color: "Red",
        colorCode: "#E74C3C",
        image: "images/maxired.jpg",
        price: "KSH 2,499"
      },
      {
        color: "Yellow",
        colorCode: "#F1C40F",
        image: "images/maxiyellow.jpg",
        price: "KSH 2,499"
      }
    ]
  },

  {
    id: 5,
    name: "Quality Shirt Dress",
    basePrice: "KSH 2,499",
    category: "dresses",
    description: "Quality shirt dresses blend comfort with class — crisp, effortless, and perfect for any occasion. Dress it up or keep it casual, either way you’ll slay",
    featured: false,
    variants: [
      {
        color: "Black",
        colorCode: "#2C3E50",
        image: "images/qshirtblack.jpg",
        price: "KSH 2,499"
      },
      {
        color: "Navy Blue",
        colorCode: "#34495E",
        image: "images/qshirtnavy.jpg",
        price: "KSH 2,499"
      },
      {
        color: "Red",
        colorCode: "#E74C3C",
        image: "images/qshirtred.jpg",
        price: "KSH 2,499"
      },
      { 
        color: "Yellow",
        colorCode: "#F1C40F",
        image: "images/qshirtyellow.jpg",
        price: "KSH 2,499"
      }
    ]
  },
  {
    id: 6,
    name: "Maxi Chiffon Dress",
    basePrice: "KSH 3,199",
    category: "dresses",
    description: "Light, airy, and perfect for twirling into the sunset.",
    featured: false,
    variants: [
      {
        color: "Blue",
        colorCode: "#3498DB",
        image: "images/chiffblue.jpg",
        price: "KSH 3,199"
      },
      {
        color: "Black",
        colorCode: "#000000",
        image: "images/chiffblack.jpg",
        price: "KSH 3,199"
      },
      {
        color: "Rose Pink",
        colorCode: "#FFB6C1",
        image: "images/chiffrose.jpg",
        price: "KSH 3,199"
      },
      {
        color: "Green",
        colorCode: "#006b3c",
        image: "images/chiffgreen.jpg",
        price: "KSH 3,199"
      }
    ]
  }

  // ... other products
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

// FIXED: Setup modal close button properly
function setupModalClose() {
  const closeBtn = document.querySelector('.modal .close');
  if (closeBtn) {
    closeBtn.onclick = closeQuickView;
  }
  
  // Also add click event for the modal background
  const modal = document.getElementById('quickViewModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeQuickView();
      }
    });
  }
}

// Updated displayProducts function with empty state message
function displayProducts(productsToShow) {
  productsGrid.innerHTML = "";
  
  // Check if no products found
  if (productsToShow.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-image">
          <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="Oops" style="width: 120px; height: 120px; opacity: 0.7;">
        </div>
        <h3>No items found in this category</h3>
        <p>But don't worry! We're constantly adding new pieces to our collection.</p>
        <div class="empty-state-message">
          <strong>MORE ITEMS COMING SOON! 🎉</strong>
        </div>
        <br>
        <button class="view-all-btn" onclick="filterProducts('all')">View All Items</button>
      </div>
    `;
    return;
  }
  
  productsToShow.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    
    // Check if product has variants
    const hasVariants = product.variants && product.variants.length > 0;
    const mainImage = hasVariants ? product.variants[0].image : product.image;
    const displayPrice = hasVariants ? product.variants[0].price : product.price;

    productCard.innerHTML = `
        <div class="product-image">
            <img src="${mainImage}" alt="${product.name}" data-product-id="${product.id}">
            <div class="product-overlay">
                <button class="quick-view" onclick="openQuickView(${product.id})">Quick View</button>
            </div>
            ${hasVariants ? `<div class="color-indicator">Multiple Colors</div>` : ''}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">${displayPrice}</div>
            <p class="product-description">${product.description}</p>
            
            <!-- COLOR SWATCHES -->
            ${hasVariants ? `
            <div class="color-swatches">
                ${product.variants.map((variant, index) => `
                <button class="color-swatch ${index === 0 ? 'active' : ''}" 
                        data-product-id="${product.id}"
                        data-color="${variant.color}"
                        data-image="${variant.image}"
                        data-price="${variant.price}"
                        style="background-color: ${variant.colorCode}"
                        title="${variant.color}">
                </button>
                `).join('')}
            </div>
            ` : ''}
            
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    productsGrid.appendChild(productCard);
  });

  // Add event listeners for color swatches
  setupColorSwatches();
}

// Color swatch functionality
function setupColorSwatches() {
  const colorSwatches = document.querySelectorAll('.color-swatch');
  
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
      const productId = this.getAttribute('data-product-id');
      const newImage = this.getAttribute('data-image');
      const newPrice = this.getAttribute('data-price');
      const color = this.getAttribute('data-color');
      
      // Update active state
      const allSwatches = document.querySelectorAll(`.color-swatch[data-product-id="${productId}"]`);
      allSwatches.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
      
      // Update product image
      const productImage = document.querySelector(`.product-image img[data-product-id="${productId}"]`);
      if (productImage) {
        productImage.src = newImage;
        productImage.alt = `${productId} - ${color}`;
      }
      
      // Update product price
      const productCard = this.closest('.product-card');
      const priceElement = productCard.querySelector('.product-price');
      if (priceElement) {
        priceElement.textContent = newPrice;
      }
      
      // Show notification
      showNotification(`Switched to ${color} color`);
    });
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

// Updated addToCart function to handle variants
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Get selected color if product has variants
  let selectedVariant = null;
  if (product.variants && product.variants.length > 0) {
    const activeSwatch = document.querySelector(`.color-swatch.active[data-product-id="${productId}"]`);
    if (activeSwatch) {
      selectedVariant = {
        color: activeSwatch.getAttribute('data-color'),
        image: activeSwatch.getAttribute('data-image'),
        price: activeSwatch.getAttribute('data-price')
      };
    } else {
      // Default to first variant
      selectedVariant = product.variants[0];
    }
  }

  const cartItem = {
    id: productId,
    name: product.name,
    price: selectedVariant ? selectedVariant.price : product.price,
    image: selectedVariant ? selectedVariant.image : product.image,
    color: selectedVariant ? selectedVariant.color : null,
    numericPrice: extractNumericPrice(selectedVariant ? selectedVariant.price : product.price),
    quantity: 1
  };

  // Check if item already exists in cart
  const existingIndex = cart.findIndex(item => 
    item.id === cartItem.id && item.color === cartItem.color
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push(cartItem);
  }

  updateCart();
  showNotification(`${product.name} ${selectedVariant ? `(${selectedVariant.color})` : ''} added to cart!`);
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

// Updated Quick View Modal with color variants
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  const modal = document.getElementById('quickViewModal');
  
  if (!product) return;
  
  const hasVariants = product.variants && product.variants.length > 0;
  const mainImage = hasVariants ? product.variants[0].image : product.image;
  const displayPrice = hasVariants ? product.variants[0].price : product.price;
  
  document.getElementById('modalImage').src = mainImage;
  document.getElementById('modalImage').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = displayPrice;
  document.getElementById('modalDescription').textContent = product.description;
  
  // Add color swatches to modal if product has variants
  const modalDetails = document.querySelector('.modal-details');
  let colorSwatchesHTML = '';
  
  if (hasVariants) {
    colorSwatchesHTML = `
      <div class="modal-color-selector">
        <h4>Available Colors:</h4>
        <div class="modal-color-swatches">
          ${product.variants.map((variant, index) => `
            <button class="modal-color-swatch ${index === 0 ? 'active' : ''}" 
                    data-image="${variant.image}"
                    data-price="${variant.price}"
                    data-color="${variant.color}"
                    style="background-color: ${variant.colorCode}"
                    title="${variant.color}">
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Update modal content
  modalDetails.innerHTML = `
    <h2 id="modalName">${product.name}</h2>
    <p id="modalPrice" class="modal-price">${displayPrice}</p>
    <p id="modalDescription">${product.description}</p>
    ${colorSwatchesHTML}
    <button id="modalAddToCart">Add to Cart</button>
  `;
  
  // Set up add to cart button
  const modalAddToCart = document.getElementById('modalAddToCart');
  if (modalAddToCart) {
    modalAddToCart.onclick = () => {
      addToCart(productId);
      closeQuickView();
    };
  }
  
  // Set up modal color swatches
  if (hasVariants) {
    setupModalColorSwatches();
  }
  
  modal.style.display = "block";
}

// Modal color swatch functionality
function setupModalColorSwatches() {
  const modalSwatches = document.querySelectorAll('.modal-color-swatch');
  
  modalSwatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
      const newImage = this.getAttribute('data-image');
      const newPrice = this.getAttribute('data-price');
      const color = this.getAttribute('data-color');
      
      // Update active state
      const allSwatches = document.querySelectorAll('.modal-color-swatch');
      allSwatches.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
      
      // Update modal image and price
      document.getElementById('modalImage').src = newImage;
      document.getElementById('modalPrice').textContent = newPrice;
      
      showNotification(`Selected ${color} color`);
    });
  });
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.style.display = "none";
  }
}

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


// Payment Modal Functionality
function setupPaymentModal() {
  const proceedBtn = document.getElementById('proceedToCheckout');
  const paymentModal = document.getElementById('paymentModal');
  const closePayment = document.getElementById('closePayment');

  if (!proceedBtn || !paymentModal) return;

  proceedBtn.addEventListener('click', function() {
      if (cart.length === 0) {
          showNotification('Your cart is empty! Add some items first!');
          return;
      }
      
      // Update total in payment modal
      const total = cart.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0);
      document.getElementById('paymentTotal').textContent = `KSH ${total.toLocaleString()}`;
      
      // Show payment modal
      paymentModal.style.display = 'block';
  });

  // Close payment modal
  closePayment.addEventListener('click', function() {
      paymentModal.style.display = 'none';
  });

  // Close modal when clicking outside
  paymentModal.addEventListener('click', function(e) {
      if (e.target === paymentModal) {
          paymentModal.style.display = 'none';
      }
  });
}

// WhatsApp Order from Payment Modal
function placeWhatsAppOrder() {
  const orderMessage = compileOrderMessage();
  const encodedMessage = encodeURIComponent(orderMessage);
  const phoneNumber = '254713377335';
  
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  
  // Close payment modal
  document.getElementById('paymentModal').style.display = 'none';
  
  // Optional: Clear cart
  // cart = [];
  // updateCart();
}

// Don't forget to initialize in setupEventListeners():
// setupPaymentModal();

// Compile order details into a nice message
function compileOrderMessage() {
  let message = ` *NEW ORDER - MiMa Collections* \n\n`;
  message += `Hello MiMa! I'd like to order the following items:\n\n`;
  
  // Add each item
  cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*`;
      if (item.color) {
          message += ` (${item.color})`;
      }
      message += `\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${item.price}\n\n`;
  });
  
  // Add total
  const total = cart.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0);
  message += `*TOTAL: KSH ${total.toLocaleString()}*\n\n`;
  
  // Add customer instructions
  message += `Please let me know about availability and payment details! 💝`;
  
  return message;
}

// Optional: Customer details
function setupCustomerDetails() {
  const addDetailsBtn = document.getElementById('addDetailsBtn');
  const customerInfo = document.getElementById('customerInfo');
  
  addDetailsBtn.addEventListener('click', function() {
      customerInfo.style.display = 'block';
      this.style.display = 'none';
  });
}

// Don't forget to call this in setupEventListeners():
// setupCustomerDetails();

// Event listeners
function setupEventListeners() {
  // Cart functionality
  cartIcon.addEventListener("click", () => cartSidebar.classList.add("active"));
  closeCart.addEventListener("click", () => cartSidebar.classList.remove("active"));
  
  setupPaymentModal();
  initializeSplashScreen();
  

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

 // Contact form - updated for Formspree
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  try {
    // Formspree will handle the submission automatically
    // But we can show a success message
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    
    
    showFormSuccess();
    contactForm.reset();
    
  } catch (error) {
    alert("There was an error sending your message. Please try again or contact us directly.");
  } finally {
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

// Splash Screen Functionality
function initializeSplashScreen() {
  const splashScreen = document.getElementById('splashScreen');
  const body = document.body;
  
  if (!splashScreen) return;
  
  // Add splash active class to body
  body.classList.add('splash-active');
  
  // Hide splash screen after 3 seconds
  setTimeout(() => {
      splashScreen.classList.add('fade-out');
      
      // Remove splash screen from DOM after fade out
      setTimeout(() => {
          splashScreen.remove();
          body.classList.remove('splash-active');
      }, 500);
  }, 2500); // 2.5 seconds display time
}

// Initialize splash screen when page loads
document.addEventListener('DOMContentLoaded', function() {
  initializeSplashScreen();
  
  // Your existing initialization code...
  displayProducts(products);
  initializeCarousel();
  setupEventListeners();
  setupModalClose();
  setupCarouselButtons();
});

function showFormSuccess() {
  const successMsg = document.createElement('div');
  successMsg.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary-color);
    color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    z-index: 1003;
    text-align: center;
    animation: fadeInUp 0.5s ease;
  `;
  successMsg.innerHTML = `
    <h3>Message Sent!</h3>
    <p>Thank you for your message! We will get back to you soon.</p>
    <button onclick="this.parentElement.remove()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: white; color: var(--primary-color); border: none; border-radius: 5px; cursor: pointer;">OK</button>
  `;
  document.body.appendChild(successMsg);
}
}