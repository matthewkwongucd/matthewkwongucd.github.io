(function(){
    
    'use strict'

    const paragraph = document.querySelectorAll('p');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function(){
    for(let i = 0; i < paragraph.length; i ++){
        paragraph[i].style.color = "green";
    }
    });
}() );