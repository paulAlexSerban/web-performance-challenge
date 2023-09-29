const CONTENT_BREAKING_NEWS =
    'BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****';
const CONTENT_ARTICLE_TEASERS = [
    'This is an article about first party that happened this weekend',
    'This is an article about second party that happened this weekend',
    'This is an article about third party that happened this weekend',
];

const acceptCookies = () => {
    document.body.classList.remove('no-scroll');
    document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--accepted');
};

const dynamicContent = () => {
    const teasers = document.querySelectorAll('.teaser__text');
    const marqueeBar = document.querySelector('marquee');

    // mock content delay
    setTimeout(() => (marqueeBar.innerHTML = CONTENT_BREAKING_NEWS), 3000);

    // create dynamic content
    teasers.forEach((teaser, index) => {
        teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
    });
};

const layoutTrashing = (n) => {
    for (let i = 0; i < n; i++) {
        const container = document.querySelector('header');
        console.log(container.clientTop);
    }
};

const JSblocking = () => {
    let n = 1000000;
    while (n) {
        n--;
    }
};

const initApp = () => {
    layoutTrashing(20);
    dynamicContent();
    setTimeout(() => console.log('Hello World!'), 3000);
    JSblocking();
};

document.addEventListener('DOMContentLoaded', function () {
    initApp();
});
