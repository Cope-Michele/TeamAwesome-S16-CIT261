var startingScore = document.getElementById("start");
var span = document.createElement("span");
var classAttr = document.createAttribute("class");
classAttr.value = "last-score-view";
span.setAttributeNode(classAttr);
var idAttr = document.createAttribute("id");
idAttr.value = "score-preview";
span.setAttributeNode(idAttr);
var spanContent = document.createTextNode("Your last score: " + (localStorage.score) + "/50");
span.appendChild(spanContent);

startingScore.appendChild(span);

function alabama() {
    reset();
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Alabama.txt", true);
    txt.send();
    document.getElementById("start").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='montgomery()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/alabama.png' alt='Alabama'></img>";
}

function montgomery() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Montgomery.txt", true);
    txt.send();

    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Alabama workers built the first rocket to put humans on the moon.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); alaska();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); alaska();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/alabama.png' alt='Alabama'></img>";
}

function alaska() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Alaska.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='juneau()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/alaska.png' alt='Alaska'></img>";
}

function juneau() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Juneau.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The United States paid Russia two cents per acre, for Alaska.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); arizona();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); arizona();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/alaska.png' alt='Alaska'></img>";
}

function arizona() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Arizona.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='phoenix()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/arizona.png' alt='Arizona'></img>";
}

function phoenix() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Phoenix.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Among all of the states, Arizona has the largest percentage of its land designated as Native American lands.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); arkansas();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); arkansas();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/arizona.png' alt='Arizona'></img>";
}

function arkansas() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Arkansas.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='littlerock()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/arkansas.png' alt='Arkansas'></img>";
}
function littlerock() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Little Rock.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "President Bill Clinton grew up in Hot Springs, Arkansas.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); california();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); california();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/arkansas.png' alt='Arkansas'></img>";
}

function california() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/California.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='sacramento()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/california.png' alt='California'></img>";
}

function sacramento() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Sacramento.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "California's Mount Whitney measures as the highest peak in the lower 48 states with a summit at 14,495 feet.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); colorado();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); colorado();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/california.png' alt='California'></img>";
}

function colorado() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Colorado.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='denver()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/colorado.png' alt='Colorado'></img>";
}

function denver() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Denver.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Colorado is the only state in history to turn down hosting the Olympics, in 1976 voters chose not to host the Olympics because of the pollution, population boom, and cost.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); connecticut();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); connecticut();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/colorado.png' alt='Colorado'></img>";
}

function connecticut() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Connecticut.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='hartford()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/connecticut.png' alt='Connecticut'></img>";
}

function hartford() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Hartford.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The first telephone book ever issued was published in New Haven, Connecticut in 1878.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); delaware();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); delaware();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/connecticut.png' alt='Connecticut'></img>";
}

function delaware() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Delaware.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='dover()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/delaware.png' alt='Delaware'></img>";
}

function dover() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Dover.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Delaware was the first state to ratify the United States constitution. It did so on December 7, 1787.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); florida();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); florida();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/delaware.png' alt='Delaware'></img>";
}

function florida() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Florida.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='tallahassee()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/florida.png' alt='Florida'></img>";
}

function tallahassee() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Tallahassee.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Saint Augustine, Florida is the oldest European settlement in North America.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); georgia();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); georgia();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/florida.png' alt='Florida'></img>";
}

function georgia() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Georgia.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='atlanta()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/georgia.png' alt='Georgia'></img>";
}

function atlanta() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Atlanta.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The pirate Edward 'Blackbeard' Teach made a home on Blackbeard Island off the coast of Georgia.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); hawaii();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); hawaii();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/georgia.png' alt='Georgia'></img>";
}

function hawaii() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Hawaii.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='honolulu()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/hawaii.png' alt='Hawaii'></img>";
}

function honolulu() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Honolulu.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The Hawaiian Islands are the projecting tops of the biggest mountain range in the world.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); idaho();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); idaho();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/hawaii.png' alt='Hawaii'></img>";
}

function idaho() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Idaho.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='boise()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/idaho.png' alt='Idaho'></img>";
}

function boise() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Boise.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Hell's Canyon, Idaho is the deepest gorge in America.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); illinois();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); illinois();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/idaho.png' alt='Idaho'></img>";
}

function illinois() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Illinois.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='springfield()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/illinois.png' alt='Illinois'></img>";
}

function springfield() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Springfield.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The world's first Skyscraper was built in Chicago, Illinois 1885.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); indiana();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); indiana();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/illinois.png' alt='Illinois'></img>";
}

function indiana() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Indiana.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='indianapolis()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/indiana.png' alt='Indiana'></img>";
}

