//h1 tag
var item1 = document.createElement("h1");
item1.textContent = ("Welcome to my JS site");
//p tag
var item2 = document.createElement("p");
item2.textContent = ("Everything here was created with JS!");
//list
var list = document.createElement("ol");
list.id = "listStart";
//List Item 1
var listItem1 = document.createElement("li");
listItem1.textContent = ("This is a normal list");
//List Item 2
var listItem2 = document.createElement("li");
listItem2.textContent = ("With normal content");
//Totally normal list item
var listItem3 = document.createElement("li");
listItem3.textContent = ("Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.");
//Adding Items to page
document.body.appendChild(item1);
document.body.appendChild(item2);
document.body.appendChild(list);
list.append(listItem1);
list.append(listItem2);
list.append(listItem3);