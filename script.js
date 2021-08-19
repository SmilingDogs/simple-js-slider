const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slide = document.querySelector(".slide");
const images = Array.from(document.querySelectorAll(".slide img"));
const dots = Array.from(document.querySelectorAll(".dot"));
const dotsParent = document.querySelector(".dots")


//* Counter of images === index of each image.
let counter = 0;
//* The width of 1 slide
const width = images[0].clientWidth;

// slide.style.transform = `translateX(-${size * counter}px)`

next.addEventListener('click', () => {
  slide.classList.add("smooth");
  dots[counter].classList.remove("active")
  counter++;
  if(counter > images.length - 1) counter = images.length - 1
  dots[counter].classList.add("active")
  slide.style.transform = `translateX(-${width * counter}px)`

})
prev.addEventListener('click', () => {
  slide.classList.add("smooth");
  dots[counter].classList.remove("active")
  counter--;
  if(counter < 0) counter = 0
  dots[counter].classList.add("active")
  slide.style.transform = `translateX(-${width * counter}px)`

})

dotsParent.addEventListener('click', scrollToSlide)

function scrollToSlide(e) {
  slide.classList.add("smooth");
  dots.forEach(dot => {
    dot.classList.remove('active')
  })
  clickedDot = e.target.closest('span')
  clickedDot.classList.add("active")
  const indexDot = dots.findIndex(el => el === clickedDot)
  counter = indexDot;
  slide.style.transform = `translateX(-${width * indexDot}px)`
}
