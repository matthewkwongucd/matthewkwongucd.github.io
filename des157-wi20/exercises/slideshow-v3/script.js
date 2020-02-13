
(function(){
  'use strict'
  var currentImage = 0;
  var myPhotos = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
  ];

  var container = document.getElementById('content');
  var nextBtn = document.getElementById('next');
  var prevBtn = document.getElementById('previous');

  setInterval(function(){
    currentImage++;
    if(currentImage == (myPhotos.length)){
      currentImage = 0;
    }

    const newSlide = document.createElement('img');
    newSlide.src = `slides/${myPhotos[currentImage]}`;
    newSlide.setAttribute("class", "faddening");
    container.appendChild(newSlide);

    if(container.children.length > 2){
      container.removeChild(container.children[0]);
    }

  }, 3000);

}());
