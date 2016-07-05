<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="Michele Cope, Mikel Butterfield, Kelly Johnson, Cassandra Van Lydegraf" content="Team 5">
        <link rel="stylesheet" type="text/css" href="flashcard-style.css">
        <link href='https://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>
        <title>Flashcard App</title>
    </head>
    <body>
        <div id="content">
        <div class="header">
            <h3>State Capital Flashcards</h3>
        </div>
        
        <div class="flashcard-container">
            <div id="start"><button type="button" onclick ="alabama()">Get started by clicking here</button></div>
        </div>
        
        <div id="score"></div>
        <div id="flashcard"></div>
        <div id="flip"></div>
        <div id="right"></div>
        <div id="wrong"></div>
        <div id="nextcard"></div>
        <script>
            function alabama() {


                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/alabama.txt", true);
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
                txt.open("GET", "StateCapitaltxt/montgomery.txt", true);
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
                txt.open("GET", "StateCapitaltxt/alaska.txt", true);
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
                txt.open("GET", "StateCapitaltxt/juneau.txt", true);
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
                txt.open("GET", "StateCapitaltxt/arizona.txt", true);
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
                txt.open("GET", "StateCapitaltxt/phoenix.txt", true);
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
                txt.open("GET", "StateCapitaltxt/arkansas.txt", true);
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
                txt.open("GET", "StateCapitaltxt/little rock.txt", true);
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
                txt.open("GET", "StateCapitaltxt/california.txt", true);
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
                txt.open("GET", "StateCapitaltxt/sacramento.txt", true);
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
                txt.open("GET", "StateCapitaltxt/colorado.txt", true);
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
                txt.open("GET", "StateCapitaltxt/denver.txt", true);
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
                txt.open("GET", "StateCapitaltxt/connecticut.txt", true);
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
                txt.open("GET", "StateCapitaltxt/hartford.txt", true);
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
                txt.open("GET", "StateCapitaltxt/delaware.txt", true);
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
                txt.open("GET", "StateCapitaltxt/dover.txt", true);
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
                txt.open("GET", "StateCapitaltxt/florida.txt", true);
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
                txt.open("GET", "StateCapitaltxt/tallahassee.txt", true);
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
                txt.open("GET", "StateCapitaltxt/georgia.txt", true);
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
                txt.open("GET", "StateCapitaltxt/atlanta.txt", true);
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
                txt.open("GET", "StateCapitaltxt/hawaii.txt", true);
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
                txt.open("GET", "StateCapitaltxt/honolulu.txt", true);
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
                txt.open("GET", "StateCapitaltxt/idaho.txt", true);
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
                txt.open("GET", "StateCapitaltxt/boise.txt", true);
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
                txt.open("GET", "StateCapitaltxt/illinois.txt", true);
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
                txt.open("GET", "StateCapitaltxt/springfield.txt", true);
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
                txt.open("GET", "StateCapitaltxt/indiana.txt", true);
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
                txt.open("GET", "StateCapitaltxt/indianapolis.txt", true);
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
                txt.open("GET", "StateCapitaltxt/iowa.txt", true);
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
                txt.open("GET", "StateCapitaltxt/des moines.txt", true);
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
                txt.open("GET", "StateCapitaltxt/kansas.txt", true);
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
                txt.open("GET", "StateCapitaltxt/topeka.txt", true);
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
                txt.open("GET", "StateCapitaltxt/kentucky.txt", true);
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
                txt.open("GET", "StateCapitaltxt/frankfort.txt", true);
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
                txt.open("GET", "StateCapitaltxt/louisiana.txt", true);
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
                txt.open("GET", "StateCapitaltxt/baton rouge.txt", true);
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
                txt.open("GET", "StateCapitaltxt/maine.txt", true);
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
                txt.open("GET", "StateCapitaltxt/augusta.txt", true);
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
                txt.open("GET", "StateCapitaltxt/maryland.txt", true);
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
                txt.open("GET", "StateCapitaltxt/annapolis.txt", true);
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
                txt.open("GET", "StateCapitaltxt/massachusetts.txt", true);
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
                txt.open("GET", "StateCapitaltxt/boston.txt", true);
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
                txt.open("GET", "StateCapitaltxt/michigan.txt", true);
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
                txt.open("GET", "StateCapitaltxt/lansing.txt", true);
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
                txt.open("GET", "StateCapitaltxt/minnesota.txt", true);
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
                txt.open("GET", "StateCapitaltxt/st. paul.txt", true);
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
                txt.open("GET", "StateCapitaltxt/mississippi.txt", true);
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
                txt.open("GET", "StateCapitaltxt/jackson.txt", true);
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
                txt.open("GET", "StateCapitaltxt/missouri.txt", true);
                txt.send();

                document.getElementById("right").innerHTML = "";
                document.getElementById("wrong").innerHTML = "";
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='jefferson-city()'>Flip the card</button>";
            }
            function jefferson-city() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/jefferson-city.txt", true);
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
                txt.open("GET", "StateCapitaltxt/montana.txt", true);
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
                txt.open("GET", "StateCapitaltxt/helena.txt", true);
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
                txt.open("GET", "StateCapitaltxt/nebraska.txt", true);
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
                txt.open("GET", "StateCapitaltxt/lincoln.txt", true);
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
                txt.open("GET", "StateCapitaltxt/nevada.txt", true);
                txt.send();

                document.getElementById("right").innerHTML = "";
                document.getElementById("wrong").innerHTML = "";
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='carson-city()'>Flip the card</button>";
            }
            function carson-city() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/carson-city.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); new-hampshire();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); new-hampshire();'>incorrect</button>";
            }
            
            function new-hampshire() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/new-hampshire.txt", true);
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
                txt.open("GET", "StateCapitaltxt/concord.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); new-jersey();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); new-jersey();'>incorrect</button>";
            }            

            function new-jersey() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/new-jersey.txt", true);
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
                txt.open("GET", "StateCapitaltxt/trenton.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); new-mexico();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); new-mexico();'>incorrect</button>";
            }             

            function new-mexico {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/new-mexico.txt", true);
                txt.send();

                document.getElementById("right").innerHTML = "";
                document.getElementById("wrong").innerHTML = "";
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='santa-fe()'>Flip the card</button>";
            }
            function santa-fe() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/santa-fe.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); new-york();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); new-york();'>incorrect</button>";
            }             
            
            function new-york() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/new-york.txt", true);
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
                txt.open("GET", "StateCapitaltxt/albany.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); north-carolina();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); north-carolina();'>incorrect</button>";
            } 
            
            function north-carolina() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/north-carolina.txt", true);
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
                txt.open("GET", "StateCapitaltxt/raleigh.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); north-dakota();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); north-dakota();'>incorrect</button>";
            } 
            
            function north-dakota() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/north-dakota.txt", true);
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
                txt.open("GET", "StateCapitaltxt/bismarck.txt", true);
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
                txt.open("GET", "StateCapitaltxt/ohio.txt", true);
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
                txt.open("GET", "StateCapitaltxt/columbus.txt", true);
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
                txt.open("GET", "StateCapitaltxt/oklahoma.txt", true);
                txt.send();

                document.getElementById("right").innerHTML = "";
                document.getElementById("wrong").innerHTML = "";
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='oklahoma-city()'>Flip the card</button>";
            }
            function oklahoma-city() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/oklahoma-city.txt", true);
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
                txt.open("GET", "StateCapitaltxt/oregon.txt", true);
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
                txt.open("GET", "StateCapitaltxt/salem.txt", true);
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
                txt.open("GET", "StateCapitaltxt/pennsylvania.txt", true);
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
                txt.open("GET", "StateCapitaltxt/harrisburg.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); rhode-island();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); rhode-island();'>incorrect</button>";
            } 
            
            function rholde-island() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/rhode-island.txt", true);
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
                txt.open("GET", "StateCapitaltxt/providence.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); south-carolina();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); south-carolina();'>incorrect</button>";
            } 
            
            function south-carolina() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/south-carolina.txt", true);
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
                txt.open("GET", "StateCapitaltxt/columbia.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); south-dakota();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); south-dakota();'>incorrect</button>";
            } 
            
            function south-dakota() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/south-dakota.txt", true);
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
                txt.open("GET", "StateCapitaltxt/pierre.txt", true);
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
                txt.open("GET", "StateCapitaltxt/tennessee.txt", true);
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
                txt.open("GET", "StateCapitaltxt/nashville.txt", true);
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
                txt.open("GET", "StateCapitaltxt/texas.txt", true);
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
                txt.open("GET", "StateCapitaltxt/austin.txt", true);
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
                txt.open("GET", "StateCapitaltxt/utah.txt", true);
                txt.send();

                document.getElementById("right").innerHTML = "";
                document.getElementById("wrong").innerHTML = "";
                document.getElementById("flip").innerHTML = "<button type='button' onclick ='salt-lake-city()'>Flip the card</button>";
            }
            function salt-lake-city() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/salt-lake-city.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); vermont();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); vermont();'>incorrect</button>";
            } 
            
            function vermont() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/vermont.txt", true);
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
                txt.open("GET", "StateCapitaltxt/montpelier.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); virgina();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); virgina();'>incorrect</button>";
            } 
            
            function virginia() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/virginia.txt", true);
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
                txt.open("GET", "StateCapitaltxt/richmond.txt", true);
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
                txt.open("GET", "StateCapitaltxt/washington.txt", true);
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
                txt.open("GET", "StateCapitaltxt/olympia.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); west-virginia();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); west-virginia();'>incorrect</button>";
            } 
            
            function west-virginia() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/west-virginia.txt", true);
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
                txt.open("GET", "StateCapitaltxt/charleston.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); wisconson();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); wisconson();'>incorrect</button>";
            } 
            
            function wisconson() {
                var txt = new XMLHttpRequest();
                txt.onreadystatechange = function () {
                    if (txt.readyState == 4 && txt.status == 200) {
                        document.getElementById("flashcard").innerHTML = txt.responseText;
                    }
                };
                txt.open("GET", "StateCapitaltxt/wisconson.txt", true);
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
                txt.open("GET", "StateCapitaltxt/madison.txt", true);
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
                txt.open("GET", "StateCapitaltxt/wyoming.txt", true);
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
                txt.open("GET", "StateCapitaltxt/cheyenne.txt", true);
                txt.send();

                document.getElementById("flip").innerHTML = "";
                document.getElementById("right").innerHTML = "<button type='button' onclick ='correct(); alabama();' >correct</button>";
                document.getElementById("wrong").innerHTML = "<button type='button' onclick ='incorrect(); alabama();'>incorrect</button>";
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

        </script>
        </div>
    </body>
</html>
