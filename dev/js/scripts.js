gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion() {
  var tl = gsap.timeline();
  tl.from("#circle-stroke", {duration: 5, y:300, drawSVG: "0% 0%" })

  return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())

GSDevTools.create({animation: mainTL});