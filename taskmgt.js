// Cache all elements //
// Find elements in the DOM
const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("categoryInput");
const dealineInput = document.getElementById("deadlineInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const statusFilter = document.getElementById("statusFilter");
const categoryFilter = document.getElementById("categoryFilter");

// Array to hold variable objects
let tasks = [];

// Draw the task list from the array
function renderTasks() {
  taskList.innerHtml = "";  // Wipe task list

  tasks.forEach(function (task) {
    const li = document.createElement("li"); // create a new list item
    li.className = "task-item";

    // Template literal - Takes everything between the backticks and stamps it as HTML inside the <li>
    li.innerHTML = `
<span class="task-name">${task.name}</span> <!-- task name -->
<span class="task-meta">Category: ${task.category} | Deadline: ${task.deadline}</span>
<div class="task-actions">
<span class="task-status">Status: ${task.status}</span>


<select class="status-select" data-index="${index}">
<option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
  <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
    </select >
  </div >
`;

    taskList.appendChild(li);
  });
}

// Listen for changes on ANY select inside taskList (event delegation)
taskList.addEventListener("change", function (event) {
  if (event.target.classList.contains("status-select")) {
    const index = parseInt(event.target.dataset.index);
    tasks[index].status = event.target.value;
    renderTasks();
  }
});

// Add event listener to the button
addTaskButton.addEventListener("click", function () {
  const taskName = taskInput.value.trim(); //Trim to remove extra || only spaces
  const category = categoryInput.value;
  const deadline = deadlineInput.value;

  if (taskName === "") { //conditional to ensure a user added text to the input field 
    alert("Please enter a task.");
    return;
  }
  if (category === "") {
    alert("Please select a category")
    return;
  }
  if (deadline === "") {
    alert("Please choose a deadline.")
    return;
  }

  // Properties for task object  
  const newTask = {
    name: taskName,
    category: category,
    deadline: deadline,
    status: "In Progress"
  };

  tasks.push(newTask); // add (push) the object to the array
  console.log("Tasks array:", tasks); // Inspect the array - test
  taskInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";

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