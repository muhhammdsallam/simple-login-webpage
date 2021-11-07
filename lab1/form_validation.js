


function loginFormValidation() {

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    
    var emailInput = isEmpty(email, 'emailError');
    var passwordInput = isEmpty(password, 'passwordError');
    
    var counter = 0;
    if (emailInput) { counter++; }
    if (passwordInput) { counter++; }

    if (counter == 1 || counter == 2) {
        return false;
    }
    if(!ValidateEmail(email,'emailError')){
        return false;
    }

    return true;

}


function registerFormValidation() {

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    var nameInput = isEmpty(name, 'nameError');
    var emailInput = isEmpty(email, 'emailError');
    var passwordInput = isEmpty(password, 'passwordError');
    var confirmPasswordInput = isEmpty(confirmPassword, 'cpasswordError');

    var counter = 0;

    if (nameInput) { counter++; }
    if (emailInput) { counter++; }
    if (passwordInput) { counter++; }
    if (confirmPasswordInput) { counter++; }
    if (counter == 1 || counter == 2 || counter == 3 || counter == 4) {
        return false;
    }
    if(!ValidateEmail(email,'emailError')){
        return false;
    }
    if(password != confirmPassword){
        document.getElementById('cpasswordError').innerHTML = 'passwords not matching';
        return false;
    }


    return true;
}

function isEmpty(input, error) {

    if (input == "" || input == null) {
        document.getElementById(error).innerHTML = 'field must be filled out';
        return true;
    }
    else {
        document.getElementById(error).innerHTML = '';
        return false;
    }
}

function ValidateEmail(email,error) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true;
  }
  document.getElementById(error).innerHTML = 'please enter a valid email address';
    return false;
}

