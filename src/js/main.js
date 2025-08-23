console.log("script loaded!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded fired");
    // Navigation button event listeners for page transition
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Get selected button's href attribute
            const href = button.getAttribute('href');
            console.log("Nav button clicked:", href);

            if (href && href !== '#') {
                e.preventDefault();
                // Add transition class to the main container
                const container = document.querySelector('.main-container');
                container.classList.add('next-page');
                console.log("ADDED NEXT-PAGE");

                container.offsetHeight; // Trigger reflow to ensure transition starts

                requestAnimationFrame(() => {
                    container.addEventListener('transitionend', function handleTransition() {
                    container.removeEventListener('transitionend', handleTransition);
                    window.location.href = href;
                })
            })
        }})
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
                console.log("ADDED NEXT-PAGE -- CTA");

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
                console.log("ADDED NEXT-PAGE -- HOME");

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