let myLibrary = [];
let defbutton = document.getElementById("addbook");
let form = document.getElementById("form");
let demo = document.getElementById("demo");
let i = 0;
let numcard = 0;


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
    demo.innerHTML += `<div id = "card${numcard}"><p>${myLibrary[i].title}</p>
                       <p>${myLibrary[i].author}</p>
                       <p>${myLibrary[i].pages}</p>
                       <p>${myLibrary[i].read}</p>
                       <button class = "common" data-number0 = "${i}">Remove</button></div>`
                       numcard++;
 
    let data = document.querySelectorAll('.common');
    let tool = 0;
    data.forEach(btn => {
        btn.addEventListener('click', () => {
            let parentDiv = btn.parentNode;
            parentDiv.remove();
            let length0 = myLibrary.length;
            if (btn.dataset.number0 < length0 - 1){
                let p = btn.dataset.number0;
                for(p; p < length0; p++){
                    let data1 = document.querySelector(`[data-number0 = "${p}"]`);
                    if (p != btn.dataset.number0){
                        console.log(data1);
                        data1.dataset.number0--;
                    }
                }
            }
            myLibrary.splice(btn.dataset.number0, 1);
            if (i > 0){
                i--;
            }
        });
    });
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