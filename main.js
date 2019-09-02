$(document).ready(initApp)

var answersAndQuestionsArray = [
    [
        'question 1',
        'answer 1',
        '1',
        'answer 2',
        '2',
        'answer 3',
        '3'
    ],
    [
        'question 2',
        'answer 4',
        '4',
        'answer 5',
        '5',
        'answer 6',
        '6'
    ]
]

var team1Turn = true;
var addedPoints;
var answerShown = 0;

function initApp() {
    addClickHandlers();
    addQuestionAndAnswer();
}

function addClickHandlers() {
    $('.answer').on('click', showAnswer)
}

function showAnswer() {
    answerShown++;
    $(this).find('.number').css('display', 'none')
    $(this).find('.answer-text').css('display', 'flex')
    $(this).find('.answer-points').css('display', 'flex')
    $(this).addClass('no-click')
    addAnswerPoints($(this))
    if(answerShown === 2) {
        team1Turn();
    }
    if(checkAnswers()) {
        addTeamPoints();
    }
}

function addQuestionAndAnswer() {
    resetBoard();
    var randomNumber = Math.floor(Math.random() * answersAndQuestionsArray.length);
    var questionAndAnswer = answersAndQuestionsArray[randomNumber];
    var array = Object.values(questionAndAnswer);
    var index = 1; 
    for(var i = 0; i < array.length - 1; i+=2) {
            $('.question').text(array[0])
            $('.answer-' + index).removeClass('no-click')
            $('.answer-' + index + ' .answer-text').text(array[i + 1])
            $('.answer-' + index + ' .answer-points').text(array[i + 2])
            $('.answer-' + index + ' .number').css('display', 'unset').text(index)
            index++;
    }
    answersAndQuestionsArray.splice(randomNumber, 1)
}

function addAnswerPoints(answer) {
    var totalPoints = parseInt($('.total-points').text());
    var answerPoints = parseInt($(answer).find('.answer-points').text());
    addedPoints = totalPoints + answerPoints;
    $('.total-points').text(addedPoints);
}

function checkAnswers() {
    var allAnswers = true;
    $('.answer').each(function(){
        if(!$(this).hasClass('no-click')) {
            allAnswers = false
        }
    })
    return allAnswers;
}

function addTeamPoints() {
    if(team1Turn) {
        $('#team-1-points').text(addedPoints)
    } else {
        $('#team-2-points').text(addedPoints)
    }
    setTimeout(function(){
        addQuestionAndAnswer();
    },1000)
}

function resetBoard() {
    $('.total-points').text('0');
    $('.number-container').css('display', 'flex')
    $('.answer-text').css('display', 'none')
    $('.answer-points').css('display', 'none')
}

function teamTurn() {
    
}