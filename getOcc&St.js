$(document).ready(initApplication);

function initApplication() {
    var job = document.getElementById('occupation');
    var US = document.getElementById('state');
        
        window.addEventListener("load", function () {
            httpGet("https://frontend-take-home.fetchrewards.com/form");
        });

        function httpGet(theUrl){
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", theUrl, false); // false for synchronous request
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var json = JSON.parse(xmlHttp.responseText);
               // console.log(JSON.stringify(json, " ", 2));
                var occ = json.occupations;
                var st = json.states;
                
                for (let value of Object.values(occ)){
                    var opt = document.createElement('option');
                    opt.text = value;
                    opt.value = value;
                    job.appendChild(opt);
                }
            
                for (let value of Object.values(st)){
                   // console.log(value.abbreviation);
                    var opt = document.createElement('option');
                    opt.text = value.abbreviation;
                    opt.value = value.name;
                    US.appendChild(opt);
                }  
                
            }
            };
            xmlHttp.send();
        }
}