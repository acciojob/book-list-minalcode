//your JS code here. If required.

const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

bookForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const isbn = document.getElementById("isbn").value.trim();

    if (title === "" || author === "" || isbn === "") {
        return;
    }

    const row = document.createElement("tr");

    [title, author, isbn].forEach(function(value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "X";
    deleteButton.className = "delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function() {
        row.remove();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    bookList.appendChild(row);

    bookForm.reset();
});
