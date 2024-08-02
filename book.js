

const myLibrary = [];

let b1 = new Book("Lotr", "Tolkein", "700", "read");

let modal = document.querySelector('.modal');
let addBook = document.querySelector('.add-book');

addBook.addEventListener('click', () => {
  modal.showModal();
});

addBookToLibrary(b1);

displayBooks();

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

  function addBookToLibrary(book) {
    myLibrary.push(book);
  }

  function displayBooks() {
    
    for (let i = 0; i < myLibrary.length; i++) {
        
        let container = document.querySelector('.container');
        let card = document.createElement('div');
        card.classList.add('card');

        let title = document.createElement('p');
        title.innerText = myLibrary[i].title;

        let author =  document.createElement('p');
        author.innerText = myLibrary[i].author;

        let pages =  document.createElement('p');
        pages.innerText = myLibrary[i].pages;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        

        container.appendChild(card);
        
    }
  }