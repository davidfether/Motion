import { gsap } from "gsap";



function heroanimation(){
    var tl = gsap.timeline();
    tl.from("#header",{duration:0.4,x:200,alpha:0,delay:0.25})
        .from("#line-2",{duration:0.3,x:200,alpha:0,delay:0.15})

        .from("#button",{duration:0.3,y:50,alpha:0,delay:0.25})
return tl;
}



var mainTL = gsap.timeline(); 
mainTL.add(heroanimation()); 



//gsap.from("#header",{duration:0.6,x:200,alpha:0,delay:0.25});
//gsap.from("#line-2",{duration:0.75,x:200,alpha:0,delay:0.75});

//gsap.from("#button",{duration:0.75,y:100,alpha:0,delay:0.75});














//gsap.from("#header",{duration:0.6,x:200,alpha:0,delay:0.25});
//gsap.from("#line-2",{duration:0.75,x:200,alpha:0,delay:0.75});

//gsap.from("#button",{duration:0.75,y:100,alpha:0,delay:0.75});