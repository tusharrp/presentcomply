document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    features.forEach(feature => {
        observer.observe(feature);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const featureCards = document.querySelectorAll(".feature-card");
    
    featureCards.forEach(card => {
        card.classList.add("hidden");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(card);
    });
});