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
 
   // tl.to("#circle-1",{duration:1, y:80, drawSVG:"0%", transformOrigin: "center"});
    //tl.to("#line-middle",{duration:0.5, y:80, drawSVG:"0%", transformOrigin: "center"});
   // tl.to("#line-bottom",{duration:0.5, y:-185, drawSVG:"0%", transformOrigin: "center"});
  
    return tl;

}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion());



GSDevTools.create();