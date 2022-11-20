import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);



function starAnimation(){
    var tl = gsap.timeline();
    tl.from("#line-1",{duration:0.5, y:"-=500"})


    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(starAnimation())
GSDevTools.create();