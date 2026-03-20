// Cache all elements //
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

// Add event listener to the button
addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value;
 
  if (taskText === "") { //conditional to ensure a user added text to the input field 
    alert("Please enter a task!");
    return;
  }
 
  let listItem = document.createElement("li"); //create a list item
  listItem.innerText = taskText; // take the text from the input field and add it as content for the new list item
 
  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear the input field
});

// Add event listener to the task items to allow user's to delete them

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    taskList.removeChild(event.target);
  }
});