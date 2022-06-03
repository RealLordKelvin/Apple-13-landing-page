
gsap.registerPlugin(ScrollTrigger);


// Pinning the first page

const introPage = gsap.timeline({
    scrollTrigger:{
        trigger: ".first-page",
        start: "1%",
        end: "100%",
        pin: true,
        pinSpacing: false,
    }
})


// page two 

const tlSecondPage = gsap.timeline({
    scrollTrigger:{
        trigger: ".second-page",
        scrub: true,
        start: "-60%",
        end: "40%",

    }
})

tlSecondPage.fromTo(".text-container--highlight", {color: "rgba(255, 255,255, 0.4)"}, {color: "rgba(255, 255,255, 1)", stagger: 1})

const tlSecondPageRemove = gsap.timeline({
    scrollTrigger:{
        trigger: ".second-page",
        scrub: true,
        start: "-40%",
        end: "60%",

    }
})

tlSecondPageRemove.to(".text-container--highlight", {color: "rgba(255, 255,255, 0.4)", stagger: 1})

// Page three

const tlThirdPageSplitAnimation = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-page",
        start: "-25%",
        end: "12%",
        scrub: true,
        
    }
}) 

tlThirdPageSplitAnimation.fromTo(".max-pro-phone", {x: "40%"}, {x: "20%"})
tlThirdPageSplitAnimation.fromTo(".pro-phone", {x: "-40%"}, {x: "-20%"}, "<") // at the same time

tlThirdPageSplitAnimation.fromTo(".product-text-left", {x: "70%", opacity: 0}, {x: "-100%", opacity: 1})
tlThirdPageSplitAnimation.fromTo(".product-text-right", {x: "-50%", opacity: 0}, {x: "100%", opacity: 1}, "<")


const tlThirdPageSplitAnimationClose = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-page",
        start: "40%",
        end: "100%",
        scrub: true,
    }
}) 

tlThirdPageSplitAnimationClose.to(".max-pro-phone", {x: "40%"})
tlThirdPageSplitAnimationClose.to(".pro-phone", {x: "-40%"}, "<") // at the same time

tlThirdPageSplitAnimationClose.to(".product-text-left", {x: "70", opacity: 0}, "<")
tlThirdPageSplitAnimationClose.to(".product-text-right", {x: "-50", opacity: 0}, "<")

const tlThirdPageSplitAnimationPin = gsap.timeline({
    scrollTrigger:{
        trigger: ".third-page",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false, // Make next page come on top
    }
})

// Carusel phones

const phoneColors = document.querySelectorAll(".phone-colors img")
const gallary = document.querySelectorAll(".phone-gallery")
const slides = document.querySelectorAll(".phone-gallery-container")

let currentPhoneColor = "blue"
 // Hacky Zindex solution
let zIndexLayer = 2;
let stickyNavZIndex = 10;

// For each phone...
phoneColors.forEach((phoneColor, index) => {
    // ...we get the coordinate where they are...
    const coordinates = slides[index].getBoundingClientRect().left;
    // ...and add a click event to them.
    phoneColor.addEventListener("click", (e) => {
        
        let ColorName = e.target.getAttribute("class");
        let closeUpPhone = document.querySelector(".right-phone-selection--" + ColorName + "_phone");
        console.log(".right-phone-selection--" + ColorName + "_phone")
        console.log(ColorName)
        // If we press twice at the same color then nothing should happen.
        if (currentPhoneColor === ColorName){
            console.log("same color")
            return;
        }
        
        gsap.set(closeUpPhone, {zIndex: zIndexLayer})
        gsap.fromTo(closeUpPhone, {opacity: 0}, {opacity: 1, duration: 1});
        console.log(closeUpPhone.className, closeUpPhone)
        
        // Gallary
        // to create the slider effect we have to grap the phone in the slider
        // and move it to the initial point.
        gsap.to(gallary, {x:-coordinates, duration: 1, ease: "Power2.easeOut"})
        
        // Hacky Zindex solution
        zIndexLayer++
        currentPhoneColor = ColorName
        
        if (zIndexLayer == 10) {
            let stickyNav = document.querySelector(".product-nav");
            stickyNavZIndex++
            gsap.set(stickyNav, {zIndex: stickyNavZIndex});
        }

    })
})

// page five 

const tlVideo = gsap.timeline({
    scrollTrigger:{
        trigger: ".fifth-page",
        start: "0%",
        end: "120%",
        scrub:true,
        pin: true,

    },
});

// Video takes 3 seconds.
tlVideo.fromTo(".product-video", {currentTime:0}, {currentTime:3, duration:1});
// duration:0.5 --> runs twice as fast as iphone video.
tlVideo.fromTo(".product-info-container h3", {opacity: 0}, {opacity:1, stagger: 0.25, duration:0.5}, "<")
tlVideo.to(".mobile, .desktop", {opacity:0, stagger: 0.25, duration:1},)
// tlVideo.to(".desktop", {opacity:0, stagger: 0.25, duration:2}, "<")


// sixth page 

const tlParallax = gsap.timeline({
    scrollTrigger:{
        trigger:".sixth-page",
        start: "0%", 
        end: "100%",
        scrub: true,
        pin: true,
    },
});

// Moves up slightly faster
// tlParallax.fromTo(".photo-title", {x:0}, {x:+100}, );
tlParallax.fromTo(".photo-title", {scale: 2}, {scale:0, opacity: 0}, );
tlParallax.fromTo(".photo-description", {y:0}, {y:-80});
tlParallax.fromTo(".phone-video", {y:0}, {y:+100, x:-100}, "<");
tlParallax.fromTo(".portrait-container", {y:0}, {y:+100}, "<");
tlParallax.fromTo(".photo-subtitle", {scale: 0}, {scale:2}, "<");
tlParallax.to(".phone-video", {y:-100, x:-111}, "<");
tlParallax.fromTo(".photo-subtitle", {y:0}, {y:-200}, );


