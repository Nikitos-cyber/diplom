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
export default modal;