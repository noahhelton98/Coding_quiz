//Get variables that we will work with for the quiz
var startBtn = $('#start-button');
var submitBtn = $("#submit-button");
var restartBtn = $('#restart');
var questionText = $('#Question');
var optionsEl = $("input[type='radio']");
var labelArr = $("label");
var rightOrWrong = $('#rightOrWrong')
var score = 0;
var header = $('#Heading')
var description = $('#description')

restartBtn.hide();
labelArr.hide();
optionsEl.hide();
submitBtn.hide();
//create questions object
var questions =  {
    questionOne: {
        text: 'what is this?',
        options: ['a', 'b', 'cskakahksh', 'd'],
        answer: ['a']
    }, 
    questionTwo: {
        text: 'what is that?',
        options: ['x', 'y', 'z', 'q'],
        answer: ['x']
    },
    questionThree: {
        text: 'Who?',
        options: ['r', 's', 'f', 'g'],
        answer: ['r']
    },
    questionFour: {
        text: 'Me?',
        options: ['v', 'n', 'k', 'j'],
        answer: ['v']
    },
    questionFive: {
        text: 'Where?',
        options: ['q', 'w', 'e', 'r'],
        answer: ['q']
    }
};


//Timer Function 
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount = 60;


$('#timer').hide();

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        $('#timer').show();
        timerCount--;
        timerElement.textContent = timerCount;

      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        header.show();
        header.text('You ran out of time!! Click the button to refresh and try again');
        submitBtn.hide();
        restartBtn.show();
        restartBtn.on('click', function (){
            location.reload();
        })

      }
    }, 1000);
  }
  


var optionsQ1 = shuffleOptions(questions.questionOne.options);
var optionsQ2 = shuffleOptions(questions.questionTwo.options);
var optionsQ3 = shuffleOptions(questions.questionThree.options);
var optionsQ4 = shuffleOptions(questions.questionFour.options);
var optionsQ5 = shuffleOptions(questions.questionFive.options);

var qArray = [optionsQ1,optionsQ2,optionsQ3,optionsQ4,optionsQ5];
var questionsStrings = [questions.questionOne.text, questions.questionTwo.text, questions.questionThree.text, questions.questionFour.text, questions.questionFive.text];
var answerStrings = [questions.questionOne.answer, questions.questionTwo.answer, questions.questionThree.answer, questions.questionFour.answer, questions.questionFive.answer];


//On click start function 

startBtn.on('click', function(){
    startTimer();
    startBtn.hide();
    header.hide();
    description.hide();
    submitBtn.show();
    optionsEl.show();
    labelArr.show();


    questionText.text(questionsStrings[0]);
    $("label[for='r1']").text(qArray[0][0]);
    $("label[for='r2']").text(qArray[0][1]);
    $("label[for='r3']").text(qArray[0][2]);
    $("label[for='r4']").text(qArray[0][3]);
    

})


var i = 0;

submitBtn.on('click', function(){

    if (i == 0){
        checkIfRight(answerStrings[i]);
        i++; 
        questionText.text(questionsStrings[i]);
        $("label[for='r1']").text(qArray[i][0]);
        $("label[for='r2']").text(qArray[i][1]);
        $("label[for='r3']").text(qArray[i][2]);
        $("label[for='r4']").text(qArray[i][3]);
        $("[name = 'radAnswer']:checked").prop('checked', false);
        console.log(i)    
    }else if (i == 1){
        checkIfRight(answerStrings[i])
        i++;
        questionText.text(questionsStrings[i]);
        $("label[for='r1']").text(qArray[i][0]);
        $("label[for='r2']").text(qArray[i][1]);
        $("label[for='r3']").text(qArray[i][2]);
        $("label[for='r4']").text(qArray[i][3]);
        $("[name = 'radAnswer']:checked").prop('checked', false);
        console.log(i)    

    }else if (i ==2){
        checkIfRight(answerStrings[i])
        i++;
        questionText.text(questionsStrings[i]);
        $("label[for='r1']").text(qArray[i][0]);
        $("label[for='r2']").text(qArray[i][1]);
        $("label[for='r3']").text(qArray[i][2]);
        $("label[for='r4']").text(qArray[i][3]);
        $("[name = 'radAnswer']:checked").prop('checked', false);
        console.log(i)    
    }else if (i ==3){
        checkIfRight(answerStrings[i])
        i++;
        questionText.text(questionsStrings[i]);
        $("label[for='r1']").text(qArray[i][0]);
        $("label[for='r2']").text(qArray[i][1]);
        $("label[for='r3']").text(qArray[i][2]);
        $("label[for='r4']").text(qArray[i][3]);
        $("[name = 'radAnswer']:checked").prop('checked', false);
        console.log(i)    
    } else if (i == 4){
        checkIfRight(answerStrings[i])

        submitBtn.hide();
        restartBtn.show();
        restartBtn.on('click', function (){
            location.reload();
        })
    }
    })

