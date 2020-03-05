// Firebase

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC36Qwyc21vFY7X5xEtRR67IRNe6DZU39I",
  authDomain: "design157-efbeb.firebaseapp.com",
  databaseURL: "https://design157-efbeb.firebaseio.com",
  projectId: "design157-efbeb",
  storageBucket: "design157-efbeb.appspot.com",
  messagingSenderId: "656772067258",
  appId: "1:656772067258:web:e1047c590f10fce4d77783"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Chart JS
const ctx = document.getElementById('myChart').getContext('2d');

let yes = 10;
let no = 01;

function displayChart(yes,no){
  let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Yes', 'No'],
          datasets: [{
              label: 'Number of people bullied',
              data: [yes, no],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',

              ],
              borderWidth: 1
          }]
      },
      options: {
      }
  });
}


function bullied(myChart){

  document.getElementById('yes').onclick = function(){
      yes++;
      myChart.data.datasets[1].data[0] = 10;
      console.log(`number of users bullied: ${yes}`);
      bulliedOrNot.update();
  }
}

function notBullied(myChart){
  document.getElementById('no').onclick = function(){
    no++;
    console.log(`number of users NOT bullied: ${no}`);
    return no;
  }
}

// bullied(myChart);
// myChart.update();

displayChart(yes,no);
// bulliedOrNot(yes, no);
