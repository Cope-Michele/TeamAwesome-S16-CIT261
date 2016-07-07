<!DOCTYPE html>
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
            <div id="score"></div>
            <div class="flashcard-container" ontouchstart="this.classList.toggle('hover');">
                <div id="start"><button id='button' type="button" onclick ="alabama()">Get started by clicking here</button></div>
                <div id='image'></div>
                <div id="flashcard"></div>
            </div>

            <div id="flip"></div>
            <div id="right"></div>
            <div id="wrong"></div>
            <div id="nextcard"></div>
            <script src="flashcard-function.js"></script>
        </div>
    </body>
</html>
