import config from "../config.json";
import axios from "axios";

const setURL = (query) => {
  return `${config.url}volumes?q=${query}&maxResults=5&Type=books&key=${config.key}`;
};

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getData() {
    try {
      const results = await axios(setURL(this.query));
      const description = [];
      results.data.items.forEach((element) => {
        const book = {
          id: element.volumeInfo.id,
          image: element.volumeInfo.imageLinks
            ? element.volumeInfo.imageLinks.thumbnail
            : "./img/na.jpg",
          title: element.volumeInfo.title,
          author: element.volumeInfo.authors || element.volumeInfo.publisher,
          year: element.volumeInfo.publishedDate,
        };
        description.push(book);
      });

      this.res = description;
      this.totalRes = results.data.totalItems;
      console.log(this.res);
      console.log(this.totalRes);
      return this.res;
    } catch (err) {
      console.log(err);
    }
  }
}

// TODO:
// Render the buttons that should appear depending on the item index
// Add an eventlister to the button container to show the next results and to record the state of the items index
// change start Index five numbers away from the previous start index
// Make a new query to the API and render the results 

// Inputs:
// Totalresults, Startindex, Resultmax
