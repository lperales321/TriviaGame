const listOfQuestions = [
    {question: "What was the first full length CGI movie?", answer1: "Answer 1", answer2: "Answer 2", answer3: "Answer 3", answer4: "Answer 4"}
]

let intervalId = 0;
let questionId = 0;
let timeRemaining = 20;
let totalWins = 0;
let totalLosses = 0;

function startTrivia() {
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    $('#question').text(listOfQuestions[questionId].question);
    $('#answer1').text(listOfQuestions[questionId].answer1);
    $('#answer2').text(listOfQuestions[questionId].answer2);
    $('#answer3').text(listOfQuestions[questionId].answer3);
    $('#answer4').text(listOfQuestions[questionId].answer4);
    $('#time-remaining').text(`Time Remaining: ${timeRemaining}`);
}

function startTimer() {
    intervalId = setInterval(calculateTimeRemaining, 1000);
}

function calculateTimeRemaining() {
    if (timeRemaining > 0) {
        timeRemaining--;
        $('#time-remaining').text(`Time Remaining: ${timeRemaining}`);
    }
    else {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalId);
    timeRemaining = 20;
}

$('#start').on("click", function () {
    $('#start').hide();
    startTrivia();
});

$('#answer1').on("click", function () {
});