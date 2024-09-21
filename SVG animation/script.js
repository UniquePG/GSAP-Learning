
var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets){

    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {

        // attr -> to change the element attribute
        attr: {             
            d: path
        },

        duration: 0.2,
        ease: "power3.out"          // easing to give effect
    })
});

string.addEventListener("mouseleave", function(){

    gsap.to("svg path", {

        attr: {             // attr -> to change the element attribute
            d: finalPath,
            duration: 1.2,
            ease: "elastic.out(1,0.1)"
        }
    })
});