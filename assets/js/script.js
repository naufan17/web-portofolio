let checkbox = document.getElementById('checkbox');

checkbox = document.addEventListener('input', e => {
    if (isChecked = e.target.checked) {
        document.body.classList.add('body-bright-mode');
        document.getElementById('nav').classList.remove('nav-dark');
        document.getElementById('menu1').classList.add('a-bright');
        document.getElementById('menu2').classList.add('a-bright');
        document.getElementById('menu3').classList.add('a-bright');
        document.getElementById('menu4').classList.add('a-bright');
        document.getElementById('menu5').classList.add('a-bright');
        document.getElementById('menu-dropdown').classList.add('a-bright');
        document.getElementById('btn').classList.add('a-bright', 'btn-bright');
        document.getElementById('card-about').classList.add('card-bright');
        document.getElementById('card-skill-1').classList.add('card-bright');
        document.getElementById('card-skill-2').classList.add('card-bright');
        document.getElementById('card-skill-3').classList.add('card-bright');
        document.getElementById('card-skill-4').classList.add('card-bright');
        document.getElementById('card-skill-5').classList.add('card-bright');
        document.getElementById('card-skill-6').classList.add('card-bright');
        document.getElementById('card-skill-7').classList.add('card-bright');
        document.getElementById('card-skill-8').classList.add('card-bright');
        document.getElementById('card-portfolio-1').classList.add('card-bright');
        document.getElementById('link-portfolio-1').classList.add('fa-solid-bright');
        document.getElementById('github-portfolio-1').classList.add('fa-solid-bright');
        document.getElementById('card-portfolio-2').classList.add('card-bright');
        document.getElementById('link-portfolio-2').classList.add('fa-solid-bright');
        document.getElementById('github-portfolio-2').classList.add('fa-solid-bright');
        document.getElementById('card-portfolio-3').classList.add('card-bright');
        document.getElementById('link-portfolio-3').classList.add('fa-solid-bright');
        document.getElementById('github-portfolio-3').classList.add('fa-solid-bright');
        document.getElementById('card-portfolio-4').classList.add('card-bright');
        document.getElementById('link-portfolio-4').classList.add('fa-solid-bright');
        document.getElementById('github-portfolio-4').classList.add('fa-solid-bright');
        document.getElementById('card-portfolio-5').classList.add('card-bright');
        document.getElementById('link-portfolio-5').classList.add('fa-solid-bright');
        document.getElementById('github-portfolio-5').classList.add('fa-solid-bright');
        document.getElementById('card-portfolio-6').classList.add('card-bright');
        document.getElementById('link-portfolio-6').classList.add('fa-solid-bright');
        document.getElementById('github-portfolio-6').classList.add('fa-solid-bright');
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

        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
                document.getElementById("nav").classList.add('nav-bright');
            } else {
                document.getElementById("nav").classList.remove('nav-bright');
            }
        }
    } else {
        document.body.classList.remove('body-bright-mode');
        document.getElementById('nav').classList.remove('nav-bright');
        document.getElementById('menu1').classList.remove('a-bright');
        document.getElementById('menu2').classList.remove('a-bright');
        document.getElementById('menu3').classList.remove('a-bright');
        document.getElementById('menu4').classList.remove('a-bright');
        document.getElementById('menu5').classList.remove('a-bright');
        document.getElementById('menu-dropdown').classList.remove('a-bright');
        document.getElementById('btn').classList.remove('a-bright', 'btn-bright');
        document.getElementById('card-about').classList.remove('card-bright');
        document.getElementById('card-skill-1').classList.remove('card-bright');
        document.getElementById('card-skill-2').classList.remove('card-bright');
        document.getElementById('card-skill-3').classList.remove('card-bright');
        document.getElementById('card-skill-4').classList.remove('card-bright');
        document.getElementById('card-skill-5').classList.remove('card-bright');
        document.getElementById('card-skill-6').classList.remove('card-bright');
        document.getElementById('card-skill-7').classList.remove('card-bright');
        document.getElementById('card-skill-8').classList.remove('card-bright');
        document.getElementById('card-portfolio-1').classList.remove('card-bright');
        document.getElementById('link-portfolio-1').classList.remove('fa-solid-bright');
        document.getElementById('github-portfolio-1').classList.remove('fa-solid-bright');
        document.getElementById('card-portfolio-2').classList.remove('card-bright');
        document.getElementById('link-portfolio-2').classList.remove('fa-solid-bright');
        document.getElementById('github-portfolio-2').classList.remove('fa-solid-bright');
        document.getElementById('card-portfolio-3').classList.remove('card-bright');
        document.getElementById('link-portfolio-3').classList.remove('fa-solid-bright');
        document.getElementById('github-portfolio-3').classList.remove('fa-solid-bright');
        document.getElementById('card-portfolio-4').classList.remove('card-bright');
        document.getElementById('link-portfolio-4').classList.remove('fa-solid-bright');
        document.getElementById('github-portfolio-4').classList.remove('fa-solid-bright');
        document.getElementById('card-portfolio-5').classList.remove('card-bright');
        document.getElementById('link-portfolio-5').classList.remove('fa-solid-bright');
        document.getElementById('github-portfolio-5').classList.remove('fa-solid-bright');
        document.getElementById('card-portfolio-6').classList.remove('card-bright');
        document.getElementById('link-portfolio-6').classList.remove('fa-solid-bright');
        document.getElementById('github-portfolio-6').classList.remove('fa-solid-bright');
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

        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
                document.getElementById("nav").classList.add('nav-dark');
            } else {
                document.getElementById("nav").classList.remove('nav-dark');
            }
        }
    }
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
        document.getElementById("nav").classList.add('nav-dark');
    } else {
        document.getElementById("nav").classList.remove('nav-dark');
    }
}

function menuIcon() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}