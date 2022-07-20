let checkbox = document.getElementById('checkbox');

checkbox = document.addEventListener('input', e => {
    if (isChecked = e.target.checked) {
        document.body.classList.add('body-bright-mode');
        document.getElementById('nav').classList.add('header-menu-bright');
        document.getElementById('menu1').classList.add('a-bright');
        // document.getElementById('menu2').classList.add('a-bright');
        document.getElementById('menu3').classList.add('a-bright');
        document.getElementById('menu4').classList.add('a-bright');
        // document.getElementById('menu5').classList.add('a-bright');
        document.getElementById('menu6').classList.add('a-bright');
        document.getElementById('btn').classList.add('a-bright', 'btn-bright');
        document.getElementById('card-1').classList.add('card-bright');
        document.getElementById('card-2').classList.add('card-bright');
        document.getElementById('card-3').classList.add('card-bright');
        // document.getElementById('card-4').classList.add('card-bright');
        // document.getElementById('card-5').classList.add('card-bright');
        document.getElementById('card-6').classList.add('card-bright');
        document.getElementById('card-7').classList.add('card-bright');
        // document.getElementById('card-8').classList.add('card-bright');
        // document.getElementById('card-9').classList.add('card-bright');
        // document.getElementById('card-10').classList.add('card-bright');
        document.getElementById('card-11').classList.add('card-bright');
        // document.getElementById('card-12').classList.add('card-bright');
        document.getElementById('card-13').classList.add('card-bright');
        document.getElementById('card-14').classList.add('card-bright');
        document.getElementById('logo-14').classList.add('fa-solid-bright');
        document.getElementById('card-15').classList.add('card-bright');
        document.getElementById('logo-15').classList.add('fa-solid-bright');
        document.getElementById('card-16').classList.add('card-bright');
        document.getElementById('logo-16').classList.add('fa-solid-bright');
        document.getElementById('card-17').classList.add('card-bright');
        document.getElementById('logo-17').classList.add('fa-solid-bright');
        document.getElementById('card-18').classList.add('card-bright');
        document.getElementById('logo-18').classList.add('fa-solid-bright');
        document.getElementById('card-19').classList.add('card-bright');
        document.getElementById('logo-19').classList.add('fa-solid-bright');
        document.getElementById('card-20').classList.add('card-bright');
        document.getElementById('logo-20').classList.add('fa-solid-bright');
        document.getElementById('card-21').classList.add('card-bright');
        document.getElementById('logo-21').classList.add('fa-solid-bright');
        document.getElementById('card-22').classList.add('card-bright');
        document.getElementById('logo-22').classList.add('fa-solid-bright');
        // document.getElementById('card-23').classList.add('card-bright');
        // document.getElementById('logo-23').classList.add('fa-solid-bright');
        document.getElementById('card-24').classList.add('card-bright');
        document.getElementById('logo-24').classList.add('fa-solid-bright');
        document.getElementById('foot-text').classList.add('a-bright');
        document.getElementById('foot').classList.add('footer-bright');
    } else {
        document.body.classList.remove('body-bright-mode');
        document.getElementById('nav').classList.remove('header-menu-bright');
        document.getElementById('menu1').classList.remove('a-bright');
        // document.getElementById('menu2').classList.remove('a-bright');
        document.getElementById('menu3').classList.remove('a-bright');
        document.getElementById('menu4').classList.remove('a-bright');
        // document.getElementById('menu5').classList.remove('a-bright');
        document.getElementById('menu6').classList.remove('a-bright');
        document.getElementById('btn').classList.remove('a-bright', 'btn-bright');
        document.getElementById('card-1').classList.remove('card-bright');
        document.getElementById('card-2').classList.remove('card-bright');
        document.getElementById('card-3').classList.remove('card-bright');
        // document.getElementById('card-4').classList.remove('card-bright');
        // document.getElementById('card-5').classList.remove('card-bright');
        document.getElementById('card-6').classList.remove('card-bright');
        document.getElementById('card-7').classList.remove('card-bright');
        // document.getElementById('card-8').classList.remove('card-bright');
        // document.getElementById('card-9').classList.remove('card-bright');
        // document.getElementById('card-10').classList.remove('card-bright');
        document.getElementById('card-11').classList.remove('card-bright');
        // document.getElementById('card-12').classList.remove('card-bright');
        document.getElementById('card-13').classList.remove('card-bright');
        document.getElementById('card-14').classList.remove('card-bright');
        document.getElementById('logo-14').classList.remove('fa-solid-bright');
        document.getElementById('card-15').classList.remove('card-bright');
        document.getElementById('logo-15').classList.remove('fa-solid-bright');
        document.getElementById('card-16').classList.remove('card-bright');
        document.getElementById('logo-16').classList.remove('fa-solid-bright');
        document.getElementById('card-17').classList.remove('card-bright');
        document.getElementById('logo-17').classList.remove('fa-solid-bright');
        document.getElementById('card-18').classList.remove('card-bright');
        document.getElementById('logo-18').classList.remove('fa-solid-bright');
        document.getElementById('card-19').classList.remove('card-bright');
        document.getElementById('logo-19').classList.remove('fa-solid-bright');
        document.getElementById('card-20').classList.remove('card-bright');
        document.getElementById('logo-20').classList.remove('fa-solid-bright');
        document.getElementById('card-21').classList.remove('card-bright');
        document.getElementById('logo-21').classList.remove('fa-solid-bright');
        document.getElementById('card-22').classList.remove('card-bright');
        document.getElementById('logo-22').classList.remove('fa-solid-bright');
        // document.getElementById('card-23').classList.remove('card-bright');
        // document.getElementById('logo-23').classList.remove('fa-solid-bright');
        document.getElementById('card-24').classList.remove('card-bright');
        document.getElementById('logo-24').classList.remove('fa-solid-bright');
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