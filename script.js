let myLibrary = [];
let defbutton = document.getElementById("addbook");
let form = document.getElementById("form");
let demo = document.getElementById("demo");
let i = 0;


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");
let button = document.getElementById("button");

function addBookToLibrary() {
    let newbook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newbook);
    if (form.style.display != "none"){
        form.style.display = "none";
    }
    demo.innerHTML += `<div><p>${myLibrary[i].title}</p>
                       <p>${myLibrary[i].author}</p>
                       <p>${myLibrary[i].pages}</p>
                       <p>${myLibrary[i].read}</p></div>`
    i++;
}
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
button.addEventListener("click", addBookToLibrary)

defbutton.addEventListener("click", ()=>{
    if (form.style.display == "none"){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }
});