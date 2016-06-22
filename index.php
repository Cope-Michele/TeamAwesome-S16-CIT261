<!DOCTYPE HTML>
<html lang="en" class="no-js">

<head>
  <meta charset="UTF-8">
  <meta name="author" content="Team 5">
  <link rel="stylesheet" type="text/css" href="/normalize.css">
  <link rel="stylesheet" type="text/css" href="/style.css">
  <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script> <!-- are we allowed to use jQuery? -->
  <script src="modernizer.js"></script> <!-- for browser compatibility checks NOTE: does not fill in the gaps. see youtube "How to use modernizer - SIMPLIFIED" -->
  <title>Flash Cards</title>
</head>
<body>
  <div class="container">
    <?php include '/moduled/header.php'; ?> <!-- see header.php for code -->
    <div id="f1_container">
      <div id="f1_card" class="shadow">
        <div class="front face">
          <p>What is the capital of Indiana?</p>
        </div>
        <div class="back face center">
          <p>Indianapolis is the capital of Indiana.</p>
          <p>Any content can go here.</p>
        </div>
      </div>
    </div>  
  <?php include '/moduled/footer.php'; ?> <!-- see footer.php for code -->
</body>
</html>
