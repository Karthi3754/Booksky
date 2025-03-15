var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");
var cancelbutton = document.getElementById("cancel-popup");
var currentBook = null;
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
    currentBook = null;
});
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    resetForm();
});
addbook.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentBook) {
        currentBook.querySelector("h2").innerText = booktitleinput.value;
        currentBook.querySelector("h5").innerText = bookauthorinput.value;
        currentBook.querySelector("p").innerText = bookdescriptioninput.value;
        currentBook = null;
    } else {
        var div = document.createElement("div");
        div.setAttribute("class", "book-container");
        div.innerHTML = `<h2>${booktitleinput.value}</h2>
                         <h5>${bookauthorinput.value}</h5>
                         <p>${bookdescriptioninput.value}</p>
                         <button onclick="deleteBook(event)">Delete</button>
                         <button onclick="updateBook(event)">Update</button>`;
        container.append(div);
    }
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    resetForm();
});
function deleteBook(event) {
    event.target.parentElement.remove();
}
function updateBook(event) {
    currentBook = event.target.parentElement;
    booktitleinput.value = currentBook.querySelector("h2").innerText;
    bookauthorinput.value = currentBook.querySelector("h5").innerText;
    bookdescriptioninput.value = currentBook.querySelector("p").innerText;
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
}
function resetForm() {
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
}