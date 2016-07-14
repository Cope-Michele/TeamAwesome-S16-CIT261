<!DOCTYPE html>
<html>
		<head>
			<meta charset="UTF-8">
			<title>appendChild</title>
			<style>
				button{
					color: #fff;
					background:#000;
				}
				
			</style>
		</head>
			
	<body>
		<button id='addLi'>Press</button>
				
		<ul id="uList">
				<li>Apples</li>
				<li>Bannans</li>
				<li>Oranges</li>
			</ul>
	</body>
		
		<script>
			var button = document.getElementById('addLi');         // button is addLi
			var ul = document.getElementById('uList');             // list is uList
			
			var makeLi = document.createElement('li');             // Within the uList create another li item
			var makeText = document.createTextNode('cellphone');      // Next item will be ....
						
			button.addEventListener('click', function(){
				ul.appendChild(makeLi).appendChild(makeText);
			}, false);
			
			
			</script>
			
</html>

