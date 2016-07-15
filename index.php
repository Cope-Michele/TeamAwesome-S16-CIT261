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

        <div id="content" class="fade-in one">
            <div class="header">
                <h3 class="fade-in two">State Capital Flashcards</h3>
            </div>

            <div id="score"></div>

            <div class="flashcard-container fade-in three" ontouchstart="this.classList.toggle('hover');">
              <div id="start"><button id='button' type="button" onclick ="alabama()">Get started by clicking here</button></div>
                <div id='image'></div>
                <div id='card-text'>
                    <div class="fade-in three" id='text'></div>
                    <div id="flashcard"></div>
                </div>
              </div>

            <div id="card-interactions">
                <div id="flip"></div>
                <div class="fade-in three" id="right"></div>
                <div id="wrong"></div>
                <div id="nextcard" class="fade-in three"></div>
            </div>

            <script src="flashcard-function.js"></script>
        </div>

    </body>
</html>
