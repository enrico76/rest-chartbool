function mesi() {
  var months = moment.months();
  console.log(months);
  return months;
}
function profittomese(data) {
  var profitMonth = new Array(12).fill(0);
  console.log(profitMonth);
  for (var i = 0; i < data.length; i++) {
   var d = data[i];
   var date = d.date;
   var amount = d.amount;
   var amount = Number(d.amount);
   var month = moment(date, "DD/MM/YYYY").month();

   profitMonth[month] += amount;
  }
    return profitMonth;
}

function print() {
  $.ajax({
    url:"http://157.230.17.132:4020/sales",
    method: "GET",
    success: function(data) {
      console.log("sono qui",data);
      var profitti = profittomese(data);
      var tempo = mesi();
      console.log(profitti,tempo);




      var ctx = document.getElementById('myChart');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
              labels: tempo,
              datasets: [{
                  label: 'My First dataset',
                  data: profitti
              }]
          },

          // Configuration options go here
          options: {}
      });

    },
    error: function() {
      alert("errore");
    }
  });
}


function init() {
console.log("ciao");
  moment.locale("it");

print();

}

$(document).ready(init);
