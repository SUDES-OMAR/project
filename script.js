// Function to display greeting based on time of day
function setGreeting() {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    
    if (hour < 12) {
        greeting.textContent = "Good morning, welcome to my profile";
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon, welcome to my profile";
    } else {
        greeting.textContent = "Good evening, welcome to my profile";
    }
}

// Function to toggle "Read More" for bio section
function setupReadMore() {
    const readMoreBtn = document.getElementById('read-more');
    const extendedBio = document.getElementById('bio-extended');
    
    readMoreBtn.addEventListener('click', function() {
        if (extendedBio.style.display === 'block') {
            extendedBio.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        } else {
            extendedBio.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
        }
    });
}

// Function to set up theme changing button
function setupThemeButton() {
    const themeBtn = document.getElementById('change-theme-btn');
    
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Show alert when theme changes
        const currentTheme = document.body.classList.contains('dark-theme') ? 'Dark' : 'Light';
        alert(`Theme changed to ${currentTheme} mode! Enhancing your viewing experience.`);
    });
}

// Function to display random skills
function setupSkillButton() {
    const skillBtn = document.getElementById('show-skill-btn');
    const skillsList = document.querySelector('.skills-list');
    
    const skills = [
        "HTML5 - Structure and semantics for modern web pages",
        "CSS3 - Styling and responsive design techniques",
        "JavaScript - Client-side interactivity and DOM manipulation",
        "Git & GitHub - Version control and collaborative development",
        "Responsive Design - Mobile-first approach to web development",
        "UI/UX Design - Creating user-friendly interfaces",
        "Bootstrap - Front-end framework for faster development",
        "Basic API Integration - Working with external data sources"
    ];
    
    skillBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * skills.length);
        const newSkill = document.createElement('li');
        newSkill.innerHTML = `<strong>Featured Skill:</strong> ${skills[randomIndex]}`;
        newSkill.classList.add('fade-in');
        
        // Replace the first child if it's a featured skill
        const firstSkill = skillsList.querySelector('li:first-child');
        if (firstSkill && firstSkill.textContent.includes('Featured Skill')) {
            skillsList.removeChild(firstSkill);
        }
        
        skillsList.insertBefore(newSkill, skillsList.firstChild);
    });
}

// Function to handle timeline
function setupTimeline() {
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const prevBtn = document.getElementById('timeline-prev');
    const nextBtn = document.getElementById('timeline-next');
    let currentIndex = 0;
    
    // Show the first event initially
    timelineEvents[currentIndex].classList.add('active');
    
    nextBtn.addEventListener('click', function() {
        timelineEvents[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % timelineEvents.length;
        timelineEvents[currentIndex].classList.add('active');
    });
    
    prevBtn.addEventListener('click', function() {
        timelineEvents[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + timelineEvents.length) % timelineEvents.length;
        timelineEvents[currentIndex].classList.add('active');
    });
}

// Form validation function
function setupFormValidation() {
    const form = document.getElementById('newsletter-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const formSuccess = document.getElementById('form-success');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Reset error messages
        nameError.textContent = '';
        emailError.textContent = '';
        formSuccess.textContent = '';
        
        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            isValid = false;
        }
        
        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email';
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }
        
        // If valid, display success message
        if (isValid) {
            formSuccess.textContent = 'Thank you for subscribing to my newsletter!';
            form.reset();
        }
    });
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize all functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setGreeting();
    setupReadMore();
    setupFormValidation();
    setupThemeButton();
    setupSkillButton();
    setupTimeline();
});