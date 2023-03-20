// make an array for books
let books = [];

// make neccessary elments from index.html
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBtn = document.getElementById('addBtn');
const bookList = document.getElementById('bookList');

// function display books
function displayBooks() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    li.innerHTML = `${book.title} <br> ${book.author} <br>`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    removeBtn.setAttribute('data-book-index', index);
    li.appendChild(removeBtn);
    bookList.appendChild(li);
    const hr = document.createElement('hr');
    bookList.appendChild(hr);
  });
}

// check local storage
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
  displayBooks();
}

// function add button
addBtn.addEventListener('click', () => {
  const title = titleInput.value;
  const author = authorInput.value;

  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));

  titleInput.value = '';
  authorInput.value = '';

  displayBooks();
});

// remove book from the collection
bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBtn')) {
    const bIndex = event.target.dataset.bookIndex;

    books.splice(bIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  }
});
