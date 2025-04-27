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

// Mobile navigation toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Scroll animations
const scrollReveal = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('appear');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );
        
        sectionObserver.observe(section);
    });
};

// Smooth scrolling for navigation links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a, .cta-buttons a');
    
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
                    
                    // Close mobile nav if open
                    const nav = document.querySelector('.nav-links');
                    const burger = document.querySelector('.burger');
                    
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        burger.classList.remove('toggle');
                        
                        document.querySelectorAll('.nav-links li').forEach(link => {
                            link.style.animation = '';
                        });
                    }
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

// 3D tilt effect for cards
const init3DTiltEffect = () => {
    const cards = document.querySelectorAll('.project-card, .stat-card, .education-item, .certification-item, .achievement-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the card
            const y = e.clientY - rect.top; // y position within the card
            
            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            // Apply the 3D rotation
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset the transform when mouse leaves
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
};

// 3D hover effect for code card
const initCodeCard3DEffect = () => {
    const card = document.querySelector('.code-card');
    const THRESHOLD = 15;
    
    if (!card) return;
    
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
    navSlide();
    scrollReveal();
    smoothScroll();
    formSubmit();
    initGlowEffect();
    init3DTiltEffect();
    initCodeCard3DEffect();
});

// Add scroll class to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Handle window resize
window.addEventListener('resize', handleResize);
