<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href ="css/style.css">
</head>
<body>
<h1>Google's Prisoner Dilemma</h1>
<h4>Created By John Anthony Radosta</h4>
	<div id="container">
		<div id= "form">
			<form method = "get" name = "prisoner-form">
				<input id="box" type = "number" name = "prisoner-number" placeholder = "Enter # of prisoners..." required>
				<input id="submit" type = "submit" value = "Submit" >
			</form>
		</div>
		<BR>
		<div class ="CSSTableGenerator">
			<table>
				<tr>
					<td><h3>Number of Prisoners Entered:</h3><p id="number-of-prisoners"><?php echo $_GET['prisoner-number']?></p></td>
					<td><h3>Number of Prisoners That Survived:</h3><p id="number-of-survivors"></p></td>
					<td><h3>Number of Prisoners Executed:</h3><p id="number-executed"></p></td>
				</tr>
			</table>
		</div>

			<div class="CSSTableGenerator" >
					<table id="prisoner-table" >
						<tr>
							<td>
								Prisoner #
							</td>
							<td>
								Flag Raised?
							</td>
							<td>
								Actual Hat Color
							</td>
							<td>
								Prisoner Answer
							</td>
							<td>
								Survived/Executed?
							</td>
						</tr>
						<?php
						if(isset($_GET['prisoner-number'])){
							
							for($i = 1; $i <= ($_GET['prisoner-number']); $i++){
								echo '<tr id="prisoner-'.$i.'">
							<td>
								Prisoner #'.$i.'
							</td>
							<td >
								-
							</td>
							<td>
								-
							</td>
							<td>
								-
							</td>
							<td>
								-
							</td>
						</tr>';
							}
						}
						?>
                    
					</table>
			</div>
	</div> <!---Container Div--->
<script src = "js/script.js"></script>	
</body>
<footer style="text-align: center;">
<p>Copyright © 2016 John Anthony Radosta. All Rights Reserved.</p>
</footer>
</html>