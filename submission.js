$(document).ready(initApplication);

function getValue(element){
    return document.getElementById(element).value;
}

function initApplication() {
    document.getElementById("submit").addEventListener("click", function () {
        var fname = getValue("fname");
        var email = getValue("email");
        var password = getValue("password");
        var occupation = getValue("occupation");
        var state = getValue("state");

        if (fname === "" || email === "" || password === "" || occupation === "empty" || state === "empty"){
            var errorMessage = "Fill in information for the following fields:\n";

            if (fname === ""){
                errorMessage += "Full name\n";
            }
            if (email === ""){
                errorMessage += "Email\n";
            }
            if (password === ""){
                errorMessage += "Password\n";
            }
            if (occupation === "empty"){
                errorMessage += "Occupation\n";
            }
            if (state === "empty"){
                errorMessage += "State\n";
            }

            alert(errorMessage);
        }
    });
}