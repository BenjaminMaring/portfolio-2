let section = document.getElementById('section');
let projectImg = document.getElementById('project-img')


function select(choice) {
    let splitness = document.getElementById('splitness');
    let links = document.getElementById('links');
    let aerowings = document.getElementById('aerowings');
    

if (choice == "splitness") {

    splitness.classList = "item-wrapper white selected";
    links.classList="item-wrapper unselected";
    aerowings.classList="item-wrapper unselected";

    projectImg.src = "projects-screenshots/splitness.png"

} else if (choice == "links") {

    splitness.classList="item-wrapper unselected";
    links.classList = "item-wrapper white selected";
    aerowings.classList="item-wrapper unselected";

    projectImg.src = "projects-screenshots/links.png"

} else if (choice == "aerowings") {

    splitness.classList="item-wrapper unselected";
    links.classList="item-wrapper unselected";
    aerowings.classList = "item-wrapper white selected";

    projectImg.src = "projects-screenshots/aerowings.png"

}
}

section.addEventListener("mousemove", e => {

    

    projectImg.style="transform: translate(" + (percentY * 20) + "px, " + (percentX * 20) + "px);"
});