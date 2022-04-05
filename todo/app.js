var todoArray = [];
var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var name = e.target.name.value;
  let task = new Object();
  task[name] = false;
  todoArray.push(task);
  console.log(todoArray);
  appendTask(name);
  document.getElementById("name").value = "";
});

function appendTask(name) {
  var div = document.createElement("div");
  var divleft = document.createElement("div");

  divleft.textContent = name;

  var divright = document.createElement("div");

  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");

  var deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";

  divright.setAttribute("class", "divright");
  div.setAttribute("class", "task");

  divright.append(checkbox, deletebtn);

  div.append(divleft, divright);
  var todo_container = document.getElementById("todo-container");
  todo_container.append(div);

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      divleft.style.color = `rgb(66,150,66)`;
      divleft.style.textDecoration = `line-through`;
    } else {
      divleft.style.color = `black`;
      divleft.style.textDecoration = `none`;
    }
  });

  deletebtn.addEventListener("click", () => {
    checkbox.checked ? div.remove() : alert("Please complete the task.");
  });
}
