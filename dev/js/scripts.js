import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

gsap.set("#box-group",{transformOrigin: "center bottom", y:150, x:50, scale:1.5});

function boxAnimation(){
        var tl = gsap.timeline();
        tl.to("#box-group-2",{duration:0.25, x:-60})
        .to("#box-group-3",{duration:0.25, x:-60, y:-30})
        .to("#box-group-4",{duration:0.25, x:-60, y:-60})
        .to("#box-group-5",{duration:0.25, x:60, y:-60})
        .to("#box-group-6",{duration:0.25, x:60, y:-30})
        .to("#box-group-7",{duration:0.25, x:60})
        .to("#box-group-8",{duration:0.25, x:60, y:30})
        .to("#box-group-9",{duration:0.25, x:60, y:60})
        .to("#box-10",{duration:0.25, x:-60, y:60})
        .to("#box-group",{duration:0.5, x:25, scale:.6})


        return tl;
}



function lineAnimation(){
        var tl = gsap.timeline();
        tl.to("#box-4",{duration:0.5, y:30, scaleY:-7},"+=0.5")
        .to("#box-9",{duration:0.5, y:30, scaleY:-7},"-=0.5")
        .to("#box-3",{duration:0.5, y:30, scaleY:-7},"+=0.5")
        .to("#box-10",{duration:0.5, y:90, scaleY:-7},"-=0.5")
        .to("#box-2",{duration:0.5, y:30, scaleY:-7},"+=0.5")
        .to("#box-1",{duration:0.5, y:30, scaleY:-7},"-=0.5")
        
        return tl;
}



var mainTL = gsap.timeline();
mainTL.add(boxAnimation())
.add(lineAnimation())

GSDevTools.create();