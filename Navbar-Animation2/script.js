const menu = document.querySelector("#nav i")
const cross = document.querySelector("#full i")

var tl = gsap.timeline({paused: true});
// var tl = gsap.timeline({paused: true});   // we can pause our timeline like this

tl.to("#full", {
    right: "0",
    duration: 0.7,

})

tl.from("#full h2", {
    x: 200,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0
})

tl.from("#full i", {
    opacity: 0
})

tl.pause()      // second method to pause


menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse()
})