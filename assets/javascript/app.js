
function check()
{
  document.getElementById("after_submit").style.visibility = "visible";
//alert('correct!')


var question1 = document.quiz.question1.value; 
var question2 = document.quiz.question2.value; 
var question3 = document.quiz.question3.value;
var correct=0;
  if (question1 == "bibo") 
  {
    correct++; // same as  correct=correct+1
  }
    if (question2  == "Maggot") 
  {
    correct++;
  }
    if (question3 == "Gandalf") 
  {
    correct++;
  }


var messages = ["great job!", "You did okay",  "Try again"];
var pictures = ["assets/image/good4.jpg", "assets/image/good2.jpg", "assets/image/good.jpg"];

var range; 
  if ( correct < 1)
  {
    range = 2; 
  }
    if ( correct > 0 && correct < 3)
  {
    range = 1; 
  }

    if ( correct > 2)
  {
    range =0 ;
  }

document.getElementById('after_submit').style.visibility="visible";
//go to after_sumbit id and turn css style hide to visible
document.getElementById("message").innerHTML = messages[range];
document.getElementById("pictures").src= pictures[range];

document.getElementById("number_correct").innerHTML = "The total number correct is: " + correct;


}

var myVar = setInterval(function() {
  myTimer()
}, 1000);
var seconds = 0;

function myTimer() {
  document.getElementById("timer").innerHTML = seconds++;
  if( seconds === 60){
    check();
    seconds=0;
    //document.getElementById('after_submit').style.visibility="hidden";





  }
}

