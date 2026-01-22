// Custom cursor initialization
const initCustomCursor = () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    // Exit if cursor elements don't exist
    if (!cursor || !follower) return;
    
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    const speed = 0.2; // lower is slower
    let isMouseDown = false;

    const animate = () => {
        posX += (mouseX - posX) * speed;
        posY += (mouseY - posY) * speed;

        const scale = isMouseDown ? ' scale(0.7)' : '';
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        follower.style.left = `${posX}px`;
        follower.style.top = `${posY}px`;
        
        if (isMouseDown) {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
            follower.style.transform = 'translate(-50%, -50%) scale(0.7)';
        } else {
            cursor.style.transform = 'translate(-50%, -50%)';
            follower.style.transform = 'translate(-50%, -50%)';
        }

        requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    animate();
};

// Theme toggle functionality
const initThemeToggle = () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const rootElement = document.documentElement;
    
    // Check for saved theme preference or use device preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        rootElement.classList.add('light-mode');
        themeToggleBtn.checked = false; // Unchecked for light mode
    } else if (savedTheme === 'dark') {
        rootElement.classList.remove('light-mode');
        themeToggleBtn.checked = true; // Checked for dark mode
    } else if (prefersDarkScheme.matches) {
        rootElement.classList.remove('light-mode');
        themeToggleBtn.checked = true; // Checked for dark mode
    } else {
        rootElement.classList.add('light-mode');
        themeToggleBtn.checked = false; // Unchecked for light mode
    }
    
    // Toggle theme when checkbox state changes
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('change', () => {
            rootElement.classList.toggle('light-mode');
            
            // Save theme preference
            if (rootElement.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }
};

// Mobile navigation toggle - Modern version
const navSlide = () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavContainer = document.querySelector('.mobile-nav-container');
    const mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    const body = document.body;
    
    // Toggle menu on hamburger click
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNavContainer.classList.toggle('active');
            mobileNavBackdrop.classList.toggle('active');
            body.classList.toggle('nav-open');
        });
    }
    
    // Close menu on X button click
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', () => {
            closeMenu();
        });
    }
    
    // Close menu on backdrop click
    if (mobileNavBackdrop) {
        mobileNavBackdrop.addEventListener('click', () => {
            closeMenu();
        });
    }
    
    // Close menu when clicking links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
            
            // Smooth scroll to section
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    setTimeout(() => {
                        const navHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - navHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, 300); // Add slight delay to allow menu to close first
                }
            }
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavContainer.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Function to close mobile menu
    function closeMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileNavContainer.classList.remove('active');
        mobileNavBackdrop.classList.remove('active');
        body.classList.remove('nav-open');
    }
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNavContainer.classList.contains('active')) {
            closeMenu();
        }
    });
};

// Common container selector used across animations
const ANIMATION_CONTAINERS = '.project-grid, .stair-layout, .stats-container, .education-container, .certifications-container, .achievements-container';

// Helper to animate a section and its contents
const animateSection = (section) => {
    section.classList.add('appear');
    section.querySelectorAll(ANIMATION_CONTAINERS).forEach(c => c.classList.add('animated'));
    
    section.querySelectorAll('.scroll-animation').forEach((el, i) => {
        if (!['fade-in-up', 'fade-in-left', 'fade-in-right'].some(c => el.classList.contains(c))) {
            el.classList.add('fade-in-up');
        }
        if (![1,2,3,4,5].some(n => el.classList.contains(`delay-${n}00`))) {
            el.classList.add(`delay-${Math.min(5, i + 1) * 100}`);
        }
    });
};

// Check if element is in viewport
const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
};

// Scroll animations
const scrollReveal = () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSection(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });
    
    sections.forEach(section => {
        observer.observe(section);
        if (isInViewport(section)) animateSection(section);
    });
};

// Smooth scrolling for navigation links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.desktop-nav a, .footer-links a, .cta-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};

// Form submission
const formSubmit = () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', { name, email, subject, message });
            
            // Reset form
            form.reset();
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
};

