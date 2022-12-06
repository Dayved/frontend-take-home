$(document).ready(initApplication);

function getValue(element){
    return document.getElementById(element).value;
}

function getEl(element){
    return document.getElementById(element);
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
        else{
            var xhr = new XMLHttpRequest();
            var url = "https://frontend-take-home.fetchrewards.com/form";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 201) {
                    var json = JSON.parse(xhr.responseText);
                    //console.log(json.email + ", " + json.password);
                }
            };
            var data = JSON.stringify({"name": fname, "email": email, "password": password, "occupation": occupation, "state": state});
            xhr.send(data);
            alert("Form submitted successfully!");
        }
    });
}