var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    
    document.getElementById("result").innerHTML = this.responseText;
    
};
xhttp.open("GET", "http://127.0.0.1:3000", true);
xhttp.send();