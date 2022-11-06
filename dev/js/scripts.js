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


function patternAnimation(){}


    var tl = gsap.timeline();

         <div class="patternAnimation">

            <svg fill="none" viewBox="0 0 1264 611">
                <g id="pattern-animation">
                  <path fill="#fff" d="M0 0h1264v611H0z"/>
                  <path id="line-1" stroke="#000" stroke-width="3" d="M408.5 82.5h447v447h-447z" class="odd"/>
                  <path id="line-2" stroke="#000" stroke-width="3" d="M418.5 92.5h427v427h-427z"  class="even"/>
                  <path id="line-3" stroke="#000" stroke-width="3" d="M428.5 102.5h407v407h-407z" class="odd"/>
                  <path id="line-4" stroke="#000" stroke-width="3" d="M438.5 112.5h387v387h-387z" class="even"/>
                  <path id="line-5" stroke="#000" stroke-width="3" d="M448.5 122.5h367v367h-367z" class="odd"/>
                  <path id="line-6" stroke="#000" stroke-width="3" d="M458.5 132.5h347v347h-347z" class="even"/>
                  <path id="line-7" stroke="#000" stroke-width="3" d="M468.5 142.5h327v327h-327z" class="odd"/>
                  <path id="line-8" stroke="#000" stroke-width="3" d="M478.5 152.5h307v307h-307z" class="even"/>
                  <path id="line-9" stroke="#000" stroke-width="3" d="M488.5 162.5h287v287h-287z" class="odd"/>
                  <path id="line-10" stroke="#000" stroke-width="3" d="M498.5 172.5h267v267h-267z" class="even"/>
                  <path id="line-11" stroke="#000" stroke-width="3" d="M508.5 182.5h247v247h-247z" class="odd"/>
                  <path id="line-14" stroke="#000" stroke-width="3" d="M548.5 222.5h167v167h-167z" class="even"/>
                  <path id="line-15" stroke="#000" stroke-width="3" d="M558.5 232.5h147v147h-147z" class="odd"/>
                  <path id="line-16" stroke="#000" stroke-width="3" d="M568.5 242.5h127v127h-127z" class="even"/>
                  <path id="line-17" stroke="#000" stroke-width="3" d="M578.5 252.5h107v107h-107z" class="odd"/>
                  <path id="line-18" stroke="#000" stroke-width="3" d="M588.5 262.5h87v87h-87z" class="even"/>
                  <path id="line-19" stroke="#000" stroke-width="3" d="M598.5 272.5h67v67h-67z" class="odd"/>
                  <path id="line-20" stroke="#000" stroke-width="3" d="M608.5 282.5h47v47h-47z" class="even"/>
                  <path id="line-21" stroke="#000" stroke-width="3" d="M618.5 292.5h27v27h-27z" class="odd"/>
                </g>
              </svg>
        </div>

var mainTL = gsap.timeline();
mainTL.add(simpleMotion());
mainTL.add(patternAnimation());



GSDevTools.create();