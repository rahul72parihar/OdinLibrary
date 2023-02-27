const bookInput = document.getElementById("bookInput");
const authorInput = document.getElementById("authorInput");
const addBtn = document.getElementById("add");
const error = document.getElementById("error");
const displayDiv = document.getElementById("display-div");
let myLibrary = [];
function Book(name, author) {
  this.name = name;
  this.author = author;
}
//ADD BUTTON
addBtn.addEventListener("click", handleClick);
function handleClick() {
  console.log("click");
  if (!bookInput.value || !authorInput.value) error.style.display = "block";
  else addBookToLibrary(bookInput.value, authorInput.value);
}
function addBookToLibrary(book, author) {
  myLibrary.push(new Book(book, author));
  renderLibrary();
  bookInput.value = "";
  authorInput.value = "";
}
//RENDER LIBRARY
function renderLibrary() {
  const table = document.createDocumentFragment();
  myLibrary.forEach((curr, index) => {
    const row = document.createElement("div");
    row.classList.add("row");
    const a = document.createElement("h2");
    a.textContent = curr.name;
    const b = document.createElement("h2");
    b.textContent = curr.author;
    const c = document.createElement("h2");
    c.classList.add("remove");
    c.setAttribute("index", index);
    c.textContent = "-";
    row.appendChild(a);
    row.appendChild(b);
    row.appendChild(c);
    table.appendChild(row);
  });
  displayDiv.replaceChildren(table);
}
renderLibrary();
//REMOVE
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) removeBook(e.target);
});
function removeBook(e) {
  let i = e.getAttribute("index");
  myLibrary.splice(i, 1);
  renderLibrary();
}
