(function(){
    var body = document.querySelector('body');

    document.addEventListener('keydown', function(event){
      const keyPressed = event.which;

      switch (keyPressed) {
        case 66: body.className = "one"; break;
        case 86: body.className = "two"; break;
        case 67: body.className = "three"; break;
        case 70: body.className = "four"; break;
        case 71: body.className = "five"; break;

        default: alert("Press one of the specified keys!");
      }
    });
}() );