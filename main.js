



//Splide

var splide = new Splide('.splide', {
    perPage: 4,
    perMove: 1,
    gap: '1.5rem',
    padding: '3rem',
    type: 'loop',
    drag: 'free',
    snap: true,
    arrows: true,
    paginations: true,
    autoplay: true,
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
            padding: '1.5rem',

        },
        480: {
            perPage: 1,
            gap: '.7rem',
            padding: '1.5rem',
        },
    },
});

splide.mount();

//AOS

AOS.init({
    offset: 400, 
    delay: 700, 
    duration: 1000 
});

// Scroll

const sr = ScrollReveal ({
    distance:'60px',
    duration: '2500',
    delay: 100,
    reset: true
})
sr.reveal('.home-text, .home-img, .btnz, .btn', {interval: 300})
sr.reveal('.heading', {delay: 800, origin: 'top'})
sr.reveal('.services-container .box', {delay: 800, origin: 'bottom'})
sr.reveal('.reviews-container .box ', {delay: 800, origin: 'bottom'})


//Image

let bigImage = document.getElementById('imga')
function myCArs(car){
    bigImage.src = car
}
