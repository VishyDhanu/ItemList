const form = document.querySelector("#add-form");
const itemList = document.querySelector("#items");

// Form submit event

form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

// Add Item

function addItem(e) {
  e.preventDefault();

  // Get the input value

  const input = form.querySelector('input[type="text"]');
  const newItem = input.value.trim();

  if (newItem === "") return; // Prevent empty items

  // Create a new list

  let li = document.createElement("li");

  // Add class name

  li.classList = "list-group-item";

  // Add text node with input value

  li.appendChild(document.createTextNode(newItem));

  // add li inside ul
  // console.log(li);
  itemList.appendChild(li);

  // Create delete btn

  const deleteBtn = document.createElement("button");

  // adding class
  deleteBtn.className = "btn btn-danger float-end delete";

  // Adding x
  deleteBtn.textContent = "X";

  li.appendChild(deleteBtn);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
  }
}
