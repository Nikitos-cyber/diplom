const scrollBottom = ()=>{
 const btnScroll =  document.querySelector('.up'),
        services = document.getElementById('services');
        
    
  let idInterval,
  i =  0 ;
 
btnScroll.addEventListener('click',(event)=>{
  
  

  event.preventDefault();
   let hiddenBtn = Math.floor(services.getBoundingClientRect().top) * (-1) ;
 
 
 i  = hiddenBtn;
 
  idInterval = setInterval(()=>{
    i-=8;

    document.documentElement.scrollTop = i;
     if( Math.floor(services.getBoundingClientRect().top) * (-1) <= 0 ){
      btnScroll.style.display = 'none';
     }
     if(document.documentElement.scrollTop <= 0){
       clearInterval(idInterval);
     }
    
 });
  
});

window.addEventListener('scroll',()=>{
  if(Math.floor(services.getBoundingClientRect().top) * (-1) > 0){
    btnScroll.style.display = 'block';
  }
});

};

export default scrollBottom;