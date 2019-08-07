var dates = [];
var word = [];
var journal = [];
var color = [];

// var datesInput=document.getElementById('question1');
// console.log(datesInput);
// var wordInput=document.getElementById('question2');
// console.log(wordInput);
// var journalInput=document.getElementById('question3');
// console.log(journalInput);
//
// var messagebox=document.getElementById('added-answers');

var datesInput;
var wordInput;
var journalInput;
var colorInput;
var messagebox;
var usercolor;

function addanswer(answer) {
  usercolor = answer;
}

function insert() {
  datesInput=document.getElementById('question1');
  wordInput=document.getElementById('question2');
  journalInput=document.getElementById('question3');
  //var bird = document.getElementById('hahaha').value;
  //var avgOn = document.getElementById('average').name;
  //console.log(bird);
  // console.log("HAPPY VAL: ", document.getElementById('happy').value);
  // console.log("AVG VAL: ", document.getElementById('average').value);
  // if(document.getElementById('happy').value == "on") {
  //   usercolor = "happy";
  // }
  // else if (document.getElementById('average').value == "on") {
  //   usercolor = "average";
  // }
  // else if (document.getElementById('annoyed').value=="on") {
  //   usercolor = "annoyed";
  // }
  // else if (document.getElementById('anger').value=="on") {
  //   usercolor = "anger";
  // }
  // else if (document.getElementById('sad').value=="on") {
  //   usercolor = "sad";
  // }
  // else if (document.getElementById('anxious').value=="on") {
  //   usercolor = "anxious";
  // }
  // else if (document.getElementById('tired').value=="on") {
  //   usercolor = "tired";
  // }
  // else {
  //   console.log("in else");
  //   usercolor = "";
  // }

  console.log("This is the color:", usercolor);

  messagebox=document.getElementById('added-answers');

  dates.push(datesInput.value);
  console.log(datesInput.value);
  word.push(wordInput.value);
  console.log(wordInput.value);
  journal.push(journalInput.value);
  console.log(journalInput.value);
  color.push(usercolor);
  console.log(color);

  clearandshow();
}

function clearandshow() {
  datesInput.value= "";
  wordInput.value= "";
  journalInput.value= "";
  messagebox.innerHTML = "";
  messagebox.innerHTML += "Dates: " + dates.join(", ") + "<br/>";
  messagebox.innerHTML += "Word of the Day: " + word.join(", ") + "<br/>";
  messagebox.innerHTML += "Journal: " + journal.join(", ") + "<br/>";
  messagebox.innerHTML += "Mood: " + color.join(", ") + "<br/>";

}


// function displayanswers(){
//   for(i=0; i<answers.length; i++) {
//     document.getElementById("added-answers").innerHTML = answers.toString().split(",").join("<br />");
//   }
// }
