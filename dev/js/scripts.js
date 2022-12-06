import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

gsap.set("#star",{transformOrigin: "50% 50%", xPercent:580, yPercent:0, scale:1.5});
gsap.set("#line-1",{transformOrigin: "50% 50%"});
gsap.set("#line-2",{transformOrigin: "50% 50%"});
gsap.set("#line-3",{transformOrigin: "50% 50%"});


function starAnimation(){
    var tl = gsap.timeline();
    tl.from("#star",{duration:1.25, y:"-300", scaleY:0})
    .to("#line-1",{duration:1, rotate:45})
    .to("#line-2",{duration:1, rotate:90},"-=1")
    .to("#line-3",{duration:1, rotate:135}, "-=1")
    .to ("#half-line-1",{transformOrigin: "50% 100%", duration:0.5, rotate:45,fill:"#E9C84A"},"rotate")
    .to ("#half-line-5",{transformOrigin: "50% 100%", duration:0.5, rotate:-45,fill:"#E9C84A"}, "rotate")
    .to ("#half-line-3",{duration:0.5, fill:"#E9C84A"}, "rotate")
    .to ("#half-line-yellow-1",{duration:0.75, x:52},"shift")
    .to ("#half-line-yellow-2",{duration:0.75, x:-52},"shift")

    return tl;

}

 function typeAnimation(){
    var tl = gsap.timeline();
    tl.fromTo ("#star",{duration:0.35, xPercent:125, yPercent:0}, {xPercent:-40, yPercent:0, scale:1},"move")
    .fromTo("#e",{duration:0.25, xPercent:500, yPercent:0, drawSVG: "0% 0%"}, {xPercent:0, yPercent:0, drawSVG: "0% 100%"},"move")
    .fromTo("#v",{duration:0.25, xPercent:500, yPercent:100, drawSVG: "0% 0%"}, {xPercent:0, yPercent:0, drawSVG: "0% 100%"},"0.1")
    .fromTo("#o",{duration:0.25, xPercent:100, yPercent:-200, drawSVG: "125% 125%"}, {xPercent:0, yPercent:0, drawSVG: "125% 250%"},"0.3")
    .fromTo("#v-2",{duration:0.25, xPercent:100, yPercent:0, drawSVG: "0% 0%"}, {xPercent:0, yPercent:0, drawSVG: "0% 100%"},"0.4")
    .fromTo("#l",{duration:0.25, xPercent:50, yPercent:0, drawSVG: "0% 0%"}, {xPercent:50, yPercent:0, drawSVG: "0% 100%"},"0.5")
    .fromTo("#e-2",{duration:0.25, xPercent:100, yPercent:0, drawSVG: "0% 0%"}, {xPercent:0, yPercent:0, drawSVG: "0% 100%"}, "0.4")
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(starAnimation())
.add(typeAnimation())
GSDevTools.create();