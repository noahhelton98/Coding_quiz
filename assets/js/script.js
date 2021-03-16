//Define variables 
var startButton = document.getElementById('start');
var questionText = document.getElementById('Question'); 


var timeEl = document.getElementById("time");
var secondsLeft = 6;

var initialsInput = document.getElementById('Initials');
var scoreVal = 0;


//create questions object
var questions =  {
    questionOne: {
        text: 'what is this?',
        options: ['a', 'b', 'c', 'd'],
        answer: ['a']
    }, 
    questionTwo: {
        text: 'what is that?',
        options: ['x', 'y', 'z', 'q'],
        answer: ['a']
    },
    questionThree: {
        text: 'Who?',
        options: ['a', 'b', 'c', 'd'],
        answer: ['a']
    },
    questionFour: {
        text: 'Me?',
        options: ['a', 'b', 'c', 'd'],
        answer: ['a']
    },
    questionFive: {
        text: 'Where?',
        options: ['a', 'b', 'c', 'd'],
        answer: ['a']
    }
};





function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      //secondsLeft--;
      timeEl.innerHTML = secondsLeft + ' seconds';
      secondsLeft--;
      if(secondsLeft === 0) {
        timeEl.innerHTML = '0 seconds'
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessageTimeOut();
      }
  
    }, 1000);
  }

  function sendMessageTimeOut(){
    questionText.innerHTML = 'Oh no! you ran out of time!'

}



//hide form until start button 
document.getElementById('questionForm').style.display='none';



startButton.addEventListener('click', function(event){
    document.getElementById('description').style.display='none';
    document.getElementById('questionForm').style.display='block';

    var optionsQ1 = shuffleOptions(questions.questionOne.options)
    var optionsQ2 = shuffleOptions(questions.questionTwo.options)
    var optionsQ3 = shuffleOptions(questions.questionThree.options)
    var optionsQ4 = shuffleOptions(questions.questionFour.options)
    var optionsQ5 = shuffleOptions(questions.questionFive.options)

    

    if (startButton.value == 'Start'){
        scoreVal = 0; 
        setTime();

        startButton.value = 'Q1';
        startButton.innerHTML = 'Submit';
        questionText.innerHTML = questions.questionOne.text;
        document.getElementById('optionA').innerHTML = optionsQ1[0];
        document.getElementById('optionB').innerHTML = optionsQ1[1];
        document.getElementById('optionC').innerHTML = optionsQ1[2];
        document.getElementById('optionD').innerHTML = optionsQ1[3];

    }else if (startButton.value == 'Q1'){
        startButton.value = 'Q2';
        questionText.innerHTML = questions.questionTwo.text;
        document.getElementById('optionA').innerHTML = optionsQ2[0];
        document.getElementById('optionB').innerHTML = optionsQ2[1];
        document.getElementById('optionC').innerHTML = optionsQ2[2];
        document.getElementById('optionD').innerHTML = optionsQ2[3];
    }else if (startButton.value == 'Q2'){
        startButton.value = 'Q3';
        questionText.innerHTML = questions.questionThree.text;

    }else if (startButton.value == 'Q3'){
        startButton.value = 'Q4';
        questionText.innerHTML = questions.questionFour.text;


    }else if (startButton.value == 'Q4'){
        startButton.value = 'Q5';
        questionText.innerHTML = questions.questionFive.text;

    }else {
        


        startButton.value = 'start';
        startButton.innerHTML = 'Again?';
    }

});

function shuffleOptions(arr){
    var outArr = arr
    for (let i = outArr.length -1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [outArr[i], outArr[j]] = [outArr[j], outArr[i]];
    }

    return outArr
};



function submitAndCheckAnswer(){
    if (correctAnswers) {
        document.querySelector(".message").textContent = 'Correct! +10!'
        scoreVal = scoreVal + 10 
      }else{
          document.querySelector(".message").textContent = 'Incorrect!'
      }
};

function clearHighscore(){

};
