// Firebase

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC36Qwyc21vFY7X5xEtRR67IRNe6DZU39I",
  authDomain: "design157-efbeb.firebaseapp.com",
  databaseURL: "https://design157-efbeb.firebaseio.com",
  projectId: "design157-efbeb",
  storageBucket: "design157-efbeb.appspot.com",
  messagingSenderId: "656772067258",
  appId: "1:656772067258:web:9ee56d04fb1480ffd77783"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

let no;
let yes;

//firebase
const db = firebase.database().ref("bullied");


// gets data of yes and no:
function getData(){
  db.on('child_added', function(snapshot){
    var values = snapshot.val();
    var theKey = snapshot.key;

      yes = values.yes;
      no = values.no;

      console.log(`${theKey.no}: ${values.no}`);
      console.log(`${theKey.yes}: ${values.yes}`);



      // Chart JS
      const ctx = document.getElementById('myChart').getContext('2d');

      let myChart = new Chart(ctx, {
          // maintainAspectRatio: true,

          type: 'doughnut',
          data: {
              labels: ['Yes', 'No'],
              datasets: [{
                  label: 'Number of people bullied',
                  data: [values.yes, values.no],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      // "#000000",
                      // "#ffffff"

                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                    //   "#000000",
                    // "#000000"
                  ],
                  borderWidth: 3
              }]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
          }
      });
    });
}

getData();


function percentage(){
  let total = yes + no;
  let percentageBullied = ((yes/total) * 100).toFixed(2);

  console.log(total);
  console.log(percentageBullied);

  document.getElementById("chart-results").innerHTML =
  `Based on the answers of the <b>${total}</b> people who have answered, <b>${percentageBullied}</b>% have been cyberbullied`;

  document.getElementById("chart-results").style.display = "block";
}

// On click yes or no buttons in html

// Clicking Yes
document.getElementById('yes').onclick = function(){

  yes++;

  // Finds statistics about number of people bullied.
  percentage();

  // UPDATES TO FIREBASE
  function updateRecord(value){
    const userRef = firebase.database().ref('bullied');

    var updates = {};

    updates['/0/yes'] = value;
    console.log(value);

    userRef.update(updates);
    return yes;
  };


  //updating chart
  updateRecord(yes);

  // Gets data
  getData();

  document.getElementById("survey-chart").style.display = "block";
  document.getElementById("survey-content").style.display = "none";



  // chart js
  addData(myChart, [yes,no], 0);
  console.log(`number of users bullied: ${yes}`);
  myChart.update();
}



//Clicking No
document.getElementById('no').onclick = function(){
  document.getElementById("survey-chart").style.display = "block";
  document.getElementById("survey-content").style.display = "none";
  no++;


  percentage();

  // UPDATES TO FIREBASE
  function updateRecord(value){
    const userRef = firebase.database().ref('bullied');

    var updates = {};

    updates['/0/no'] = value;

    userRef.update(updates);
    return no;
  }

  //updating chart
  updateRecord(no);
  console.log(no);

  getData();
  // console.log(no);

  // chart js
  addData(myChart, [yes,no], 0);
  console.log(`number of users NOT bullied: ${no}`);

  myChart.update();
}

//updates the chart - Chart JS
function addData(myChart, data, datasetIndex) {
   myChart.data.datasets[datasetIndex].data = data;
   myChart.update();
}
