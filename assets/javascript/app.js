const listOfQuestions = [
    {question: "What was the first full length CGI movie?", answer1: "Answer 1", answer2: "Answer 2", answer3: "Answer 3", answer4: "Answer 4", final: "answer1"},
    {question: "What was the answer?", answer1: "Answer 1", answer2: "Answer 2", answer3: "Answer 3", answer4: "Answer 4", final: "answer2"}
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
}

function startTimer() {
    timeRemaining = 20;
    $('#time-remaining').text(`Time Remaining: ${timeRemaining}`);
    intervalId = setInterval(checkTimeRemaining, 1000);
}

function checkTimeRemaining() {
    if (timeRemaining > 1) {
        calculateTimeRemaining();
    }
    //Out of Time
    else {
        calculateTimeRemaining();
        displayAnswer(false, "OUT OF TIME!");
        displayNextQuestion();
    }
}

function calculateTimeRemaining() {
    timeRemaining--;
    $('#time-remaining').text(`Time Remaining: ${timeRemaining}`);
}

function verifyAnswerChosen(answerClicked) {
    //Correct Answer
    if (listOfQuestions[questionId].final === answerClicked) {
        displayAnswer(true, "CORRECT!");
    }
    //Wrong Answer
    else {
        displayAnswer(false, "WRONG!");
    }
}

function displayAnswer(isCorrect, resultText) {
    stopTimer();
    clearQuestion();
    $('#question').text(`${resultText}`);
    if (!isCorrect) {
        $('#answer1').text(`The Correct Answer is: ${listOfQuestions[questionId].final}`);
    }
}

function stopTimer() {
    clearInterval(intervalId);
}

function clearQuestion() {
    $('#question').empty();
    $('#answer1').empty();
    $('#answer2').empty();
    $('#answer3').empty();
    $('#answer4').empty();
}

function displayNextQuestion() {
    questionId++;
    let timeoutId = setTimeout(startTrivia, 1000 * 3);
}

$('#start').on("click", function () {
    $('#start').hide();
    startTrivia();
});

$('#answer1').on("click", function () {
    verifyAnswerChosen("answer1");
    displayNextQuestion();
});

$('#answer2').on("click", function () {
    verifyAnswerChosen("answer2");
    displayNextQuestion();
});

$('#answer3').on("click", function () {
    verifyAnswerChosen("answer3");
    displayNextQuestion();
});

$('#answer4').on("click", function () {
    verifyAnswerChosen("answer4");
    displayNextQuestion();
});