function indianapolis() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Indianapolis.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The first long-distance auto race in the U. S. was held May 30, 1911, at the Indianapolis Motor Speedway. The winner averaged 75 miles an hour.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); iowa();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); iowa();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/indiana.png' alt='Indiana'></img>";
}

function iowa() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Iowa.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='desmoines()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/iowa.png' alt='Iowa'></img>";
}

function desmoines() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Des Moines.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The town of Fort Atkinson was the site of the only fort ever built by the U.S. government to protect one Indian tribe from another.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); kansas();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); kansas();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/iowa.png' alt='Iowa'></img>";
}

function kansas() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Kansas.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='topeka()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/kansas.png' alt='Kansas'></img>";
}

function topeka() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Topeka.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The first woman mayor in the United States was Susan Madora Salter, elected to office in Argonia, Kansas in 1887.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); kentucky();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); kentucky();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/kansas.png' alt='Kansas'></img>";
}

function kentucky() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Kentucky.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='frankfort()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/kentucky.png' alt='Kentucky'></img>";
}

function frankfort() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Frankfort.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Kaolin's Restaraunt Louisville, Kentucky boasts being the inventors of Cheeseburgers.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); louisiana();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); louisiana();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/kentucky.png' alt='Kentucky'></img>";
}

function louisiana() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Louisiana.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='batonrouge()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/louisiana.png' alt='Louisiana'></img>";
}

function batonrouge() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Baton Rouge.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Louisiana was named in honor of King Louis XIV.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); maine();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); maine();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/louisiana.png' alt='Louisiana'></img>";
}

function maine() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Maine.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='augusta()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/maine.png' alt='Maine'></img>";
}

function augusta() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Augusta.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Approximately 90% of the nations lobster supply is caught off the coast of Maine.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); maryland();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); maryland();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/maine.png' alt='Maine'></img>";
}

function maryland() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Maryland.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='annapolis()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/maryland.png' alt='Maryland'></img>";
}

function annapolis() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Annapolis.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Maryland gave up some of it's land to form Washington D.C.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); massachusetts();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); massachusetts();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/maryland.png' alt='Maryland'></img>";
}

function massachusetts() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Massachusetts.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='boston()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/massachussets.png' alt='Massachusetts'></img>";
}

function boston() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Boston.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Boston, Massachusetts built the first subway system in the United States in 1897.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); michigan();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); michigan();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/massachussets.png' alt='Massachusetts'></img>";
}

function michigan() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Michigan.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='lansing()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/michigan.png' alt='Michigan'></img>";
}

function lansing() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Lansing.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Standing anywhere in the state a person is within 85 miles of one of the Great Lakes.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); minnesota();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); minnesota();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/michigan.png' alt='Michigan'></img>";
}

function minnesota() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Minnesota.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='stpaul()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/minnesota.png' alt='Minnesota'></img>";
}

function stpaul() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/St. Paul.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The stapler was invented in Spring Valley, Minnesota.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); mississippi();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); mississippi();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/minnesota.png' alt='Minnesota'></img>";
}

function mississippi() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Mississippi.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='jackson()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/mississippi.png' alt='Mississipi'></img>";
}

function jackson() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Jackson.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "University of Mississippi Medical Center accomplished the world's first human lung transplant and the world's first heart transplant.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); missouri();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); missouri();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/mississippi.png' alt='Mississipi'></img>";
}

function missouri() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Missouri.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='jeffersoncity()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/missouri.png' alt='Missouri'></img>";
}

function jeffersoncity() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Jefferson City.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The first successful parachute jump to be made from a moving airplane was made in St. Louis, Missouri in 1912.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); montana();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); montana();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/missouri.png' alt='Missouri'></img>";
}

function montana() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Montana.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='helena()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/montana.png' alt='Montana'></img>";
}

function helena() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Helena.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Montana's first territorial capital, Bannack, has been preserved as a ghost town state park";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); nebraska();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); nebraska();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/montana.png' alt='Montana'></img>";
}

function nebraska() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Nebraska.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='lincoln()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/nebraska.png' alt='Nebraska'></img>";
}

function lincoln() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Lincoln.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "World's largest hand-planted forest is Halsey National Forrest";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); nevada();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); nevada();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/nebraska.png' alt='Nebraska'></img>";
}

function nevada() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Nevada.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='carsoncity()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/nevada.png' alt='Nevada'></img>";
}

function carsoncity() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Carson City.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Nevada is the 2nd largest gold-producing state in the world right behind South Africa.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); newhampshire();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); newhampshire();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/nevada.png' alt='Nevada'></img>";
}

