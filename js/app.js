const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener(`click` ,() => {
        //toggle nav
       nav.classList.toggle(`nav-active`);
    //animate links
       navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animaton = ``;
            
        } else {
            link.style.animation = `navLinkFade 0.3s ease forwards ${index/5 + 1.5}s`;
        }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

    const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //change the theme
    document.body.classList.toggle('dark');
})

}

navSlide();