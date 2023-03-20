let books = [];
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
const addBtn = document.getElementById('addBtn');
const bookList = document.getElementById('bookList');

function displayBooks() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    li.textContent = `${book.title}`;
    li.textContent = `${book.author}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    removeBtn.setAttribute('data-book-index', index);
    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}

if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
  displayBooks();
}

addBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));

  titleInput = '';
  authorInput = '';

  displayBooks();
});

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBtn')) {
    const { bookIndex } = event.target.dataset.bookIndex;

    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  }
});
