$(document).ready(function () {

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var time = 50;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
        {
            question: "How did Harry Potter get his scar?",
            choices: ["He had an accident", "Vouldemort tried to kill him", "He was attacked by a bailik", "He crashed rons car"],
            answer: "Vouldemort tried to kill him",
        },
        {
            question: "Who is fluffy?",
            choices: ["Hermiones Cat", "Harrys owl", "Hagrids Dragon", "Three headed dog"],
            answer: "Three headed dog",
        },
        {
            question: "What house at Hogwarts does Harry belond to?",
            choices: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
            answer: "Gryffindor",
        },
        {
            question: "What does the Imperious curse do?",
            choices: ["Kills", "Controls", "Tourtures", "Turns the person into a pig"],
            answer: "Controls the actions of another person",
        },
        {
            question: "Who kills Proffessor Dumbledore",
            choices: ["Bellatrix", "Draco", "Servous", "Fenrir"],
            answer: "Severous Snape",
        },
    ];



    // create question contents according to question count
    function questionContent() {
        // a for loop would be cool here...
        $("#harryPot").append("<p><strong>" +
            questions[questionCounter].question +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[0] +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[1] +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[2] +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[3] +
            "</strong></p>");
    }

    function userWin() {
        $("#harryPot").html("<p>You got it right!</p>");
        correctGuesses++;
        var correctAnswer = questions[questionCounter].correctAnswer;
        $("#harryPot").append("<p>The answer was <span class='answer'>" +
            correctAnswer +
            "</span></p>" +
            questions[questionCounter].image);
        setTimeout(nextQuestion, 10000);
        questionCounter++;
    }

    // user guessed incorrectly
    function userLoss() {
        $("#harryPot").html("<p>Nope, that's not it!</p>");
        incorrectGuesses++;
        var correctAnswer = questions[questionCounter].correctAnswer;
        $("#harryPot").append("<p>The answer was <span class='answer'>" +
            correctAnswer +
            "</span></p>" +
            questions[questionCounter].image);
        setTimeout(nextQuestion, 10000);
        questionCounter++;
    }

    // user ran out of time
    function userTimeout() {
        if (time === 0) {
            $("#harryPot").html("<p>You ran out of time!</p>");
            incorrectGuesses++;
            var correctAnswer = questions[questionCounter].correctAnswer;
            $("#harryPot").append("<p>The answer was <span class='answer'>" +
                correctAnswer +
                "</span></p>" +
                questions[questionCounter].image);
            setTimeout(nextQuestion, 10000);
            questionCounter++;
        }
    }

    // screen that shows final score and nice message :)
    function resultsScreen() {
        if (correctGuesses === questions.length) {
            var endMessage = "Correct";
            var bottomText = "#howdidyouknowthat?";
        }
        else if (correctGuesses > incorrectGuesses) {
            var endMessage = "correct";
            var bottomText = "#thesequestionsareweird";
        }
        else {
            var endMessage = "Incorrect";
            var bottomText = "#scrub";
        }
        $("#harryPot").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" +
            correctGuesses + "</strong> right.</p>" +
            "<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
        $("#harryPot").append("<h1 id='start'>Start Over?</h1>");
        $("#bottomText").html(bottomText);
        gameReset();
        $("#startClick").click(nextQuestion);
    }

    // game clock currently set to 15 seconds
    function timer() {
        clock = setInterval(countDown, 5000);
        function countDown() {
            if (time < 1) {
                clearInterval(clock);
                userTimeout();
            }
            if (time > 0) {
                time--;
            }
            $("#timer").html("<strong>" + time + "</strong>");
        }
    }

    // moves question counter forward to show next question
    function nextQuestion() {
        if (questionCounter < questions.length) {
            time = 15;
            $("#harryPot").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
            questionContent();
            timer();
            userTimeout();
        }
        else {
            resultsScreen();
        }
        // console.log(questionCounter);
        // console.log(questions[questionCounter].correctAnswer);
    }

    // reset score and counter parameters on restart
    function gameReset() {
        questionCounter = 0;
        correctGuesses = 0;
        incorrectGuesses = 0;
    }

    function startGame() {
        $("#harryPot").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
        $("#startClick").hide();
      
        questionContent();
        timer();
        userTimeout();
    }

    // this starts the game
    $("#startClick").click(nextQuestion);

    // click function to trigger right or wrong screen
    $("#harryPot").on("click", ".choices", (function () {
       
        var userGuess = $(this).text();
        if (userGuess === questions[questionCounter].correctAnswer) {
            clearInterval(clock);
            userWin();
        }
        else {
            clearInterval(clock);
            userLoss();
        }
    }));
});


// my code below----------------





// var score = 0;

// var questions = [
//     {
//         question: "How did Harry Potter get his scar?",
//         choices: ["He had an accident", "Vouldemort tried to kill him", "He was attacked by a bailik", "He crashed rons car"],
//         answer: "Vouldemort tried to kill him",
//     },
//     {
//         question: "Who is fluffy?" ,
//         choices: ["Hermiones Cat", "Harrys owl", "Hagrids Dragon", "Three headed dog"],
//         answer: "Three headed dog",
//     },
//     {
//         question: "What house at Hogwarts does Harry belond to?",
//         choices: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
//         answer: "Gryffindor",
//     },
//     {
//         question: "What does the Imperious curse do?",
//         choices: ["Kills", "Controls", "Tourtures", "Turns the person into a pig"],
//         answer: "Controls the actions of another person",
//     },
//     {
//         question: "Who kills Proffessor Dumbledore",
//         choices: ["Bellatrix", "Draco", "Servous", "Fenrir"],
//         answer: "Severous Snape",
//     },
// ];



// $("#startClick").on("click", function () {
//     alert("good job")
    // for (var i = 0; i < questions.length; i++) {
    //     var response = $("#startBtn").append(questions);
    //     console.log(questions[i]);
// })
//     });
// });
