// Custom cursor initialization
const initCustomCursor = () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    const speed = 0.2; // lower is slower

    const animate = () => {
        posX += (mouseX - posX) * speed;
        posY += (mouseY - posY) * speed;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

        requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform += ' scale(0.7)';
        follower.style.transform += ' scale(0.7)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(0.7)', '');
        follower.style.transform = follower.style.transform.replace(' scale(0.7)', '');
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

// Scroll animations
const scrollReveal = () => {
    // Observer for sections
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    
                    // Find animation containers within this section
                    const containers = entry.target.querySelectorAll(
                        '.project-grid, .stair-layout, .stats-container, ' +
                        '.education-container, .certifications-container, .achievements-container'
                    );
                    
                    containers.forEach(container => {
                        container.classList.add('animated');
                    });
                    
                    // Trigger animations for individual elements with scroll-animation class
                    const animatedElements = entry.target.querySelectorAll('.scroll-animation');
                    animatedElements.forEach((el, index) => {
                        // Add default animation class if none specified
                        if (!el.classList.contains('fade-in-up') && 
                            !el.classList.contains('fade-in-left') && 
                            !el.classList.contains('fade-in-right')) {
                            el.classList.add('fade-in-up');
                        }
                        
                        // Add delay class if none specified
                        if (!el.classList.contains('delay-100') && 
                            !el.classList.contains('delay-200') && 
                            !el.classList.contains('delay-300') && 
                            !el.classList.contains('delay-400') && 
                            !el.classList.contains('delay-500')) {
                            // Add staggered delay based on index
                            const delayClass = `delay-${Math.min(5, (index + 1)) * 100}`;
                            el.classList.add(delayClass);
                        }
                    });
                    
                    // Stop observing this section once it's been revealed
                    sectionObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.01, // Lower threshold - trigger earlier (changed from 0.05)
            rootMargin: '0px 0px -5% 0px' // Trigger animation even earlier (changed from -10%)
        }
    );
    
    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
        
        // Force sections to be visible on initial load if they're already in viewport
        if (isElementInViewport(section)) {
            section.classList.add('appear');
            
            // Find and animate containers
            const containers = section.querySelectorAll(
                '.project-grid, .stair-layout, .stats-container, ' +
                '.education-container, .certifications-container, .achievements-container'
            );
            
            containers.forEach(container => {
                container.classList.add('animated');
            });
            
            // Animate individual elements
            const animatedElements = section.querySelectorAll('.scroll-animation');
            animatedElements.forEach((el, index) => {
                // Default animation class if needed
                if (!el.classList.contains('fade-in-up') && 
                    !el.classList.contains('fade-in-left') && 
                    !el.classList.contains('fade-in-right')) {
                    el.classList.add('fade-in-up');
                }
                
                // Add delay class if needed
                if (!el.classList.contains('delay-100') && 
                    !el.classList.contains('delay-200') && 
                    !el.classList.contains('delay-300') && 
                    !el.classList.contains('delay-400') && 
                    !el.classList.contains('delay-500')) {
                    const delayClass = `delay-${Math.min(5, (index + 1)) * 100}`;
                    el.classList.add(delayClass);
                }
            });
        }
    });
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }
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

const init3DTiltEffect = () => {
    // Don't run on mobile
    if (window.innerWidth <= 768 || document.body.classList.contains('touch-device')) return;
    
    const cards = document.querySelectorAll('.project-card, .stat-card, .education-item, .certification-item, .achievement-item');

    cards.forEach(card => {
        // Ensure persistent styles
        card.style.transition = 'transform 0.2s ease';
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
        
        // Important: Remove any inline styles that might have been set by CSS
        if (card.style.transform === 'none') {
            card.style.transform = '';
        }

        let requestId = null;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            if (requestId) cancelAnimationFrame(requestId);

            requestId = requestAnimationFrame(() => {
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
        };

        const handleMouseLeave = () => {
            if (requestId) cancelAnimationFrame(requestId);
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };

        // Avoid duplicate listeners
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);

        // Add listeners
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });
};

// 3D hover effect for code card
const initCodeCard3DEffect = () => {
    // Don't run on mobile
    if (window.innerWidth <= 768 || document.body.classList.contains('touch-device')) return;
    
    const card = document.querySelector('.code-card');
    const THRESHOLD = 15;
    
    if (!card) return;
    
    // Remove any inline styles that might have been set by CSS
    if (card.style.transform === 'none') {
        card.style.transform = '';
    }
    
    const handleHover = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const percentX = (x / rect.width);
        const percentY = (y / rect.height);
        
        // Set CSS variables for the glow effect
        card.style.setProperty('--mouse-x', `${percentX * 100}%`);
        card.style.setProperty('--mouse-y', `${percentY * 100}%`);
        
        const rotateY = (percentX - 0.5) * THRESHOLD * 2;
        const rotateX = (0.5 - percentY) * THRESHOLD * 2;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const resetStyles = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };
    
    // Avoid duplicate listeners
    card.removeEventListener('mousemove', handleHover);
    card.removeEventListener('mouseleave', resetStyles);
    
    // Add listeners
    card.addEventListener('mousemove', handleHover);
    card.addEventListener('mouseleave', resetStyles);
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
    
    // Initialize 3D effects
    init3DTiltEffect();
    initCodeCard3DEffect();
    
    // Periodically check to ensure 3D effects remain active
    setInterval(() => {
        init3DTiltEffect();
        initCodeCard3DEffect();
    }, 1500);
    
    // Slight delay for scroll animations to ensure DOM is fully loaded
    setTimeout(() => {
        scrollReveal();
        
        // Make sure all sections that are already in view are visible
        document.querySelectorAll('section').forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.classList.add('appear');
            }
        });
    }, 100);
    
    smoothScroll();
    formSubmit();
    initGlowEffect();
});

// Recheck scroll animations on page load complete
window.addEventListener('load', () => {
    // Force check all sections again after everything is loaded
    document.querySelectorAll('section').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('appear');
            
            // Also make sure containers are animated
            const containers = section.querySelectorAll(
                '.project-grid, .stair-layout, .stats-container, ' +
                '.education-container, .certifications-container, .achievements-container'
            );
            
            containers.forEach(container => {
                container.classList.add('animated');
            });
        }
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
