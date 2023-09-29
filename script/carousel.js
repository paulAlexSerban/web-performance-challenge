window.addEventListener('load', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        // Do not start autoplay initially
        autoplay: false,
    });

    // Function to enable autoplay when user interacts with the page
    const startAutoplay = () => {
        swiper.params.autoplay = {
            delay: 2500,
            disableOnInteraction: false,
        };
        swiper.autoplay.start();

        // Remove event listeners after autoplay has started
        ['click', 'mousemove', 'keypress', 'scroll'].forEach((event) => {
            document.removeEventListener(event, startAutoplay);
        });
    };

    // Add event listeners for user interactions
    ['click', 'mousemove', 'keypress', 'scroll'].forEach((event) => {
        document.addEventListener(event, startAutoplay, { once: true });
    });
});
