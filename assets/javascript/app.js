const listOfQuestions = [
    {question: "In The Silence of the Lambs, who is Buffalo Bill's victim the daughter of?", answer1: "A famous actress", answer2: "A senator", answer3: "A news anchor", answer4: "The preseident", finalAttr: "answer2", finalText: "A senator"},
    {question: "Who is the first person killed by Ghostface in Scream?", answer1: "Gale Weathers", answer2: "Casey Becker", answer3: "Tatum Riley", answer4: "Sidney Prescott", finalAttr: "answer2", finalText: "Casey Becker"},
    {question: "When Michael Myers is a boy, who does he kill?", answer1: "His sister", answer2: "His mother", answer3: "His brother", answer4: "His friend", finalAttr: "answer1", finalText: "His sister"},
    {question: "In The Blair Witch Project, what does Heather find in front of the tent after Josh disappears?", answer1: "A pile of rocks", answer2: "A stick figure", answer3: "A bundle of sticks filled with blood and teeth", answer4: "A bloody knife", finalAttr: "answer3", finalText: "A bundle of sticks filled with blood and teeth"},
    {question: "What is the name of the camp in Friday the 13th?", answer1: "Camp Crystal Lake", answer2: "Camp Mooselake", answer3: "Camp Waziyata", answer4: "Camp Timber Lake", finalAttr: "answer1", finalText: "Camp Crystal Lake"},
    {question: "How does Rachel avoid being killed by Samara in The Ring?", answer1: "She pushes her down the well.", answer2: "She burns the tape.", answer3: "She locks her in the barn attic.", answer4: "She makes a copy of the tape.", finalAttr: "answer4", finalText: "She makes a copy of the tape."},
    {question: "In The Sixth Sense, how does Bruce Willis' character, Dr. Malcolm Crowe, die?", answer1: "Car accident", answer2: "Shot by a former patient", answer3: "Stabbed while getting mugged", answer4: "Suicide", finalAttr: "answer2", finalText: "Shot by a former patient"},
    {question: "How does Freddy Krueger kill Rod in A Nightmare on Elm Street?", answer1: "Hangs him with bedsheets", answer2: "Slits his throat", answer3: "Lights him on fire", answer4: "Cuts him in half while in bed", finalAttr: "answer1", finalText: "Hangs him with bedsheets"},
    {question: "What are the children's names in The Others?", answer1: "Sam and Mary", answer2: "Nicholas and Anne", answer3: "Benjamin and Sarah", answer4: "Patrick and Emily", finalAttr: "answer2", finalText: "Nicholas and Anne"},
    {question: "What type of blood does Carrie get covered in?", answer1: "Chicken blood", answer2: "Cat blood", answer3: "Pig blood", answer4: "Human blood", finalAttr: "answer3", finalText: "Pig blood"},
    {question: "When is Rosemary's due date?", answer1: "July 15th", answer2: "October 7th", answer3: "March 13th", answer4: "June 28th", finalAttr: "answer4", finalText: "June 28th"},
    {question: "In Alfred Hitchcock's classic film, Psycho, how much money does Marion Crane steal from her employers before fleeing to the Bates Motel?", answer1: "$10,000", answer2: "$25,000", answer3: "$30,000", answer4: "$40,000", finalAttr: "answer4", finalText: "$40,000"},
    {question: "In Child's Play, what is the name of the boy that the doll attempts to possess?", answer1: "Andrew", answer2: "Charles", answer3: "Andy", answer4: "Robert", finalAttr: "answer3", finalText: "Andy"},
    {question: "Which horror movie series is the longest?", answer1: "Friday the 13th", answer2: "Nightmare on Elm Street", answer3: "Halloween", answer4: "Saw", finalAttr: "answer1", finalText: "Friday the 13th"},
    {question: "Who  does Regan attempt to contact on the Ouija Board?", answer1: "Captain Spaulding", answer2: "Captain Jack", answer3: "Captain Howdy", answer4: "Captain Holy", finalAttr: "answer3", finalText: "Captain Howdy"},
    {question: "What is the name that Steven Spielberg gave to the mechanical shark in Jaws?", answer1: "Greg", answer2: "Bruce", answer3: "Steven", answer4: "Mike", finalAttr: "answer2", finalText: "Bruce"},
    {question: "In Alien, how did Ripley kill the alien?", answer1: "Set it on fire", answer2: "She shot it", answer3: "Blew it out the airlock", answer4: "Blew it up", finalAttr: "answer1", finalText: "Set it on fire"},
    {question: "Who plays Freddy Krueger in the original Nightmare on Elm Street movies?", answer1: "Kurt Russell", answer2: "Brian Yuzna", answer3: "Keith Davis", answer4: "Robert Englund", finalAttr: "answer4", finalText: "Robert Englund"},
    {question: "What is the character's name of the little boy in The Shining?", answer1: "Johnny", answer2: "Danny", answer3: "Barry", answer4: "Jack", finalAttr: "answer2", finalText: "Danny"},
    {question: "In which movie trilogy did the main actress die during the making of the third movie?", answer1: "Halloween", answer2: "Friday the 13th", answer3: "Poltergeist", answer4: "The Ring", finalAttr: "answer3", finalText: "Poltergeist"}
]

let intervalId = 0;
let questionId = 0;
let timeRemaining = 20;
let totalWins = 0;
let totalLosses = 0;
let totalTimeouts = 0;

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
        totalTimeouts++;
    }
}

function calculateTimeRemaining() {
    timeRemaining--;
    $('#time-remaining').text(`Time Remaining: ${timeRemaining}`);
}

function verifyAnswerChosen(answerClicked) {
    //Correct Answer
    if (listOfQuestions[questionId].finalAttr === answerClicked) {
        displayAnswer(true, "CORRECT!");
        totalWins++;
    }
    //Wrong Answer
    else {
        displayAnswer(false, "WRONG!");
        totalLosses++;
    }
}

function displayAnswer(isCorrect, resultText) {
    stopTimer();
    clearQuestion();
    $('#question').text(`${resultText}`);
    if (!isCorrect) {
        $('#answer1').text(`The Correct Answer is: ${listOfQuestions[questionId].finalText}`);
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

    if (questionId !== listOfQuestions.length) {
        let timeoutId = setTimeout(startTrivia, 1000 * 3);
    }
    else {
        let timeoutId = setTimeout(displayStats, 1000 * 3);
    }
}

function displayStats() {
    $('#question').text("Finished! Here's your final score");
    $('#answer1').text(`Correct Answers: ${totalWins}`);
    $('#answer2').text(`Wrong Answers: ${totalLosses}`);
    $('#answer3').text(`Unanswered Questions: ${totalTimeouts}`);
    $('#answer4').empty();
    $('#playAgain').removeClass("invisible");
}

function resetStats() {
    intervalId = 0;
    questionId = 0;
    timeRemaining = 20;
    totalWins = 0;
    totalLosses = 0;
    totalTimeouts = 0;
    $('#playAgain').addClass("invisible");
}

$('#start').on("click", function () {
    $('#startButton').hide();
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

$('#playAgain').on("click", function () {
    resetStats();
    startTrivia();
});