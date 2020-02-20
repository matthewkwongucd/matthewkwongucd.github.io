(function(){
    `use strict`

    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");
    
    // Keeping data
    const gameData = {
        dice: ["1die.jpg", "2die.jpg", "3die.jpg",
                "4die.jpg", "5die.jpg", "6die.jpg"],
        players:["player 1", "player 2"],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }


    startGame.addEventListener("click", function(){
        // randomly set game index for who goes first
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        setUpTurn();
        console.log("set up the turn!");
    });


    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener("click", function(){
            throwDice();
        });
        
        console.log("check to see if the player won!");
        checkWinningCondition();
    }

    function throwDice(){
        // clears html entirely
        actionArea.innerHTML = '';
        
        // random number from 1-6 
        gameData.roll1 = Math.ceil(Math.random()*4);
        gameData.roll2 = Math.ceil(Math.random()*4);
        
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        
        // -1 because of array indexing.
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two 1's are rolled...
        if( gameData.rollSum === 2 ){
            console.log("snake eyes were rolled");
            // 1. set a message
            game.innerHTML +=  "<p>Darn! Snake Eyes!</p>"
            // 2. set this player's score to 0
            gameData.score[gameData.index] = 0;
            // 3. swap the game index 
            gameData.index ? gameData.index = 0 : gameData.index = 1; 
            // 4. show the current score
            setTimeout(function(){
                setUpTurn();
            }, 2000);
        }


        // if two 2's are rolled... DOUBLE TROUBLE
        else if( gameData.roll1 === 2  && gameData.roll2 === 2 ){
            console.log("Double Trouble! * 2 baby!");
            console.log(gameData.score);
            
            // 1. Update this user's score
            gameData.score[gameData.index] = gameData.score[gameData.index] * 2;
            
            // 2. add buttons to roll or pass
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
      

            game.innerHTML += `<p>DOUBLE TROUBLE! TIMES 2 YOUR SCORE!</p>`;

            // 3. add click handlers for those two buttons
            document.getElementById('rollagain').addEventListener("click", function(){ 
                throwDice();
            });

            // 
            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });

            // 4. Check to see if this user has passed the threshold for winning      
            console.log("check to see if the player won!");
            checkWinningCondition();
        }

        
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log("one of the two dice was a 1");

            // swap turn
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            // 1. set a message
            // 2. swap the index
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to 
                ${gameData.players[gameData.index]}</p>`;

            // 3. wait 2 seconds then run setUpTurn() again;
            setTimeout(function(){
                setUpTurn();
            }, 2000);
        }
        // if neither die is a 1...
        else {
            console.log("the game proceeds");
            console.log(gameData.score);
            
            // 1. Update this user's score
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            
            // 2. add buttons to roll or pass
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
      
            // 3. add click handlers for those two buttons
            document.getElementById('rollagain').addEventListener("click", function(){ 
                throwDice();
            });

            // 
            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });


            // 4. Check to see if this user has passed the threshold for winning      
            console.log("check to see if the player won!");
            checkWinningCondition();
        }
    }


    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} 
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else{  
            // Show current score...
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: 
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}:  
        ${gameData.score[1]}</p>`;
    }

}() );