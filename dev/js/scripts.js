gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion() {
  var tl = gsap.timeline();
  tl.from("#line-middle", {duration: 0.25, y:300, drawSVG: "0% 100%" })

  return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())

GSDevTools.create();