function newhampshire() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/New Hampshire.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='concord()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/new-hampshire.png' alt='New Hampshire'></img>";

}

function concord() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Concord.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The first free public library in the United States was established at Peterborough in 1833.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); newjersey();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); newjersey();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/new-hampshire.png' alt='New Hampshire'></img>";
}

function newjersey() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/New Jersey.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='trenton()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/new-jersey.png' alt='New Jersey'></img>";
}

function trenton() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Trenton.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Atlantic City is where the street names came from for the game monopoly";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); newmexico();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); newmexico();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/new-jersey.png' alt='New Jersey'></img>";
}

function newmexico() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/New Mexico.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='santafe()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/new-mexico.png' alt='New Mexico'></img>";
}

function santafe() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Santa Fe.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "White Sands National Monument is a desert, not of sand, but of gleaming white gypsum crystals";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); newyork();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); newyork();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/new-mexico.png' alt='New Mexico'></img>";
}

function newyork() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/New York.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='albany()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/new-york.png' alt='New York'></img>";
}

function albany() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Albany.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The first American chess tournament was held in New York in 1843";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); northcarolina();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); northcarolina();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/new-york.png' alt='New York'></img>";
}

function northcarolina() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/North Carolina.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='raleigh()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/north-carolina.png' alt='North Carolina'></img>";
}

function raleigh() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Raleigh.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Krispy Kreme Doughnut was founded here. That's right. That delicous donught.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); northdakota();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); northdakota();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/north-carolina.png' alt='North Carolina'></img>";
}

function northdakota() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/North Dakota.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='bismarck()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/north-dakota.png' alt='North Dakota'></img>";
}

function bismarck() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Bismarck.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "North Dakota passed a bill in 1987 making English the official state language";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); ohio();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); ohio();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/north-dakota.png' alt='North Dakota'></img>";
}

function ohio() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Ohio.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='columbus()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/ohio.png' alt='Ohio'></img>";
}

function columbus() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Columbus.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Cleveland boasts America's first traffic light. It began on Aug. 5, 1914";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); oklahoma();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); oklahoma();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/ohio.png' alt='Ohio'></img>";
}

function oklahoma() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Oklahoma.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='oklahomacity()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/oklahoma.png' alt='Oklahoma'></img>";
}

function oklahomacity() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Oklahoma City.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "An Oklahoman, Sylvan Goldman, invented the first shopping cart";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); oregon();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); oregon();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/oklahoma.png' alt='Oklahoma'></img>";
}

function oregon() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Oregon.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='salem()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/oregon.png' alt='Oregon'></img>";
}

function salem() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Salem.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Oregon has more ghost towns than any other state.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); pennsylvania();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); pennsylvania();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/oregon.png' alt='Oregon'></img>";
}

function pennsylvania() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Pennsylvania.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='harrisburg()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/pennsylvania.png' alt='Pennsylvania'></img>";
}

function harrisburg() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Harrisburg.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Little League Baseball's first World Series was held in 1946 in Williamsport.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); rhodeisland();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); rhodeisland();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/pennsylvania.png' alt='Pennsylvania'></img>";
}

function rhodeisland() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Rhode Island.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='providence()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/rhode-island.png' alt='Rhode Island'></img>";
}

function providence() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Providence.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Rhode Island was the last of the original thirteen colonies to become a state";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); southcarolina();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); southcarolina();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/rhode-island.png' alt='Rhode Island'></img>";
}

function southcarolina() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/South Carolina.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='columbia()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/south-carolina.png' alt='South Carolina'></img>";
}

function columbia() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Columbia.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The Board of Public Works in Gaffney built an elevated water storage tank in the shape of a peach in 1981";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); southdakota();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); southdakota();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/south-carolina.png' alt='South Carolina'></img>";
}

function southdakota() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/South Dakota.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='pierre()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/south-dakota.png' alt='South Dakota'></img>";
}

function pierre() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Pierre.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The largest underground gold mine is the Homestake Mine in Lead.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); tennessee();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); tennessee();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/south-dakota.png' alt='South Dakota'></img>";
}

function tennessee() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Tennessee.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='nashville()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/tennessee.png' alt='Tennessee'></img>";
}

function nashville() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Nashville.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Bristol is known as the Birthplace of Country Music.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); texas();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); texas();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/tennessee.png' alt='Tennessee'></img>";
}

function texas() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Texas.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='austin()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/texas.png' alt='Texas'></img>";
}

function austin() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Austin.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The King Ranch in Texas is bigger than the state of Rhode Island.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); utah();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); utah();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/texas.png' alt='Texas'></img>";
}

function utah() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Utah.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='saltlakecity()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/utah.png' alt='Utah'></img>";
}

