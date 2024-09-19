
gsap.from("#page1 #box", {
    opacity: 0,
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360
})

gsap.from("#page2 #box", {
    opacity: 0,
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,

    // scrollTrigger: "#page2 #box"

    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",

        markers: true,
        start: "top 60%"
    }

})

