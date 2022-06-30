let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
    distance : '60px',
    duration : 2500,
    reset : true
})

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:400, origin:'bottom'})
sr.reveal('.about, .services, .cta, .resume, .contact, .contact, .copyright',{delay:200, origin:'top'})
sr.reveal('.about-img',{delay:400, origin:'bottom'})
