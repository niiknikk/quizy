const quizData = [
    {
        question: "Which langauge runs in web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascipt",
        correct:"d",
    },
    {
        question: "What does cs stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboars",
        correct:"a",
    },
    {
        question: "What does Html sand For?",
        a:"Hypertext Markup Language",
        b:"Hypertext Machine Language ",
        c:"High Machine Language",
        d:"High Markup Language",
        correct:"a",
    },
    {
        question: "What year javascipt launched",
        a:"1990",
        b:"1999",
        c:"2000",
        d:"1995",
        correct:"d",
    },
    {
        question: "2 + 2 = ",
        a:"2",
        b:"3",
        c:"4",
        d:"5",
        correct:"c",
    },
];

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const answers = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let  currentQuiz = 0;
let score = 0;

loadquiz();

function loadquiz() {
    deselectAnwers();

    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnwers(){
    answers.forEach(answers => answers.checked = false);
}

function getSelected() {
    let answer;
    answers.forEach(answers => {
        if(answers.checked){
            answer = answers.id;
    
    }});

    return answer;
}

submit.addEventListener('click', () => {
//when user checked any option it stored in const answer
    const answer = getSelected();

    if(answer === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadquiz();
    }else{
        quiz.innerHTML = `<h2>You Answered 
        ${score}/${quizData.length}questions correcly</h2>
        <button class="quiz-btn" onclick="location.reload()">Reload</button>
        `
    }
});