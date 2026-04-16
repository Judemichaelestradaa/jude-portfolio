document.addEventListener('DOMContentLoaded', () => {
    // Edge glowing lines
    const edgeLineLeft = document.querySelector('.edge-line-left');
    const edgeLineRight = document.querySelector('.edge-line-right');
    
    // Modals
    const contactModal = document.getElementById('contactModal');
    const workModal = document.getElementById('workModal');
    const techModal = document.getElementById('techModal');
    const contactCloseBtn = document.getElementById('contactCloseBtn');
    const workCloseBtn = document.getElementById('workCloseBtn');
    const techCloseBtn = document.getElementById('techCloseBtn');
    const workTitle = document.getElementById('workTitle');
    const workBody = document.getElementById('workBody');
    const techTitle = document.getElementById('techTitle');
    const techBody = document.getElementById('techBody');
    
    // Buttons and interactive elements
    const getInTouchBtn = document.getElementById('getInTouchBtn');
    const contactNavLink = document.getElementById('contactNavLink');
    const workBoxes = document.querySelectorAll('.work-box');
    const keyButtons = document.querySelectorAll('.key-button');
    const contactForm = document.getElementById('contactForm');
    
    // Animation elements
    const cursorGlow = document.querySelector('.cursor-glow');
    const particleCanvas = document.getElementById('particle-canvas');
    const typingText = document.querySelector('.typing-text');
    const tiltCards = document.querySelectorAll('.tilt-card');
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    const skillFills = document.querySelectorAll('.skill-fill');
    
    // Work projects data
    const workData = {
        '1': {
            title: 'Catfish Guard App',
            description: 'An application that can monitor your fishponds water level and water temperature that also controls the pump automatically based on the logic function or its threshold that is provieded. For the application I used flutter dart for the frontend and firebase for the backend then for device I used ESP32 microcontroller with sensors to monitor the water level and temperature. I used C/C++ for the device programming.'
        },
        '2': {
            title: 'Comming Soon',
            description: 'Comming Soon'
        },
        '3': {
            title: 'Comming Soon',
            description: 'Comming Soon'
        },
        '4': {
            title: 'Comming Soon',
            description: 'Comming Soon'
        }
    };
    
    // Tech stack information
    const techData = {
        'JavaScript': 'I rely on JavaScript to make my interfaces feel alive—it handles every interaction, animation, and dynamic update across my projects.',
        'Firebase': 'Firebase is my go-to backend-as-a-service for rapid prototypes because it gives me instant auth, hosting, and realtime data without managing servers.',
        'PHP': 'I use PHP whenever I need lightweight server logic or to integrate with existing CMS ecosystems where it still dominates.',
        'MySQL': 'MySQL powers most of my production databases thanks to its reliability, easy hosting options, and familiar SQL workflow.',
        'HTML': 'I build every layout with semantic HTML first so accessibility, SEO, and maintainability are baked in from the start.',
        'CSS': 'CSS is how I craft the visual identity of my work—from responsive layouts to micro-interactions that reinforce the brand.',
        'Python': 'Python is my preferred tool for automation scripts and data workflows because its ecosystem lets me stand up solutions in minutes.',
        'Flutter': 'I reach for Flutter when I need pixel-perfect mobile experiences from a single codebase without sacrificing performance.'
    };
    
    // ============================================
    // TYPING TEXT EFFECT
    // ============================================
    const typingTexts = [
        'Front End Developer',
        'Web Designer',
        'UI/UX Enthusiast',
        'Creative Coder'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function typeEffect() {
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typingDelay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typingDelay = 500;
        }
        
        setTimeout(typeEffect, typingDelay);
    }
    
    // Start typing effect
    if (typingText) {
        setTimeout(typeEffect, 1000);
    }
    
    // ============================================
    // PARTICLE CANVAS ANIMATION
    // ============================================
    if (particleCanvas) {
        const ctx = particleCanvas.getContext('2d');
        let particles = [];
        let animationId;
        let isActive = true;
        
        function resizeCanvas() {
            particleCanvas.width = window.innerWidth;
            particleCanvas.height = window.innerHeight;
        }
        
        class Particle {
            constructor() {
                this.x = Math.random() * particleCanvas.width;
                this.y = Math.random() * particleCanvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > particleCanvas.width) this.x = 0;
                if (this.x < 0) this.x = particleCanvas.width;
                if (this.y > particleCanvas.height) this.y = 0;
                if (this.y < 0) this.y = particleCanvas.height;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity})`;
                ctx.fill();
            }
        }
        
        function initParticles() {
            particles = [];
            const particleCount = Math.min(50, Math.floor((particleCanvas.width * particleCanvas.height) / 15000));
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function connectParticles() {
            const maxDistance = 100;
            const maxConnections = 3;
            
            for (let i = 0; i < particles.length; i++) {
                let connections = 0;
                for (let j = i + 1; j < particles.length; j++) {
                    if (connections >= maxConnections) break;
                    
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        connections++;
                    }
                }
            }
        }
        
        let frameCount = 0;
        function animate() {
            if (!isActive) return;
            
            frameCount++;
            // Render every 2nd frame for performance (30fps)
            if (frameCount % 2 === 0) {
                ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
                
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                
                connectParticles();
            }
            
            animationId = requestAnimationFrame(animate);
        }
        
        // Initialize
        resizeCanvas();
        initParticles();
        animate();
        
        // Handle resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resizeCanvas();
                initParticles();
            }, 250);
        });
        
        // Pause when tab hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                isActive = false;
                cancelAnimationFrame(animationId);
            } else {
                isActive = true;
                animate();
            }
        });
    }
    
    // ============================================
    // CURSOR GLOW EFFECT
    // ============================================
    if (cursorGlow && !window.matchMedia('(pointer: coarse)').matches) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;
            
            cursorGlow.style.left = currentX + 'px';
            cursorGlow.style.top = currentY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
    } else if (cursorGlow) {
        cursorGlow.style.display = 'none';
    }
    
    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-scale, .reveal-text');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    // ============================================
    // 3D TILT CARD EFFECT
    // ============================================
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // ============================================
    // MAGNETIC BUTTON EFFECT
    // ============================================
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
    
    // ============================================
    // SKILL BARS - Set CSS variable for width
    // ============================================
    skillFills.forEach(fill => {
        const level = fill.getAttribute('data-level');
        if (level) {
            fill.style.setProperty('--skill-level', level + '%');
        }
    });
    
    // ============================================
    // ORIGINAL FUNCTIONALITY
    // ============================================
    
    // Update edge lines based on scroll
    const updateEdgeLines = () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const lineHeight = `${scrollPercentage}vh`;
        
        if (edgeLineLeft) edgeLineLeft.style.height = lineHeight;
        if (edgeLineRight) edgeLineRight.style.height = lineHeight;
    };
    
    // Scroll event listener
    window.addEventListener('scroll', updateEdgeLines);
    
    // Initial update
    updateEdgeLines();
    
    // Get In Touch button - open contact modal
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', () => {
            contactModal.style.display = 'block';
        });
    }
    
    // Contact nav link - open contact modal
    if (contactNavLink) {
        contactNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'block';
        });
    }
    
    // Work boxes click handlers
    workBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const workId = box.getAttribute('data-work');
            const work = workData[workId];
            
            if (work) {
                workTitle.textContent = work.title;
                workBody.innerHTML = `<p>${work.description}</p>`;
                workModal.style.display = 'block';
            }
        });
    });
    
    // Tech keyboard buttons click handlers
    keyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tech = button.getAttribute('data-tech');
            const description = techData[tech];
            
            if (description) {
                techTitle.textContent = tech;
                techBody.innerHTML = `<p>${description}</p>`;
                techModal.style.display = 'block';
            }
        });
    });
    
    // Close modal handlers
    if (contactCloseBtn) {
        contactCloseBtn.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });
    }
    
    if (workCloseBtn) {
        workCloseBtn.addEventListener('click', () => {
            workModal.style.display = 'none';
        });
    }
    
    if (techCloseBtn) {
        techCloseBtn.addEventListener('click', () => {
            techModal.style.display = 'none';
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
        if (event.target === workModal) {
            workModal.style.display = 'none';
        }
        if (event.target === techModal) {
            techModal.style.display = 'none';
        }
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (email && message) {
                const subject = encodeURIComponent(`Portfolio Contact from ${email}`);
                const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
                
                window.location.href = `mailto:jude.estrada321@gmail.com?subject=${subject}&body=${body}`;
                
                contactForm.reset();
            }
        });
    }
});