(function(){

    'use strict'

    const divTag = document.querySelector('div');
    const btnAdd = document.querySelectorAll('button')[0];
    const btnDelete = document.querySelectorAll('button')[1];

    btnAdd.addEventListener('click', function(){
        const newParagraph = document.createElement('p');
        const text = document.createTextNode('A new paragraph');

        //new paragraph
        newParagraph.appendChild(text);
        divTag.appendChild(newParagraph);
    });

    // Remove paragraph
    btnDelete.addEventListener('click', function(){
        const paragraphCount = document.querySelectorAll('p');
        divTag.removeChild(divTag.children[paragraphCount.length-1])
        console.log(paragraphCount);
    });
}() );