//navbar
var navbar = document.createElement("nav");
//links
var link1 = document.createElement("a");
link1.id = "links1";
document.getElementById("links1").href="index.html";
link1.textContent = ("Home");

var link2 = document.createElement("a");
link2.id = "links2";
document.getElementById("links2").href="index.html";
link2.textContent = ("Home");

var link3 = document.createElement("a");
link3.id = "links3";
document.getElementById("links3").href="index.html";
link3.textContent = ("Home");
//h1
var h1 = document.createElement("h1");
h1.textContent = ("This is the most normal site you will ever see!");
//p
var p = document.createElement("p");
p.textContent = ("This is definitely a normal site!");
//list
var list = document.createElement("ul");
list.id = "listStart";
//list items
var listItem1 = document.createElement("li");
listItem1.textContent = ("This is some normal text");

var listItem2 = document.createElement("li");
listItem2.textContent = ("This is more normal text");

var listItem3 = document.createElement("li");
listItem3.textContent = ("Look at all this normal content!");
//footer
var footer = document.createElement("footer");

var footerP = document.createElement("p");
footerP.textContent = ("Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.");
//adding elements to page
document.body.appendChild(navbar);
navbar.append(link1);
navbar.append(link2);
navbar.append(link3);
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(list);
list.append(listItem1);
list.append(listItem2);
list.append(listItem3);
document.body.appendChild(footer);
footer.append(footerP);