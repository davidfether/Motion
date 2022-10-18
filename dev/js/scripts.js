import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


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

gsap.registerPlugin(ScrollTrigger);

gsap.to("#yellow-bar",{ duration: 1,
    x: 400,
    rotation: 180,
    ScrollTrigger: {trigger:"#yellow-bar", toggleActions: "restart none none none"}
});