const quizForm = document.querySelector('.quiz-form');
const answerBtn = document.querySelector('#answer-btn')
const outputEl = document.querySelector('#output-quiz')

const correctAnswer = ["90°", "right angled"]

function calculateScore(){
    let score = 0;
    let index = 0;
    let formResult = new FormData(quizForm)
    for(let value of formResult.values()){
        if(value === correctAnswer[index]){
            score = score+1;
        }
        index = index + 1;
    }
    outputEl.innerHTML = `Your score is ${score}`
    
}

answerBtn.addEventListener('click', calculateScore);