(function(){
    
    'use strict'

    const paragraph = document.querySelector('p');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function(){
    paragraph.style.color = "green";
    });
}() );
