
//__________________________________SEARCH_FUNCTION______________________________

//_____________________________SEARCH BOX VARIABLES______________________________
//takes input value from the search term box
var searchTerm = $("#search-box").val().trim();
//takes input value from the search dropdown box's location choice
var searchLocation = $("#search-dropdown-location").val();
//takes input value from the search dropdown box's date choice
var searchDate = $("#search-dropdown-date").val();
//takes input value from the search dropdown box's category choice
var searchCategory = $("#search-dropdown-category").val();
//makes our search button into a variale
var searchBtn = $("#search-button");
//______________________________________________________________________________

var searchQuery;

//__________________________________EVENTBRITE API_________________________________

var anonToken = "VGEU2SNWNEOVQCJBFGK4";
var personalToken = "5W7LA2ZWEN54SKLEAPJ5";
var apiKey = "5QT4AAQPSR7LV42RXO";
var clientURL = "https://www.eventbrite.com/oauth/authorize?response_type=token&client_id="+clientKey;
var clientKey = apiKey;
var queryURL = "https://www.eventbriteapi.com/v3/users/me/?token="+token;
var token = personalToken;

console.log(queryURL);

//need function that takes in the whole search input and returns the search results

//need function that takes search results and outputs "results"(pictures+links) appropriately. would also get rid of the category images, leaving only the page header, search box, and results to see.

//Notes: search function is dependent on chosen date range, which must be accounted for through the API somehow

//if user presses logo, returns to page with default appearance with categories, etc.
