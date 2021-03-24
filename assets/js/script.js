//Get variables that we will work with for the quiz
var startBtn = $('#start-button');
var submitBtn = $("#submit-button");
var initialBtn = $('#submit-username');
var restartBtn = $('#restart');
var listQEl = $('#listQs');
var submitInitialsEl = $('#submit-initials');

var questionText = $('#Question');
var optionsEl = $("input[type='radio']");
var labelArr = $("label");
var rightOrWrong = $('#rightOrWrong');

var header = $('#Heading');
var description = $('#description');
var initialContent = $("input[type='text']");

var highscoreEl = $('#highscores');


//Hiding stuff p
listQEl.hide();
initialContent.hide();
restartBtn.hide();
submitBtn.hide();
submitInitialsEl.hide();
highscoreEl.hide();
$('#reload').hide();
$('#clear').hide();

//create questions object
var questions =  {
    questionOne: {
        text: 'What does the DOM stand for?',
        options: ['Document Object Model', 'Developing on Modules', 'Document Orientation Mode', 'Developer Object Model'],
        answer: ['Document Object Model']
    }, 
    questionTwo: {
        text: 'What type of data can be stored in an array?',
        options: ['Strings', 'Numbers', 'Booleans', 'All of the Above'],
        answer: ['All of the Above']
    },
    questionThree: {
        text: 'jQuery is a/an _____.',
        options: ['API', 'DOM', 'programmimg language', 'algorithm'],
        answer: ['API']
    },
    questionFour: {
        text: 'How can we save items to our web browser?',
        options: ['localStorage.setItem()', 'store.items()', 'setItems(localStorage)', 'Document.setStorage(item)'],
        answer: ['localStorage.setItem()']
    },
    questionFive: {
        text: 'How do you declare a JavaScript variable?',
        options: ['var myVariable', 'variable = myVariable', 'v.myVariable', 'declare(variable) = myVariable'],
        answer: ['var myVariable']
    }
};

  

//Other important variables
var optionsQ1 = shuffleOptions(questions.questionOne.options);
var optionsQ2 = shuffleOptions(questions.questionTwo.options);
var optionsQ3 = shuffleOptions(questions.questionThree.options);
var optionsQ4 = shuffleOptions(questions.questionFour.options);
var optionsQ5 = shuffleOptions(questions.questionFive.options);

var qArray = [optionsQ1,optionsQ2,optionsQ3,optionsQ4,optionsQ5];
var questionsStrings = [questions.questionOne.text, questions.questionTwo.text, questions.questionThree.text, questions.questionFour.text, questions.questionFive.text];
var answerStrings = [questions.questionOne.answer, questions.questionTwo.answer, questions.questionThree.answer, questions.questionFour.answer, questions.questionFive.answer];
var score = 0;





//On click start function 
startBtn.on('click', function(event){
    event.preventDefault();

    listQEl.show();
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


//Each question submit button
var i = 0;

submitBtn.on('click', function(event){
    event.preventDefault();


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
        submitInitialsEl.show()

        clearInterval(timer);
        $('#timer').hide();
        checkIfRight(answerStrings[i])

        initialContent.show();
        optionsEl.hide();
        labelArr.hide();

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



//Useful Functions
//Shuffle function 
function shuffleOptions(arr){
    var outArr = arr
    for (let i = outArr.length -1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [outArr[i], outArr[j]] = [outArr[j], outArr[i]];
    }
    return outArr
}; 

//Timer Function 
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount = 60;



function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        //$('#timer').show();
        timerCount--;
        timerElement.textContent = timerCount;

      if (timerCount == 0) {
        // Clears interval
        clearInterval(timer);
        questionText.text('You ran out of time!');
        submitBtn.hide();
        restartBtn.show();
        restartBtn.on('click', function (){
        location.reload();
        })

      }
    }, 1000);
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




//Save score to local storage 
var highscores = JSON.parse(localStorage.getItem("highscores"));
console.log(highscores)

submitInitialsEl.on('click', function(event){
    var newScore = {
        initials: initialContent.val(),
        scores: score
    }
    if (!highscores){
        highscores = [];
        highscores.push(newScore);
    }else{
        highscores.push(newScore);

    }

    localStorage.setItem('highscores', JSON.stringify(highscores))

})




//Highscores page 

var highscoreBtn = $('#viewHighscores');

highscoreBtn.on('click', function(){
    highscoreBtn.hide();
    $('#mainContent').hide();
    highscoreEl.show();
    $('#reload').show();
    $('#clear').show();
    $('#timer').hide();

})

$('#reload').on('click', function(){
    location.reload();
})


$('#clear').on('click', function(){
    localStorage.clear();
})

var retrievedScores = JSON.parse(localStorage.getItem("highscores"));
var scoresTabEl = $('#scoresTable')

if (retrievedScores){
    for (var i = 0; i < retrievedScores.length; i++) {
        console.log( retrievedScores[i].initials)
        console.log( retrievedScores[i].scores)
        scoresTabEl.append( "<tr><td>" +  retrievedScores[i].initials + "</td><td>" + retrievedScores[i].scores + "</td></tr>" );
    
    
        scoresTabEl.innerHTML += "<tr><td>" + retrievedScores[i].initials + "</td><td>" + retrievedScores[i].scores + "</td></tr>";
    }
}





