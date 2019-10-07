
$(document).ready(function() {
  

    var questionCounter = 0;
    // setting timer for 60 seconds
    var time = 50;
    // Keeps count of correct guesses
    var correctGuesses = 0;
    //Keep a count of how many guesses were wrong
    var incorrectGuesses = 0;

  
      var questions = [
    {
        question: "How did Harry Potter get his scar?",
        choices: ["He had an accident", "Vouldemort tried to kill him", "He was attacked by a bailik", "He crashed rons car"],
        correctAnswer: "Vouldemort tried to kill him",
    },
    {
        question: "Who is fluffy?" ,
        choices: ["Hermiones Cat", "Harrys owl", "Hagrids Dragon", "Three headed dog"],
        correctAnswer: "Three headed dog",
    },
    {
        question: "What house at Hogwarts does Harry belond to?",
        choices: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
        correctAnswer: "Gryffindor",
    },
    {
        question: "What does the Imperious curse do?",
        choices: ["Kills", "Controls", "Tourtures", "Turns the person into a pig"],
        correctAnswer: "Controls the actions of another person",
    },
    {
        question: "Who kills Proffessor Dumbledore",
        choices: ["Bellatrix", "Draco", "Servous", "Fenrir"],
        correctAnswer: "Severous Snape",
    },
];
      

 // Starts game
 $("#startClick").click();

// add questions
	
	function questionInput() {
		
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

	// perform this function for correct guess
	function userWin() {
		$("#harryPot").html("<p>Correct</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#harryPot").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 10000);
		questionCounter++;
	}

	// if guessed incorrectly
	function userLoss() {
		$("#harryPot").html("<p>Incorrect</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#harryPot").append("<p>The answer is <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 10000);
		questionCounter++;
	}

	// if time out
	function userTimeout() {
		if (time === 0) {
			$("#harryPot").html("<p>Time out!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#harryPot").append("<p>The answer is <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 10000);
			questionCounter++;
		}
	}

	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 50;
			$("#harryPot").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}

















//$(document).ready(function () {
  //  $("#startClick").on("click", function () {
//        alert("good job")
//});

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
   // }
//});











