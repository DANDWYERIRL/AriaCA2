
//function to convert the lengths  
	function LengthFunction(){
	
		var Inch = document.getElementById("Inch").value;
			if (Inch > -1){
				var ResultIN = Inch*2.54;
				document.getElementById("Inch").value=ResultIN;
			}
			
		var cm = document.getElementById("Cm").value;
			if(cm > -1){
				var ResultCm = cm/2.54;
				document.getElementById("Cm").value=ResultCm;
			}
			
			else{
				alert("Please enter a correct value")
			}
	}

// function to convert the Temps 
	function TempFunction(){
	
		var Cel = document.getElementById("Cel").value
			if(Cel > -273){
				var ResultCel = Cel * 9 / 5 + 32;
				document.getElementById("Cel").value = ResultCel;
			}
			
		var Far = document.getElementById("Far").value
			if(Far >-1000){
				var ResultFar = (Far -32) * 5 / 9;
				document.getElementById("Far").value = ResultFar;
			}		
			else{
				alert("enter a correct value")
			}
	}
	
	
	
	
	