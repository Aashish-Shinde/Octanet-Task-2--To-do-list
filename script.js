function addTask() {
    var taskInput = document.getElementById("taskInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var labelInput = document.getElementById("labelInput");
  
    var task = {
      taskName: taskInput.value,
      deadline: deadlineInput.value,
      priority: prioritySelect.value,
      label: labelInput.value
    };
  
    if (task.taskName !== "") {
      var taskList = document.getElementById("tasks");
      var taskElement = document.createElement("li");
      taskElement.classList.add("task");
  
      var taskNameElement = document.createElement("span");
      taskNameElement.classList.add("task-name");
      taskNameElement.textContent = task.taskName;
  
      var labelElement = document.createElement("span");
      labelElement.classList.add("task-label");
      labelElement.textContent = task.label;
  
      var priorityElement = document.createElement("span");
      priorityElement.classList.add("task-priority");
      priorityElement.textContent = task.priority;
  
      var deadlineElement = document.createElement("span");
      deadlineElement.classList.add("task-deadline");
      deadlineElement.textContent = task.deadline;
  
      taskElement.appendChild(taskNameElement);
      taskElement.appendChild(labelElement);
      taskElement.appendChild(priorityElement);
      taskElement.appendChild(deadlineElement);
  
      taskList.appendChild(taskElement);
  
      taskInput.value = "";
      deadlineInput.value = "";
      labelInput.value = "";
    }
  }
  