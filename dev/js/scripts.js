import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion() {
  var tl = gsap.timeline();
  tl.to("#line-bottom", {duration: 1, y:-112},"+=0.25")
  .to("#circle-stroke", {duration: 1, drawSVG: "50% 100%"})
  tl.to("#line-middle", {duration: 1, y:112},"+=0.25")
  .to("#circle-stroke", {duration: 1, drawSVG: "100% 150%"})
  tl.to("#line-bottom", {duration: 1, y:10},"+=0.25")
  .to("#circle-stroke", {duration: 1, drawSVG: "150% 200%"})
  tl.to("#line-bottom", {duration: 1, y:-112},"+=0.25")
  .to("#circle-stroke", {duration: 1, drawSVG: "200% 250%"})
  tl.to("#line-bottom", {duration: 1, y:0},"+=0.25")
  .to("#circle-stroke", {duration: 1, drawSVG: "200% 300%"})
  tl.to("#line-middle", {duration: 1, y:-14},"+=0.25")

  return tl;
}

function patternMotion() {
  var tl = gsap.timeline();

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
mainTL.add(patternMotion())

GSDevTools.create();