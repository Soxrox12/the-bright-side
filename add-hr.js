

var dps = [];  //dataPoints.
  var chart = new CanvasJS.Chart("chartContainer",{
    title :{
       text: "Accepting DataPoints from User Input"
   },
   data: [{
       type: "line",
      dataPoints : dps
   }]
});

// function addDataPointsAndRender() {
//     console.log("in add data");
//     console.log(document.getElementById('xValue'));
//     xValue = Number(document.getElementById('xValue').value);
//     yValue = Number(document.getElementById('yValue').value);
//     dps.push({
//        x: xValue,
//        y: yValue
//    });
//     // chart.render();
//     return 0;
// }

var renderButton = document.getElementById('renderButton');
console.log(renderButton);
//renderButton.addEventListener('click', addDataPointsAndRender());
