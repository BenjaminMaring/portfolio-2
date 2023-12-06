//variables for csustan section
const stanTitle = document.querySelector(".stanislaus");
const stanVertLine = document.querySelector(".line-stan");

//variables for bvt camp
const bvtCamp = document.querySelector(".bvtcamp");

//variables for rj pro
const rjPro = document.querySelector(".rjpro");
const rjProLine = document.querySelector(".rj-pro-vert-line");

//variables for bvt code academy
const bvtCA = document.querySelector(".bvt-ca");
const bvtLine = document.querySelector(".line-bvt");

//sets the default states for the elements to hidden


//event listener for scroll
window.addEventListener('scroll', () => {

    if (window.scrollY < 2000) {
        stanTitle.style.opacity = "0";
        stanVertLine.style.height = "0";
        bvtCamp.style.opacity = "0";
        rjPro.style.opacity = "0";
        rjProLine.style.height = "0px";
        bvtCA.style.opacity = "0";
        bvtLine.style.height = "0px";
    }

    //changes elements properties based on a given point
    if (window.scrollY > 2000) {
        stanTitle.style.opacity = "1";
        stanVertLine.style.height = "577px";

    }
    if (window.scrollY > 2200) {
        bvtCamp.style.opacity = "1";
    }

    if (window.scrollY > 2400) {
        rjPro.style.opacity = "1";
        rjProLine.style.height = "395px";
    }

    if (window.scrollY > 2600) {
        bvtCA.style.opacity = "1";
        bvtLine.style.height = "142px";
    }
})