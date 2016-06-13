<!DOCTYPE html>
<html>
		<head>
			<meta charset="UTF-8">
			<title>Stringify</title>
		</head>
		<body>
			
			<script>
				var Obj = {
					people: [
						{
							name: "kelly",
							student: true
						},
						{
							name: "Kevin",
							student: false	
						}
					]
				};
				
				var string = JSON.stringify(Obj);
				console.log(string)
			</script>
			<p>The stringify is in the console log. Please look there for the object that has been converted to a string.</p>
			<p>For mac press cmd-option-c</p>
			</html>