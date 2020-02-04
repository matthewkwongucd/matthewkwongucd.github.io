(function(){
    'use strict'

    
    const divTag = document.querySelector('div');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function(){
    const newParagraph = document.createElement('p');
    const text = document.createTextNode('A new paragraph');

    newParagraph.appendChild(text);
    divTag.appendChild(newParagraph);
    });

} () );