

gsap.from("#main-border, .logo-over, .logo-under, .logo-wrapper", 2, {
    opacity: 0,
    ease: "power3.inOut",
});

gsap.from(".logo-wrapper, .logo-over", 2.5, {
    x:-20,
    ease: "power3.inOut",
    delay:-0.9,
});

gsap.from(".logo-under", 2.5, {
    x:20,
    ease: "power3.inOut",
    delay:-0.9,
});

gsap.from("#myVideo", 3, {
    opacity:0,
    ease: "power3.inOut",
});

gsap.from(".nav, .portfolio, .about, .contact", 1.5, {
    y: 20,
    opacity: 0,
    ease: "power3.inOut",
    stagger: 0.2,
    delay: 1,
});

gsap.from(".info, .info-text, .info-design", 1.5, {
    y: 20,
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.15,
    delay: 1,
    paddingBottom:"15px",
});
