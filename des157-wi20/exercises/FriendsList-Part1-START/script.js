// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpnWOQtJ69AOoPYX1jdh4R3rG6Kw7Ov8E",
    authDomain: "friendslist-1ef84.firebaseapp.com",
    databaseURL: "https://friendslist-1ef84.firebaseio.com",
    projectId: "friendslist-1ef84",
    storageBucket: "friendslist-1ef84.appspot.com",
    messagingSenderId: "486659650922",
    appId: "1:486659650922:web:3ba5d52bedc666b8916113"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  
const newBtn = document.getElementById("newbtn");
const editBtns = document.querySelectorAll(".fa-edit");
const addFriendForm = document.getElementById("add-friend");
const editFriendForm = document.getElementById("edit-friend");
// DOM element that holds the unordered list
const friendList = document.querySelector("main ol");
// selects all inputs except for submit
const inputs = document.querySelectorAll("#add-friend input:not([type=submit])");

let theRecord;


// Event listeners to open and close the new friend form. Swaps classes
newBtn.addEventListener("click", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-onscreen";
});

addFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    // Getting values from the form:
    const db = firebase.database().ref('friends');
    const newFriend = {};

    for (let i = 0; i < inputs.length; i++){
        let key = inputs[i].getAttribute('name');
        let value = inputs[i].value;
        newFriend[key] = value;
    }
    console.log(newFriend);
    
    if(newFriend.fname != "" && newFriend.lname != "" && newFriend.email !=""){
        db.push(newFriend, function(){
            resetFormFields();
            addFriendForm.className = "add-friend-offscreen";

            setTimeout(function(){
                window.location.reload(true);
            }, 1000);
        });
    }   
    else{
        addFriendForm.className = "add-friend-offscreen";
    }
});

document.addEventListener('click', function(event){
    if(event.target.matches('.fa-edit')) {
        editFriendForm.className = "edit-friend-onscreen";

        //get the id for the record clicked 
        // Fill the edit form with the correct data to edit.
        thisRecord = event.target.getAttribute('id').slice("2");
        setForm(thisRecord);
    }
},false);

function setForm(recordId){
    const userRef = firebase.database().ref('friends/' + recordId);
    userRef.on("value", function(snap){ theRecord = snap.val(); });

    document.getElementById("fname-edit").value = theRecord.fname;
    document.getElementById("lname-edit").value = theRecord.lname;
    document.getElementById("email-edit").value = theRecord.email;
    document.getElementById("fbook-edit").value = theRecord.facebook;
    document.getElementById("twitter-edit").value = theRecord.twitter;
    document.getElementById("insta-edit").value = theRecord.instagram;
    document.getElementById("linkedin-edit").value = theRecord.linkedin;

    // console.log(theRecord);
}



// Event listeners to EDIT friend form details
for(let i = 0; i < editBtns.length;i++){
    editBtns[i].addEventListener("click", function(event){
        event.preventDefault();
        editFriendForm.className = "edit-friend-onscreen";
    });
}

editFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    updateRecord(thisRecord);
});

function updateRecord(recordId){
    const userRef = firebase.database().ref('friends/' + recordId);
    const theFields = document.querySelectorAll("#edit-friend input:not([type = submit])");
    const eRecord = {};
    let key;
    let value;
    for(let i=0; i < theFields.length; i++){
        key = theFields[i].getAttribute("name");
        value = theFields[i].value;
        eRecord[key] = value;
    }
    userRef.update(eRecord, function(){
        document.querySelector(`#r-${recordId} .name`).innerHTML = `${eRecord.fname} ${eRecord.lname}`;
        editFriendForm.className = "edit-friend-offscreen";
    });
};

function displayFriends(){
    // object in the database
    const dbRef = firebase.database().ref('friends').orderByChild("lname");

    dbRef.on("child_added", function(snap){
        const friends = snap.val();
        const ids = snap.key;

        console.log(friends);
        console.log(ids);

        // creating each list item:
        const theListItem = document.createElement("li");
        theListItem.setAttribute("id", `r-${ids}`);
        theListItem.innerHTML = `


        <div class="name">
            ${friends.fname} ${friends.lname}
        </div>
        
        <div class="email">
            <i class="fas fa-envelope-square"></i>  ${friends.email}
        </div>
        
        <div class="social">
            <a href="${friends.facebook}"><i class="fab fa-facebook-square"></i></a>
            <a href="${friends.twitter}"><i class="fab fa-twitter-square"></i></a>
            <a href="${friends.instagram}"><i class="fab fa-instagram"></i></a>
            <a href="${friends.linkedin}"><i class="fab fa-linkedin"></i></a>
        </div>
        
        <i class="fas fa-edit" id = "e-${ids}"></i>
        <i class="fas fa-times-circle" id = "d-${ids}"></i>
        `;
        friendList.append(theListItem);
    });
}

displayFriends();


function resetFormFields(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fbook").value = "https://facebook.com";
    document.getElementById("twitter").value = "https://twitter.com";
    document.getElementById("insta").value = "https://instagram.com";
    document.getElementById("linkedin").value = "https://linkedin.com";
};


