(function(){
    'use strict'
    const divTag = document.querySelector('div');
    const btnAdd = document.querySelectorAll('button')[0];
    const btnDelete = document.querySelectorAll('button')[1];
    let paragraphCount = 1;

    btnAdd.addEventListener('click', function(){
        paragraphCount ++;
        const newParagraph = document.createElement('p');
        const text = document.createTextNode(`This is paragraph ${paragraphCount}`);

        newParagraph.appendChild(text);
        divTag.appendChild(newParagraph);
    });


    // Remove paragraph
    btnDelete.addEventListener('click', function(){

    if(paragraphCount > 1){
        divTag.removeChild(divTag.children[paragraphCount-1])
        console.log(paragraphCount);
        paragraphCount --;
    }
    else{
        alert("Don't delete the last paragraph!");
    }
    });

}() );

