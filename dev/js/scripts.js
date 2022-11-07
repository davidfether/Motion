import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){

    var tl = gsap.timeline();
    tl.fromTo("#circle-1",{drawSVG: "0% 50%"}, {duration: 0.5, drawSVG:"50% 100%"});
    tl.to("#line-middle",{duration:0.5, y:110, drawSVG:"0%", transformOrigin: "center"});
    tl.to("#line-bottom",{duration:0.5, y:-110, drawSVG:"0%", transformOrigin: "center"});
    tl.fromTo("#circle-1",{drawSVG: "100% 75%"}, {duration: 0.5, drawSVG:"50% 0%"});
    tl.to("#line-middle",{duration:0.5, y:-3, drawSVG:"0%", transformOrigin: "center"});
    tl.to("#line-bottom",{duration:0.5, y:-220, drawSVG:"0%", transformOrigin: "center"});
    tl.to("#line-middle",{duration:0.5, y:-3, drawSVG:"0%", transformOrigin: "center"});
    tl.to("#line-bottom",{duration:0.5, y:-220, drawSVG:"0%", transformOrigin: "center"})
    tl.fromTo("#circle-1",{drawSVG: "100% 125%"}, {duration: 0.5, drawSVG:"50% 100%"});
    tl.to("#line-bottom",{duration:0.5, y:1.5, drawSVG:"0%", transformOrigin: "center"})
  
    return tl;

}



function patternMotion(){

    var tl = gsap.timeline();
    tl.fromTo(".even",{drawSVG:"0%"},{duration:2, stagger:0.15, rotate:-180, alpha:2, transformOrigin:"left", drawSVG:"300%"},"spin")
    tl.to(".odd",{duration:2, stagger:0.15, rotate:180, alpha:2, transformOrigin:"left", drawSVG:"300%"},"spin");

    return tl;

}



function uiMotion(){

    var tl = gsap.timeline();
    tl.to("#dot-1",{duration:0.5, x:250})

    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion());
mainTL.add(patternMotion());
mainTL.add(uiMotion());


GSDevTools.create();