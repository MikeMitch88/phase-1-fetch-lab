//  async function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
  
//   return fetch("https://anapioficeandfire.com/api/books", {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => { 
//     console.log(data);
//     return data;
//   })
//   .catch((error) => console.error(error));
// }
  
  

  


// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
   return fetch("https://anapioficeandfire.com/api/books")
          .then(response => response.json())
          .then(books => renderBooks(books));           
  }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
