import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);


function boxAnimation(){
        var tl = gsap.timeline();
        return tl;
}


var mainTL = gsap.timeline();
mainTL.add(boxAnimation())

GSDevTools.create();