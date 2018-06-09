$( document ).ready(function(){
    var solution = Math.floor(Math.random() * 101 + 19);
    var blueCrystal = Math.floor(Math.random() * 11 + 1);
    var greenCrystal = Math.floor(Math.random() * 11 +1);
    var redCrystal = Math.floor(Math.random() * 11 +1);
    var yellowCrystal = Math.floor(Math.random() * 11 + 1);
    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    $("#numberToMatch").text(solution);

    // Here we create the function to start a new game.

        function reset() {
               playerScore = 0;
               solution = Math.floor(Math.random() * 101 + 19);
               blueCrystal = Math.floor(Math.random()* 11 + 1);
               greenCrystal = Math.floor(Math.random()* 11 + 1);
               redCrystal = Math.floor(Math.random()* 11 + 1);
               yellowCrystal = Math.floor(Math.random()* 11 + 1);
              $("#playerScore").text(playerScore);
            };
        
            // This is the control structure used to determine if the game is over.
        
            function isGameOver() {
              $("#playerScore").text(playerScore);
              if (playerScore === solution) {
                wins ++;
                $("#wins").text(wins);
                reset();
              } else if (playerScore > solution) {
                losses ++;
                $("#losses").text(losses);
                reset();
              }
            };
        
    //here we start Jquery

    $("#one").click(function() {
        playerScore = blueCrystal + playerScore; 
        isGameOver();
        console.log(playerScore);
    });

    $("#two").click(function() {
        playerScore = greenCrystal + playerScore;
        isGameOver();
        console.log(playerScore);

    });

    $("#three").click(function(){
        playerScore = playerScore + redCrystal;
        isGameOver();
        console.log(playerScore);

    });

    $("#four").click(function(){
        playerScore = playerScore + yellowCrystal;
        isGameOver();
        console.log(playerScore);
    });
});