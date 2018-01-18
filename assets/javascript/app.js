
// ----------------------Needed for the Search form------------------------
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
  // ------------------------------End of Search form------------------------

//_____________________________SEARCH BOX VARIABLES______________________________
//takes input value from the search term box
var searchTerm = $("#search-box").val();
//takes input value from the search dropdown box's location choice
var searchLocation = $("#search-location").val();
//takes input value from the search dropdown box's date choice
var searchDate = $("#search-date").val();
//takes input value from the search dropdown box's category choice
var searchCategory = $("#search-dropdown-category").val();
//makes our search button into a variale
var searchBtn = $("#search-button");
//______________________________________________________________________________

var searchQuery;

//__________________________________EVENTBRITE API_________________________________

var personalToken = "5W7LA2ZWEN54SKLEAPJ5";
var queryURL = "https://www.eventbriteapi.com/v3/events/search/?token="+personalToken+"&q=baseball";

console.log(queryURL);

  //need to put together search inputs and output the whole search input as "searchQuery."

  //need function that takes in the whole search input and returns the search results

  //need function that takes search results and outputs "results"(pictures+links) appropriately. would also get rid of the category images, leaving only the page header, search box, and results to see.

  //Notes: search function is dependent on chosen date range, which must be accounted for through the API somehow

  //if user presses logo, returns to page with default appearance with categories, etc.