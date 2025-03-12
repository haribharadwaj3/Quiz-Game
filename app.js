const questions=[
    {
        question:"Who won the ICC Champions Trophy in the year 2025?",
        answers:[
            {text:"A. Pakistan", correct:false},
            {text:"B. India", correct:true},
            {text:"C. Australia", correct:false},
            {text:"D. New Zealand", correct:false},
        ]
    },
    {
        question:"Which director directed the Bahubali franchise?",
        answers:[
            {text:"A. S.S.Rajamouli", correct:true},
            {text:"B. Sukumar", correct:false},
            {text:"C. Sandeep Reddy Vanga", correct:false},
            {text:"D. Ram Gopal Varma", correct:false},
        ]
    },
    {
        question:"Who was the First Prime Minister of India?",
        answers:[
            {text:"A. Narendra Modi", correct:false},
            {text:"B. Lal bahadur Shastri", correct:false},
            {text:"C. Jawaharlal Nehru", correct:true},
            {text:"D. Atal Bihari Vajpayee", correct:false},
        ]
    },
    {
        question:"Who wrote Harry Potter Series?",
        answers:[
            {text:"A. Rabindranath Tagore", correct:false},
            {text:"B. Leanardo Da vinci", correct:false},
            {text:"C. William Shakespeare", correct:false},
            {text:"D. JK Rowling", correct:true},
        ]
    }
];
const questionelement=document.getElementById("question");
const answerelement=document.getElementById("answer");
const nextelement=document.getElementById("next");
let index=0;
let score=0;
function quiz(){
    index=0;
    score=0;
    nextelement.innerHTML="Next";
    showquestion();
}
function showquestion(){
    reset();
    let current=questions[index];
    let qindex=index+1;
    questionelement.innerHTML=qindex+". "+current.question;
    current.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerelement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selected);
    });
}
function reset(){
    nextelement.style.display="none";
    while(answerelement.firstChild){
        answerelement.removeChild(answerelement.firstChild);
    }
}
function selected(e){
    const selectedbtn=e.target;
    const isCorrect=selectedbtn.dataset.correct==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerelement.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextelement.style.display="block";
}
function showscore(){
    reset();
    questionelement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextelement.innerHTML="Play Again.";
    nextelement.style.display="block";
}
function handlenextBtn(){
    index++;
    if(index<questions.length){
        showquestion();
    }else{
        showscore();
    }
}
nextelement.addEventListener("click",()=>{
    if(index<questions.length){
        handlenextBtn();
    }else{
        quiz();
    }
});
quiz();