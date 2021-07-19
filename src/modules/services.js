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

export default services;