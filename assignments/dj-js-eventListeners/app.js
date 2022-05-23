//to change to color blue
addEventListener("mouseover", function () {
    box.style.backgroundColor = "blue"
    box.textContent = "mouse over"
    box.style.textAlign = "center"
    box.style.fontSize = "30px"   
});
//to change to blue color by pressing "b" any character **WRONG
addEventListener("keypress", function() {
    box.style.backgroundColor = "purple"
    box.textContent = "pressed a key"
    box.style.textAlign = "center"
    box.style.fontSize = "30px"
});

// to change color red
addEventListener("mousedown", function () {
    box.style.backgroundColor = "red"
    box.textContent = "hold it"
    box.style.textAlign = "center"
    box.style.fontSize = "30px"
});

addEventListener("mouseup", function () {
    box.style.backgroundColor = "yellow"
    box.textContent = "you released it"
    box.style.textAlign = "center"
    box.style.fontSize = "30px"
});

addEventListener("dblclick", function () {
    box.style.backgroundColor = "green"
    box.textContent = "double clicked"
    box.style.textAlign = "center"
    box.style.fontSize = "30px"
});

window.onwheel = function (){
    box.style.backgroundColor = "orange"
    box.textContent = "scrolling"
    box.style.textAlign = "center"
    box.style.fontSize = "30px"
}