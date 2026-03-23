// Cache all elements //
// Find elements in the DOM
const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("categoryInput");
const deadlineInput = document.getElementById("deadlineInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const statusFilter = document.getElementById("statusFilter");
const categoryFilter = document.getElementById("categoryFilter");

// Array to hold variable objects
let tasks = [];

function checkOverdue() {
  const today = new Date();    // Today's date and time
  today.setHours(0, 0, 0, 0);  // Midnight counter

  tasks.forEach(function (task) {
    // Only flag tasks that are not already completed
    if (task.status !== "Completed") {
      const deadline = new Date(task.deadline); // Convert the date string to a Date object (overdue!)
      if (deadline < today) {
        task.status = "Overdue";
      }
    }
  });
}

// Draw the task list from the array
function renderTasks() {
  checkOverdue();
  taskList.innerHTML = "";  // Wipe task list

  const selectedStatus = statusFilter.value;
  const selectedCategory = categoryFilter.value;

  const filtered = tasks.filter(function (task) {
    const statusMatch = selectedStatus === "All" || task.status === selectedStatus;
    const categoryMatch = selectedCategory === "All" || task.category === selectedCategory;
    return statusMatch && categoryMatch;
  });

  if (filtered.length === 0) {
    taskList.innerHTML = "<li style='color: gray; padding: 10px'>No tasks found.</li>";
    return;
  }

  filtered.forEach(function (task) {
    const index = tasks.indexOf(task);

    let badgeClass = "status-inprogress";
    if (task.status === "Completed") badgeClass = "status-completed";
    if (task.status === "Overdue") badgeClass = "status-overdue";

    // tasks.forEach(function (task, index) {

    const li = document.createElement("li"); // create a new list item
    li.className = "task-item";

    // Template literal - Takes everything between the backticks and stamps it as HTML inside the <li> 
    li.innerHTML = `
      <span class="task-name">${task.name}</span>
      <span class="task-meta">Category: ${task.category} | Deadline: ${task.deadline}</span>
      <div class="task-actions">
        <span class="status-badge ${badgeClass}">${task.status}</span>
        <select class="status-select" data-index="${index}">
        <option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
        <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
      </select>
      <button class="delete-btn" data-index=${index}">Delete</button>
  </div>
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

// Delete-btn event listeener
taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    const index = parseInt(event.target.dataset.index);
    tasks.splice(index, 1);
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
  renderTasks();
  console.log("Tasks array:", tasks); // Inspect the array - test

  taskInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
});

// Filter listeners
statusFilter.addEventListener("change", renderTasks);
categoryFilter.addEventListener("change", renderTasks);
renderTasks();