 //Moment Functionality displaying time and date

 var currentDay = document.getElementById('currentDay');


 currentDay.innerText = moment().format('dddd MMMM Do');
 
 // Overall function
 // Creating saveEntry variable that selects all button elements.
 var saveEntry=document.querySelectorAll('button')
// iterative function (for loop) to go through all buttons in our calendar
 for(i=0; i< saveEntry.length; i++){
// Our individual button elements are equal to their index number
     var buttonElement = saveEntry[i];
//For every iteration of this function, we're adding an event listener click function event to our button. We then create variables inside the event function.
//These variables adhere to function scoping and exist only within this function. textAreaValue is going to give us our text content. 
//Because the text box exists in the previousElement sibling to the button, we can navigate to it that way. ("Var textAreaValue")
//We can also use the DOM strategy to grab our timeblock value by going two previousElements up from the save button. Our attribute "value" is mapped in our HTML
     buttonElement.addEventListener('click', function(event){
       var textAreaValue = event.currentTarget.previousElementSibling.querySelector('textarea').value;
       
       var rowKey = event.currentTarget.previousElementSibling.previousElementSibling.getAttribute("value")
//we then commit these items to local storage. rowkey is our localstorage key. textAreavalue is the string being stored.
       localStorage.setItem(rowKey, textAreaValue)

     
     })
// we can then use this same iterative loop to pull these elements from local storage. It's essentially the set value steps in reverse.
//We pull the rowKey  from local storage, and assign it to a variable. Because we added a unique value tag in our HTML we can use this again.
      var rowKey = buttonElement.previousElementSibling.previousElementSibling.getAttribute("value")
      var localStorageValue = localStorage.getItem(rowKey);
// we then assign the string associated with our rowkey to its relevant text area
      buttonElement.previousElementSibling.querySelector('textarea').value = localStorageValue;
// Lastly, we can use this loop function to run our moment.js time checker. While it's checking the buttons, 
//it also checks the value of our text area block and compares it to the current moment.js time. 
//we set 3 if conditions and add a different classlist to our text area block depending on if it's in the past, present or future.
//Our CSS stylesheet then alters the background color corresponding to each classlist.
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




 



   























