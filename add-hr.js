

////var dps = [];  //dataPoints.
  //var chart = new CanvasJS.Chart("chartContainer",{
    //title :{
      // text: "Accepting DataPoints from User Input"
  // },
//   data: [{
//       type: "line",
//      dataPoints : dps
//   }]
//});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var inputArr = [];

function addInputData(){
  xValue = Number(document.getElementById('xValue').value);
  yValue = Number(document.getElementById('yValue').value);
  inputArr.push({
     x: xValue,
     y: yValue
   });
   console.log(inputArr);
   drawChart();
 // return inputArr;
}

// function drawChart() {
//   xValue = Number(document.getElementById('xValue').value);
//   yValue = Number(document.getElementById('yValue').value);
//   data.push({
//      x: xValue,
//      y: yValue
//  });

function drawChart(){
  var data = google.visualization.arrayToDataTable(inputArr);

  var options = {
    title: 'Heart Rate Trends',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}


//  function addDataPointsAndRender() {
//      console.log("in add data");
//      console.log(document.getElementById('xValue'));
//      xValue = Number(document.getElementById('xValue').value);
//      yValue = Number(document.getElementById('yValue').value);
//      data.push({
//         x: xValue,
//         y: yValue
//     });
//      chart.render();
//      return 0;
//  }
//
// var renderButton = document.getElementById('renderButton');
// console.log(renderButton)
//renderButton.addEventListener('click', addDataPointsAndRender());
