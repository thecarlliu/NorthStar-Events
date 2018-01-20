
//_______________________________MATERIALIZE_________________________________________
$(document).ready(function() {
// Initializes drop-down menus
	$('select').material_select();
});

// //__________________________________EVENTBRITE API_________________________________

// //_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Search Query Functions_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// //defines our search query variables(parameters), converting them appropriately
// function updateQuery() {
// 	//takes input value from the search term box
// 	var searchTerm = $("#search-box").val();
// 	//takes input value from the search dropdown box's location choice
// 	//every time user makes a location choice, ourprogram will redefine the location or list of locations for the events to be shown once the query is submitted.
// 	var searchLocation = $("#search-location").val();
// 	//takes input value from the search dropdown box's date choice
// 	//every time the user makes a date choice, our program will take that date(s), depending on the range, convert that into a input that the query will be able to take.
// 	var searchDate = convertDate($("#search-date").val());
// 	//filters free events
// 	var checkFree = $("#checkbox-free").val();
// 	//makes our search button into a variale
// 	var searchBtn = $("#search-button");
// }

// //Converts selected date(s) and converts to an input ready to be received by our queryURL
// function convertDate(inputDateRange) {
// 	inputDateRange = inputDateRange.toLowerCase();

// 	inputDateRange.replace("t", "_");

// 	console.log(inputDateRange);
// 	return inputDateRange;
// };

// console.log(convertDate("This Week"));

// //_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Submitting the Query_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// var personalToken = "5W7LA2ZWEN54SKLEAPJ5";

// //When submit button for a query is clicked, commence typical search result features, displaying ten search results, with appropriate images and labels.
// $(searchBtn).on("click", function() {
// 	//redefine our search parameters and reset the queryURL;
// 	updateQuery()
// 	//ajax
// 	$.ajax({
//         url: queryURL,
//         method: "GET"
//     }).done(function(result) {
//         $("#searchResults").empty();
//         console.log(result);

//         //make grid for search results
//     	var row1 = $("<div>", {
//     		class: "row"
//     	});
//     	var row2 = $("<div>", {
//     		class: "row"
//     	});
//     	for (i=0; i<10; i++) {
//     		var column = $("<div>", {
// 	        	class: "col m2"
// 	        });
//             var searchResult = $("<div>", {
//                 height: "200px",
//                 width: "200px",
//                 id: result[i],
//             });
//             var resultImg = $("<img>", {
//             	height: "150px",
//             	width: "150px"
//             	//need result src
//             	//need to position img
//             });
//             var resultLbl = $("<div>", {
//             	height: "50px",
//             	width: "200px",
//             	//need result text
//             	//need to position text
//             });
//             searchResult.append(resultImg);
//             searchResult.append(resultLbl);

//             column.append(searchResult);
//             if (i<5) {
//             	row.append(column);
//             }
//             else {
//             	row2.append(column);
//             }
//         }
//         var searchResults = $("#searchResults");
//         searchResults.append(row1);
//         searchResults.append(row2);
//     });
// });

//_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Finding Events Based on Category_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// var categoryInput;
//Categories: Sports&Fitness, Music, Performances&VisualArts, Food&Drink
// var categoryIds = [108,103,105,110];

// $("#category-links").on("click", ".category-btn", function() {
// 	//redefine our search parameters and reset the queryURL;
// 	//ajax
// 	var cardNumber = $(this).attr("id");
// 	console.log(cardNumber);
// 	if (cardNumber == "card1") {
// 		categoryInput = categoryIds[0];
// 	}
// 	else if (cardNumber == "card2") {
// 		categoryInput = categoryIds[1];
// 	}
// 	else if (cardNumber == "card3") {
// 		categoryInput = categoryIds[2];
// 	}
// 	else if (cardNumber == "card4") {
// 		categoryInput = categoryIds[3];
// 	}
// 	var queryURL2 = "https://wwww.eventbriteapi.com/v3/events/search/?categories="+categoryInput+"&token="+personalToken;
// 	console.log(queryURL2);

