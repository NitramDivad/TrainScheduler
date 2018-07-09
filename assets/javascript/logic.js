var TrainSchedule = {
        database: {},
        trainName: '',
        destination: '',
        firstDeparture: '',
        frequency: 0,
        trainAdded: false,
    
        InitializeFirebase: function() {
        
            var config = {
                apiKey: "AIzaSyBey8_-49En0YiaiypnAgvKRhwhxroplKA",
                authDomain: "trainscheduler-2e88e.firebaseapp.com",
                databaseURL: "https://trainscheduler-2e88e.firebaseio.com",
                projectId: "trainscheduler-2e88e",
                storageBucket: "",
                messagingSenderId: "88617351484"
            };

            firebase.initializeApp(config);
            this.database = firebase.database();
        },

        AddTrain: function() {
            var trainToAdd;

            this.trainName = $("#train-name").val().trim(); 
            this.destination = $("#destination").val().trim();
            this.firstDeparture = $("#first-departure").val().trim();
            this.frequency = $("#frequency").val().trim();

            trainToAdd = {
                TrainName: this.trainName,
                Destination: this.destination,
                FirstDeparture: this.firstDeparture,
                Frequency: this.frequency
            };

            this.trainAdded = true;
            this.database.ref().push(trainToAdd);
        },

        PopulateSchedule: function(snapshot) {

            this.trainName = snapshot.val().TrainName;
            this.destination = snapshot.val().Destination;
            this.firstDeparture = snapshot.val().FirstDeparture;
            this.frequency = snapshot.val().Frequency;

            var newRow = $("<tr>").append(
                $("<td>").text(this.trainName),
                $("<td>").text(this.destination),
                $("<td>").text(this.frequency),
                $("<td>").text(TrainSchedule.NextTrain()),
                $("<td>").text(TrainSchedule.MinutesAway())
            );
  
            $(".table > tbody").append(newRow);

            if (this.trainAdded) {
                $("tbody tr:last").effect("highlight", {}, 6000);
                this.trainAdded = false;
            }
        },

        NextTrain: function() {
            var arrivalTime = moment().add(TrainSchedule.MinutesAway(), "minutes");
        
            return moment(arrivalTime).format("hh:mm A");
        },

        MinutesAway: function() {
            var formattedDepart = moment(this.firstDeparture, "HH:mm"),
                timeDifference = moment().diff(moment(formattedDepart), "minutes"),
                remainingMins = timeDifference % this.frequency;

            if (timeDifference >= 0)
                return this.frequency - remainingMins;
            else
                return moment(formattedDepart).diff(moment(), "minutes") + 1;
        },

        ClearInputs: function() {

            $("#train-name").val("");
            $("#destination").val("");
            $("#first-departure").val("");
            $("#frequency").val("");
        }
    }


    /***************************************************************/
    $(document).ready(function() {
    /***************************************************************/

        TrainSchedule.InitializeFirebase();

        TrainSchedule.database.ref().on("child_added", function(childSnapshot) {

            TrainSchedule.PopulateSchedule(childSnapshot);
        });
    });


    /***************************************************************/
    $("#btn_addTrain").click(function(event) {
    /***************************************************************/

        event.preventDefault();
        TrainSchedule.AddTrain();
        TrainSchedule.ClearInputs();
    });