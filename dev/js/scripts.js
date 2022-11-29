import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);


function boxAnimation(){
        var tl = gsap.timeline();
        tl.to("#box-1",{duration:0.5, y:"-=500", scaleY: 100})
        .to("#box-1",{duration:1, rotate:45})
        return tl;
}


var mainTL = gsap.timeline();
mainTL.add(boxAnimation())

GSDevTools.create();