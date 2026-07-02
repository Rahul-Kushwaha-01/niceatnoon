gsap.to("#rotate-svg", {
    rotation: 360, 
    repeat: -1,    
    duration: 6,  
    ease: "linear" 
  });


function smoothscrolling (){
  
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Locomotive Scroll ko ScrollTrigger ke saath sync karna
locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger ko batana ki Locomotive kaise scroll handle karega
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger & Locomotive after all setup
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}

smoothscrolling()

// GSAP Animation with ScrollTrigger
gsap.from("#page-4 #top h1", {
  y: 30,
  duration: 4,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: "#page-4 #top h1",
    scroller: "#main", 
    start: "top 60%",
    end: "top 20%",
    scrub: true, 
    // markers: true
  }
});

gsap.from(".page-8 h1",{
  opacity:0,
  y:40,
  scrollTrigger:{
    trigger:".page-8 h1",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 60%",
    scrub:true
  }
})

gsap.to(".page-9 img",{

  rotate:-360,
  duration:5,
  repeat:-1,
  ease: "linear"
})

gsap.to(".page-11 img",{
  rotate:360,
  duration:7,
  repeat:-1,
  ease: "linear"
})