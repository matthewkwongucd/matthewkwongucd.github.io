
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


  //Creates new image element then sets its source attribute, adds the class
   // that will fade in and then appends it to the container
  function swapImage(){
    var newSlide = document.createElement('img');
    newSlide.src = `slides/${myPhotos[currentImage]}`;
    newSlide.setAttribute("class", "fadeinimg");
    container.appendChild(newSlide);

    if(container.children.length > 2){
      container.removeChild(container.children[0]);
    }
  };


  //handles clicking the next button:
  nextBtn.addEventListener('click', function(event){
    event.preventDefault();
    currentImage++;

    if(currentImage == (myPhotos.length)){
      currentImage = 0;
    }
    swapImage();
  });


  //handles clicking the previous button:
  prevBtn.addEventListener('click', function(event){
    event.preventDefault();
    currentImage--;

    if(currentImage < 0){
      currentImage = myPhotos.length -1;
    }
    swapImage();
  });
}());