// 	$.ajax({
//         url: queryURL2,
//         method: "GET"
//     }).done(function(result) {
//         $("#searchResults").empty();
//         console.log(result);
        //make grid for search results
    	// var row1 = $("<div>", {
    	// 	class: "row"
    	// });
    	// var row2 = $("<div>", {
    	// 	class: "row"
    	// });
    	// for (i=0; i<10; i++) {
    	// 	var column = $("<div>", {
	    //     	class: "col m2"
	    //     });
     //        var searchResult = $("<div>", {
     //            height: "200px",
     //            width: "200px",
     //            id: result[i],
     //        });
     //        var resultImg = $("<img>", {
     //        	height: "150px",
     //        	width: "150px"
     //        	//need result src
     //        	//need to position img
     //        });
     //        var resultLbl = $("<div>", {
     //        	height: "50px",
     //        	width: "200px",
     //        	//need result text
     //        	//need to position text
     //        });
     //        searchResult.append(resultImg);
     //        searchResult.append(resultLbl);

     //        column.append(searchResult);
     //        if (i<5) {
     //        	row.append(column);
     //        }
     //        else {
     //        	row2.append(column);
     //        }
     //    }
     //    var searchResults = $("#searchResults");
     //    searchResults.append(row1);
     //    searchResults.append(row2);
//     });
// });

//_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Last-Viewed Capability(Firebase)_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// var lastViewed = $("#last-viewed");

// // Initialize Firebase
// var config = {
// 	apiKey: "AIzaSyD3Wuyfo6dZXQCtOyWc6PR08dXG1reGRIo",
// 	authDomain: "northstar-events-umn.firebaseapp.com",
// 	databaseURL: "https://northstar-events-umn.firebaseio.com",
// 	projectId: "northstar-events-umn",
// 	storageBucket: "",
// 	messagingSenderId: "666089950491"
// };

// firebase.initializeApp(config);

// // Assign the reference to the database to a variable named 'database'
// //var database = ...
// firebase.initializeApp(config);
// var database = firebase.database();

// database.ref().on("value", function(snapshot) {
	
// });

//_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Weather API_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

var weatherKey = "c18a468eed25695d40abc56ea6271f74";
var minneapolisId = "5037649";
var maplewoodId = "5036588";
var saintPaulId = "5048033";
var minnetonkaId = "5037784";

var weatherURL = "http://api.openweathermap.org/data/2.5/group?id="+minneapolisId+","+maplewoodId+","+saintPaulId+","+minnetonkaId+"&units=imperial"+"&APPID="+weatherKey;

var weatherBox = $("#weather-box");

$(document).ready(function() {
	//ajax
	$.ajax({
        url: weatherURL,
        method: "GET"
    }).done(function(result) {
        $("#weather-box").empty();
        console.log(result);
        console.log(result.list[0]);

        var weather1;
		var weather2;
		var weather3;
		var weather4;

		var weather = [weather1, weather2, weather3, weather4];
		var currentTemps = [];
		var cityNames = [];
		var typesWeather = [];

		for (i=0; i<result.list.length; i++) {
			var currentTemp = result.list[i].main.temp;
			currentTemps.push(currentTemp);
			var cityName = result.list[i].name;
			cityNames.push(cityName);
			var typeWeather = result.list[i].weather[0].description;
			typesWeather.push(typeWeather);

			console.log("current temp is "+currentTemp);
			console.log("city is "+cityName);
			console.log("weather is like "+typeWeather);

			weather[i] = "Weather in "+cityNames[i]+ " is: "+typesWeather[i]+" Current Temperature: "+currentTemps[i]+"˚F";
			var test = weather[i];
			console.log(test);
		}
		var minneapolisWeather = $("<div>", {
			text: weather[0]
		});
		var maplewoodWeather = $("<div>", {
			text: weather[1]
		});
		var saintPaulWeather = $("<div>", {
			text: weather[2]
		});
		var minnetonkaWeather = $("<div>", {
			text: weather[3]
		});

		weatherBox.append(minneapolisWeather, maplewoodWeather, saintPaulWeather, minnetonkaWeather); 
    });
});


























