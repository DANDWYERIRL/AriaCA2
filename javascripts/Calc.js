
//function to convert the lengths  
function LengthFunction(Inch){
var Inch = document.getElementById("Inch").value*2.54;
document.getElementById("Inch").value=Inch;

var Cm = document.getElementById("Cm").value/2.54;
document.getElementById("Cm").value=Cm;
}

// function to convert the Temps 
function TempFunction(){

var Cel = document.getElementById("Cel").value * 9 / 5 + 32;
document.getElementById("Cel").value = Cel;

var Far = (document.getElementById("Far").value -32) * 5 / 9;
document.getElementById("Far").value = Far;

}