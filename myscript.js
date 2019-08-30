function getMonthLabel(){
  var months = moment.months();
  console.log(months);
  return months;
}
function getMonthProfit() {
  var monthProfit = new Array(12).fill(0);
  console.log(monthProfit);

  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    var date = d.date;
    var amount = Number(d.amount);

    var month = moment(date, "DD/MM/YYYY").month();
    console.log(d);

    monthProfit[month] += amount;
  }
  return monthProfit;
}



function printLineGraph() {
  $.ajax ({
    url: "http://157.230.17.132:3000/todos",
    method: "GET",
    success: function(data) {
      console.log(data);
    },
    error: function() {
      alert("errore");
    }
  });
}




function init() {
    console.log("Hello World");
    moment.locale("it");
    printLineGraph();
    getMonthProfit();
}

$(document).ready(init);
