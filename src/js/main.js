
document.addEventListener('DOMContentLoaded', function() {
    // Navigation button event listeners for page transition
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Get selected button's href attribute
            const href = button.getAttribute('href');

            if (href && href !== '#') {
                e.preventDefault();
                // Add transition class to the main container
                const container = document.querySelector('.main-container');
                container.classList.add('next-page');

                setTimeout(() => {
                    // Redirect to the new page after the transition using setTimeout
                    window.location.href = href;
                }, 2000); // Adjust timeout to match the CSS transition duration
            }
        })
    });

    const ctaBtn = document.querySelector('.cta-btn');
    const homeBtn = document.querySelector('.home');

    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            const href = ctaBtn.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                // Add transition class to the main container
                const container = document.querySelector('.main-container');
                container.classList.add('next-page');

                // event listener that checks when the transition ends then redirects
                // to the new page
                container.addEventListener('transitionend', function handleTransition() {
                    container.removeEventListener('transitionend', handleTransition);
                    window.location.href = href; 
                });
            }
        });
    }

    if (homeBtn) {
        // Add event listener to the home button
        homeBtn.addEventListener('click', function(e) {
            const href = homeBtn.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                // Add transition class to the main container
                const container = document.querySelector('.main-container');
                container.classList.add('next-page');

                // event listener that checks when the transition ends then redirects
                // to the new page
                container.addEventListener('transitionend', function handleTransition() {
                    container.removeEventListener('transitionend', handleTransition);
                    window.location.href = href;
                });
            }
        });
    }
})