(function(){
    'use strict'
    
    const h1 = document.querySelector("h1");
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event){
      event.preventDefault();
      const num = parseInt(document.querySelector('input').value);

      if(num){
        h1.style.fontSize = num + "px";
      }
      else{
        alert("enter a number!");
      }
    });
}());