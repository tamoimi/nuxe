const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

var currentScrollContainer =  document.querySelector("[data-scroll-container]");
imagesLoaded(currentScrollContainer, { background: true }, function () {
           scroll.update();
});
  
// const countBtn = document.querySelector('button')
// const sum = document.querySelector('#cart')
// let count = 0

// let countUp = function(){
//     count = count+1;
//     sum.innerText = count;
// }


/* smooth_btn */

// const toTop = document.querySelector('.toTop')

// toTop.addEventListener('click', ()=>{
//     window.scrollTo({left:0, top:0, behavior:'smooth'})
// })

