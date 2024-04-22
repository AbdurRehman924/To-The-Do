const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const listChild = document.querySelector(".todos li");
const search = document.querySelector(".search input");
const number = document.querySelectorAll(".number");

let count = 3;
const generateTemplate = (todo) => {
  const html = `
            <li
          class="text-light list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

  list.insertAdjacentHTML("afterbegin", html);
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); //adding the value recieved from the add class to the todo list

  if (todo.length) {
    //only submit if length>0
    generateTemplate(todo);
    addForm.reset(); //making the todo bar empty after adding value
  }
});

//delete todos
//using event delegation method
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    //trash can element
    e.target.parentElement.remove(); //parent element is the li tag that we want to remove
  }
});

// searching todos
const filterTodos = (term) => {
  Array.from(list.children) //converting html collection to array
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered")); //adding the filtered class to the list which dont contain the serached term

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered")); //removing the filtered class to the list which dont contain the serached term
};
//keyup events
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
