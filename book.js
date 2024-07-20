
const myLibrary = [];


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
        let card = document.createElement('div');

        

    }
  }