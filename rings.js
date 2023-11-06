let rings = document.getElementById('rings');
let img = document.getElementById('img-place-holder');
let inner = document.getElementById('inner-ring');
let outer = document.getElementById('outer-ring');


rings.addEventListener("mousemove", e => {

    /* In order to get an accurate percentage relative to the center
    of the image, we have to subtract 250 (half the width of the rings box)
    to get its distance from the center, then have to divide by 250 to get a 
    percentage away from the center. We can then set the max distance we want 
    the rings to move */
    
    let percentX = ((e.layerY - 250) / 250)
    let percentY = ((e.layerX - 250) / 250)

    // rings.style.transform = "skew(" + x + "deg ," + y + "deg)";

    inner.style = "transform: translate(" + (percentY * 15) + "px, " + (percentX * 15) + "px);"
    outer.style = "transform: translate(" + (percentY * 25) + "px, " + (percentX  * 25) + "px);"
})

rings.addEventListener('mouseleave', () => {
    img.style = ' transition: top ease 300ms, left ease 200ms;';
    inner.style = 'none';
    outer.style = 'none';
});