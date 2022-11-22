import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

gsap.set("#lines",{transformOrigin: "50% 50%", xPercent:450, yPercent:0, scale:1.5});
gsap.set("#line-1",{transformOrigin: "50% 50%"});
gsap.set("#line-2",{transformOrigin: "50% 50%"});
gsap.set("#line-3",{transformOrigin: "50% 50%"});


function starAnimation(){
    var tl = gsap.timeline();
    tl.from("#lines",{duration:1.5, y:"-300", scaleY:0})
    .to("#line-1",{duration:0.35, rotate:45})
    .to("#line-2",{duration:0.35, rotate:90},"-=0.25")
    .to("#line-3",{duration:0.35, rotate:135}, "-=0.25")
    .to ("#half-line-1",{transformOrigin: "50% 100%", duration:0.35, rotate:45},"+=0.35")
    .to ("#half-line-5",{transformOrigin: "50% 100%", duration:0.35, rotate:-45}, "-=0.35")
    .to ("#half-line-1",{transformOrigin: "50% 50%", duration:0.35, y:74},"+=0.35")
    .to ("#half-line-5",{transformOrigin: "50% 50%", duration:0.35, y:74},"-=0.35")
    
    

    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(starAnimation())
GSDevTools.create();