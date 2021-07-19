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

export default sendForm;