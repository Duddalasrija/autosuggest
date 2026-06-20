//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchbar = document.getElementById("search-input");
var searchsuggestions = document.getElementById("search-suggestions");
//get user typed data
//use user typed data in the query in the API call
//API call
//append all the search suggestions to div tag in UI
searchbar.addEventListener("input", function(){
    var query = searchbar.value.trim();
    console.log(query);
    fetchSuggestions(query);
});
function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //console.log(data);
        showSuggestions(data);
    })
    .catch(function(err){
        console.error("Error : "+err);
    });
}
function showSuggestions(data){
    var values = data.results;
    if(data.count==0){
        searchsuggestions.innerHTML = "<div>No matching results found</div>";
    }
    else{
        var htmlString = "";
        for(var i=0;i<values.length;i++){
            //<div><span>text</span><span>weight</span></div>
            htmlString+="<div><span class='suggestion-item'>"+values[i].text+"</span><span class='item-weight'>"+values[i].weight+"</span></div>";
        }
        searchsuggestions.innerHTML = htmlString;
    }
}

