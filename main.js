// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
// });

window.addEventListener("load", () => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 0.75,
      scrollFromAnywhere: true,
    });
  });
  setTimeout(() => {
    scroll.update();
  }, 5000);
  
// const countBtn = document.querySelector('button')
// const sum = document.querySelector('#cart')
// let count = 0

// let countUp = function(){
//     count = count+1;
//     sum.innerText = count;
// }


