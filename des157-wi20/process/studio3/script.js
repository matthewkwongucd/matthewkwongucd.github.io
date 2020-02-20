(function(){
    `use strict`

    //row 1
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    
    //row 2
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");

    // row 3
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    
    // Keeping data
    const gameData = {
        players:["player 1", "player 2"],
        taken: 0 
    }

    function playerTurn(){
        
    }

    function spaceAvailable{
        if(document.getElementsByClassName("box") == 0){
            gameData.taken == 1;
        }

        else{
            alert("pick again!");
            
        }
    }
    





}() );