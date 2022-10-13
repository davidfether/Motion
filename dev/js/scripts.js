import { gsap } from "gsap";

function heroAnimation(){
    var tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
        // desktop setup code here...
      tl.from("#header",{duration:0.75,x:200,alpha:0})
        .from("#line-2",{duration:0.5,x:200,alpha:0},"-0.25")
        .from("#button",{duration:0.5,y:50,alpha:0},"-0.25");

    mm.add("(max-width: 799px)", () => {
        // mobile setup code here...
     tl.from("#header",{duration:0.75,y:200,alpha:0})
        .from("#line-2",{duration:0.5,y:200,alpha:0},"same")
        .from("#button",{duration:0.5,y :50,alpha:0},"same");
    return tl;
}

var mainTL = gsap.timeline(); 
    mainTL.add(heroAnimation());


let button = document.querySelector('button');

var buttonTL= gsap.timeline({paused:true});

button.addEventListener("mouseenter", function(){
    buttonTL.play();
    buttonTL.to("#button,", {duration:0.3, scale: 1.5})
    .to("#line-2", {duration: 0.25, alpha:1, y:50})
    .to("#header", {duration: 0.25, alpha:1, y:20});
    
button.addEventListener("mouseleave", function(){
    buttonTL.reverse();
    buttonTL.to("#button,", {duration:0.3, scale: 1.5})
    .to("#line-2", {duration: 0.25, alpha:1, y:0})
    .to("#header", {duration: 0.25, alpha:1, y:0});
});
