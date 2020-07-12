const box = document.getElementById("redBox");

box.addEventListener("mousemove", function (e){
    var x = e.clientX;
    var y = e.clientY;
    const coordinates = "X Coordinate: " + x + "\n" + "Y Coordinate: " + y;
    box.textContent = coordinates;
});