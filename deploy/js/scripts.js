import {
    gsap
} from "gsap";

console.log("head-animation");

gsap.from("#line-2", {
    duration: 0.25,
    x: -200
});