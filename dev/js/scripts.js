import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


let $nav = $('nav[data-nav]');
let isVisible = false;

$(".nav-btns").on("click", function(){
    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
})

var mainTl = gsap.timeline();

function emotionAnimation(){
    var tl = gsap.timeline();
    tl.from("#emotion",{ duration: 0.5, y: -200, scrollTrigger: {trigger:"#emotion", scrub:true}})
    .from("#learning",{ duration: 0.5,
        y: -200, scrollTrigger: {trigger:"#learning", scrub:true}})
    .from("#math",{ duration: 0.5, 
        y: -200, scrollTrigger: {trigger:"#math", scrub:true}})

    return tl;
}

function skynetAnimation(){
    var tl = gsap.timeline();
    tl.to("#gallery-7",{ duration: 2, y:565, rotation: 360, scrollTrigger: {trigger:"#gallery-7", scrub:true, markers:true, start:"80px, 45%", end:"600px, 70%" }})

    return tl;
}

function galleryAnimation(){
    var tl = gsap.timeline();
    tl.from("#hero-2",{ duration: 2, x:-610,  scrollTrigger: {trigger:"#hero-2", scrub:true, markers:true, start:"50px, 80%", end: "600px, 70%"}})

    return tl;
}




mainTl.add(emotionAnimation());
mainTl.add(skynetAnimation());
mainTl.add(galleryAnimation());



