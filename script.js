let heroimage = document.querySelector(".img-home");
let playhover = document.querySelector("#play")

heroimage.addEventListener("mouseenter", function(){
    gsap.to(playhover,{
        scale:1,
        opacity:1

    })
})
heroimage.addEventListener("mouseleave", function(){
    gsap.to(playhover,{
        scale:0,
        opacity:0

    })
})
heroimage.addEventListener("mousemove", function(dets){
    gsap.to(playhover,{
       left:dets.x-70,
       top:dets.y-50

    })
})