gsap.set

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin,CustomEase);

function starAnimation(){
    var tl = gsap.timeline();
    tl.from("#line-1",{duration:0.5, y:"-=500", ease:"none"})
    .to("#line-1",{duration:0.5, scaleY:1.5, ease: "none)"})
    return tl;
}



var mainTL = gsap.timeline();
mainTL.add(starAnimation());


GSDevTools.create();