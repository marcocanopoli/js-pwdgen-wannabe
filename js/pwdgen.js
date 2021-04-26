//user info prompt
var firstName = prompt("Inserisci il tuo nome");
var lastName = prompt("Inserisci il tuo cognome");
var favColor = prompt("Qual e' il tuo colore preferito?");

//generate pwd
var myPwd = firstName + lastName + favColor + "21";

//display generated pwd
document.getElementById("password").innerHTML = myPwd;
