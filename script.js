// You can add JavaScript for additional animations or features
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a scroll effect or load animations
    console.log('Page Loaded');
});

document.addEventListener("DOMContentLoaded", function () {
    const featureItems = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    featureItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const benefits = document.querySelectorAll('.benefit');
    const triggerAnimation = () => {
        benefits.forEach(benefit => {
            const rect = benefit.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                benefit.style.opacity = 1;
                benefit.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', triggerAnimation);
    triggerAnimation(); // Run on page load
});

document.addEventListener('DOMContentLoaded', function () {
    const caseStudies = document.querySelectorAll('.case-study');

    function handleScroll() {
        caseStudies.forEach((caseStudy) => {
            const rect = caseStudy.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                caseStudy.style.opacity = 1;
                caseStudy.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // Initial check in case elements are already in view
    handleScroll();
});

