(function(){
    'use strict'
    
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){
      const pageTop = window.pageYOffSet || document.documentElement.scrollTop;

      switch (true) {
        case pageTop < 500: body.className = "one"; break;
        case pageTop < 1000: body.className = "two"; break;
        case pageTop < 1500: body.className = "three"; break;
        case pageTop < 2000: body.className = "four"; break;

        default: body.className = "five";
      }
    });
}() );