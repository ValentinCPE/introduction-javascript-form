window.addEventListener("load", function(){
  check();
  document.getElementById("error-pwd").hidden = true;

  window.addEventListener("keyup", check);
  window.addEventListener("click", check);
})

function check(){
  console.log("h");
  if(validForm()){
    document.getElementById("button").disabled = false;
  } else{
    document.getElementById("button").disabled = true;
  }
}

function validForm(){
  isEmptyForm();
  checkAge();
  checkLogin();
  validPassword();
  confirmPassword()
  updateStrength();
  checkCGU();
  var valid = (!isEmptyForm() && checkAge() && checkLogin() && validPassword() && confirmPassword() && checkCGU());
  console.log(checkCGU());
  return valid;
}

function isEmptyForm(){
  var empty = true;
  if(document.getElementById("name").value !== "" && document.getElementById("firstname").value !== "" && document.getElementById("age").value !== "" && document.getElementById("login").value !== "" && document.getElementById("pwd").value !== "" && document.getElementById("confirm-pwd").value !== ""){
    empty = false;
    document.getElementById("error-form").hidden = true;
  } else {
    empty = true;
    document.getElementById("error-form").hidden = false;
  }
  return empty;
}

function validPassword(){
  pwd = document.getElementById("pwd").value;
  var valid = /[0-9]+/.test(pwd) && /[a-z]/.test(pwd) && /[A-Z]/.test(pwd) && /[^a-zA-Z0-9]+/.test(pwd) && pwd.length >= 8;
  return valid;
}

function confirmPassword(){
  var confirmPwd = document.getElementById("confirm-pwd").value;
  var valid = confirmPwd === pwd;
  document.getElementById("error-confirm").hidden = (valid) ? true : false;
  return valid;
}

function checkLogin(login){
  var valid = /^[a-zA-Z]{1,11}$/.test(document.getElementById("login").value);
  document.getElementById("error-login").innerHTML =(valid) ? "" : "Your login has to contain only letters and less than 12.";
  return true;
}

function checkAge(){
  var valid = document.getElementById("age").value >= 18;
  document.getElementById("error-age").innerHTML = (valid) ? "" : "You have to be major";
  return valid;
}

function checkCGU(){
  var valid = document.getElementById("CGU").checked;
  document.getElementById("error-cgu").innerHTML = (valid) ? "" : "You have to accept the CGU";
  return valid;
}

function updateStrength(){
  document.getElementById("error-pwd").hidden = false;
  var pwd = document.getElementById("pwd").value;
  var strength = 0;

  if(/[0-9]+/.test(pwd)){
    strength += 20;
    document.getElementById("number").hidden = true;
  }else{
    document.getElementById("number").hidden = false;
  }

  if(/[a-z]/.test(pwd)){
    strength += 20;
    document.getElementById("lowercase").hidden = true;
  }else{
    document.getElementById("lowercase").hidden = false;
  }

  if(/[A-Z]/.test(pwd)){
    strength += 20;
    document.getElementById("uppercase").hidden = true;
  }else{
    document.getElementById("uppercase").hidden = false;
  }

  if(/[^a-zA-Z0-9]+/.test(pwd)){
    strength += 20;
    document.getElementById("otherCharacter").hidden = true;
  }else{
    document.getElementById("otherCharacter").hidden = false;
  }

  if(pwd.length >= 8){
    strength += 20;
    document.getElementById("size").hidden = true;
  }else{
    document.getElementById("size").hidden = false;
  }

  document.getElementById("pwd-strength").innerHTML = strength + "%";
  document.getElementById("progress").value = strength;
}