// Glowing cursor effect for cards
const initGlowEffect = () => {
    const cards = document.querySelectorAll('.project-card, .stat-card, .education-item, .certification-item, .achievement-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the card
            const y = e.clientY - rect.top; // y position within the card
            
            // Update CSS variables for the glow position
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
            
            // Also update neighboring cards with a reduced effect
            const siblings = Array.from(cards).filter(sibling => sibling !== card);
            siblings.forEach(sibling => {
                const siblingRect = sibling.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(rect.left + rect.width/2 - siblingRect.left - siblingRect.width/2, 2) +
                    Math.pow(rect.top + rect.height/2 - siblingRect.top - siblingRect.height/2, 2)
                );
                
                // Only affect nearby cards
                if (distance < 500) {
                    const factor = 1 - distance/500;
                    sibling.style.setProperty('--x', `${x}px`);
                    sibling.style.setProperty('--y', `${y}px`);
                    sibling.style.setProperty('--glow-opacity', factor * 0.3);
                }
            });
        });
        
        card.addEventListener('mouseleave', () => {
            cards.forEach(c => {
                c.style.setProperty('--glow-opacity', '0');
            });
        });
    });
};

// 3D tilt effect helper
const add3DTilt = (element, threshold = 10) => {
    if (!element) return;
    
    element.style.transition = 'transform 0.2s ease';
    element.style.transformStyle = 'preserve-3d';
    element.style.willChange = 'transform';
    if (element.style.transform === 'none') element.style.transform = '';

    let reqId = null;

    element.onmousemove = (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / threshold;
        const rotateY = (rect.width / 2 - x) / threshold;
        
        if (reqId) cancelAnimationFrame(reqId);
        reqId = requestAnimationFrame(() => {
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
    };

    element.onmouseleave = () => {
        if (reqId) cancelAnimationFrame(reqId);
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
};

const init3DTiltEffect = () => {
    if (window.innerWidth <= 768 || document.body.classList.contains('touch-device')) return;
    document.querySelectorAll('.project-card, .stat-card, .education-item, .certification-item, .achievement-item')
        .forEach(card => add3DTilt(card, 10));
};

const initCodeCard3DEffect = () => {
    if (window.innerWidth <= 768 || document.body.classList.contains('touch-device')) return;
    add3DTilt(document.querySelector('.code-card'), 15);
};

// Add responsive checks for touch devices
const checkTouchDevice = () => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        // Disable custom cursor on touch devices
        document.body.style.cursor = 'auto';
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        if (cursor) cursor.style.display = 'none';
        if (follower) follower.style.display = 'none';
    }
};

// Handle window resize events
const handleResize = () => {
    // Re-initialize any size-dependent features
    if (window.innerWidth <= 768) {
        // Mobile specific adjustments
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
};

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    checkTouchDevice();
    handleResize();
    initCustomCursor();
    initThemeToggle();
    navSlide();
    initParallaxEffect();
    init3DTiltEffect();
    initCodeCard3DEffect();
    smoothScroll();
    formSubmit();
    initGlowEffect();
    
    // Delay scroll animations slightly to ensure DOM is ready
    setTimeout(scrollReveal, 100);
});

// Final check on page load
window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach(section => {
        if (isInViewport(section)) animateSection(section);
    });
});

// Add scroll class to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Handle window resize
window.addEventListener('resize', handleResize);

// Parallax scrolling effect
const initParallaxEffect = () => {
    if (window.innerWidth <= 768) return; // Skip on mobile
    
    let lastScrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll(
        '.parallax-bio, .parallax-experience, ' +
        '.parallax-image-base, .decorative-1, .decorative-2, .parallax-badge'
    );
    
    // Initial position update
    updateParallaxPositions(window.scrollY);
    
    // Update parallax positions on scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) return; // Don't run on mobile
        lastScrollY = window.scrollY;
        updateParallaxPositions(lastScrollY);
    });
    
    function updateParallaxPositions(scrollY) {
        // Set the base scrollY variable for CSS parallax
        document.documentElement.style.setProperty('--parallax-offset', scrollY);
        
        // Apply specific movement to each element
        parallaxElements.forEach(element => {
            const speed = element.classList.contains('parallax-image-base') ? 0.04 :
                        element.classList.contains('decorative-1') ? 0.06 :
                        element.classList.contains('decorative-2') ? 0.05 :
                        element.classList.contains('parallax-bio') ? 0.03 :
                        element.classList.contains('parallax-experience') ? 0.04 :
                        element.classList.contains('parallax-badge') ? 0.04 : 0.03;
            
            const yOffset = scrollY * speed;
            
            // Apply transform for all elements with appropriate direction
            element.style.transform = element.classList.contains('parallax-image-base') || 
                                    element.classList.contains('decorative-2') ||
                                    element.classList.contains('parallax-badge') ?
                                    `translateY(${yOffset}px)` : `translateY(${-yOffset}px)`;
        });
    }
}
