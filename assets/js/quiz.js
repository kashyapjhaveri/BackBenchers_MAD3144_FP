const questionsData = JSON.parse(data);
const noOfQuestionToAsk = 10;
const questionIds = uniqueRandoms(noOfQuestionToAsk,0,19);
const userResponse = [];
let cnt = 0, score = 0;
let result = '';

window.onload = function(){
    document.getElementById('pageTitle').innerHTML = localStorage.getItem('quizTopic')+' Quiz';
    document.getElementById('userName').innerHTML = localStorage.getItem('userName');
    fillQuestion();
}

function uniqueRandoms(qty, min, max){ //https://stackoverflow.com/questions/8378870/generating-unique-random-numbers-integers-between-0-and-x/8378910
    let rnd, arr = [];
    do {
        do {
            rnd=Math.floor(Math.random()*max)+min
        }
        while(arr.includes(rnd))
        arr.push(rnd);
    } while(arr.length<qty)
    return arr;
}

function fillQuestion() {
    let question = questionsData[questionIds[cnt]];
    document.getElementById('headerText').innerHTML = 'Question '+ (cnt+1) + ' of ' + noOfQuestionToAsk;
    document.getElementById('questionText').innerHTML = question.question;
    document.getElementById('option1Label').innerHTML = question.options.A;
    document.getElementById('option2Label').innerHTML = question.options.B;
    if (question.options.C) {
        document.getElementById('option3Label').innerHTML = question.options.C;
        document.getElementById('extraOptions').style.display = 'block';
    }
    else {
        document.getElementById('extraOptions').style.display = 'none';
    }
    if (question.options.D) {
        document.getElementById('option4Label').innerHTML = question.options.D;
    }
}

function buildResult(value) {
    let question = questionsData[value.questionId];
    console.log(value)
    result+= '<div class="questionText" id="questionText">'+question.question+'</div>';
    result+= '  <div class="radioGroup">';
    if (value.userResponse == 'A') {
        if (question.answer == 'A') {
            result += 'A <input id="option1" type="radio"  value="A" disabled checked><label for="option1" id="option1Label" class="correctAnswer">' + question.options.A + '</label><br>\n';
            score++;
        }
        else{
            result += 'A <input id="option1" type="radio"  value="A" disabled checked><label for="option1" id="option1Label" class="wrongAnswer">' + question.options.A + '</label><br>\n';
        }
    }
    else{
        if (question.answer == 'A') {
            result += 'A <input id="option1" type="radio"  value="A" disabled><label for="option1" id="option1Label" class="correctAnswer">' + question.options.A + '</label><br>\n';
        }
        else {
            result += 'A <input id="option1" type="radio"  value="A" disabled><label for="option1" id="option1Label">' + question.options.A + '</label><br>\n';
        }
    }

    if (value.userResponse == 'B') {
        if (question.answer == 'B') {
            result+= 'B <input id="option2" type="radio"  value="B" disabled checked><label for="option2" id="option2Label" class="correctAnswer">'+question.options.B+'</label><br>\n';
            score++;
        }
        else{
            result+= 'B <input id="option2" type="radio"  value="B" disabled checked><label for="option2" id="option2Label" class="wrongAnswer">'+question.options.B+'</label><br>\n';
        }
    }
    else{
        if (question.answer == 'B') {
            result+= 'B <input id="option2" type="radio"  value="B" disabled><label for="option2" id="option2Label" class="correctAnswer">'+question.options.B+'</label><br>\n';
        }
        else {
            result += 'B <input id="option2" type="radio"  value="B" disabled><label for="option2" id="option2Label">' + question.options.B + '</label><br>\n';
        }
    }

    if (question.options.C) {
        if (value.userResponse == 'C') {
            if (question.answer == 'C') {
                result += 'C <input id="option3" type="radio"   value="C" disabled checked><label for="option3" id="option3Label" class="correctAnswer">' + question.options.C + '</label><br>\n';
                score++;
            } else {
                result += 'C <input id="option3" type="radio"  value="C" disabled checked><label for="option3" id="option3Label" class="wrongAnswer">' + question.options.C + '</label><br>\n';
            }
        } else {
            if (question.answer == 'C') {
                result += 'C <input id="option3" type="radio"   value="C" disabled><label for="option3" id="option3Label" class="correctAnswer">' + question.options.C + '</label><br>\n';
            } else {
                result += 'C <input id="option3" type="radio"  value="C" disabled><label for="option3" id="option3Label">' + question.options.C + '</label><br>\n';
            }
        }
    }

    if (question.options.D) {
        if (value.userResponse == 'D') {
            if (question.answer == 'D') {
                result += 'D <input id="option4" type="radio"  value="D" disabled checked><label for="option4" id="option4Label" class="correctAnswer">' + question.options.D + '</label>\n';
                score++;
            } else {
                result += 'D <input id="option4" type="radio"   value="D" disabled checked><label for="option4" id="option4Label" class="wrongAnswer">' + question.options.D + '</label>\n';
            }
        } else {
            if (question.answer == 'D') {
                result += 'D <input id="option4" type="radio"  value="D" disabled><label for="option4" id="option4Label" class="correctAnswer">' + question.options.D + '</label>\n';
            } else {
                result += 'D <input id="option4" type="radio"   value="D" disabled><label for="option4" id="option4Label">' + question.options.D + '</label>\n';
            }
        }
    }
    result+= '  </div>';
}

function next() {
    let checkedOption = document.querySelector('input[name=optionGroup]:checked');
    if (checkedOption === null){
        alert("Please select any one option");
        return false;
    }

    userResponse.push({
        "questionNo": cnt,
        "questionId": questionIds[cnt],
        "userResponse" : checkedOption.value
    });
    checkedOption.checked = false;
    cnt++;

    if (cnt < noOfQuestionToAsk){
        fillQuestion();
    }
    else{
        userResponse.forEach(buildResult);
        document.getElementById('questionContainer').innerHTML = result;
        if (score >= 8){
            document.getElementById('headerText').innerHTML = 'Your score is '+score+' and have successfully passed the test. You are now certified in ' + localStorage.getItem('quizTopic');
        }
        else{
            document.getElementById('headerText').innerHTML = 'Unfortunately you did not pass the test. Your score is '+score+'. Please try again later!';
        }
        document.getElementsByTagName('button')[0].innerHTML = 'Finish';
        document.getElementsByTagName('button')[0].onclick = function () {
            window.location = 'index.html';
        }
    }
}






