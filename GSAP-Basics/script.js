
    //------- inital to final ( 0 -> 1200px)
// gsap.to("#box1", {
//     x: 1000,
//     // y: 230,
//     duration: 2,
//     delay: 1,

// })

// gsap.to("#box1", {
//     x: 1000,
//     // y: 230,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",        // css properties
//     backgroundColor: "blue"

// })

// gsap.to("#box2", {
//     // x: 1000,
//     y: 1000,
//     duration: 2,
//     delay: 2
// })

        //-------final positon to initial  (1200px -> 0)
// gsap.from("#box2", {   
//     x: 1000,
//     duration: 2,
//     delay: 1
// })

//!----------------------------------------------------------
    //-> stagger: second -> if there are more then one element then it apply animation one by one on every element

// gsap.from("h1", {
//     opacity: 0,
//     duration: 1,
//     y: 30,
//     delay: 1,
//     stagger: 1    // runs animation one by one on each element with 1 second duration (from 1st element to last)
//     // stagger: -1    // runs animation one by one on each element with 1 second duration (from last element to 1st) 
// })




//!----------------------------------------------------------
    //-> repeat: count -> to repeat the animation (if count is 1 then-> total runs 2 times) 
        // if repeat: -1 -> runs infinite
    // -> yoyo: true ||  false  -> something like yoyo (inital to final, final to inital)

// gsap.to("#box1", {
//     x: 1200,
//     rotate: 360,
//     duration: 1,
//     delay: 1,

//     // repeat: 1   // runs 2 times  (always inital to final)
//     repeat: -1,     // runs infinite (always inital to final)

//     yoyo: true     // go inital to final then final to inital (like yoyo)
// })


//!-----------------Gsap -> timeline ------------------
        //*-----Without Timeline---------------
// gsap.to("#box1", {
//     x: 1200,
//     duration: 1,
//     delay: 1.5
// })

// gsap.to("#box2", {
//     x: 1200,
//     duration: 1,
//     delay: 2.5   // 1 + 1.5 -> 2.5
// })

// gsap.to("#box3", {
//     x: 1200,
//     duration: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     delay: 3.5     // 2.5 + 1 -> 3.5
// })

        //*-----------with timeline----------------

    var tl = gsap.timeline();

tl.to("#box1", {
    x: 1200,
    duration: 1,
    delay: 1.5
})

tl.to("#box2", {
    x: 1200,
    duration: 1,
})

tl.to("#box3", {
    x: 1200,
    duration: 1,
    rotate: 360,
    borderRadius: "50%",
})
