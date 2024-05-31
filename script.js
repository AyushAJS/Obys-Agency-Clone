
function locomotiveScroll(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}


// Cursor
function cursor(){
document.addEventListener("mousemove", function(e){
  // console.log(e.clientX);  isse mouse ki location milegi x coordinate wali jab bhi mouse ko move kerenge.
  gsap.to("#cursor",{
      left: e.clientX,
      top: e.clientY
  })
})
}

var tl = gsap.timeline()
// Loader
function loadingAnimation(){
    tl.from(".line h1",{
         y: 150,
         stagger: 0.2,
         duration: 0.5,
         delay: 0.2
    })   
    tl.from("#line1-prt1, .line h2",{
        opacity: 0,
        onStart: function(){
            var counter = document.querySelector("#line1-prt1 h5")
            var grow = 0
            var interval = setInterval(()=>{
            grow += 1;
            if(grow === 100){
                clearInterval(interval);
            }
            counter.textContent = grow;
            console.log(grow)
            },30)    
        }
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 3.5
    })
    tl.from("#page1",{
        delay: 0.2,
        y:1200,
        opacity: 0,
        ease: Power4 
    })
    tl.to("#loader",{
        display: "none"
    })   
}
//  Page 1 Content
tl.from(".heroContainer #heroBox #hero1 h1,#heroBox #hero2 h1,#heroBox #hero3 h1,#hero3 h2,#slace,#heroBox #hero4 h1",{
  y:100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
})
// loadingAnimation();
// cursor();  
locomotiveScroll();

function sheryAnime(){
  Shery.imageEffect(".img-div",{
    style: 5,
    config: {"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.88,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272587797525699},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4.1,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.31,"range":[0,2]},"noise_scale":{"value":9.92,"range":[0,100]}},
    gooey: true
  })
}
sheryAnime()