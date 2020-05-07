// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function (ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");

  Object.entries(ufoSightings).forEach(function ([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});


// var datetime_enter = d3.selectAll("#datetime");
// datetime_enter.on("click", handleSubmit);


var submit_button = d3.selectAll("#filter-btn");
var empty = d3.select("tbody");
submit_button.on("click", handleSubmit);

function handleSubmit() {
  empty.html("");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  let filteredData = tableData;
  if (tableData) {
      filteredData = filteredData.filter(
    row => row.datetime === inputValue
  
      )};

  console.log(filteredData);

  filteredData.forEach(function (filteredReport) {
    console.log(filteredReport);
    var row = tbody.append("tr");

    Object.entries(filteredReport).forEach(function ([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
