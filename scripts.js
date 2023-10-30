// Select the entire navbar
const navSelector = document.querySelector('.navbar');
// Select the For Business Link
const navItemEl = document.querySelector('.nav-item');
// Select the button in the navbar
const buttonSelector = document.querySelector('.btn');
// Select the login button
const loginEl = document.querySelector('.login-link');
// Select the Calm logo
const navLogo = document.querySelector('.navbar-brand');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        // Add navbar-scroll to the entire navbar
        navSelector.classList.add('navbar-scroll');
        // Add button-scroll to the button in navbar
        buttonSelector.classList.add('button-scroll');
        // Add navitem-scroll to the For Business Link
        navItemEl.classList.add('navitem-scroll');
        // Add the login-scroll to the login button
        loginEl.classList.add('login-scroll');
        // Add the navbrand-scroll class to navbar-brand
        navLogo.classList.add('navbrand-scroll');
    } else {
        // Remove navbar-scroll to the entire navbar
        navSelector.classList.remove('navbar-scroll');
        // Remove button-scroll to the button in navbar
        buttonSelector.classList.remove('button-scroll');
        // Remove navitem-scroll to the For Business Link
        navItemEl.classList.remove('navitem-scroll');
        // Remove login-scroll to the login button
        loginEl.classList.remove('login-scroll');
        // Remove navbrand-scroll class
        navLogo.classList.remove('navbrand-scroll');
    }
})