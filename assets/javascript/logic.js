

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBey8_-49En0YiaiypnAgvKRhwhxroplKA",
    authDomain: "trainscheduler-2e88e.firebaseapp.com",
    databaseURL: "https://trainscheduler-2e88e.firebaseio.com",
    projectId: "trainscheduler-2e88e",
    storageBucket: "",
    messagingSenderId: "88617351484"
  };
  firebase.initializeApp(config);






// var StarTrek = {
//     arrGifTopics: [],
//     offSet: 0,
//     currentTopic: "",

//     BuildTheButtons: function() {

//         $(".gifButtons").empty();

//         this.arrGifTopics.forEach(function(item) {
//             var button = $("<button>");
//             button.addClass("btn btn-primary btn-topic");
//             button.attr("data-name",item);
//             button.text(item);
//             $(".gifButtons").append(button);
//         });
//     },

//     AddAButton: function(newTopic) {

//         this.arrGifTopics.push(newTopic);
//         $("#input_StarTrek").val("");

//         this.BuildTheButtons();
//     },

//     CallAJAX: function(topic) {
//         var apiURL = "https://api.giphy.com/v1/gifs/search?q=",
//             apiKey = "&api_key=d03x0UXViZqHxHo74p52vH3b2iTSF52G",
//             apiLimit = "&limit=10",
//             apiOffset = "&offset=" + (this.offSet).toString(),
//             queryURL,
//             multiTopic;
            
            
//         if (topic.length === 1)
//             queryURL = apiURL + topic + apiKey + apiLimit;
//         else {
//             for (i=0; i < topic.length; i++) {
//                 if (i > 0)
//                     multiTopic += "+" + topic[i];
//                 else
//                     multiTopic = topic[i];
//             }

//             queryURL = apiURL + multiTopic + apiKey + apiLimit;
//         }

//         if (this.offSet > 0)
//             queryURL += apiOffset;

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//             }).then(function(response) {
//                 console.log((response.data).length)
//                 if ((response.data).length > 0)
//                     StarTrek.ProcessAJAX(response.data)
//                 else {
//                     $("#add-ten").addClass("d-none");
//                     $("#no-records").removeClass("d-none");
//                 }
//             });
//     },

//     ProcessAJAX: function(topicGifs) {
//         var gifDiv,
//             gifURL,
//             stillURL,
//             gifImage,
//             gifRating,
//             rating;

//         $("#no-records").addClass("d-none");
//         $("#add-ten").removeClass("d-none");

//         topicGifs.forEach(function(item) {

//             gifURL = item.images.fixed_height.url;
//             stillURL = item.images.fixed_height_still.url;
//             gifRating = (item.rating).toUpperCase();

//             gifDiv = $("<div>");
//             gifDiv.addClass("st_gifDiv");
//             gifImage = $("<img class='gifImage'>" + "<br>");
//             gifImage.attr("src", stillURL);
//             gifImage.attr("alt", item.images.title);
//             gifImage.attr("data-still", stillURL);
//             gifImage.attr("data-animate", gifURL);
//             gifImage.attr("data-state", "still");

//             rating = $('<p class="gifRating">').text(gifRating + " Rating");

//             gifDiv.prepend(gifImage);
//             gifDiv.append(rating);
                
//             if (this.offSet === 0)
//                 $(".gifsGrouping").append(gifDiv);
//             else
//                 $(".gifsGrouping").prepend(gifDiv);
//         })
//     },

//     PlayGif: function(whichOne) {

//         $(whichOne).attr("src", $(whichOne).attr("data-still"));
//         $(whichOne).attr("data-state", "still");
//     },

//     PauseGif: function(whichOne) {

//         $(whichOne).attr("src", $(whichOne).attr("data-animate"));
//         $(whichOne).attr("data-state", "animate");
//     }
// };


// //***************************************************************/
// $(document).ready(function() {
// //***************************************************************/

//     StarTrek.arrGifTopics = ["Captain Kirk","Captain Picard",
//                              "Klingon","Romulan",
//                              "Ferengi","Wrath of Khan",
//                              "Tribbles","Sulu",
//                              "Spock","Uhura"
//                             ];

//     StarTrek.BuildTheButtons();
// });


// //***************************************************************/
// $("#add-topic").bind("click", function(event) {
// //***************************************************************/

//     event.preventDefault(); 

//     strInput = $("#input_StarTrek").val().trim();
//     if (strInput != '') 
//         StarTrek.AddAButton(strInput);
// });


// //***************************************************************/
// $('#input_StarTrek').keypress(function(event) {
// //***************************************************************/   

//     if (event.keyCode == '13')      //ensures ENTER does not refresh
//         event.preventDefault();
//  });


// //***************************************************************/
// $(document).on("click", ".btn-topic", function() {
// //***************************************************************/

//     var whichTopic = $(this).attr("data-name"),
//         arrWhichTopic = whichTopic.match(/\b(\w+)\b/g)  //splits out to array separate words

//     $(".gifsGrouping").empty();
//     StarTrek.numRequests = 0;
//     $("#add-ten").addClass("d-none");

//     StarTrek.currentTopic = arrWhichTopic;
//     StarTrek.CallAJAX(arrWhichTopic);
// });


// //***************************************************************/
// $(document).on("click" , ".gifImage" , function() {
// //***************************************************************/

//     var state = $(this).attr("data-state");
    
//     if (state === "still")
//         StarTrek.PauseGif(this);
//     else
//         StarTrek.PlayGif(this);
// });


// //***************************************************************/
// $(document).on("click" , "#add-ten" , function() {
// //***************************************************************/
    
//     StarTrek.offSet += 10;
//     StarTrek.CallAJAX(StarTrek.currentTopic);
// });