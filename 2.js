var num1 = prompt("Enter First Number:");
var num2 = prompt("Enter 2nd Number:");
num1 = parseInt(num1);
num2 = parseInt(num2);
var jog = num1+num2;
var bijog =num1-num2;
var gun = num1*num2;
var vag =num1/num2;
var remainder =num1%num2;

document.write( num1+ "+" +num2+ "="+ jog+"<br>");
document.write( num1+ "-" +num2+ "="+ bijog+"<br>");
document.write(num1+ "*" +num2+ "="+ gun+"<br>");
document.write(num1+ "/" +num2+ "="+ vag+"<br>");
document.write(num1+ "%" +num2+ "="+ remainder+"<br>");
