var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;}
    formEl.reset();
};
var createTaskEl = function(taskDataObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);
  listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
}
formEl.addEventListener("submit", taskFormHandler);