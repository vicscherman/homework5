 //Moment Functionality displaying time and date

 var currentDay = document.getElementById('currentDay');


 currentDay.innerText = moment().format('dddd MMMM Do');
 
 
 var saveEntry=document.querySelectorAll('button')

 for(i=0; i< saveEntry.length; i++){

     var buttonElement = saveEntry[i];
     
     buttonElement.addEventListener('click', function(event){
       var textAreaValue = event.currentTarget.previousElementSibling.querySelector('textarea').value;
       
       var rowKey = event.currentTarget.previousElementSibling.previousElementSibling.getAttribute("value")

       localStorage.setItem(rowKey, textAreaValue)

     
     })

      var rowKey = buttonElement.previousElementSibling.previousElementSibling.getAttribute("value")
      var localStorageValue = localStorage.getItem(rowKey);
    
      buttonElement.previousElementSibling.querySelector('textarea').value = localStorageValue;

      if(parseInt(rowKey) === parseInt(moment().format('H'))){
          buttonElement.previousElementSibling.classList.add('present')

    }

      if(parseInt(rowKey) < parseInt(moment().format('H'))){

        buttonElement.previousElementSibling.classList.add('past')
    }

     if(parseInt(rowKey) > parseInt(moment().format('H'))){

        buttonElement.previousElementSibling.classList.add('future')

      }
      
     

    


    
    
 }




 



   























