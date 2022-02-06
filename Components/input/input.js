const emailInput = document.getElementById("inp-email");
const passwordInput = document.getElementById("inp-password");
const termsPolicyInput = document.getElementById("checkbox-termsPolicy");
const errMessage = document.getElementsByClassName("err-msg-container")

function checkFormValidation(){

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





