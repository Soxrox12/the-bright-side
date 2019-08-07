var conditions = [];
var userCond = [];

var userInput;
//var msgbox = document.getElementById('added-conditions');

function insert(){
  userInput = document.getElementById('myText');
  userCond.push(userInput.value);
  console.log(userInput.value);
  clearandshow();
}

function clearandshow() {
  userInput.value="";
  document.getElementById('added-conditions').innerHTML += "<br/>" + userCond.toString().split(",").join("<br />");

}
//add new condition to list
//function changeColor() {
  //document.getElementsByClassName("condList").style.backgroundColor="#CADBAE";}
function setColor(id) {
  document.getElementById(id).style.backgroundColor = "#CADBAE";
}
function addCond(condition) {
  if (conditions.length == 0) {
    conditions.push(condition);
    return;
  }
  for (i=0; i<conditions.length; i++) {
    if (condition == conditions[i]) {
      return;
    }
    else {
      conditions.push(condition);
      return;
    }
  }
}

function newCondition() {
  var newbtn = document.createElement("BUTTON");
  var newbtnText = document.createElement("p");
  // newbtnText.innerText = ;
  newbtn.style.color = '';
  newbtn.style.height = '25px';
  newbtn.style.width = '25px';
  newbtn.style.color = 'white';
  newbtn.innerHTML = "+";
  document.getElementById('cond-list').appendChild(newbtn);
  document.getElementById('cond-list').appendChild(newbtnText);

}

// function addCond() {
//   if (conditions.length == 0) {
//     conditions.push(condition);
//   }
//   for (i=0; i<conditions.length; i++) {
//     console.log(condition == conditions[i]);
//     if (condition == conditions[i]) {
//       return;
//     }
//     else {
//       conditions.push(condition);
//     }
//   }
// }

function displayList() {
  for (i=0; i<conditions.length; i++) {
    document.getElementById("added-conditions").innerHTML = conditions.toString().split(",").join("<br />");
  }
}
