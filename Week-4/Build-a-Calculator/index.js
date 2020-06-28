//Add
var firstNumA = document.getElementById("firstNumA").value;
var secondNumA = document.getElementById("secondNumA").value;
function addition(firstNumA, secondNumA) {
    var newResult = document.createElement("div");
    newResult.textContent("Result: " + (firstNumA.value + secondNumA.value));
    var parent1 = document.getElementById("resultA");
    parent1.append(newResult);
};
document.getElementById("startA").addEventListener("click", addition, false);
//Subtract
var firstNumS = document.getElementById("firstNumS").value;
var secondNumS = document.getElementById("secondNumS").value;
function subtraction(firstNumS, secondNumS) {
    var newResult2 = document.createElement("div");
    newResult2.textContent("Result: " + (firstNumS.value - secondNumS.value));
    var parent2 = document.getElementById("resultS");
    parent2.append(newResult2);
};
document.getElementById("startS").addEventListener("click", subtraction, false);
//Multiply
var firstNumM = document.getElementById("firstNumM").value;
var secondNumM = document.getElementById("secondNumM").value;
function multiplication(firstNumM, secondNumM) {
    var newResult3 = document.createElement("div");
    newResult3.textContent("Result: " + (firstNumM.value * secondNumM.value));
    var parent3 = document.getElementById("resultM");
    parent3.append(newResult3);
};
document.getElementById("startM").addEventListener("click", multiplication, false);