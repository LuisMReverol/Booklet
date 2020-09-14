import Search from "./models/Search";
import { getInput, clearInput, showResults, clearResults } from "./views/searchView";
import {elements} from "./views/base";

const state = {};

const searchController = async () => {
    clearResults();
    // Get an Input
    state.input = getInput();
    // Make an instance of the class
    state.query = new Search (state.input);
    // Call the method
    await state.query.getData() 
    // Make a search 
    clearInput();
    //Show results
    showResults(state.query.res);
}

elements.searchForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  searchController();
});





// await state.query.getData()


