const emailInput = document.getElementById("inp-email");
const passwordInput = document.getElementById("inp-password");
const termsPolicyInput = document.getElementById("checkbox-termsPolicy");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("validation-form");
const errMessage = document.getElementsByClassName("err-msg-container")

function checkFormValidation(){

    console.log("form")
    console.log(emailInput.value, typeof emailInput.value);
    console.log(passwordInput.value);
    console.log(termsPolicyInput.checked);
    console.log(errMessage[0])

    if(emailInput.value == ""){
        errMessage[0].style.display = "block";
    }else{
        errMessage[0].style.display = "none";
    }

    if(passwordInput.value == ""){
        errMessage[1].style.display = "block";
    }else{
        errMessage[1].style.display = "none";
    }

    if(!termsPolicyInput.checked){
        errMessage[2].style.display = "block";
    }else{
        errMessage[2].style.display = "none";
    }

}





