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


let no = 0;
let yes = 0;


//firebase
const db = firebase.database().ref("bullied");


// gets data of yes and no:
function getData(){
  db.on('child_added', function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      var value = childSnapshot.val();

      // for(let i = 0; i < snapshot.length; i++){
      //   console.log(`${key}: ${value}`);
      // }

      console.log(`${key}: ${value}`);

      // only returning one becuase of the for loop and the return statement kicks it out before it can reach No.
      return value;
    });
  });
}


getData();


// On click yes or no buttons in html
document.getElementById('yes').onclick = function(){

  getData();

  yes++;

  // UPDATES TO FIREBASE
  // function updateRecord(yes){
  //   console.log(yes);
  //
  //   // var bullied = {
  //   //   "yes": 0
  //   // };
  //
  //   const userRef = firebase.database().ref('bullied/0/yes');
  //
  //   var updates = {};
  //   updates['bullied/0/yes'];
  //
  //
  //   return firebase.database().ref().update(updates);
  // }


  // UPDATES TO FIREBASE
  function updateRecord(value){
    const userRef = firebase.database().ref('bullied');

    var updates = {};
    // console.log(value.yes);


    updates['/0/yes'] = value;
    console.log(value);

    userRef.update(updates);
    return yes;
    // return firebase.database().ref().update(updates);
  };


  //updating chart
  updateRecord(yes);


  // chart js
  addData(myChart, [yes,no], 0);
  console.log(`number of users bullied: ${yes}`);
  myChart.update();
}





document.getElementById('no').onclick = function(){
  no++;


  // UPDATES TO FIREBASE
  function updateRecord(value){
    const userRef = firebase.database().ref('bullied');

    var updates = {};
    // console.log(value.yes);


    updates['/0/no'] = value;

    // return firebase.database().ref().update(updates);
    userRef.update(updates);
    return no;
  }

  //updating chart
  updateRecord(no);
  console.log(no);

  getData();
  console.log(no);

  // chart js
  addData(myChart, [yes,no], 0);
  console.log(`number of users NOT bullied: ${no}`);
  myChart.update();
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

//updates the chart - Chart JS
function addData(myChart, data, datasetIndex) {
   myChart.data.datasets[datasetIndex].data = data;
   myChart.update();
}




// UPDATES TO FIREBASE
// function updateRecord(value){
//   const userRef = firebase.database().ref('bullied/0');
//
//   var updates = {};
//   // console.log(value.yes);
//
//
//   updates['yes'] = value;
//   updates['no'] = value;
//
//   return firebase.database().ref().update(updates);
// }

// updateRecord(yes);








// // firebase sad life
// function displayBullied(){
//   const dbRef = firebase.database().ref('bullied');
//
//   dbRef.on("child_added", function(snap){
//     const bulliedValue = snap.val();
//     const ids = snap.key;
//   });
// }
//
// displayBullied();
