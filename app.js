const checkbox = document.getElementById('checkbox');
const body = document.body;

checkbox = document.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('bright-mode');
    } else {
        body.classList.remove('bright-mode');
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