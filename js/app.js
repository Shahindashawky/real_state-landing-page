
const vpw = window.innerWidth || document.documentElement.clientWidth;
const vph = window.innerHeight || document.documentElement.clientHeight;

link = document.querySelectorAll('a');
for (let i = 0; i < link.length; i++) {
 link[i].addEventListener("click", function(event) {
     cname = link[i].getAttribute('class');
     document.getElementById(cname).scrollIntoView({
         behavior: 'smooth'
     });
     event.preventDefault();

 });
}
const header = document.querySelector('.main__hero');

function isInViewPort(e) {
 const check = e.getBoundingClientRect();
 return (
     check.top + check.height >= 0 &&
     check.bottom <= check.height + header.offsetHeight &&
     check.top <= vph &&
     check.left + check.width >= 0 &&
     check.left <= vpw
 );
}

const sec = document.querySelectorAll('section');

function scroll() {
    window.onscroll = function() {
        for (let i = 0; i < sec.length; i++) {
   
            if (isInViewPort(sec[i])) {
                sec[i].classList.add('your-active-class');
            } else {
                sec[i].classList.remove('your-active-class');
   
            }
   
   
        }
   
   
    }
   }
   scroll();

   function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');

   }
   window.addEventListener('scroll', scrollHeader)

   var swiperWork = new Swiper(".work__container", {
    spaceBetween:32,
    grabCursor: true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const accordionItems = document.querySelectorAll('.value__accordion-item')

  accordionItems.forEach((item)=>{
    const accordionheader = item.querySelector('.value__accordion-header')

    accordionheader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
    toggleItem(item)
    if(openItem && openItem!==item){
    toggleItem(openItem)
    }
    })
  })
  const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content')
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')}
        else{
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
            item.classList.add('accordion-open')
        
    }
   
  }
  const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay:400,

  })
  sr.reveal('.main__hero')
  sr.reveal('.about__title',{delay:500})
  sr.reveal('.about__description',{delay:500})
  sr.reveal('.about__value',{delay:700})
  sr.reveal('.about__images',{delay:800, origin:'bottom'})
  sr.reveal('.company__images, .contact__content',{delay:800, origin:'left'})
  sr.reveal('.company__content, .contact__images',{ origin:'right'})


    emailjs.init("gpJkgGwJmgkmzw6kX");
 
        // listen to the form submission
        document
        .getElementById("fcf-form-id")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const serviceID = "service_6t395my";
          const templateID = "template_y7nsuoh";

          // send the email here
          emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
              console.log("FAILED...", error);
            }
          );
        });