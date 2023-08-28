const container = document.querySelector("#container");
const sections = gsap.utils.toArray("#container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");


let scrollTween = gsap.to(sections, {
    xPercent: - 40 * (sections.length - 1),
    ease:"none",
    scrollTrigger: {
        trigger: "#container", 
        pin: true,
        scrub: 1,
        end: "+3000"
    }
})

gsap.to (mask, {
    width:"107%",
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1
    }
    
});
