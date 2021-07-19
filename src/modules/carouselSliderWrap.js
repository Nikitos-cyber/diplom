const carouselSliderWrap = ()=>{
  const overlay  = document.querySelector('.modal-overlay'),
        callbackModal = document.getElementById('callback');
  const wrap = document.querySelector('.services-carousel');
  wrap.addEventListener('click',(event)=>{
    event.preventDefault();
    let target = event.target;
    
    if(target.matches('.fancyboxModal')){
     overlay.style.cssText = 'display:block;';
callbackModal.style.cssText = 'display:block;';
    }else{
      return;
    }
  });
const carouselSlider = (slidesToshow = 3)=>{
  const main = document.querySelector('.services-elements'),
        wrap = document.querySelector('.services-carousel'),
        slide = document.querySelector('.services-carousel').children,
        next = document.querySelector('.arrow-right'),
        prev = document.querySelector('.arrow-left'),
        wrapArrow = document.querySelector('.services-arrow');
  if(document.documentElement.clientWidth > 835){
    slidesToshow = 3;
  }
   if(document.documentElement.clientWidth < 835){
    slidesToshow = 2;
  } 
  if(document.documentElement.clientWidth < 555 ){
    slidesToshow = 1;
  }

  let widthSlide = Math.floor(100 / slidesToshow),
      position = 0;
 

  const addClass = ()=>{
    main.classList.add('glo-slider__main');
    wrap.classList.add('glo-slider__wrap');
    for ( let item of slide){
      item.classList.add('glo-slider__item');

    }
  };   

  addClass();

  const addStyle = ()=>{
    const style = document.createElement('style');

    style.id = 'carouselSlider';
    style.textContent = `
    .glo-slider__main{
      overflow:hidden;
    }
    .glo-slider__wrap{
      display:flex;
      transition:transform 0.5s;
      will-change:transform;
    }
    .glo-slider__item{
      flex: 0 0 ${widthSlide}%;
      margin: 0 auto;
    }

    `;
    document.head.append(style);
  };
  addStyle();

 

  const nextSlide = ()=>{
    if(position <= slide.length - slidesToshow){
    ++position;
    if(position > slide.length - slidesToshow){
      position = 0;
    }
   wrap.style.transform = `translateX(-${position * widthSlide}%)`;
    }
  };

  const prevSlide = ()=>{
  if(position >= 0){
     --position;
     if(position < 0){
       position  = slide.length - slidesToshow;
     }
    wrap.style.transform = `translateX(-${position * widthSlide}%)`;
  }
  };

  

  wrapArrow.addEventListener('click',(event)=>{
    let target = event.target;
    if(target.matches('.arrow-right')){
      nextSlide();
    }
    
    if(target.matches('.arrow-left')){
      prevSlide();
    }
  });


  


};

   window.addEventListener('resize',()=>{
     if(document.documentElement.clientWidth > 835){
   carouselSlider(3);
  }
  if(document.documentElement.clientWidth < 835){
  carouselSlider(2);
  }
   if(document.documentElement.clientWidth < 555 ){
  carouselSlider(1);
  }
});
carouselSlider();
};

export default carouselSliderWrap;