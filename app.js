function myDarkmode() {
    //var element = document.body;
    var element=document.getElementById("D1");
    if(element.style.background != "white") {
        element.style.background = "white";
    }
    else {
        element.style.background = "#333"
    }
    element=document.getElementById("D2");
    if(element.style.background != "white") {
        element.style.background = "white";
    }
    else {
        element.style.background = "#333"
    }
    element=document.body
    element.classList.toggle("dark-mode");
 }