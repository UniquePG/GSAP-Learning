

function breakTheText(){

    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent;
    
    var splittedText = h1Text.split('');
    
    var clutter = "";

    var halfValue = Math.floor(splittedText.length / 2)
    
    splittedText.forEach((el, i)=> {

        if(i < halfValue){
            clutter += `<span class="a">${el}</span>`
        }else{
            clutter += `<span class="b">${el}</span>` 
        }

    })
    
    h1.innerHTML = clutter;
}

breakTheText()

gsap.from("h1 .a", {
    y: 70,
    duration: 0.8,
    opacity: 0,
    delay: 0.5,
    stagger: 0.15
    // stagger: -0.15  // to run from oposite side
})

gsap.from("h1 .b", {
    y: 70,
    duration: 0.8,
    opacity: 0,
    delay: 0.5,
    // stagger: 0.15
    stagger: -0.15  // to run from oposite side
})