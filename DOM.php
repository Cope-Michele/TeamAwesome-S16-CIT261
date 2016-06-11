 
<?php echo"<br><br>"; include '../modules/header.php'; echo"<br><br>"?>
<html lang="en-us">
    <head>
        <meta charset="UTF-8">
       <link href="http://mbutterfield.com/stylesheet.css" rel="stylesheet" type="text/css" media="screen">
        <title>MButterfield.com</title>
        <meta name="author" content="Mikel Butterfield">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    
     <h2>DOM (Document Object Model) Manipulation</h2>
    
    <p>My teaching presentation on this topic is found in the link below and it starts at 34:18</p>
    <a href="https://www.youtube.com/watch?v=AG8sUNE3NgA">https://www.youtube.com/watch?v=AG8sUNE3NgA</a>

    <h4 id="changecolor">DOM can change CSS coloring.</h4><br>
    
    <script>
        function changeColorRed() {
    document.getElementById("changecolor").style.color= "red";
        }
          function changeColorBlue() {
    document.getElementById("changecolor").style.color= "blue";
        }
          function changeColorGreen() {
    document.getElementById("changecolor").style.color= "green";
        }
    </script>
    
    <button onclick="changeColorRed()">red</button>
    <button onclick="changeColorBlue()">blue</button>
    <button onclick="changeColorGreen()">green</button>
    
    <h4 onclick="this.innerHTML='This h4 element was changed using DOM! How cool is that?'">DOM can change what an element says. Click here to see!</h4>
    <h4 onmouseover="hover(this)" onmouseout="notHover(this)" >Or hover here to see.</h4>

<script>
function hover(obj) {
    obj.innerHTML = "This h4 element was changed using DOM! How cool is that?"
}
function notHover(obj) {
    obj.innerHTML = "Or hover here to see"
}
</script>
<h4>You can also change multiple CSS colors at once!</h4>
    <script>
          function changeCSSColor() {
    document.getElementById("links").style.color= "red";
    document.getElementById("header").style.color= "red";
    document.getElementById("footer").style.color= "red";
    document.getElementById("footer").style.color= "red";
        }
        </script>
         <button onclick="changeCSSColor()">Click here to change the CSS color.</button>
</body>
    <?php include '../modules/footer.php'; ?>