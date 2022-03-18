const toggle = document.getElementById('ChangeTheme');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
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