
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDU9kqiSdmkY4N3GeyB36lgmIZ7IOCDYBs",
    authDomain: "train-40042.firebaseapp.com",
    databaseURL: "https://train-40042.firebaseio.com",
    projectId: "train-40042",
    storageBucket: "train-40042.appspot.com",
    messagingSenderId: "394679277127"
};
firebase.initializeApp(config);
var database = firebase.database();

console.log(database);



$("#submit").on("click", () => {

    event.preventDefault();



    let name = $(".name").val();
    let destination = $(".dest").val();
    let time = $(".time").val();
    let freq = $(".freq").val();

    database.ref().push({
        
        Name: name,
        Destination: destination,
        time: time,
        frequency: freq,
      });


    $('span').text('train added')

});

database.ref().on("child_added", function(childSnapshot) {
          // full list of items to the well
          $("#trains").append("<div class='trains'><h2 class='traininfo'> " + childSnapshot.val().Name +
          " </h2><h2 class='traindest'> " + childSnapshot.val().Destination +
            " </h2><h2 class='traintime'> " + childSnapshot.val().time +
              " </h2><h2 class='trainfreq'> " + childSnapshot.val().frequency + " </h2></div>");
  

});


console.log('connected');