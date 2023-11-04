
function select(choice) {
    let splitness = document.getElementById('splitness');
    let splitnessText = document.getElementById('splitness-text');

    let links = document.getElementById('links');
    let linksText = document.getElementById('links-text');

    let aerowings = document.getElementById('aerowings');
    let aerowingsText = document.getElementById('aerowings-text');

    SVGFESpotLightElement

if (choice == "splitness") {
    splitness.classList = "item-wrapper white";
    splitnessText.style = "display: block;"

    links.classList = "item-wrapper unselected";
    linksText.style = "display: none;";

    aerowings.classList = "item-wrapper unselected";
    aerowingsText.style = "display: none;";
} else if (choice == "links") {
    splitness.classList = "item-wrapper unselected";
    splitnessText.style = "display: none;"

    links.classList = "item-wrapper white";
    linksText.style = "display: block;"

    aerowings.classList = "item-wrapper unselected";
    aerowingsText.style = "display: none;";
} else if (choice == "aerowings") {
    splitness.classList = "item-wrapper unselected";
    splitnessText.style = "display: none;"

    links.classList = "item-wrapper unselected";
    linksText.style = "display: none;";

    aerowings.classList = "item-wrapper white";
    aerowingsText.style = "display: block;";
}



}