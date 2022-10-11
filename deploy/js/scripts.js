import { gsap } from "gsap";



function heroanimation(){
    var tl = gsap.timeline();
    tl.from("#header",{duration:0.75,x:200,alpha:0,delay:0.25})
        .from("#line-2",{duration:0.5,x:200,alpha:0,delay:1},"-0.25")
        .from("#button",{duration:0.5,y:50,alpha:0,delay:1},"-0.25");
return tl; 
}

var mainTL = gsap.timeline(); 
mainTL.add(heroanimation()); 

let button = document.querySelector("aside");

var buttonTL = gsap.timeline({paused:true});
buttonTL.to("#button",{duration:0.25})
    .to("aside",{duration:0.25,x:-800},"playSameTime")
    .to("form",{duration:0.25,scaleX:1},"playSameTime")
    .to("aside",{duration:0.25,alpha:0},"playSameTime");

button.addEventListener("mouseenter", function(){
    buttonTL.play();
})

    button.addEventListener("mouseleave", function(){
        buttonTL.reverse();
})




//gsap.from("#header",{duration:0.6,x:200,alpha:0,delay:0.25});
//gsap.from("#line-2",{duration:0.75,x:200,alpha:0,delay:0.75});

//gsap.from("#button",{duration:0.75,y:100,alpha:0,delay:0.75});














//gsap.from("#header",{duration:0.6,x:200,alpha:0,delay:0.25});
//gsap.from("#line-2",{duration:0.75,x:200,alpha:0,delay:0.75});

//gsap.from("#button",{duration:0.75,y:100,alpha:0,delay:0.75});