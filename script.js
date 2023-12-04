const input = document.getElementById("userinput")
const button = document.getElementById("enter")
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li")

li.forEach(li => {
	addButton(li)
});

function addButton(li) {
	let button = document.createElement("button");
		button.appendChild(document.createTextNode("Delete"))
		li.appendChild(document.createTextNode(" "))
		li.appendChild(button)
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';

  addButton(li);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function toggleClass(event) {
  let item = event.target;
  if (item.nodeName == "LI") {
    item.classList.toggle("done")
  } 
  deleteItem(item)
}

function deleteItem(item) {
  if (item.nodeName == "BUTTON") {
    ul.removeChild(item.parentNode)
  }
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keydown", addListAfterKeypress)
ul.addEventListener("click", toggleClass )