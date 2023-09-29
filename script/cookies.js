const setCookie = (name, value, days) => {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

const getCookie = (name) => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};

const cookieLayerInit = () => {
    Vue.component('CookieLayer', {
        template: `<div class="cookieLayer__content">
                      <h2 class="cookieLayer__title">{{ title }}</h2>
                      <p class="cookieLayer__text">{{ text1 }}</p>
                      <p class="cookieLayer__text">{{ text2 }}</p>
                      <button class="cookieLayer__button" button v-on:click="$emit('accept')">{{ buttonLabel }}</button>
                      <div class="cookieLayer__disclaimer">{{ disclaimer }}</div>
                  </div>`,
        data: function () {
            return {
                title: 'Do you like cookies ?',
                text1: 'This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!',
                text2: 'The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl. Next, cream together butter and sugars. Add the eggs & vanilla and beat to combine. Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.',
                buttonLabel: 'I solemny swear I will bake these cookies',
                disclaimer: 'This box is made using Vue.js and is super awesome !!! ............. or is it ???',
            };
        },
    });

    const vueApp = new Vue({
        el: '#cookie-vue',
        data: {
            displayCookieBox: false,
        },
        methods: {
            acceptCookies() {
                this.displayCookieBox = false;
                document.body.classList.remove('no-scroll');
                document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--accepted');
                setCookie('cookieLayer', 'accepted', 1);
            },
        },
        mounted() {
            if (getCookie('cookieLayer') === 'accepted') {
                return;
            }
            this.displayCookieBox = true;
            document.body.classList.add('no-scroll');
            document.querySelector('.cookieLayer__base').classList.remove('cookieLayer__base--accepted');
        },
    });
};

document.addEventListener('DOMContentLoaded', function () {
    cookieLayerInit();
});
