const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
function switchMode(e) {
    const a = nav.getElementsByTagName('a')
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode(a);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode(a);
    }
}
function darkMode(a) {
    toggleIcon.children[0].textContent = "";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    nav.style.backgroundColor = 'rgb(0 0 0/ 50%)';
    // a.forEach(element => {
    //     console.log(element)
    // });
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        element.style.color = 'var(--primary-color)';
    }
}
function lightMode(a) {
    toggleIcon.children[0].textContent = "";
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        element.style.color = 'var(--primary-color)';
    }
}
switchToggle.addEventListener('change', switchMode);

window.addEventListener('resize', function () {
    const row2 = document.getElementById('pla2')
    if (this.screen.width < 600) {
        row2.classList.remove('row')
        row2.classList.add('row-responsive')
    }
    else {
        row2.classList.remove('row-responsive')
        row2.classList.add('row')
    }
})

function hidemenu() {
    nav.style.right = "-300px"
}
function showmenu() {
    nav.style.right = "0"
}
