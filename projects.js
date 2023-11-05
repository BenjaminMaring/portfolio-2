
function select(choice) {
    let splitness = document.getElementById('splitness');
    let links = document.getElementById('links');
    let aerowings = document.getElementById('aerowings');
    let img = document.getElementById('project-img')
    

if (choice == "splitness") {

    splitness.classList = "item-wrapper white selected";
    links.classList="item-wrapper unselected";
    aerowings.classList="item-wrapper unselected";

    img.src = "projects-screenshots/splitness.png"

} else if (choice == "links") {

    splitness.classList="item-wrapper unselected";
    links.classList = "item-wrapper white selected";
    aerowings.classList="item-wrapper unselected";

    img.src = "projects-screenshots/links.png"

} else if (choice == "aerowings") {

    splitness.classList="item-wrapper unselected";
    links.classList="item-wrapper unselected";
    aerowings.classList = "item-wrapper white selected";

    img.src = "projects-screenshots/aerowings.png"

}



}