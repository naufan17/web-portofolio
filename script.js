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
        // document.getElementById('menu6').classList.add('a-bright');
        document.getElementById('card1').classList.add('card-bright');
        document.getElementById('card2').classList.add('card-bright');
        document.getElementById('card3').classList.add('card-bright');
        document.getElementById('card4').classList.add('card-bright');
        document.getElementById('card5').classList.add('card-bright');
        document.getElementById('card6').classList.add('card-bright');
        document.getElementById('card7').classList.add('card-bright');
        document.getElementById('card8').classList.add('card-bright');
        // document.getElementById('card9').classList.add('card-bright');
        // document.getElementById('card10').classList.add('card-bright');
        document.getElementById('card11').classList.add('card-bright');
        document.getElementById('card12').classList.add('card-bright');
        document.getElementById('card13').classList.add('card-bright');
        document.getElementById('card14').classList.add('card-bright');
        document.getElementById('card15').classList.add('card-bright');
        document.getElementById('card16').classList.add('card-bright');
        document.getElementById('card17').classList.add('card-bright');
        document.getElementById('card18').classList.add('card-bright');
        document.getElementById('card19').classList.add('card-bright');
        document.getElementById('card20').classList.add('card-bright');
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
        // document.getElementById('menu6').classList.remove('a-bright');
        document.getElementById('card1').classList.remove('card-bright');
        document.getElementById('card2').classList.remove('card-bright');
        document.getElementById('card3').classList.remove('card-bright');
        document.getElementById('card4').classList.remove('card-bright');
        document.getElementById('card5').classList.remove('card-bright');
        document.getElementById('card6').classList.remove('card-bright');
        document.getElementById('card7').classList.remove('card-bright');
        document.getElementById('card8').classList.remove('card-bright');
        // document.getElementById('card9').classList.remove('card-bright');
        // document.getElementById('card10').classList.remove('card-bright');
        document.getElementById('card11').classList.remove('card-bright');
        document.getElementById('card12').classList.remove('card-bright');
        document.getElementById('card13').classList.remove('card-bright');
        document.getElementById('card14').classList.remove('card-bright');
        document.getElementById('card15').classList.remove('card-bright');
        document.getElementById('card16').classList.remove('card-bright');
        document.getElementById('card17').classList.remove('card-bright');
        document.getElementById('card18').classList.remove('card-bright');
        document.getElementById('card19').classList.remove('card-bright');
        document.getElementById('card20').classList.remove('card-bright');
        document.getElementById('foot-text').classList.remove('a-bright');
        document.getElementById('foot').classList.remove('footer-bright');
    }
});

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "header-menu") {
      x.className += " responsive";
    } else {
      x.className = "header-menu";
    }
}