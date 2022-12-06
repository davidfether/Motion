import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

gsap.set("#box-group",{transformOrigin: "50% 100%", y:120, x:50, scale:1.5});
gsap.set("#arch-group",{transformOrigin: "50% 100%", x:35, scale:.6});
gsap.set("#arch-1",{yPercent: 37, xPercent: 0.78});
gsap.set("#arch-2",{yPercent: 37, xPercent: -0.72});
gsap.set("#arch-7",{yPercent: -20, xPercent: -0.78});
gsap.set("#arch-8",{yPercent: -20, xPercent: 0.72});
gsap.set("#arch-3",{yPercent: -12});
gsap.set("#arch-6",{yPercent: -12, xPercent: 2});
gsap.set("#arch-4",{yPercent: 6, xPercent: -2});
gsap.set("#arch-5",{yPercent: 6, xPercent: 3.5});



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
        .to("#box-group",{duration:0.5, scale:.6, x:25})


        return tl;
}



function lineAnimation(){
        var tl = gsap.timeline();

        tl.to("#box-2",{duration:0.3, scaleY:5, transformOrigin: "bottom center"}, "shift")
        .to("#box-6",{duration:0.3, scaleY:5, transformOrigin: "bottom center"}, "shift")
        .to("#box-1",{duration:0.3, scaleY:5, transformOrigin: "bottom center"}, "shift")
        .to("#box-7",{duration:0.3, scaleY:5, transformOrigin: "bottom center"}, "shift")
        .to("#box-3",{duration:0.3, scaleY:9, transformOrigin: "bottom center"}, "shift2")
        .to("#box-10",{duration:0.3, scaleY:9, transformOrigin: "bottom center"}, "shift2")
        .to("#box-4",{duration:0.3, scaleY:5, transformOrigin: "bottom center"}, "shift3")
        .to("#box-9",{duration:0.3, scaleY:5, transformOrigin: "bottom center"}, "shift3")

        
        return tl;
}

function archAnimation(){
        var tl = gsap.timeline();
        tl.from("#arch-4",{duration:0.5, drawSVG: "0% 0%"}, "shift3")
        .from("#arch-5",{duration:0.5, drawSVG: "0% 0%"}, "shift3")
        .from("#arch-3",{duration:0.5, drawSVG: "0% 0%"}, "shift2")
        .from("#arch-6",{duration:0.5, drawSVG: "0% 0%"}, "shift2")
        .from("#arch-2",{duration:0.5, drawSVG: "0% 0%"}, "shift")
        .from("#arch-7",{duration:0.5, drawSVG: "0% 0%"}, "shift")
        .from("#arch-8",{duration:0.5, drawSVG: "0% 0%"}, "shift")
        .from("#arch-1",{duration:0.5, drawSVG: "0% 0%"}, "shift")

        return tl;
}





var mainTL = gsap.timeline();
mainTL.add(boxAnimation())
.add(lineAnimation())
.add(archAnimation())

GSDevTools.create();