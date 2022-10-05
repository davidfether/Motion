import {
    gsap
} from "gsap";

gsap.from("header", {
    duration: 0.25,
    alpha: 0,
    y: -300
});

gsap.from("ticket-door", {
    duration: 0.25,
    alpha: 0,
    x: -100
});