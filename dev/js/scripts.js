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

function skillsAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"skills", scrub: true, markers: false, start:"top 30%", end:"bottom 60%"}});
    tl.from("#emotion",{ duration: 0.5, y: -200})
    .from("#learning",{ duration: 0.5, y: -200})
    .from("#math",{ duration: 0.5, y: -200})

    return tl;
}

function galleryAnimation(){
    var tl = gsap.timeline();
    tl.from("#hero-2",{ duration: 2, x:-610,  scrollTrigger: {trigger:"#hero-2", scrub:true, markers:false, start:"50px, 80%", end: "600px, 70%"}})

    return tl;
}

function skynetAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#skynet", scrub:true, markers:true, start: "top 60%", end:"bottom 95%"}});
    tl.from("#gallery-7",{ duration: 0.25, y:300},"-=2")
    .from("#gallery-1",{ duration: 0.5, x:-400, alpha:0},"-=0.5")
    .from("#gallery-4",{ duration: 0.5, x:400, alpha:0},"-=0.5")
    .from("#gallery-5",{ duration: 0.5, x:-400, alpha:-2},"-=0.25")
    .from("#gallery-2",{ duration: 0.5, x:-400, alpha:-2},"-=0.25")
    .from("#gallery-3",{ duration: 0.5, x:400, alpha:-2},"-=0.25")
    .from("#gallery-6",{ duration: 0.5, x:400, alpha:-2},"-=0.25")

    return tl;
}




mainTl.add(skillsAnimation());
mainTl.add(skynetAnimation());
mainTl.add(galleryAnimation());



