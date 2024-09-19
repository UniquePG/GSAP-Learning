
var tl = gsap.timeline();

tl.from("h1", {
    y: -30,
    duration: 0.80,
    delay: 0.5,
    opacity: 0
})

tl.from("h3", {
    y: -20,
    duration: 0.50,
    stagger: 0.20,
    opacity: 0
})

tl.from("#title", {
    y: 20,
    duration: 0.50,
    opacity: 0,
    scale: 0.2
})