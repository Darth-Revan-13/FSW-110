//creating tags
var h2text = [
    "hey,", //1
    "pssst", //2
    "Hey you,", //3
    "Hey!", //4
    "Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself." //5
];

var idNames = [
    "styles1",
    "styles2",
    "styles3",
    "styles4",
    "styles5"
];
//loops
for (var i = 0; i < h2text.length; i++) {
    var newItem = document.createElement("h2");
    newItem.textContent = h2text[i];
    newItem.id = (idNames[i]);
    document.body.appendChild(newItem);
};
//styling
for (var i = 0; i < idNames.length; i++) {
    document.getElementById(idNames[i]).style.fontSize = "20px";
    document.getElementById(idNames[i]).style.fontWeight = "lighter";
    document.getElementById(idNames[i]).style.fontFamily = "sans-serif";
    document.getElementById(idNames[i]).style.color = "cornflowerblue";
    document.getElementById(idNames[i]).classList.add("border");
}