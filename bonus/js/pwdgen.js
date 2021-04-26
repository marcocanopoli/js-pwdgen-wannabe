function generatePassword() {

  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var favColor = document.getElementById("color").value;
  var myPwd = firstName + lastName + favColor + "21";
  var blank = "";

  document.getElementById("password").innerHTML = myPwd;

  //reset inputs
  document.getElementById("first_name").value = blank;
  document.getElementById("last_name").value = blank;
  document.getElementById("color").value = blank;
  
}
