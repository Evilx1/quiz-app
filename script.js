// declaring global variables that are needed
var quiz_counter = 0
var question_no = 1
var score = 0;

// arrays of question and answers 
let question_arr = ["What is the capital of Australia?", "Which planet is known as the Red Planet?", "What is the largest organ in the human body?", "Who wrote the play Romeo and Juliet?"]
let answer_0 = ["Sydney", "Melbourne", "Canberra", "Brisbane"]
let answer_1 = ["Venus", "Mars", "Jupiter", "Saturn"]
let answer_2 = ["Liver", "Heart", "Lungs", "Skin"]
let answer_3 = ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"]

// rather than this you can create an 2d array directly of answers
let array_answers = [answer_0, answer_1, answer_2, answer_3]

// this function will display the question on frontend and increase counter on every click of next button 
// this function will be invoked once by us so the first question is displayed 
function start(){
    if (quiz_counter <= (question_arr.length-1)){
        console.log(question_arr[quiz_counter])
        document.getElementById("question").innerHTML = question_no + ". " + question_arr[quiz_counter]
        document.getElementById("answers1").innerHTML = "A. " + array_answers[quiz_counter][0]
        document.getElementById("answers2").innerHTML = "B. " + array_answers[quiz_counter][1]
        document.getElementById("answers3").innerHTML = "C. " + array_answers[quiz_counter][2]
        document.getElementById("answers4").innerHTML = "D. " + array_answers[quiz_counter][3]

        // increasing the counter here
        quiz_counter++;
        question_no++;

        // console.log(quiz_counter) 

        // this fucntion is created later because in the first invokation its not needed
        // this function resume the user clicks , which will be paused after user has selected any answer option so they cannot change it in real time 
        allowclicks()
    }
    else{
        // after the 4th question every counter will be reset 
         alert(score)
         quiz_counter = 0
         question_no = 1
        //  score will be reset too
         score = 0 
    }
    // this fucntion is created later because in the first invokation its not needed
    // it resets the color of options 
    resetColor()
}

// its check the answer of user and gives the scores and also changes the color to red for wrong answer and green for correct
// use setinterval to show the score in real time if you want 

function checkAnswer(Num) {
    if (question_no == 2) {
        document.getElementById("answers1").classList.toggle("red")
        document.getElementById("answers2").classList.toggle("red")
        document.getElementById("answers3").classList.toggle("green")
        document.getElementById("answers4").classList.toggle("red")
        // console.log("function is running")
        if (Num == 3) {
            score = score + 1
        }
    }
    if (question_no == 3) {
        document.getElementById("answers1").classList.toggle("red")
        document.getElementById("answers2").classList.toggle("green")
        document.getElementById("answers3").classList.toggle("red")
        document.getElementById("answers4").classList.toggle("red")
        // console.log("function is running")
        if (Num == 2) {
            score = score + 1
        }
    }
    if (question_no == 4) {
        document.getElementById("answers1").classList.toggle("red")
        document.getElementById("answers2").classList.toggle("red")
        document.getElementById("answers3").classList.toggle("red")
        document.getElementById("answers4").classList.toggle("green")
        // console.log("function is running")
        if (Num == 4) {
            score = score + 1
        }
    }
    if (question_no == 5) {
        document.getElementById("answers1").classList.toggle("red")
        document.getElementById("answers2").classList.toggle("red")
        document.getElementById("answers3").classList.toggle("green")
        document.getElementById("answers4").classList.toggle("red")
        // console.log("function is running")
        if (Num == 3) {
            score = score + 1
        }
    }

    // after every click of options we blocks the user click of options until next questions are displayed 
    // 
    blockClicks()
console.log("score: "+score)

}

// functions for blocking clicks
function blockClicks() {
   // Disable clicks by attaching an event that prevents default click behavior
   document.querySelectorAll(".btn").forEach((button)=>{
       button.style.pointerEvents = "none"

}) 
}

// function for allowing clicks 
function allowclicks() {
    // enable clicks by attaching an event that prevents default click behavior
    document.querySelectorAll(".btn").forEach((button)=>{
        button.style.pointerEvents = "auto"
 }) 
 }

//  function for reseting color of answers for every new set of questions 
function resetColor() {
    document.getElementById("answers1").classList.remove("red")
    document.getElementById("answers2").classList.remove("red")
    document.getElementById("answers3").classList.remove("red")
    document.getElementById("answers4").classList.remove("red")
    document.getElementById("answers1").classList.remove("green")
    document.getElementById("answers2").classList.remove("green")
    document.getElementById("answers3").classList.remove("green")
    document.getElementById("answers4").classList.remove("green")
}


//  the first ibvokation by us for showing the first set of question 
start()
