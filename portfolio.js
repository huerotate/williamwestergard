
function init() {

gsap.from(".web-design-content, .web-design-content, .web-design-1, .web-design-2, .web-design-3, .web-design-4", 1, {
    opacity:0,
    x:20,
    ease: "power3.inOut",
    stagger:0.2,
    autoAlpha:0,
});

gsap.from(".scroll-down", 1, {
    y:10,
    opacity:0,
    ease: "power2.inOut",
    autoAlpha:0,
});

gsap.from(".row-1, .row-2, .row-3, .row-4, .row-5", 1, {
    opacity:0,
    ease: "power2.inOut",
    stagger:0.1,
    autoAlpha:0,
});

}


window.addEventListener("load", function(event) {
    init(); 
}) 





gsap.from(".portfolio-content", 1.2, {
    opacity:0,
    ease: "power3.inOut",
    delay: -0.5,
    autoAlpha:0,
});


gsap.from(".about-content, .socials", 1.2, {
    opacity:0,
    ease: "power3.inOut",
    delay: -0.5,
    autoAlpha:0,
});


gsap.from(".motion-design-content", 1, {
    opacity:0,
    ease: "power2.inOut",
    autoAlpha:0,
});

gsap.from(".back-arrow-motion-design", 1, {
    opacity:0,
    ease: "power3.inOut",
    delay: -0.5,
    autoAlpha:0,
});