function saltlakecity() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Salt Lake City.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The average snowfall in the mountains near Salt Lake City is 500 inches.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); vermont();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect();vermont();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/utah.png' alt='Utah'></img>";
}

function vermont() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Vermont.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='montpelier()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/vermont.png' alt='Vermont'></img>";
}

function montpelier() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Montpelier.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Until 1996, Vermont was the only state without a Wal-Mart.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); virginia();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); virginia();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/vermont.png' alt='Vermont'></img>";
}

function virginia() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Virginia.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='richmond()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/virginia.png' alt='Virginia'></img>";
}
function richmond() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Richmond.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Seven Presidents are buried in Virginia: Washington, Jefferson, Madison, Monroe, Tyler, Taft and Kennedy.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); washington();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); washington();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/virginia.png' alt='Virginia'></img>";
}

function washington() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Washington.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='olympia()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/washington.png' alt='Washington'></img>";
}

function olympia() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Olympia.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "The world's first soft-serve ice cream machine was located in an Olympia Dairy Queen.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); westvirgina();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); westvirgina();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/washington.png' alt='Washington'></img>";
}

function westvirgina() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/West Virginia.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='charleston()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/west-virginia.png' alt='West Virginia'></img>";
}
function charleston() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Charleston.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Nearly 75% of West Virginia is covered by forests.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); wisconsin();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); wisconsin();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/west-virginia.png' alt='West Virginia'></img>";
}

function wisconsin() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Wisconsin.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='madison()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/wisconson.png' alt='Wisconson'></img>";
}

function madison() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Madison.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Wisconsin is the dairy capital of the United States.";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); wyoming();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); wyoming();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/wisconson.png' alt='Wisconson'></img>";
}

function wyoming() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Wyoming.txt", true);
    txt.send();
    document.getElementById("right").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("text").innerHTML = "What is the capital of";
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='cheyenne()'>Flip the card</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/whyoming.png' alt='Wyoming'></img>";
}

function cheyenne() {
    var txt = new XMLHttpRequest();
    txt.onreadystatechange = function () {
        if (txt.readyState == 4 && txt.status == 200) {
            document.getElementById("flashcard").innerHTML = txt.responseText;
        }
    };
    txt.open("GET", "StateCapitaltxt/Cheyenne.txt", true);
    txt.send();
    document.getElementById("flip").innerHTML = "";
    document.getElementById("text").innerHTML = "Wyoming leads the country in coal production in 1994 with 3 million tons per week";
    document.getElementById("right").innerHTML = "<button id='button' type='button' onclick ='correct(); finished();' >Yes! &nbsp; ✗</button>";
    document.getElementById("wrong").innerHTML = "<button id='button' type='button' onclick ='incorrect(); finished();'> Darn &nbsp; ✗</button>";
    document.getElementById('image').innerHTML = "<img id='image' src='state-images/whyoming.png' alt='Wyoming'></img>";
}

function finished() {
    var finalImg = document.getElementById("image");
    var finalImgClass = document.createAttribute("class");
    finalImgClass.value = "final-image";
    finalImg.setAttributeNode(finalImgClass);

    var finalScore = document.getElementById("flashcard");
    var finalScoreClass = document.createAttribute("class");
    finalScoreClass.value = "final-score";
    finalScore.setAttributeNode(finalScoreClass);
    
    document.getElementById("right").innerHTML = "";
    document.getElementById("text").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("score").innerHTML = "";  
    document.getElementById('image').innerHTML = "<img src='state-images/united-states.png' alt='United States'></img>";
    document.getElementById("flashcard").innerHTML = "Your final score " + (localStorage.score) + "/50";
    ;
    document.getElementById("flip").innerHTML = "<button id='button' type='button' onclick ='location.reload();'>Try again</button>";
}
function correct() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.score) {
            localStorage.score = Number(localStorage.score) + 1;
        } else {
            localStorage.score = 0;
        }
        document.getElementById("score").innerHTML = "Your score " + (localStorage.score) + "/50";
    } else {
        document.getElementById("score").innerHTML = "Sorry, you need a device with web storage to save your score.";
    }
}
function incorrect() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.score) {
            localStorage.score = Number(localStorage.score) + 0;
        } else {
            localStorage.score = 0;
        }
        document.getElementById("score").innerHTML = "Your score " + (localStorage.score) + "/50";
    } else {
        document.getElementById("score").innerHTML = "Sorry, you need a device with web storage to save your score.";
    }
}
function reset() {
    localStorage.score = 0;
    document.getElementById("score").innerHTML = "Your score " + (localStorage.score) + "/50";
}


