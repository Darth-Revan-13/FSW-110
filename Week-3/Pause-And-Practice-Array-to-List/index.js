//creating h1 tags
var item1 = document.createElement("h1");
item1.textContent = ("Hello World");
item1.id = ("style");
document.body.appendChild(item1);
//text for for loop
var h1text = [
    "Hello World", //1
    "Hello World", //2
    "Hello World", //3
    "Hello World", //4
    "Hello World", //5
    "Hello World", //6
    "Hello World", //7
    "Hello World", //8
    "Hello World", //9
    "Hello World", //10
    "Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself."
];
//for loop
for (var i = 0; i < h1text.length; i++) {
    var newItem = document.createElement("h1");
    newItem.textContent = h1text[i];
    newItem.id = ("styles");
    newItem.className = ("styles2");
    document.body.appendChild(newItem);
};
//styling
document.body.style.backgroundColor = "#ffd700";
document.getElementById("style").style.color = "#6600cc";
var styling = document.getElementsByClassName("styles2");
for (var i = 0; i < styling.length; i++) {
    styling[i].style.color = "#6600cc";
};
//new array
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
//new loop
for (var i = 0; i < styling.length; i++) {
    var newItems = document.createElement("h2");
    newItems.textContent = names[i];
    newItems.className = ("newitems");
    document.body.appendChild(newItems);
};

var styling2 = document.getElementsByClassName("newitems");
for (var i = 0; i < styling.length; i++) {
    styling2[i].style.color = "#6600cc";
};