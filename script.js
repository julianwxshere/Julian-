// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }

    // Set Dynamic Copyright Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Create Ambient Floating Particles
    createParticles();
});

// Ambient Particles Generator
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1; // 1px to 4px
        const posX = Math.random() * 100; // Percentage
        const posY = Math.random() * 100;
        const duration = Math.random() * 15 + 10; // 10s to 25s
        const delay = Math.random() * 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        // Varying colors (burgundy & rose accents)
        if (i % 3 === 0) {
            particle.style.background = 'rgba(128, 0, 32, 0.4)';
        } else if (i % 2 === 0) {
            particle.style.background = 'rgba(226, 115, 150, 0.3)';
        } else {
            particle.style.background = 'rgba(244, 172, 183, 0.2)';
        }

        container.appendChild(particle);
    }
}

// Smooth Scroll Offset Adjustment for Sticky Header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
