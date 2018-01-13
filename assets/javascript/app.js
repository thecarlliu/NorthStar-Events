
//__________________________________SEARCH_FUNCTION______________________________

//_____________________________SEARCH BOX VARIABLES______________________________
//takes input value from the search term box
var searchTerm = $("#search-box").input().val().trim();
//takes input value from the search dropdown box's location choice
var searchLocation = $("#search-dropdown-location").input().val();
//takes input value from the search dropdown box's date choice
var searchDate = $("#search-dropdown-date").input().val();
//takes input value from the search dropdown box's category choice
var searchCategory = $("#search-dropdown-category").input().val();
//makes our search button into a variale
var searchBtn = $("#search-button");
//______________________________________________________________________________

var searchQuery;
//need to put together search inputs and output the whole search input as "searchQuery."

//need function that takes in the whole search input and returns the search results

//need function that takes search results and outputs "results"(pictures+links) appropriately. would also get rid of the category images, leaving only the page header, search box, and results to see.

//Notes: search function is dependent on chosen date range, which must be accounted for through the API somehow

//if user presses logo, returns to page with default appearance with categories, etc.
