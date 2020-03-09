// new Chart(document.getElementById("stats-chart"), {
//     type: 'pie',
//     data: {
//       labels: ["Bullied", "Not Bullied"],
//       datasets: [
//         {
//           // label: "Percentage of Student Bullied",
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//           ],
//           data: [59, 41]
//         }
//       ]
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'Percentage of children bullied online (%)'
//       },
//     }
// });

Chart.defaults.global.defaultFontColor = "#fff";
// Chart.defaults.global.fontSize = "20";

new Chart(document.getElementById("stats-chart"), {
    type: 'horizontalBar',
    data: {
      labels: ["Any type of cyberbullying below", "Offensive name-calling",
    "Spreading of false rumors", "Receiving explicit images they didn't ask for",
    "Asking of location, activity, who they're with, by someone other than parent",
    "Physical Threats", "Having explicit images of them shared without conset"],
      datasets: [
        {
          // label: "Percentage of Student Bullied",
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1,
          data: [59, 42, 32, 25, 21, 16, 7],
          pointHoverBackgroundColor: 'red'
        }
      ]
    },
    options: {
      legend: {
         display: false
       },
      title: {
        display: true,
        text: 'Percentage of children bullied online (%)'
      },
      scales: {
        // xAxes: [{
        //   gridLines: {
        //     color: 'rgba(171,171,171,1)',
        //     lineWidth: 1
        //   }
        // }],
        yAxes: [{
         ticks: {
           beginAtZero: true,
           fontSize: 15
         },
         // gridLines: {
         //   color: 'rgba(171,171,171,1)',
         //    lineWidth: 1
         //  }
        }]
      },
    }
});
