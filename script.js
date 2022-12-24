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
    if (read == true){
        this.read = "READ";
    }
    else{
        this.read = "NOTREAD"
    }
}
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");
let button = document.getElementById("button");

function addBookToLibrary() {
    if (title.value == "" || author.value == "" || pages.value == ""){
        alert("Fields cant be empty!");
        return;
    }
    let newbook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newbook);
    if (form.style.display != "none"){
        form.style.display = "none";
    }
    demo.innerHTML += `<div id = "card${numcard}"><p>${myLibrary[i].title}</p>
                       <p>${myLibrary[i].author}</p>
                       <p>${myLibrary[i].pages}</p>
                       <button class = "butcommon" data-number1 = "${i}">${myLibrary[i].read}</button>
                       <button class = "common" data-number0 = "${i}">Remove</button></div>`
                       numcard++;
    let x = document.querySelector(`[data-number1 = "${i}"]`);
    if(myLibrary[i].read == "READ"){
        x.style.backgroundColor = "rgb(1, 154, 1)";
    }
    else if(myLibrary[i].read == "NOTREAD"){
        x.style.backgroundColor = "red";
    }
 
    let data = document.querySelectorAll('.common');
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

    let data2 = document.querySelectorAll('.butcommon');
    data2.forEach(btn => {
        btn.addEventListener('click', () => {
            if (myLibrary[btn.dataset.number1].read == "READ"){
                myLibrary[btn.dataset.number1].read = "NOTREAD";
                btn.style.backgroundColor = "red";
            }
            else if (myLibrary[btn.dataset.number1].read == "NOTREAD"){
                myLibrary[btn.dataset.number1].read = "READ";
                btn.style.backgroundColor = "rgb(1, 154, 1)";
            }
            btn.innerHTML = `${myLibrary[btn.dataset.number1].read}`;
        });
    });

}

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
button.addEventListener("click", addBookToLibrary)

defbutton.addEventListener("click", ()=>{
    if (form.style.display == "none"){
        form.style.display = "flex";
    }
    else{
        form.style.display = "none";
    }
    form.reset();
});