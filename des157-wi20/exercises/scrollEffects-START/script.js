const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(eachLink){
  eachLink.addEventListener('click', smoothScroll);
});


function smoothScroll(event){
  event.preventDefault();

  const targetID = event.target.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);

  console.log(targetAnchor.getBoundingClientRect().top);

  const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 200;
  window.scrollBy({ top: originalTop, left:0, behavior: 'smooth'});
  console.log(originalTop);
}


window.addEventListener('load', function(){
  const posts = document.querySelectorAll('section');
  const postTops = [];
  let lastPost = posts.length -1;
  let pageTop;
  let counter = 0;
  let prevCounter = 0;

  posts.forEach(function(post) {
    postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
  });
  // console.log(postTops);

  // console.log(postTops);
  window.addEventListener('scroll', function(){
    pagetop = window.pageYOffset + 250;
    // console.log(pageTop);

    if(pagetop > postTops[counter + 1]){
      counter++;
      console.log(`scrolling down ${counter}`);
    }

    else if (counter > 0 && pagetop < postTops[counter]) {
      counter--;
      lastPost = posts.length -1;
      console.log(`scrolling up ${counter}`);
    }

    else if(pagetop > postTops[lastPost]){
      conter = lastPost;
      lastPost++;
      console.log(`lastPost: ${counter}`);
    }

    if(counter != prevCounter){
      navLinks.forEach(function(eachLink){
        eachLink.removeAttribute('class');
      });
      var thisLink = document.querySelector(`nav ul li:nth-child(${counter + 1}) a`);
      thisLink.className = 'selected';
      prevCounter = counter;
    }
  });
});

let resizeId;
window.addEventListener('resize', function(){
  clearTimeout(resizeId);
  resizeId = SetTimeout(function(){
    window.onbeforeunload = function(){
      window.scrollTo(0,0);
    };
    window.location.reload(true);
  }, 500);
})
