const inputs = document.getElementById("submit");

inputs.addEventListener("click", function (event) {
    event.preventDefault()
    const textInput = document.getElementById("textHere").value;
    const dateInput = document.getElementById("dateHere").value;
    const timeInput = document.getElementById("timeHere").value;

    alert(textInput + "\n" + dateInput + "\n" + timeInput);
})