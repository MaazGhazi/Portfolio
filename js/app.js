const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //animation of links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    });
}

navSlide();

