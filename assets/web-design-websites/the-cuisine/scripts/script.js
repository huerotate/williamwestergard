
gsap.to(".overlay", 3, {
    opacity:0,
    ease: "power3.inOut",
});


gsap.from(".title, .phone-number, .navbar", 1.5, {
    opacity:0,
    ease: "power3.inOut",
    delay:0.5,
    stagger:0.2,
});

gsap.from(".info, h1, h2", 2, {
    y:20,
    opacity:0,
    ease: "power3.inOut",
    delay:0.5,
    stagger:0.25,
});

gsap.from("h3, .border ", 1.8, {
    opacity:0,
    ease: "ease3.inOut",
    delay:2.5,
});

gsap.from("button", 1.2, {
    y:20,
    opacity:0,
    ease: "ease3.inOut",
    delay:2,
});





function menu() {

gsap.to("#menu, .left-side-bg", 1.5, {
    left:"50%",
    ease: "power3.inOut",
})


gsap.from(".menu-h1, .menu-border", 1, {
    x:30,
    opacity:0,
    delay:0.7,
    ease: "power3.inOut",
})

gsap.from(".menu-h2, .menu-information, .menu-h3, .menu-border-2", 0.5, {
    x:50,
    opacity:0,
    stagger:0.05,
    delay:1,
    ease: "ease2.inOut",
})


gsap.to(".overlay-image ", 1.5, {
    opacity:0.8,
})

gsap.to(".info ", 1.5, {
    opacity:0.4,
})

}



function closeMenu() {

    gsap.to("#menu, .left-side-bg", 1, {
        left:"100%",
        ease: "power3.inOut",
    })

    gsap.to(".overlay-image ", 1.5, {
        opacity:0.6,
    })
    
    gsap.to(".info ", 1.5, {
        opacity:1,
    })
    
    
    }
    