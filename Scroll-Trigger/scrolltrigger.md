
# scroll Trigger  -> animation start when specific scroll hit

    // scroll trigger 1st method
    scrollTrigger: "html element"

///-------

        // scroll trigger object      
     scrollTrigger: {   
        trigger: "#page2 #box",             // animation ka starting point
        scroller: "body",                   // mostly we write body

        markers: true,                      // to help us with start and end markers
        start: "top 60%"                    // trigger point line (top se 60% par scroll ka marker)

        scrub: true  || (1 to 5 -> for smoothness)   // animation trigger on scrolling

        pin: true    // -> to use this pin we always have to define the parent(of animation element) in the trigger
            // it freeshed that perticular area until all animation is finished   
    }