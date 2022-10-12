import { gsap } from "gsap";

gsap.set("form"),{transformOrigin:"left center"}


function heroanimation(){
    var tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width 760px)",() => {
      tl.from("#header",{duration:0.75,x:200,alpha:0,delay:0.25})
        .from("#line-2",{duration:0.5,x:200,alpha:0,delay:1},"-0.25")
        .from("#button",{duration:0.5,y:50,alpha:0,delay:1},"-0.25");
    });

    mm.add("(max-width 759px)",() => {
     tl.from("#header",{duration:0.75,y:200,alpha:0,delay:0.25})
        .from("#line-2",{duration:0.5,y:200,alpha:0,delay:1},"same")
        .from("#button",{duration:0.5,y :50,alpha:0,delay:1},"same");
    });

    return tl; 
}

var mainTL = gsap.timeline(); 
mainTL.add(heroanimation());


let button = document.querySelector("scale");

var buttonTL= gsap.timeline({paused:true});
buttonTL.to("#button",{duration:0.25})
    .to("scale",{duration:0.25,scale:10},"playSameTime");

button.addEventListener("mouseenter", function(){
    buttonTL.play();
})
 
    button.addEventListener("mouseleave", function(){
        buttonTL.reverse();
});
