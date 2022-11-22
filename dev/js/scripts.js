import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

gsap.set("#star",{transformOrigin: "50% 50%", xPercent:700, yPercent:0, scale:1.5});
gsap.set("#line-1",{transformOrigin: "50% 50%"});
gsap.set("#line-2",{transformOrigin: "50% 50%"});
gsap.set("#line-3",{transformOrigin: "50% 50%"});


function starAnimation(){
    var tl = gsap.timeline();
    tl.from("#lines",{duration:1.5, y:"-300", scaleY:0})
    .to("#line-1",{duration:0.35, rotate:45})
    .to("#line-2",{duration:0.35, rotate:90},"-=0.35")
    .to("#line-3",{duration:0.35, rotate:135}, "-=0.35")
    .to ("#half-line-1",{transformOrigin: "50% 100%", duration:0.35, rotate:45,fill:"#F2C31A"},"rotate")
    .to ("#half-line-5",{transformOrigin: "50% 100%", duration:0.35, rotate:-45,fill:"#F2C31A"}, "rotate")
    .to ("#half-line-3",{duration:0.35, fill:"#F2C31A"}, "rotate")
    .to ("#half-line-yellow-1",{duration:0.35, x:52})
    .to ("#half-line-yellow-2",{duration:0.35, x:-52})
    
    

    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(starAnimation())
GSDevTools.create();