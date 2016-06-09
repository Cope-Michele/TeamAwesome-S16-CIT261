function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to load a image using my JSON objects listed above
function loadRandomImage() {
    
    //create a new object to perform AJAX request
    var request = new XMLHttpRequest();
    
    //will get called when the request ready state changes
    request.onreadystatechange = function() {
        
        //if the request is done (readyState 4) and HTTP status is 200 (successful)
        if (request.readyState === 4) {
            
            //the text retrieved in the request is a string representing a JSON object
            var response = JSON.parse(request.responseText);
            
            // The array we are retrieving has 3 entries, so get a random number between 
            // 0 and 2 so we can chose one of the entries at random
            var randomNumber = getRandomIntInclusive(0,2);
            
            //prepare HTML image to show
            var imagetag = '<img style="width:400px" src="' + response[randomNumber].url + '"/>';
            
            document.getElementById("example-image-container").innerHTML = imagetag;
        }
    };
      
    
    request.open("GET", "image-grab.txt", true);
    request.send();
}