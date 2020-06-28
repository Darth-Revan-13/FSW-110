document.getElementById("notBox").style.textAlign = "center";

document.getElementById("box").style.display = "inline-block";
document.getElementById("box").style.width = "300px";
document.getElementById("box").style.height = "300px";
document.getElementById("box").style.position = "fixed";
document.getElementById("box").style.top = "50%";
document.getElementById("box").style.left ="50%";
document.getElementById("box").style.marginTop = "-100px";
document.getElementById("box").style.marginLeft = "-200px";
document.getElementById("box").style.border = "solid black";
document.getElementById("box").style.padding = "5px";
//blue
document.getElementById("box").addEventListener("mouseover", event1);
function event1() {
    document.getElementById("box").style.backgroundColor = "#0000ff";
};
document.addEventListener("keydown", event2, false);
function event2(e) {
    if (e.keyCode === 66) {
        document.getElementById("box").style.backgroundColor = "#0000ff";
    };
};
//reset to white
document.getElementById("box").addEventListener("mouseleave", event3);
function event3() {
    document.getElementById("box").style.backgroundColor = "#ffffff";
};
//red
document.getElementById("box").addEventListener("mousedown", event4);
function event4() {
    document.getElementById("box").style.backgroundColor = "#ff0000";
};
document.addEventListener("keydown", event5, false);
function event5(e) {
    if (e.keyCode === 82) {
        document.getElementById("box").style.backgroundColor = "#ff0000";
    };
};
//yellow
document.getElementById("box").addEventListener("mouseup", event6);
function event6() {
    document.getElementById("box").style.backgroundColor = "#ffff00";
};
document.addEventListener("keydown", event7, false);
function event7(e) {
    if (e.keyCode === 89) {
        document.getElementById("box").style.backgroundColor = "#ffff00";
    };
};
//green
document.getElementById("box").addEventListener("dblclick", event8);
function event8() {
    document.getElementById("box").style.backgroundColor = "#00ff00";
};
document.addEventListener("keydown", event9, false);
function event9(e) {
    if (e.keyCode === 71) {
        document.getElementById("box").style.backgroundColor = "#00ff00";
    };
};
//orange
document.addEventListener("scroll", event10);
function event10() {
    document.getElementById("box").style.backgroundColor = "#ff9900";
};
document.addEventListener("keydown", event11, false);
function event11(e) {
    if (e.keyCode === 79) {
        document.getElementById("box").style.backgroundColor = "#ff9900";
    };
};