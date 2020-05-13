# MyReads Project
This project was created as part of [Udacity's React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

It is a simple single page application to manage a collection of books in a library. It interacts with a backend database that provides a pre-populated list of books to add to shelves, endpoints to interact with the individual books, and the ability to search for books by names. For a complete list of allowed search terms, refer to [SEARCH_TERMS.md](./SEARCH_TERMS.md).

All changes to a user's library are updated within the application automatically and are persisted to the backend so that any subsequent visit to the application will result in the same library being displayed.

## Run the application
The application is hosted on an AWS S3 bucket at [myreads.scgrk.com](http://myreads.scgrk.com).

Alternatively, you can run the application locally with `npm`.
```sh
git clone https://github.com/scgerkin/reactnd-01-my-reads.git
cd reactnd-01-my-reads
npm install
npm start
```
The application will be served on `http://localhost:3000`.

## Project Rubric
- Application Setup
  - The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.
  - An updated README that describes the project and has instructions for installing and launching the project is included.
- Main Page
  - The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
  - The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
  - When the browser is refreshed, the same information is displayed on the page.
- Search Page
  - The search page has a search input field.
  - The search page behaves correctly:
    - As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. You can use throttle/debounce but are not required to do so.
    - Search results are not shown when all of the text is deleted out of the search input box.
    - Invalid queries are handled and prior search results are not shown.
    - The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)
    - The user is able to search for multiple words, such as “artificial intelligence.”
  - Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
    - If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
  - When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
- Routing
  - The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
  - The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
- Code Functionality
  - Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
  - Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
  - The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using `key` for list items. All code is functional and formatted properly.
