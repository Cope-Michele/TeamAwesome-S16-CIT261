function alabama() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/Alabama.txt", true);
                txt.send();
                document.getElementById("start").innerHTML = "";
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='montgomery()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); alaska();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); alaska();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='juneau()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); arizona();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); arizona();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='phoenix()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); arkansas();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); arkansas();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='littlerock()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); california();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); california();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='sacramento()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); colorado();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); colorado();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='denver()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); connecticut();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); connecticut();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='hartford()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); delaware();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); delaware();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='dover()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); florida();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); florida();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='tallahassee()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); georgia();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); georgia();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='atlanta()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); hawaii();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); hawaii();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='honolulu()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); idaho();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); idaho();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='boise()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); illinois();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); illinois();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='springfield()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); indiana();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); indiana();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='indianapolis()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); iowa();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); iowa();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='desmoines()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); kansas();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); kansas();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='topeka()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); kentucky();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); kentucky();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='frankfort()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); louisiana();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); louisiana();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='batonrouge()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); maine();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); maine();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='augusta()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); maryland();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); maryland();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='annapolis()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); massachusetts();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); massachusetts();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='boston()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); michigan();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); michigan();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='lansing()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); minnesota();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); minnesota();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='stpaul()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); mississippi();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); mississippi();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='jackson()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); missouri();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); missouri();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='jeffersoncity()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); montana();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); montana();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='helena()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); nebraska();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); nebraska();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='lincoln()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); nevada();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); nevada();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='carsoncity()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); newhampshire();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); newhampshire();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='concord()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); newjersey();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); newjersey();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='trenton()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); newmexico();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); newmexico();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='santafe()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); newyork();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); newyork();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='albany()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); northcarolina();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); northcarolina();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='raleigh()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); northdakota();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); northdakota();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='bismarck()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); ohio();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); ohio();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='columbus()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); oklahoma();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); oklahoma();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='oklahomacity()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); oregon();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); oregon();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='salem()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); pennsylvania();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); pennsylvania();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='harrisburg()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); rhodeisland();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); rhodeisland();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='providence()'>Flip the card</button>";
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
                 document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); southcarolina();' >correct</button>";
                 document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); southcarolina();'>incorrect</button>";
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
                 document.getElementById("flip").innerHTML = "<button type='button' onclick ='columbia()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); southdakota();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); southdakota();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='pierre()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); tennessee();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); tennessee();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='nashville()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); texas();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); texas();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='austin()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); utah();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); utah();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='saltlakecity()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); vermont();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect();vermont();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='montpelier()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); virginia();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); virginia();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='richmond()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); washington();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); washington();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='olympia()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); westvirgina();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); westvirgina();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='charleston()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); wisconsin();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); wisconsin();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='madison()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); wyoming();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); wyoming();'>incorrect</button>";
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
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='cheyenne()'>Flip the card</button>";
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
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); finished();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); finished();'>incorrect</button>";
            }            

function finished() {
                document.getElementById("right").innerHTML = "";
                document.getElementById("wrong").innerHTML = "";
                document.getElementById("score").innerHTML = "";
                document.getElementById("flashcard").innerHTML = "Your final score: " + (localStorage.score) + "/50";;
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='location.reload();'>Try again</button>";       
          }
                function correct() {
                    if (typeof (Storage) !== "undefined") {
                        if (localStorage.score) {
                            localStorage.score = Number(localStorage.score) + 1;
                        } else {
                            localStorage.score = 0;
                        }
                        document.getElementById("score").innerHTML = "Your score: " + (localStorage.score) + "/50";
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
                        document.getElementById("score").innerHTML = "Your score: " + (localStorage.score) + "/50";
                    } else {
                        document.getElementById("score").innerHTML = "Sorry, you need a device with web storage to save your score.";
                    }
                }
                function reset() {
                    localStorage.score = 0;
                    document.getElementById("score").innerHTML = (localStorage.score) + "/50";
                }