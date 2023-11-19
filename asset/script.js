var startBtn = document.querySelector(".start-btn");
// = document.querySelector(".time-counter");
var questionEl = document.querySelector(".question");
var choicesContainer= document.querySelector(".choicesContainer");
var submitEl= document.querySelector(".submit");
var hearContainer = document.querySelector(".title-1");
var quizBox = document.querySelector(".question-box");
var lastContiner = document.querySelector("#last-container");

quizBox.style.display="none"
lastContiner.style.display="none"
// startBtn done
// questionEl
// submitEl
var currentQuestionIndex = 0;


// string
var correctAnswer = ["26","25","23"]
var allQuestions = [
    {
        question: "___is the Programing Launguage for the Web?",
        choice: ['JavaScript','English','Arabic','Chinese'],
        correctAnswer: 'A',
    },
    {
        question: "what is string?",
        choice: ['stores a series of characters','dont have any use','take a guess','i do not know'],
        correctAnswer: 'A',

    },
    {
        question: "what is the variable in javaScript?",
        choice: ['container for storing data','nothing','number','i dont know'],
        correctAnswer: 'A',
    },
    {
        question: "what is javaScript",
        choice: ['programing language','coffe shot','nothing','i dont know'],
        correctAnswer: 'A',
    },
    {  
        question: "what is addEventlisten is javaScript?",
        choice: ["its  event holder","kinda like a radio", "nothing", "i dont know"],
        correctAnswer: "A",

    }
    
];
/// add inisial 



/// time counter after start button
var timeInterval;
function timeCounter(){
    timeSec = 60;
    timeEl = document.querySelector('#time');
    timeEl.textContent = timeSec;

    timeInterval = setInterval(function(){
        timeSec--;
        timeEl.textContent = timeSec;
        if (timeSec === 0) {
            clearInterval(timeInterval);
        }
        
    },1000) 

}


/// loop to take the questions

/// function for correct answer[ help on this one ]
function correctAnswer(){
    console.log("hellooooo")
}
///////////////////////////////
function renderQuestion(){
    var currentQuestion = allQuestions[currentQuestionIndex]
    var questionText = currentQuestion.question
    var choiceValues = currentQuestion.choice
    var correctAnswer = currentQuestion.correctAnswer
    var choiceBtns = choicesContainer.querySelectorAll('button');

    questionEl.textContent = questionText
    for (var i=0; i< choiceBtns.length; i++) {
        var btn = choiceBtns[i]
        var choice = choiceValues[i];
        btn.textContent = choice
    }


}


/// event listner after a start button 
/// the time start button must be run once(once: True)

startBtn.addEventListener("click", function(){
    hearContainer.style.display="none"
    quizBox.style.display="block"
timeCounter();
renderQuestion();

}, {once: true})
/// add event listner for choice button
/// the time start button must be run once(once: True)

choicesContainer.addEventListener("click", function(event){
    currentQuestionIndex++
    renderQuestion();
    //add deligate event listener. which one is write and wrong. 
    var target = (correctAnswer);
    console.log('corret')
    // find the nearest button and see if it is right or wrong
},)
/// event listner for submitBtn 
/// the time start button must be run once(once: True)


submitEl.addEventListener("click", function(){
    var addInitial= prompt("insert your initial?")
},{once: true})





