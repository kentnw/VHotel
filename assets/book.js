let errorMessage = document.getElementById('name-error');
function validate() {
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let type = document.getElementById('input-type').value;
    let dateIn = new Date(document.getElementById('input-date-in').value);
    let dateOut = new Date(document.getElementById('input-date-out').value);
    let agreement  = document.getElementById('input-agreement');
    validateName(name);
    validateEmail(email);
    validateType(type);
    validateDateIn(dateIn);
    validateDateOut(dateOut);
    validateAgreement(agreement);
    if(validateName(name) && validateEmail(email) && validateType(type) && validateDateIn(dateIn) && validateDateOut(dateOut) && validateAgreement(agreement)){
        document.getElementById('valid').innerHTML = "Everything is valid";
        return true
    }
    else{
        return false
    }
}

function validateName(name){
    if(name.length < 5){
        document.getElementById('name-error').innerHTML = "Name should be more than 5 characters";
        return false;
    }
    document.getElementById('name-error').innerHTML = "";
    return true;
}

function validateEmail(email){
    if(email.match('@')){
        document.getElementById('emails-error').innerHTML = "";
        return true;
    }
    document.getElementById('emails-error').innerHTML = "Please enter a valid email address";
    return false;
}

function validateType(type){
    if(type != ""){
        document.getElementById('room-error').innerHTML = "";
        return true;
    }
    document.getElementById('room-error').innerHTML = "Please select Room Type";
    return false;
}

function validateDateIn(dateIn){
    const date = new Date();
    if(dateIn == "Invalid Date"){
        document.getElementById('date-in-error').innerHTML = "Please select check in date";
        return false
    } else if(dateIn < date){
        document.getElementById('date-in-error').innerHTML = "Cannot check in before today";   
        return false
    } 

    document.getElementById('date-in-error').innerHTML = "";
    return true
}

function validateDateOut(dateOut){
    const date = new Date();
    if(dateOut == "Invalid Date"){
        document.getElementById('date-out-error').innerHTML = "Please select check out date";
        return false
    } else if(dateOut < date){
        document.getElementById('date-out-error').innerHTML = "Cannot check out before today";   
        return false
    } else if(dateOut < dateIn){
        document.getElementById('date-out-error').innerHTML = "Cannot check out before check in";
        return false;    
    }

    document.getElementById('date-out-error').innerHTML = "";
    return true
}

function validateAgreement(agreement){
    
    if(!agreement.checked){
        document.getElementById('agreement-error').innerHTML = "Please agree to our terms and conditions";
        return false;
    }

    document.getElementById('agreement-error').innerHTML = "";
    return true;
}