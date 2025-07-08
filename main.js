// Product Database - Smart Management System
const productsDatabase = {
    gym: [
        {
            id: 1,
            title: "წოლჭიმის დანადგარი",
            price: "₾350",
            image: "https://images.unsplash.com/photo-1633989464081-16ccd31287a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "gym",
            link: "products/product-1.html"
        },
        {
            id: 2,
            title: "მულტიფუნქციური ტრენაჟორი",
            price: "₾580",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "gym"
        },
        {
            id: 3,
            title: "ჰანტელების ნაკრები",
            price: "₾250",
            image: "https://images.unsplash.com/photo-1745233710584-332f527ecd0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "gym"
        },
        {
            id: 4,
            title: "ძალოვანი ღეროები",
            price: "₾180",
            image: "https://images.unsplash.com/photo-1633989464081-16ccd31287a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "gym"
        },
        {
            id: 5,
            title: "კარდიო ველოსიპედი",
            price: "₾420",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "gym"
        },
        {
            id: 6,
            title: "ფანქრული ღეროები",
            price: "₾300",
            image: "https://images.unsplash.com/photo-1745233710584-332f527ecd0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "gym"
        }
    ],
    armwrestling: [
        {
            id: 11,
            title: "მკლავჭიდის მაგიდა",
            price: "₾157",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "armwrestling"
        },
        {
            id: 12,
            title: "მკლავჭიდის სახელური",
            price: "₾360",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "armwrestling"
        },
        {
            id: 13,
            title: "ხელის ღეროები",
            price: "₾120",
            image: "https://images.unsplash.com/photo-1745233710584-332f527ecd0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "armwrestling"
        },
        {
            id: 14,
            title: "რეგულირებადი მაგიდა",
            price: "₾280",
            image: "https://images.unsplash.com/photo-1633989464081-16ccd31287a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "armwrestling"
        },
        {
            id: 15,
            title: "ძალის ტრენერი",
            price: "₾440",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "armwrestling"
        },
        {
            id: 16,
            title: "პროფესიონალური მაგიდა",
            price: "₾520",
            image: "https://images.unsplash.com/photo-1745233710584-332f527ecd0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "armwrestling"
        }
    ],
    accessories: [
        {
            id: 21,
            title: "ხელის ტერფები",
            price: "₾50",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "accessories"
        },
        {
            id: 22,
            title: "დაცვითი ხელთათმანები",
            price: "₾35",
            image: "https://images.unsplash.com/photo-1745233710584-332f527ecd0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "accessories"
        },
        {
            id: 23,
            title: "ელბოუ პედები",
            price: "₾45",
            image: "https://images.unsplash.com/photo-1633989464081-16ccd31287a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "accessories"
        },
        {
            id: 24,
            title: "რისტ სტრეპები",
            price: "₾25",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "accessories"
        },
        {
            id: 25,
            title: "მკლავჭიდის ბალიშები",
            price: "₾40",
            image: "https://images.unsplash.com/photo-1745233710584-332f527ecd0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "accessories"
        },
        {
            id: 26,
            title: "ღრმა ფეხსაცმელები",
            price: "₾80",
            image: "https://images.unsplash.com/photo-1633989464081-16ccd31287a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "accessories"
        }
    ]
};

// Global variables for carousels
let carouselPositions = {
    gym: 0,
    armwrestling: 0,
    accessories: 0
};

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerMenu = document.querySelector('.burger-menu');
    
    mobileMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

