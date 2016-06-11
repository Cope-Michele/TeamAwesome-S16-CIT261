<html>
    <head>
        <meta charset="UTF-8">
        <title>Local Storage</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src='javascript.js'></script>
    </head>
    <body onload="doShowAll()">        
        <div id="header">

        </div>
        <div id="nav">
            <ul>
                <li><a href='index.php'>Home</a></li>
                <li><a href="3.php">JavaScript Objectives</a></li>
                <li><a href="4.php">DOM Manipulation</a></li>
                <li><a href="5.php">CSS3 Animation</a></li>
                <li><a href="6.php">CSS3 Transition</a></li>
                <li><a href="8.php">Ajax Interaction</a></li>
                <li><a href="9.php">JSON Serialization</a></li>
            </ul>
        </div><br>
        <div id="article">
            <h1>Local Storage</h1>
            <p>
                This is an example of local storage.  The information is collected through a form.  In this case the movie name and rating are collected.  The
                informational is stored in an array called localStorage and displayed in a table created using JavaScript.  A for loop is used to create a new 
                entry position on the table. You can add to the array by clicking
                save and likewise, remove items from the array by selecting remove.  With local storage the array is saved for each time the browser is opened on
                that device.  Onload the table containing the array is created.  When selecting add or remove the onClick is activated causing the table to update.
            </p>
            <div id='form'>
                <fieldset>
                    <form name='movieList'>
                        <h2>Home Movie Collection</h2>
                        <fieldset>
                            <div>
                                <label>Movie Title</label>
                                <!--input the title of the movie as movieTitle-->
                                <!--placeholder is faded text that explains or is an example of input-->
                                <input type='text' placeholder='main title' name='movieTitle'>
                            </div>
                            <div>
                                <label>Movie Rating</label>
                                <!--input movie rating as movieRating-->
                                <input type='text' name='movieRating'>
                                </fieldset>
                                <fieldset>
                                    <div>
                                        <!--button activates JavaScript function SaveItem() which adds object to array-->
                                        <input type=button value="Save"   onclick="SaveItem()">
                                        <!--button activates JavaScript function to remove object from array-->
                                        <input type=button value="Remove" onclick="RemoveItem()">
                                    </div>
                                    <!--id="items_table shows JavaScript function doShowAll() where to find the table for the array-->
                                    <div id="items_table">
                                        <h2>Movie Collection</h2>
                                        <!--id="list" shows JavaScript function doShowAll() where to place array-->
                                        <table id=list></table>
                                        <p>
                                            <!--button activates JavaScript function ClearAll() which removes all objects from array-->
                                            <label><input type=button value="Clear" onclick="ClearAll()">
                                                <i>* Removes all movies from list</i></label>
                                        </p>
                                    </div>
                                </fieldset>
                                </form>
                        </fieldset>
                        </div>
                        <div id="footer">
                            <p>Last Updated: 9 June, 2016</p>
                        </div>
                        </body>
                        </html>