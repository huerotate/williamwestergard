gsap.registerPlugin(ScrollTrigger);


gsap.from (".logo", 1.5,  {
    scale:1.3,
    opacity:0,
    delay:0.5,
    ease: "power1.out",
});

gsap.from (".rectangle, .nav, .about, .contact, .services", 1.3,  {
    y:15,
    opacity:0,
    delay:1.7,
    stagger:0.15,
    ease: "power1.out",
});

gsap.from (".border-nav", 1.5,  {
    x:-2000,
    opacity:0,
    delay:0.3,
    ease: "power2.out",
});

gsap.from ("h1, .main-content-image, form", 2.5,  {
    y:-17,
    opacity:0,
    delay:1.5,
    ease: "power2.out",
});



gsap.from ("h2", 1.7,  {
    scrollTrigger: ".main-content-image-2",
    x:-60,
    opacity:0,
    delay:0.3,
    ease: "power2.out",
});

gsap.from (".main-content-image-2", 1.3,  {
    scrollTrigger: ".main-content-image-2",
    x:-40,
    opacity:0,
    delay:0,
    ease: "power2.out",
});


gsap.from ("h3, .button", 1.7,  {
    scrollTrigger: "h3",
    y:30,
    opacity:0,
    delay:0.3,
    ease: "power2.out",
});



function About() {

gsap.to ("#overlay-1", 1.1,  {
    marginTop:0,
    ease: "power4.out",
    delay:0.2,
});

gsap.to ("#overlay-2", 1.1,  {
    marginBottom:0,
    ease: "power4.out",
    delay:0.2,
})

gsap.from ("#arrow", 1,  {
    opacity:0,
    delay:1,
})


gsap.from ("#content-2-image", 1.5,  {
    y:30,
    opacity:0,
    delay:1,
})

gsap.from ("#about-page", 1.5,  {
    x:30,
    opacity:0,
    delay:1,
})

};

function Contact() {

    gsap.to ("#overlay-3", 1.1,  {
        marginLeft:0,
        ease: "power4.out",
        delay:0.2,
    })
    
    gsap.from ("#send-message", 1.5,  {
        x:30,
        opacity:0,
        delay:1,
    })
    
    gsap.from ("#contact-page", 1.5,  {
        x:20,
        opacity:0,
        delay:1,
    })
    gsap.from ("#arrow-two", 1,  {
        opacity:0,
        delay:1,
    })
    
    };

    function Services() {

        gsap.to ("#overlay-4", 1.1,  {
            marginLeft:0,
            ease: "power4.out",
            delay:0.2,
        })
        
        gsap.from ("#arrow-three", 1,  {
            opacity:0,
            delay:1,
        })
        gsap.from ("#services-title", 1.5,  {
            x:30,
            opacity:0,
            delay:1,
        })
        
        gsap.from ("#services-page", 1.5,  {
            x:20,
            opacity:0,
            delay:1,
        })

        };


function reveal(){
document.getElementById("arrow").style.display="block";
document.getElementById("content-2-image").style.display="block";
document.getElementById("about-page").style.display="block";
document.getElementById("overlay-1").style.display="block";
document.getElementById("overlay-2").style.display="block";
}

function revealContact(){
    document.getElementById("arrow-two").style.display="block";
    document.getElementById("overlay-3").style.display="block";
    document.getElementById("contact-page").style.display="block";
    document.getElementById("send-message").style.display="block";
    }

    function servicesContact(){
        document.getElementById("arrow-three").style.display="block";
        document.getElementById("overlay-4").style.display="block";
        document.getElementById("services-page").style.display="block";
        document.getElementById("services-title").style.display="block";
        }
    