//user info prompt
var firstName = prompt("Inserisci il tuo nome");
var lastName = prompt("Inserisci il tuo cognome");
var favColor = prompt("Qual e' il tuo colore preferito?");

//display generated pwd
document.getElementById("my_pwd").innerHTML = firstName + lastName + favColor + "21";
