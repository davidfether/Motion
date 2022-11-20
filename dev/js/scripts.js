import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

gsap.set("#line-1",{transformOrigin: "50% 50%", xPercent:450, yPercent:0, scale:1.5});
gsap.set("#line-2",{transformOrigin: "50% 50%", xPercent:450, yPercent:0, scale:1.5});
gsap.set("#line-3",{transformOrigin: "50% 50%", xPercent:450, yPercent:0, scale:1.5});
gsap.set("#line-4",{transformOrigin: "50% 50%", xPercent:450, yPercent:0, scale:1.5});

function starAnimation(){
    var tl = gsap.timeline();
    tl.from("#line-1",{duration:1.25, y:"-300", scaleY:0})
    tl.from("#line-2",{duration:1.25, y:"-300", scaleY:0}, "-=0.25")
    tl.from("#line-3",{duration:1.25, y:"-300", scaleY:0}, "-=0.50")
    tl.from("#line-4",{duration:1.25, y:"-300", scaleY:0}, "-=0.75")
    .to("#line-2",{duration:0.25, rotate:45})
    .to("#line-3",{duration:0.25, rotate:90},"-=0.25")
    .to("#line-4",{duration:0.25, rotate:135}, "-=0.25")
    
    

    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(starAnimation())
GSDevTools.create();