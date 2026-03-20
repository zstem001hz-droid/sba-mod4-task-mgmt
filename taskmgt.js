// Cache all elements //
// Find elements in the DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Array to hold variable objects
let tasks = [];

// Add event listener to the button
addTaskButton.addEventListener("click", function () {
  const taskName = taskInput.value.trim(); //Trim to remove extra || only spaces

  if (taskName === "") { //conditional to ensure a user added text to the input field 
    alert("Please enter a task!");
    return;
  }

  // Properties for task object  
  const newTask = {
    name: taskName,
    category: "",
    deadline: "",
    status: "In Progress"
  };

  tasks.push(newTask); // add (push0 the object to the array
  console.log("Tasks array:", tasks); // Inspect the array - test
  taskInput.value = "";

  // Create and Display tasks
  const listItem = document.createElement("li");
  listItem.innerText = taskName;

  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear the input field
});

// Add event listener to the task items to allow user's to delete them
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    taskList.removeChild(event.target);
  }
});