var dates = [];
var word = [];
var journal = [];
var color = [];

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
