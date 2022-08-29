let checkbox = document.getElementById('checkbox');

checkbox = document.addEventListener('input', e => {
    if (isChecked = e.target.checked) {
        document.body.classList.add('body-bright-mode');
        document.getElementById('nav').classList.add('header-menu-bright');
        document.getElementById('menu1').classList.add('a-bright');
        document.getElementById('menu2').classList.add('a-bright');
        document.getElementById('menu3').classList.add('a-bright');
        document.getElementById('menu4').classList.add('a-bright');
        document.getElementById('menu5').classList.add('a-bright');
        document.getElementById('btn').classList.add('a-bright', 'btn-bright');
        document.getElementById('card-about').classList.add('card-bright');
        document.getElementById('card-skills-1').classList.add('card-bright');
        document.getElementById('card-skills-2').classList.add('card-bright');
        document.getElementById('card-skills-3').classList.add('card-bright');
        document.getElementById('card-skills-4').classList.add('card-bright');
        document.getElementById('card-skills-5').classList.add('card-bright');
        document.getElementById('card-skills-6').classList.add('card-bright');
        document.getElementById('card-skills-7').classList.add('card-bright');
        document.getElementById('card-portofolio-1').classList.add('card-bright');
        document.getElementById('logo-portofolio-1').classList.add('fa-solid-bright');
        document.getElementById('card-portofolio-2').classList.add('card-bright');
        document.getElementById('logo-portofolio-2').classList.add('fa-solid-bright');
        document.getElementById('card-portofolio-3').classList.add('card-bright');
        document.getElementById('logo-portofolio-3').classList.add('fa-solid-bright');
        document.getElementById('card-portofolio-4').classList.add('card-bright');
        document.getElementById('logo-portofolio-4').classList.add('fa-solid-bright');
        document.getElementById('card-portofolio-5').classList.add('card-bright');
        document.getElementById('logo-portofolio-5').classList.add('fa-solid-bright');
        document.getElementById('card-portofolio-6').classList.add('card-bright');
        document.getElementById('logo-portofolio-6').classList.add('fa-solid-bright');
        document.getElementById('card-contact-1').classList.add('card-bright');
        document.getElementById('logo-contact-1').classList.add('fa-solid-bright');
        document.getElementById('card-contact-2').classList.add('card-bright');
        document.getElementById('logo-contact-2').classList.add('fa-solid-bright');
        document.getElementById('card-contact-3').classList.add('card-bright');
        document.getElementById('logo-contact-3').classList.add('fa-solid-bright');
        document.getElementById('card-contact-4').classList.add('card-bright');
        document.getElementById('logo-contact-4').classList.add('fa-solid-bright');
        document.getElementById('foot-text').classList.add('a-bright');
        document.getElementById('foot').classList.add('footer-bright');
    } else {
        document.body.classList.remove('body-bright-mode');
        document.getElementById('nav').classList.remove('header-menu-bright');
        document.getElementById('menu1').classList.remove('a-bright');
        document.getElementById('menu2').classList.remove('a-bright');
        document.getElementById('menu3').classList.remove('a-bright');
        document.getElementById('menu4').classList.remove('a-bright');
        document.getElementById('menu5').classList.remove('a-bright');
        document.getElementById('btn').classList.remove('a-bright', 'btn-bright');
        document.getElementById('card-about').classList.remove('card-bright');
        document.getElementById('card-skills-1').classList.remove('card-bright');
        document.getElementById('card-skills-2').classList.remove('card-bright');
        document.getElementById('card-skills-3').classList.remove('card-bright');
        document.getElementById('card-skills-4').classList.remove('card-bright');
        document.getElementById('card-skills-5').classList.remove('card-bright');
        document.getElementById('card-skills-6').classList.remove('card-bright');
        document.getElementById('card-skills-7').classList.remove('card-bright');
        document.getElementById('card-portofolio-1').classList.remove('card-bright');
        document.getElementById('logo-portofolio-1').classList.remove('fa-solid-bright');
        document.getElementById('card-portofolio-2').classList.remove('card-bright');
        document.getElementById('logo-portofolio-2').classList.remove('fa-solid-bright');
        document.getElementById('card-portofolio-3').classList.remove('card-bright');
        document.getElementById('logo-portofolio-3').classList.remove('fa-solid-bright');
        document.getElementById('card-portofolio-4').classList.remove('card-bright');
        document.getElementById('logo-portofolio-4').classList.remove('fa-solid-bright');
        document.getElementById('card-portofolio-5').classList.remove('card-bright');
        document.getElementById('logo-portofolio-5').classList.remove('fa-solid-bright');
        document.getElementById('card-portofolio-6').classList.remove('card-bright');
        document.getElementById('logo-portofolio-6').classList.remove('fa-solid-bright');
        document.getElementById('card-contact-1').classList.remove('card-bright');
        document.getElementById('logo-contact-1').classList.remove('fa-solid-bright');
        document.getElementById('card-contact-2').classList.remove('card-bright');
        document.getElementById('logo-contact-2').classList.remove('fa-solid-bright');
        document.getElementById('card-contact-3').classList.remove('card-bright');
        document.getElementById('logo-contact-3').classList.remove('fa-solid-bright');
        document.getElementById('card-contact-4').classList.remove('card-bright');
        document.getElementById('logo-contact-4').classList.remove('fa-solid-bright');
        document.getElementById('foot-text').classList.remove('a-bright');
        document.getElementById('foot').classList.remove('footer-bright');
    }
});

function menuIcon() {
    var x = document.getElementById("nav");
    if (x.className === "header-menu") {
        x.className += " responsive";
    } else {
        x.className = "header-menu";
    }
}