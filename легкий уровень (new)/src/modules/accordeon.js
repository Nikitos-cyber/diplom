const accordeon = ()=>{
 const blockAccordeon = document.querySelector('.accordeon'),
      blockAccordeonElement =  blockAccordeon.querySelectorAll('.element');

  let idInterval,
  i = 0;

  const animateHidden = (elem)=>{
   elem.style.display = 'none';
  //  idInterval = setInterval(()=>{

  //    i = 1;
  //   if(elem.clientHeight > 0){
  //      elem.style.height = `${elem.clientHeight - i}px`;
      
  //   }else{
  //     clearInterval(idInterval);
  //   }
  //  },1,elem);
  //  elem.style.overflow = 'hidden';
  //   elem.style.padding = 0;
  };


  const  ahimateVisible = (elem)=>{
     elem.style.padding = '20px';
     elem.style.display = 'block';
      
  };

  blockAccordeon.addEventListener('click',(event)=>{
    let target = event.target;
    if(target.matches('.title')){
     if( target.parentNode.classList.contains('active')){
       target = target.parentNode;
       
        target.classList.remove('active');
      animateHidden(target.children[1]);
     }else{
        
       target = target.parentNode;
       blockAccordeonElement.forEach((item )=>{
        if(target !== item){
       
          if(item.classList.contains('active')){
            item.classList.remove('active');
          }
        animateHidden(item.children[1]);
         
        }
       });
        target.classList.add('active');
       ahimateVisible(target.children[1]);
        
     }
    }
  });
 
};

export default accordeon;