const $ = document;
let input = $.querySelector(".inputTodo");
let toDoList = $.querySelector(".toDoList");
// let trashIcon = $.querySelector(".fa-trash");
let inputValue = null;

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    inputValue = input.value.trim();
    if (inputValue) {
      let newTodo = $.createElement("li");
      newTodo.className = "toDoItem";
      let newTrash = $.createElement("i");
      newTrash.className = "fa fa-trash";
      newTodo.innerHTML = inputValue;
      newTodo.append(newTrash);
      toDoList.append(newTodo);
      input.value = "";
      newTrash.addEventListener("click", () => {
        newTrash.parentElement.remove();
      });
    }
  }
});
