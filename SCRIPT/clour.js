//WEB PAGE CUSTOMIZATION
//Read More/less function
function expandText() {
    //Find the expandBtn element on HTML file
    let expandBtn = document.getElementById("expandBtn");
    
    //Check whether to expand or collapse text based on the text display on the button
    if (expandBtn.value.toLowerCase() == "more") {
        document.getElementById("detailed").style.display = "block";
        expandBtn.value = "LESS";
        expandBtn.textContent = "LESS";
    } else {
        document.getElementById("detailed").style.display = "none";
        expandBtn.value = "MORE";
        expandBtn.textContent = "MORE";
    }   
}   

//Change text size
function customizeText() {
    let selectedTextSize = document.getElementById("text-size").value;
    document.getElementById("abstract").style.fontSize = selectedTextSize;
    document.getElementById("detailed").style.fontSize = selectedTextSize;
}

//Change background color       
function changeColor() {
    let selectedBGColor = document.getElementById("colorOption").value;
    document.getElementById("demo2").style.backgroundColor = selectedBGColor;   
}
