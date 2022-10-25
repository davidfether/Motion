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


function historyAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"skills", scrub: true, markers: false, start:"top 80%", end:"bottom 90%"}});
    tl.from("#robot hero spot",{ duration: 0.15, scale:5})
    .from("#history-first",{duration: 0.25, scale:2, y:-400, alpha:-2},"-=0.5") 
    .from("#history-middle",{duration: 0.25, y:-400, alpha:-2},"-=0.5") 
    .from("#history-last",{duration: 0.25, scale:2, y:400, alpha:0},"-=0.5") 
    
    
    return tl;
}



function skillsAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"skills", scrub: true, markers: true, start:"top 70%", end:"bottom 70%"}});
    tl.from("#skills-content",{ duration: 0.15, x:200},"-=0.5")

    return tl;
}

function skynetAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#skynet", scrub:true, markers:false, start: "top 60%", end:"bottom 95%"}});
    tl.from("#gallery-7",{ duration: 0.25, y:300},"-=2")
    .from("#gallery-1",{ duration: 0.5, x:-400, alpha:0},"-=0.5")
    .from("#gallery-4",{ duration: 0.5, x:400, alpha:0},"-=0.5")
    .from("#gallery-5",{ duration: 0.5, x:-400, alpha:-2},"-=0.25")
    .from("#gallery-2",{ duration: 0.5, x:-400, alpha:-2},"-=0.25")
    .from("#gallery-3",{ duration: 0.5, x:400, alpha:-2},"-=0.25")
    .from("#gallery-6",{ duration: 0.5, x:400, alpha:-2},"-=0.25")

    return tl;
}




mainTl.add(historyAnimation());
mainTl.add(skynetAnimation());
mainTl.add(skillsAnimation());



