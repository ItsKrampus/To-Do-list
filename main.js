document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.getElementById("addButton");
  var taskInput = document.getElementById("TaskInput");
  var taskList = document.getElementById("Tasklist");

  addButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    var task = taskInput.value;
    if (task !== "") {
      // Create a new list item
      var listItem = document.createElement("li");
      // listItem.textContent = task;
      listItem.className = "tasks";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const label = document.createElement("label");
      label.textContent = task;
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          listItem.style.textDecoration = "line-through";
        } else {
          listItem.style.textDecoration = "none";
        }
      });
        
      
      const removeButton = document.createElement("button");
      removeButton.textContent = "Delete";
      removeButton.addEventListener("click", function () {
        listItem.remove();
      });
      removeButton.className="removebutton"

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      listItem.appendChild(removeButton);

      taskList.appendChild(listItem);

      // Clear the input box
      taskInput.value = "";
    } else {
      alert("Please enter a task");
    }
  });
});
