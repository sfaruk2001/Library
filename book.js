class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const myLibrary = [];

let b1 = new Book("Lord of the Rings", "Tolkein", "700", "Complete");
addBookToLibrary(b1);
displayBooks();

let modal = document.querySelector('.modal');
let form = document.querySelector('.form');
let addBook = document.querySelector('.add-book');
let submitBook = document.querySelector('.sub-form');

addBook.addEventListener('click', () => {
  modal.showModal();
});

submitBook.addEventListener('click', (e) => {
  let container = document.querySelector('.container');
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let readStatus = document.querySelector('input[name="read-status"]:checked').value;

  //Prevents user from submitting books without title, author, page while checking read status
  if(title === "" || author === "" || pages === "") {

  } else {
    addBookToLibrary(new Book(title, author, pages, readStatus));
    container.innerHTML = "";
    displayBooks();
    form.reset();
    modal.close();
  }


  
});

/** 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() 
    {
      return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
    }
    
  }
*/


  function addBookToLibrary(book) {
    myLibrary.push(book);
  }

  function displayBooks() {
    
    for (let i = 0; i < myLibrary.length; i++) {
        
        let container = document.querySelector('.container');
        let card = document.createElement('div');
        card.classList.add('card');
        //give each card a data attribute that is its idx in order to find it and delete it if needed
        card.classList.add('data-idx');
        card.setAttribute('data-idx', i);

        let title = document.createElement('p');
        title.innerText = myLibrary[i].title;
        title.classList.add('title-s');

        let author =  document.createElement('p');
        author.innerText = 'By ' + myLibrary[i].author;
        author.classList.add('author-s');

        let pages =  document.createElement('p');
        pages.innerText = myLibrary[i].pages + ' Pages';
        pages.classList.add('page-s');

        //let readStatus = document.createElement('p');
        //readStatus.innerText = myLibrary[i].read;

        let deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', (e) => {
          let libraryIdx = Number(e.target.parentElement.dataset.idx);
          myLibrary.splice(libraryIdx, 1);
          container.innerHTML = '';//will erase items in the container
          displayBooks();//will show all the items in updated array

        });

        let toggle = document.createElement('button');
        toggle.classList.add('status');
        if (myLibrary[i].read === 'Complete') {
          toggle.innerText = myLibrary[i].read;
          toggle.setAttribute('status', 'Complete');
        } else {
          toggle.innerText = myLibrary[i].read;
          toggle.setAttribute('status', 'Incomplete');
        }

        toggle.addEventListener('click', (e) => {
          let idx = e.target.parentElement.dataset.idx;
          if (e.target.innerHTML === 'Complete') {
            e.target.innerHTML = 'Incomplete';
            toggle.setAttribute('status', 'Incomplete');
            //I change the internal status property as well of the specific object
            myLibrary[idx].read = 'Incomplete';
            
          } else {
            e.target.innerHTML = 'Complete';
            toggle.setAttribute('status', 'Complete');
            //I change the internal status property as well of the specific object
            myLibrary[idx].read = 'Complete';

          }
        });
      
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(toggle);
        card.appendChild(deleteButton);

        container.appendChild(card);
        
    }
  }