function checkIfRight(answer){

    var answerChoice = $("[name = 'radAnswer']:checked +label").text();
    console.log(answerStrings)
    if (answerChoice == answer){
        score += 10;
        rightOrWrong.text('Correct!');
    }else{
        timerCount -= 10

        rightOrWrong.text('Incorrect');

    }
}

//Shuffle function 
function shuffleOptions(arr){
    var outArr = arr
    for (let i = outArr.length -1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [outArr[i], outArr[j]] = [outArr[j], outArr[i]];
    }
    return outArr
}; 




/* 

for ( var i =0; i > questionsAnswered.length; i++){
 
    startBtn.on('click', function (){
    submitAnswer(questionsAnswered[i])
    startBtn.text('Submit');
    var optionsQ1 = shuffleOptions(questions.questionOne.options)
    var optionsQ2 = shuffleOptions(questions.questionTwo.options)
    var optionsQ3 = shuffleOptions(questions.questionThree.options)
    var optionsQ4 = shuffleOptions(questions.questionFour.options)
    var optionsQ5 = shuffleOptions(questions.questionFive.options)
    
    
    })

}

startBtn.on('click', function(){
    startBtn.text('Submit');
    optionsEl.show();
    labelArr.show();
    questionNumber = 'Q1'


    /* if (questionNumber == 'Q1'){
        questionText.text(questions.questionOne.text);
        for (i = 0; i < labelArr.length; i++){
            labelArr[i].innerHTML = shuffleOptions(questions.questionOne.options[i])
        };
        checkIfRight(questionOne);
        questionNumber = 'Q2';
    }
  


    if (questionNumber == 'Q2'){
        for (i = 0; i < labelArr.length; i++){
            labelArr[i].innerHTML = shuffleOptions(questions.questionOne.options[i])
        }
    }



}) */
    
//submit Button 
/* if (questionNumber == 'Q1'){
    submitBtn.on('click', function (){
        questionText.text(questions.questionOne.text);


        for (i = 0; i < labelArr.length; i++){
            labelArr[i].innerHTML = shuffleOptions(questions.questionOne.options[i])
        }


        var answerChoice = $("[name = 'radAnswer']:checked +label").text();

        if (answerChoice == questions.questionOne.answer){
            score += 10;
            rightOrWrong.text('Correct!');

        }else {
            rightOrWrong.text('Incorrect');
        }
        questionNumber = 'Q2';
        console.log(questionNumber)
    })
}

if (questionNumber === 'Q2'){
    submitBtn.on('click', function (){
        questionText.text(questions.questionTwo.text)
        for (i = 0; i < labelArr.length; i++){
            labelArr[i].innerHTML = shuffleOptions(questions.questionTwo.options[i])
        }
        checkIfRight(quesionTwo)
    })
} */

//submitBtn.on('click', submit(questions.questionOne));
//submitBtn.on('click', submit(questions.questionTwo));
//submitBtn.on('click', submit(questions.questionThree));
//submitBtn.on('click', submit(questions.questionFour));
//submitBtn.on('click', submit(questions.questionFive));


//check if answer is right 

/*
function checkIfRight(number){

    var answerChoice = $("[name = 'radAnswer']:checked +label").text();
    if (answerChoice == questions.number.answer){
        score += 10;
        rightOrWrong.text('Correct!');
    }else{
        rightOrWrong.text('Incorrect');
    }
}
*/

//Shuffle function 
function shuffleOptions(arr){
    var outArr = arr
    for (let i = outArr.length -1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [outArr[i], outArr[j]] = [outArr[j], outArr[i]];
    }
    return outArr
}; 