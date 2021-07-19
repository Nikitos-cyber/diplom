const slider = ()=>{
  const slider = document.querySelector('.top-slider'),
  slide = slider.querySelectorAll('.item'),
  table = document.querySelectorAll('.table'),
  tableCell = document.querySelectorAll('.table-cell'),
  text = slider.querySelectorAll('.text'),
  big = slider.querySelectorAll('.big');
 table.forEach(item=>{
  item.style.opacity = '1';
 });
 tableCell.forEach(item=>{
  item.style.visibility = 'visible';
  
 });
 text.forEach(item=>{
  item.style.fontSize = '16px';
  
 });
 big.forEach(item=>{
  item.style.fontSize = '50px';
  
 });

  let currentSlide = 0,
  idSetTimer ;
  

  const prevSlide = (slide,current)=>{
    slide[current].style.position = 'absolute';
     tableCell[current].style.visibility = 'hidden';
  };

  const nextSlide = (slide,current)=>{
    
        slide[current].style.position = 'relative';
    tableCell[current].style.visibility = 'visible';
    
  };

  const autoPlaySlider = ()=>{
    prevSlide(slide,currentSlide);
    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    nextSlide(slide,currentSlide);

  };


  const start = ()=>{
    idSetTimer = setInterval(autoPlaySlider,3000);
  };
 start();

  const stop = ()=>{

  };

  




};

export default slider;