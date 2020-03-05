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

// const yesForm = document.getElementById("yes");
// const noForm = document.getElementById("no");
//
// const inputs = document.querySelectorAll("bullied-form");
//
// const newBullied = {};



// yesForm.addEventListerner("submit", function(event){
//   event.preventDefault();
//   const db = firebase.database().ref("bullied");
//
//   for(let i = 0; i < inputs.length; i++){
//     let key = inputs[i].getAttribute('name');
//     let value = inputs[i].value;
//
//     newBullied[key] = value;
//   }
// });


let no = 0;
let yes = 0;

// On click yes or no buttons in html
document.getElementById('yes').onclick = function(){
  // let yes = 0;
  // bulliedRef.on('child_added', function(data){
  //
  // });

  //firebase
  const db = firebase.database().ref("bullied");
  const newBulliedRef = db.push();

  newBulliedRef.set({
    yes: yes,
    no: no
  });

  // get last
  db.once('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

// LOOK AT LATRE
      for(let i = 0; i < snapshot.length; i++){
        // let key = inputs[i].getAttribute('name');
        // let value = inputs[i].value;
        //
        // newBullied[key] = value;
        console.log(snapshot);
      }

      yes = firebase.database().ref('bullied').limitToLast(1);


      console.log(yes);
      console.log("we've been lied to")
    });
  });

  yes++;

  //updating chart
  addData(myChart, [yes,no], 0);
  console.log(`number of users bullied: ${yes}`);
  myChart.update();
}

document.getElementById('no').onclick = function(){
  no++;

  //firebase
  var no = firebase.database().ref('bullied').limitToLast(1);

  const db = firebase.database().ref("bullied");
  const newBulliedRef = db.push();

  newBulliedRef.set({
    yes: yes,
    no: no
  });

  // update chart
  addData(myChart, [yes,no], 0);
  console.log(`number of users NOT bullied: ${no}`);
  myChart.update();

  // After submission so people cant skew results
  // document.getElementById("no").style.display = "none";
  // document.getElementById("yes").style.display = "none";
}


// Chart JS
const ctx = document.getElementById('myChart').getContext('2d');

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
    options: [{
    }]
});

//updates the chart
function addData(myChart, data, datasetIndex) {
   myChart.data.datasets[datasetIndex].data = data;
   myChart.update();
}


// firebase sad life
function displayBullied(){
  const dbRef = firebase.database().ref('bullied');

  dbRef.on("child_added", function(snap){
    const bulliedValue = snap.val();
    const ids = snap.key;
  });
}

displayBullied();
