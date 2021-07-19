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
export default scrollLink;