// Get viewport info
function getViewportInfo() {
    const width = window.innerWidth;
    if (width <= 480) {
        return { type: 'mobile', cardsVisible: 2, cardWidth: 170 }; // 160px + 10px gap
    } else if (width <= 768) {
        return { type: 'tablet', cardsVisible: 2, cardWidth: 185 }; // 170px + 15px gap
    } else {
        return { type: 'desktop', cardsVisible: 3, cardWidth: 300 }; // 280px + 20px gap
    }
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            ${product.link ? `<a href="${product.link}">` : ''}
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-bottom">
                        <p class="product-price">${product.price}</p>
                        <button class="details-btn" onclick="showProductDetails(${product.id}); event.preventDefault(); event.stopPropagation();">დეტალები</button>
                    </div>
                </div>
            ${product.link ? `</a>` : ''}
        </div>
    `;
}

// Create show all card
function createShowAllCard(category) {
    const categoryNames = {
        gym: 'დარბაზის დანადგარები',
        armwrestling: 'მკლავჭიდის სავარჯიშო დანადგარები',
        accessories: 'მკლავჭიდის აქსესუარები'
    };

    return `
        <div class="show-all-card" onclick="showProductList('${category}')">
            <i class="fas fa-th-large"></i>
            <h3>ყველას ნახვა</h3>
            <p>მეტი ${categoryNames[category]}</p>
        </div>
    `;
}

// Show product details (placeholder function)
function showProductDetails(productId) {
    alert(`დეტალები პროდუქტისთვის ID: ${productId}\n(ეს ფუნქცია განვითარების პროცესშია)`);
}

// Show product list page
function showProductList(category) {
    const url = `products/product-list.html?category=${category}`;
    window.location.href = url;
}

// Move carousel
function moveCarousel(category, direction) {
    const viewport = getViewportInfo();
    const totalProducts = productsDatabase[category].length;
    const showAllExists = totalProducts > 4;
    const totalItems = Math.min(4, totalProducts) + (showAllExists ? 1 : 0); // 4 products max + show all card
    
    // Calculate max position
    const maxPosition = Math.max(0, totalItems - viewport.cardsVisible);
    
    // Update position
    carouselPositions[category] += direction;
    
    // Constrain position
    if (carouselPositions[category] < 0) {
        carouselPositions[category] = 0;
    } else if (carouselPositions[category] > maxPosition) {
        carouselPositions[category] = maxPosition;
    }
    
    updateCarouselPosition(category);
    updateCarouselControls(category);
}

// Update carousel position with centering
function updateCarouselPosition(category) {
    const track = document.getElementById(`${category}-track`);
    if (!track) return;
    
    const viewport = getViewportInfo();
    
    // Simple translation without centering offset
    const translateX = -(carouselPositions[category] * viewport.cardWidth);
    
    track.style.transform = `translateX(${translateX}px)`;
}
    
    // Calculate total content width
    const totalProducts = productsDatabase[category].length;
    const showAllExists = totalProducts > 4;
    const totalItems = Math.min(4, totalProducts) + (showAllExists ? 1 : 0);
    const contentWidth = totalItems * viewport.cardWidth - (totalItems - 1) * 20; // 20px gap
    
    // Center the content
    const centerOffset = (containerWidth - contentWidth) / 2;
    const translateX = centerOffset - (carouselPositions[category] * viewport.cardWidth);
    
    track.style.transform = `translateX(${Math.max(translateX, containerWidth - contentWidth)}px)`;
}

// Update carousel controls
function updateCarouselControls(category) {
    const prevBtn = document.getElementById(`${category}-prev`);
    const nextBtn = document.getElementById(`${category}-next`);
    
    if (!prevBtn || !nextBtn) return;
    
    const viewport = getViewportInfo();
    const totalProducts = productsDatabase[category].length;
    const showAllExists = totalProducts > 4;
    const totalItems = Math.min(4, totalProducts) + (showAllExists ? 1 : 0);
    const maxPosition = Math.max(0, totalItems - viewport.cardsVisible);
    
    // Update button states
    prevBtn.disabled = carouselPositions[category] === 0;
    nextBtn.disabled = carouselPositions[category] >= maxPosition;
}

// Render category products
function renderCategoryProducts() {
    const categories = ['gym', 'armwrestling', 'accessories'];
    
    categories.forEach(category => {
        const track = document.getElementById(`${category}-track`);
        if (!track) return;
        
        track.innerHTML = '';
        
        // Add first 4 products
        const products = productsDatabase[category].slice(0, 4);
        products.forEach(product => {
            track.innerHTML += createProductCard(product);
        });
        
        // Add show all card if there are more than 4 products
        if (productsDatabase[category].length > 4) {
            track.innerHTML += createShowAllCard(category);
        }
        
        // Reset position and update
        carouselPositions[category] = 0;
        updateCarouselPosition(category);
        updateCarouselControls(category);
    });
}

// Carousel JavaScript for hero section
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    if (slides.length > 0 && slideIndex <= slides.length) {
        slides[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1].classList.add("active-dot");
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render category products FIRST
    renderCategoryProducts();
    
    // Auto-slide for hero carousel
    setInterval(() => {
        changeSlide(1);
    }, 5000);
    
    // Add touch support for each carousel
   ['gym', 'armwrestling', 'accessories'].forEach(category => {
    const track = document.getElementById(`${category}-track`);
    if (!track) return;
    
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);
        
        // Only prevent scroll if horizontal movement is greater than vertical
        if (diffX > diffY && diffX > 20) {
            e.preventDefault();
        }
    });
    
    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = Math.abs(endX - startX);
        const diffY = Math.abs(endY - startY);
        
        // Only trigger carousel move if it was a horizontal swipe
        if (diffX > diffY && diffX > 50) {
            const diff = startX - endX;
            if (diff > 0) {
                moveCarousel(category, 1);
            } else {
                moveCarousel(category, -1);
            }
        }
    });

    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset all carousel positions and update
            Object.keys(carouselPositions).forEach(category => {
                carouselPositions[category] = 0;
                updateCarouselPosition(category);
                updateCarouselControls(category);
            });
        }, 150);
    });
});
