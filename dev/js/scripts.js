import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("")

var mainTL = gsap.timeline(); 

function heroAnimation(){
    var tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
        // desktop setup code here...
      tl.from("#header",{duration:0.75,x:200,alpha:0})
        .from("#line-2",{duration:0.5,x:200,alpha:0},"same")
        .from("#hero-btn",{duration:0.5,y:50,alpha:0},"same");
    });

    mm.add("(max-width: 799px)", () => {
        // mobile setup code here...
     tl.from("#header",{duration:0.75,y:200,alpha:0})
        .from("#line-2",{duration:0.5,y:200,alpha:0},"same")
        .from("#hero-btn",{duration:0.5,y :50,alpha:0},"same");
    return tl;
    });
}

mainTL.add(heroAnimation());

// let button = document.querySelector('#hero-btn');
var heroBTn = document.querySelector("#hero-btn");

var buttonTL= gsap.timeline({paused:true});
buttonTL.to("#hero-btn", {duration:0.3, scale: 1.5})
    .to("#line-2", {duration: 0.25, alpha:0, y:50})
    .to("#header", {duration: 0.25, alpha:0, y:20});

heroBTn.addEventListener("mouseenter", function(){
    buttonTL.play();
})

heroBTn.addEventListener("mouseleave", function(){
    buttonTL.reverse();
})
