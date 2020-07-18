const form = document.getElementById("mndForm");
const remove = document.getElementsByClassName("delete");
const item1 = document.getElementById("item1").value;
const item2 = document.getElementById("item2").value;
const lists = document.getElementById("lists");
const submit = documnet.getElementById("submit");
//add to list
submit.addEventListener("click", function (e) {
    e.preventDefault();
    var newList = document.createElement("ul");
    var newListItemM = document.createElement("li");
    newListItemM.textContent = item1;
    var newListItemD = document.createElement("li");
    newListItemD.textContent = item2;
    var newListButton = document.createElement("button");
    newListButton.className = "delete";

    newList.appendChild(newListItemM);
    newList.appendChild(newListItemD);
    newList.appendChild(newListButton);
    lists.appendChild(newlist);
});

//remove
remove.addEventListener("click", function (e) {
    e.preventDefault();
    this.parent().remove();
});