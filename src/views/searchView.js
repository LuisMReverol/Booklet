import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearResults = () => {
  elements.searchResList.innerHTML = "";
};

export const showResults = (book) => {
  book.forEach((element) => {
    renderResults(element);
  });
};

const renderResults = (book) => {
  const markup = `
  <li class="catalog__list--book">
          <a class="book-link" href="#${book.id}">
            <div class="img-container">
            <img src="${book.image}" alt="${book.title}" class="img-container__book" />
            </div>
            <div class="book-info">
              <p class="book-info__name">${book.title}</p>
              <p class="book-info__author">${book.author}</p>
              <p class="book-info__year">${book.year}</p>
        </div>
      </a> 
    </li>
  `;
  elements.searchResList.insertAdjacentHTML("afterbegin", markup);
};
