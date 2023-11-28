const shuffleBtn = document.getElementById('color-change');
const icon = document.querySelector(".header-icon");

function shuffle() {
    console.log("clicked")

    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    console.log((red + blue + green) / 3);
    if (((red + blue + green) / 3) >= 127) {
        icon.style.color = "#000000";
    } else {
        icon.style.color = "#ffffff";
    }

    document.documentElement.style.setProperty('--accent', 'rgb(' + red + ', ' + blue + ', ' + green + ')');
}