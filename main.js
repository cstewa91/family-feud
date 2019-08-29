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
    ]
]

function initApp() {
    addClickHandlers();
    addQuestionAndAnswer();
    addAnswerPoints()
}

function addClickHandlers() {
    $('.answer').on('click', showAnswer)
    $('.answer').on('click', addAnswerPoints)
}

function showAnswer() {
    $(this).find('.number').css('display', 'none')
    $(this).find('.answer-text').css('display', 'flex')
    $(this).find('.answer-points').css('display', 'flex')
}

function addQuestionAndAnswer() {
    var questionAndAnswer = answersAndQuestionsArray[0];
    var array = Object.values(questionAndAnswer);
    var index = 1; 
    for(var i = 0; i < array.length - 1; i+=2) {
            $('.question').text(array[0])
            $('.answer-' + index + ' .answer-text').text(array[i + 1])
            $('.answer-' + index + ' .answer-points').text(array[i + 2])
            $('.answer-' + index + ' .number').css('display', 'unset').text(index)
            index++;
    }
}

function addAnswerPoints() {
    if(!$(this).find('.answer-points').text()){
        return;
    }
    var totalPoints = parseInt($('.total-points').text());
    var answerPoints = parseInt($(this).find('.answer-points').text());
    var addedPoints = totalPoints + answerPoints;
    $('.total-points').text(addedPoints)
}