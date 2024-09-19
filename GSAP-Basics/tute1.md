#GSAP -> Greensock animation platform

    #gsap.to("element", {
        // animation
    })     -----> it goes from initial to final position 


    #gsap.from("element", {
        // animation
    })     -----> it goes from final to initial position 


    -> We can also give the CSS properties insite these function (but in camel case)

# stagger: second -> if there are more then one element then it apply animation one by one on every element

# repeat: count -> to repeat the animation (if count is 1 then-> total runs 2 times) 
   if repeat: -1 -> runs infinite

# yoyo: true  -> something like yoyo (inital to final, final to inital)

 ---------------- GSAP -> Timeline----------------------------------

# var tl = gsap.timeline()  -> make the timeline for our animations