import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.set

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

function starAnimation(){
    var tl = gsap.timeline();
    tl.from("#line-1",{duration:0.5, y:"-=500", ease:"none"})
    .to("#line-1",{duration:0.5, scaleY:1.5, ease: "none)"})
    return tl;
}


function eAnimation(){
    var tl = gsap.timeline();
    return tl;
}


function vAnimation(){
    var tl = gsap.timeline();
    return tl;
}



function oAnimation(){
    var tl = gsap.timeline();
    return tl;
}



function lAnimation(){
    var tl = gsap.timeline();
    return tl;
}



function v2Animation(){
    var tl = gsap.timeline();
    return tl;
}



function e2Animation(){
    var tl = gsap.timeline();
    return tl;
}



var mainTL = gsap.timeline();
mainTL.add(starAnimation())
.add(eAnimation(),"-=0.25")
.add(vAnimation(),"-=0.6")
.add(oAnimation(),"-=0.35")
.add(lAnimation(),"-=0.6")
.add(v2Animation(),"-=0.6")
.add(e2Animation(),"-=0.55")


GSDevTools.create();