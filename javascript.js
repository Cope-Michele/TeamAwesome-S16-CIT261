function SaveItem() {
    //creates the variables from the form/input
    var movieTitle = document.forms.movieList.movieTitle.value;
    var movieRating = document.forms.movieList.movieRating.value;
    //localStorage is the array that is storing the two variables
    localStorage.setItem(movieTitle, movieRating);
    doShowAll();

}

function RemoveItem() {
    var movieTitle = document.forms.movieList.movieTitle.value;
    document.forms.movieList.movieRating.value = localStorage.removeItem(movieTitle);
    doShowAll();
}

function ClearAll() {
    //empty localStorage array 
    localStorage.clear();
    doShowAll();
}

function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Movie Title</th><th>Rating</th></tr>\n";
        var i = 0;
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        if (list == "<tr><th>Movie Title</th><th>Rating</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        document.getElementById('list').innerHTML = list;
    } else {
        alert('Cannot store movie list as your browser do not support local storage');
    }
}

//checks to see if browser is compatable to run localStorage
function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}