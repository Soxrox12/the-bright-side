var conditions = [];
//add new condition to list
//function changeColor() {
  //document.getElementsByClassName("condList").style.backgroundColor="#CADBAE";}
function setColor(id) {
  document.getElementById(id).style.backgroundColor = "#CADBAE";
}
function addCond(condition) {
  if (conditions.length == 0) {
    conditions.push(condition);
  }
  for (i=0; i<conditions.length; i++) {
    console.log(condition == conditions[i]);
    if (condition == conditions[i]) {
      return;
    }
    else {
      conditions.push(condition);
    }
  }
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
