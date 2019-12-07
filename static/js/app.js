// from data.js
var tableData = data;

// YOUR CODE HERE!

function tableDisplay(data) {
    var tbody= d3.select("tbody");
// console.log(tableData);

    data.forEach(function(tableData) {
    // console.log(tableData);
        var row=tbody.append("tr");

    Object.entries(tableData).forEach(function([key,value]) {
        // console.log(key,value);
        var cell=row.append("td");
        cell.text(value);
    });
});
};

// var button=d3.select ("#button");

//button.on("click", function() {

  //  console.log(this);
    
    //var inputElement = d3.select("datetime");
    //var inputValue = inputElement.property("value");
    //console.log(inputValue);
    
    //var filterData= people.filter(date=> tableData.datetime===inputValue);
    //console.log(filterData);


//});

// clear the table for new data
function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // initial display of all UFO sightings
  console.log(tableData);
  tableDisplay(tableData);
  
  // 'Filter Table' button
  var button = d3.select("#filter-btn");
  
  // filter the database and display
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      // display the whole database if the date field has no date
      var filteredData = tableData;
    } else {
      // otherwise, display the filtered dataset  
      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
  
    // display message if no records found
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });

