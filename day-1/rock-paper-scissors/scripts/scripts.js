function play() {

    console.log('play');

    var user_input = document.getElementById("user-input");
    var user_move = user_input.value;
    console.log("user_move", user_move);

    var possible_moves = ["rock", "paper", "scissors"];
    var i = Math.floor(Math.random()*3);
    var computer_move = possible_moves[i];
    console.log("computer_move", computer_move);

    var outcome;
    if (computer_move === "rock") {
        if (user_move === "rock") {
            outcome = "draw";
            draw();
        } else if (user_move === "paper") {
            outcome = "The user wins!";
            win();
        } else if (user_move === "scissors") {
            outcome = "The computer wins!";
            lose();
        } else {
            outcome = "unknown";
            draw();
        }
    } else if (computer_move === "paper") {
        if (user_move === "rock") {
            outcome = "The computer wins!";
            lose();

        } else if (user_move === "paper") {
            outcome = "draw";
            draw();
        } else if (user_move === "scissors") {
            outcome = "The user wins!";
            win();
        } else {
            outcome = "unknown";
            draw();
        }
    } else if (computer_move === "scissors") {
        if (user_move === "rock") {
            outcome = "The user wins!";
            win();
        } else if (user_move === "paper") {
            outcome = "The computer wins!";
            lose();
        } else if (user_move === "scissors") {
            outcome = "draw";
            draw();
        } else {
            outcome = "unknown";
            draw();
        }
    }
    console.log('The outcome of the game is:', outcome);

    var outcome_div = document.getElementById("outcome");
    outcome_div.innerHTML = outcome;
    $('#outcome').hide().fadeIn("slow");
}

function win(){
    $('#outcome').addClass('green');
    $('#outcome').removeClass('red');
    $('#outcome').removeClass('grey');
}

function lose(){
    $('#outcome').addClass('red');
    $('#outcome').removeClass('green');
    $('#outcome').removeClass('grey');
}

function draw(){
    $('#outcome').addClass('grey');
    $('#outcome').removeClass('red');
    $('#outcome').removeClass('green');
}