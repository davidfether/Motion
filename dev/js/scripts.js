import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

var mainTL = gsap.timeline();
mainTL.add(tAnimation())
.add(starAnimation(),"-=0.55")
.add(eAnimation(),"-=0.25")
.add(vAnimation(),"-=0.6")
.add(oAnimation(),"-=0.35")
.add(lAnimation(),"-=0.6")
.add(v2PathAnimation(),"-=0.6")
.add(e2tAnimation(),"-=0.55")


GSDevTools.create();