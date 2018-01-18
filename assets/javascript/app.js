
//_______________________________MATERIALIZE_________________________________________
$(document).ready(function() {
// Initializes drop-down menus
	$('select').material_select();
// Initializes date menu
    	$('.datepicker').pickadate({
        	selectMonths: true, // Creates a dropdown to control month
        	selectYears: 15, // Creates a dropdown of 15 years to control year,
        	today: 'Today',
        	clear: 'Clear',
        	close: 'Ok',
        	closeOnSelect: false // Close upon selecting a date,
    	});
  });

//__________________________________EVENTBRITE API_________________________________

//_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Search Query Functions_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

//defines our search query variables(parameters), converting them appropriately
function updateQuery() {
	//takes input value from the search term box
	var searchTerm = $("#search-box").val();
	//takes input value from the search dropdown box's location choice
	//every time user makes a location choice, ourprogram will redefine the location or list of locations for the events to be shown once the query is submitted.
	var searchLocation = $("#search-location").val();
	//takes input value from the search dropdown box's date choice
	//every time the user makes a date choice, our program will take that date(s), depending on the range, convert that into a input that the query will be able to take.
	var searchDate = convertDate($("#search-date").val());
	//filters free events
	var checkFree = $("#checkbox-free").val();
	//makes our search button into a variale
	var searchBtn = $("#search-button");
}

//Converts selected date(s) and converts to an input ready to be received by our queryURL
function convertDate(inputDateRange) {
	inputDateRange = inputDateRange.toLowerCase();
	
	inputDateRange.replace("t", "_");

	console.log(inputDateRange);
	return inputDateRange;
};

console.log(convertDate("This Week"));

// //_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Submitting the Query_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
// var personalToken = "5W7LA2ZWEN54SKLEAPJ5";

// $(searchBtn).on("click", function() {
// 	//redefine our search parameters and reset the queryURL;
// 	updateQuery()
// 	//ajax
// });

// var queryURL = "https://www.eventbriteapi.com/v3/events/search/?token="+personalToken+"&q="+searchTerm+"&location.address="+searchLocation+"$location.within=10mi"+searchDate;

// console.log(queryURL);

//   //need to put together search inputs and output the whole search input as "searchQuery."

//   //need function that takes in the whole search input and returns the search results

//   //need function that takes search results and outputs "results"(pictures+links) appropriately. would also get rid of the category images, leaving only the page header, search box, and results to see.

//   //Notes: search function is dependent on chosen date range, which must be accounted for through the API somehow

//   //if user presses logo, returns to page with default appearance with categories, etc.

// //___________________________________Find Events Base On Category_______________________
// var categoryInput;
// var queryURL2 = "https://wwww.eventbriteapi.com/v3/events/search/?token="+personalToken+"&categories="+categoryInput;

// console.log(queryURL2);
























