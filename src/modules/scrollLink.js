const scrollLink = ()=>{

  const listTopMenu = document.querySelector('.top-menu>ul').children,
        services = document.getElementById('services'),
        faq = document.getElementById('faq'),
        contacts = document.getElementById('contacts'),
        listTop = document.querySelector('.top-menu>ul');
  let doc = document.documentElement,
        i = 0,
        idAnimate,
        scroll = 0,
        j = 0,
         idAnimateOne;
  const animateScroll = (elem)=>{
    i += 20;
    
    
    idAnimate = setTimeout(animateScroll,1,elem);
    if(document.documentElement.scrollTop < elem){
      doc.scrollTop = i;
    }else{
       clearTimeout(idAnimate);
      i = 0;
    }
   
  };
  const animateScrollBottom = (elem)=>{
    i -= 20;
    
    
    idAnimateOne = setTimeout(animateScrollBottom,1,elem);
   
    if(doc.scrollTop >= elem){
      doc.scrollTop = i;
    }else{
       clearTimeout(idAnimateOne);
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
      if(doc.scrollTop < contacts.getBoundingClientRect().top + scroll -30){
           idAnimate = setTimeout(animateScroll,1,contacts.getBoundingClientRect().top + scroll -30 );
      }
      
     
      if(doc.scrollTop >= contacts.getBoundingClientRect().top + scroll -30 ){
        
         idAnimateOne = setTimeout(animateScrollBottom,1,contacts.getBoundingClientRect().top + scroll -30 );
      }
      }
      if(attribute === '#services'){
      scroll = doc.scrollTop;
      i = scroll;
      if(doc.scrollTop < services.getBoundingClientRect().top + scroll -30){
           idAnimate = setTimeout(animateScroll,1,services.getBoundingClientRect().top + scroll -30 );
      }
      
     
      if(doc.scrollTop >= services.getBoundingClientRect().top + scroll -30 ){
        
         idAnimateOne = setTimeout(animateScrollBottom,1,services.getBoundingClientRect().top + scroll -30 );
      }
   
      }

      

      if(attribute === '#faq'){
         scroll = doc.scrollTop;
      i = scroll;
    

    if(doc.scrollTop < faq.getBoundingClientRect().top + scroll -30){
           idAnimate = setTimeout(animateScroll,1, faq.getBoundingClientRect().top + scroll -30 );
      }
     
      if(doc.scrollTop >= faq.getBoundingClientRect().top + scroll -30 ){
        
         idAnimateOne = setTimeout(animateScrollBottom,1, faq.getBoundingClientRect().top + scroll -30 );
      }
      }
    
  });


  
  
};
export default scrollLink;