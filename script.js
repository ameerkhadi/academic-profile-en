// Academic CV Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    loadDynamicContent();
    initializeSmoothScrolling();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Load dynamic content from data.js
function loadDynamicContent() {
    if (typeof academicData !== 'undefined') {
        loadPersonalInfo();
        loadAboutSection();
        loadPublications();
        loadProjects();
        loadCourses();
        loadGallery();
        loadSocialLinks();
    }
}

// Load personal information
function loadPersonalInfo() {
    const data = academicData.personal;
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const profileImage = document.querySelector('.profile-image img');
    
    if (heroTitle) heroTitle.textContent = data.name;
    if (heroSubtitle) heroSubtitle.textContent = data.title;
    if (profileImage) profileImage.src = data.profileImage;
    
    // Update navigation logo
    const navLogo = document.querySelector('.nav-logo h2');
    if (navLogo) navLogo.textContent = data.name;
}

// Load about section
function loadAboutSection() {
    const data = academicData.about;
    
    // Load description
    const aboutContainer = document.querySelector('.about-text');
    if (aboutContainer && data.description) {
        aboutContainer.innerHTML = data.description.map(p => `<p class="about-description">${p}</p>`).join('');
    }
    
    // Load stats
    const statsContainer = document.querySelector('.about-stats');
    if (statsContainer && data.stats) {
        statsContainer.innerHTML = data.stats.map(stat => `
            <div class="stat-item">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    }
}

// Load publications
function loadPublications() {
    const container = document.querySelector('.publications-list');
    if (!container || !academicData.publications) return;
    
    container.innerHTML = academicData.publications.map(pub => `
        <div class="publication-item">
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-authors">${pub.authors}</p>
            <p class="publication-venue">${pub.venue}</p>
            <p class="publication-year">${pub.year}</p>
        </div>
    `).join('');
}

// Load projects
function loadProjects() {
    const container = document.querySelector('.projects-grid');
    if (!container || !academicData.projects) return;
    
    container.innerHTML = academicData.projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Load courses
function loadCourses() {
    const container = document.querySelector('.courses-list');
    if (!container || !academicData.courses) return;
    
    container.innerHTML = academicData.courses.map(course => `
        <div class="course-item">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-code">${course.code}</p>
            <p class="course-description">${course.description}</p>
        </div>
    `).join('');
}

// Load gallery
function loadGallery() {
    const container = document.querySelector('.gallery-grid');
    if (!container || !academicData.gallery) return;
    
    container.innerHTML = academicData.gallery.map(item => `
        <div class="gallery-item" title="${item.title}">
            <i class="${item.icon}"></i>
        </div>
    `).join('');
}

// Load social links
function loadSocialLinks() {
    const container = document.querySelector('.social-links');
    if (!container || !academicData.social) return;
    
    container.innerHTML = academicData.social.map(social => `
        <a href="${social.url}" class="social-link" target="_blank" rel="noopener noreferrer">
            <i class="${social.icon}"></i>
        </a>
    `).join('');
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.research-card, .project-card, .publication-item, .course-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Utility function to update content easily
function updateContent(section, data) {
    if (section === 'publications' && data) {
        academicData.publications = data;
        loadPublications();
    } else if (section === 'projects' && data) {
        academicData.projects = data;
        loadProjects();
    } else if (section === 'courses' && data) {
        academicData.courses = data;
        loadCourses();
    }
}

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #4f46e5 !important;
        font-weight: 600;
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #4f46e5;
    }
    
    .nav-link {
        position: relative;
    }
`;
document.head.appendChild(style);

