var tableData = data;
var tbody = d3.select("tbody");


tableData.forEach(function(record) {
    var row = tbody.append("tr");
    Object.entries(record).forEach(function([key, value]){
        var cell =row.append("td");
        cell.text(value);
    });
});

var button = d3.selectAll("#filter-btn");
var form = d3.selectAll(".form-control");

//button.on("click", runEnter);
//form.on("submit", runEnter);
form.on('change',runEnter)

function runEnter() {
    d3.event.preventDefault();
    //var inputText= d3.select.text();

    var inputID = d3.select(this).attr('id')
    console.log(inputID)
    var inputValue = d3.select(this).property('value')
    console.log(inputValue)
  
    if (inputID ==="datetime"){
        var filteredData = tableData.filter(record => record.datetime ===inputValue);
    }
    else if (inputID ==="city"){
        var filteredData = tableData.filter(record => record.city ===inputValue);
    }
    else if (inputID ==="state"){
        var filteredData = tableData.filter(record => record.state ===inputValue);
        d3.select
    }
    else if (inputID ==="country"){
        var filteredData = tableData.filter(record => record.country ===inputValue);
    }
    else {
        var filteredData = tableData.filter(record => record.shape ===inputValue);
    }
    tbody.html(" ");
    d3.select(this).property('value', " ");
    
    filteredData.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.entries(dataRow).forEach(function([key,value]){
            var cell = row.append("td")
            cell.text(value)
        })
    });
    //document.getElementByClass("list-group-item").reset(); 
};