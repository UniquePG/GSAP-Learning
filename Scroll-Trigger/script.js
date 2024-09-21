
// gsap.from("#page1 #box", {
//     opacity: 0,
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360
// })


// gsap.from("#page2 #box", {
//     opacity: 0,
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,

//     // scrollTrigger: "#page2 #box"

//     scrollTrigger: {
//         trigger: "#page2 #box",             // animation ka starting point
//         scroller: "body",                   // mostly we write body

//         markers: true,              
//         start: "top 60%"
//     }

// })



// gsap.from("#page3 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 600,

//     scrollTrigger:{
//         trigger: "#page3 h1",
//         scroller: "body",

//         markers: true,
//         start: "top 50%"
//     }
// })

// gsap.from("#page3 h2", {
//     opacity: 0,
//     duration: 2,
//     x: -600,

//     scrollTrigger:{
//         trigger: "#page3 h2",
//         scroller: "body",

//         markers: true,
//         start: "top 50%"
//     }
// })


////!---------------- scrub -> animation dependent on scrolling

// gsap.from("#page2 #box", {
//     opacity: 0,
//     scale: 0,
//     rotate: 720,
//     duration: 1,

//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,

//         start: "top 60%",       // starting point of trigger animation
//         end: "top 30%",          // end point of animation

//         scrub: 2               // animation happens based on scrolling  ( it should be true or 1 to 5 (for smoothness))
//     }
// })




///!---------------- pin -> pin the parent while animation
    //*  if we want to use pin property then we have to always trigger the parent of the animation trigger element

gsap.to("#page2 h1", {

    transform: "translateX(-175%)",

    scrollTrigger: {
        trigger: "#page2",  // we have to define the parent in trigger (page2 is the parent of the h1)
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",       // -100% means outside the whole body of the browser
        scrub: 2,
        pin: true       // enable pin (untill all the animation finish we cant scroll to the next page)

    }
})