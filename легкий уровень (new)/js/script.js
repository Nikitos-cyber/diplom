window.addEventListener('DOMContentLoaded',()=>{
'use strict';


//Модальное окно
const modal = ()=>{

  const header = document.querySelector('.header-wrapper'),
        modalBtn = header.querySelector('.callback-btn '),
        overlay  = document.querySelector('.modal-overlay'),
        callbackModal = document.getElementById('callback'),
        modalClose = document.querySelector('.modal-close'),
        modalCallback = document.querySelector('.modal-callback');

  modalCallback.addEventListener('click',(event)=>{
    event.preventDefault();
  let target = event.target;
  if(target.parentNode.matches('.modal-close')){
    overlay.style.cssText = 'display:none;';
  callbackModal.style.cssText = 'display:none;';
  }
 
   });
modalBtn.addEventListener('click',(event)=>{
 event.preventDefault();
overlay.style.cssText = 'display:block;';
callbackModal.style.cssText = 'display:block;';
});

overlay.addEventListener('click',(event)=>{
  event.preventDefault();
  overlay.style.cssText = 'display:none;';
callbackModal.style.cssText = 'display:none;';
});

};

modal();


const scrollLink = ()=>{

  const listTopMenu = document.querySelector('.top-menu>ul').children,
        services = document.getElementById('services'),
        faq = document.getElementById('faq'),
        contacts = document.getElementById('contacts'),
        listTop = document.querySelector('.top-menu>ul');
  let doc = document.documentElement,
        i = 0,
        idAnimate,
        scroll = 0;
  const animateScroll = (elem)=>{
    i += 20;
    
    idAnimate = setTimeout(animateScroll,1,elem);
    if(i < elem){
      doc.scrollTop = i;
    }else{
      clearTimeout(idAnimate);
      i = 0;
    }
   
  };

  listTop.addEventListener('click',(event)=>{
    event.preventDefault();
    let target = event.target;
    let attribute = target.getAttribute('href');
  
      if(attribute === '#contacts'){
      scroll = doc.scrollTop;
      i = scroll;
      idAnimate = setTimeout(animateScroll,1,contacts.getBoundingClientRect().top + scroll);
      }
      if(attribute === '#services'){
      scroll = doc.scrollTop;
      i = scroll;
      idAnimate = setTimeout(animateScroll,1,services.getBoundingClientRect().top + scroll + 10);
   
      }

      if(attribute === '#faq'){
         scroll = doc.scrollTop;
      i = scroll;
    idAnimate = setTimeout(animateScroll,1,faq.getBoundingClientRect().top + scroll);
      }
    
  });


  
  
};

scrollLink();


//main слайдер

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

slider();

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




const services = ()=>{
  const btnServices = document.querySelector('.button-services'),
        callbackModal = document.getElementById('callback'),
        overlay  = document.querySelector('.modal-overlay');

  btnServices.addEventListener('click',(event)=>{
    event.preventDefault();
    overlay.style.cssText = 'display:block;';
    callbackModal.style.cssText = 'display:block;';
  });

   callbackModal.addEventListener('click',(event)=>{
    event.preventDefault();
  let target = event.target;
  if(target.parentNode.matches('.modal-close')){
    overlay.style.cssText = 'display:none;';
  callbackModal.style.cssText = 'display:none;';
  }
 
   });

};


services();




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
accordeon();


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

scrollBottom();


const sendForm = ()=>{
const errorMessage = 'Что то  пошло не так...' ,
          loadMessage = 'Загрузка...',
          successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const  form = document.querySelector('.rf');
   
  

      

    let error = new Set();

    

    const  formCreate = (form)=>{
       
    const submit = form.querySelector('.btn'),
          formControl = form.querySelectorAll('.form-group');
        

   let elem1 = formControl[0].children[0],
      elem2 = formControl[1].children[0];
   
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size:2rem;';
   
      
     let elementsForm = [elem1,elem2];
     

      const isValid = (elem)=>{

        if( elem.value.trim() === ''){
          return false;
        }
        
      
        if(elem.name === 'fio') {
        return /^[^\w]+$/i.test(elem.value);
       }
        

       if(elem.name === 'tel'  ){
        return /^\+?[87]([-()]*\d){10}$/.test(elem.value);
        
       }

       return false;

     };

     const  checkIt = (event)=>{
      let target = event.target;
      if(isValid(target)){
        target.style.border = 'solid green';
        error.delete(target);
        
      }else{
        event.preventDefault();
         target.style.border = 'solid red';
        error.add(target);
      }
     };

     elementsForm.forEach(item =>{
       item.addEventListener('change',checkIt);
     });
    
      

     

      
    
    submit.addEventListener('click',(event)=>{
      
      form.append(statusMessage);

      if(form.id){
         statusMessage.style.cssText = 'color:white;';
      }

      
      
     
       

      let body = { 
        name: elem1.value ,
        tel:elem2.value
     
      };

     

       
      elementsForm.forEach(item =>{
      if (item.value.trim() === ''){
        error.add(item);
        item.style.border = 'solid red';
      }
     });
      
       if(error.size === 0){
         statusMessage.textContent = loadMessage;
         
       
      postData(body)
    .then((response)=>{
      if(response.status !== 200){
        throw new Error('status network not 200');
      }
       statusMessage.textContent = successMessage;
    })
    .catch((error)=>{
        statusMessage.textContent = errorMessage;
        console.error(error);
      });
    }
    

     

  
     const clearInput = (form)=>{
 
     elem1.value = '';
     elem1.style.border = '2px solid #E3E3E4';
     elem2.value = '';
     elem2.style.border = '2px solid #E3E3E4';
    
  
      };

      clearInput(form);

      
    });
  };
 

  formCreate(form);


    const postData = (body)=>{

      return fetch('./server.php',{
        method:'POST',
        headers:{
          'Content-Type': 'aplication/json'
        },
        body:JSON.stringify(body)
      });

      

    };

};
sendForm();

});






