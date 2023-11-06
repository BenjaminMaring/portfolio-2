let section = document.getElementById('section');
let projectImg = document.getElementById('project-img');


function select(choice) {
    let splitness = document.getElementById('splitness');
    let links = document.getElementById('links');
    let aerowings = document.getElementById('aerowings');
    let puf = document.getElementById('puf');
    

if (choice == "splitness") {

    splitness.classList = "item-wrapper white selected";
    links.classList="item-wrapper unselected";
    aerowings.classList="item-wrapper unselected";
    puf.classList="item-wrapper unselected";

    projectImg.src = "projects-screenshots/splitness.png"

} else if (choice == "links") {

    splitness.classList="item-wrapper unselected";
    links.classList = "item-wrapper white selected";
    aerowings.classList="item-wrapper unselected";
    puf.classList="item-wrapper unselected";

    projectImg.src = "projects-screenshots/links.png";

} else if (choice == "aerowings") {

    splitness.classList="item-wrapper unselected";
    links.classList="item-wrapper unselected";
    aerowings.classList = "item-wrapper white selected";
    puf.classList="item-wrapper unselected";

    projectImg.src = "projects-screenshots/aerowings.png";

}else if (choice == "puf") {

    splitness.classList="item-wrapper unselected";
    links.classList="item-wrapper unselected";
    aerowings.classList="item-wrapper unselected";
    puf.classList = "item-wrapper white selected";

    projectImg.src = "projects-screenshots/aerowings.png";

} }//end select()



section.addEventListener("mousemove", e => {

    //similar to the js logic used to fins the percent moved of the rings,
    //we do the same thing here. however the height may change, so we use the following

    let perX = ((e.layerX - (section.offsetWidth/2)) / section.offsetWidth);
    let perY = ((e.layerY - (section.offsetHeight/2)) / section.offsetHeight);

    projectImg.style="transform: translate(" + (perX * 20) + "px, " + (perY * 20) + "px);";
});