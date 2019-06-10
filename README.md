# Welcome to Subredditer

Subredditer is a [Reat](https://reactjs.org/) based web application that helps you browse [reddit](https://www.reddit.com/) (and its subreddits)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Details

The Subredditer application uses the following stack

1.  `React` - JavaScript library for building user interfaces
2.  `Redux` - data store
3.  `Redux-Thunk` - Async Redux middleware
4.  `Semantic UI` - used [CSS](https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css) for better look and feel
5.  `Axiox` - API request helper
6.  `Jest and Enzyme` - for unit testing

### Reddit API

I have used Reddit public API to fetch data on the app. I got problem with pagination as the Reddit official documentation doesnot clearly explain this mechanism. Through observing [old.reddit](https://old.reddit.com/) pagination mechanism gives me idea about how pagination is working with Reddit API.

### Redux design

In the application I have put all redux related configuration, actions, reducer in `src/store`. For async request hadling I used [redux-thunk](https://github.com/reduxjs/redux-thunk). Action creator for fetching data from reddit is based on [this redux documentation recipie](https://redux.js.org/advanced/async-actions#async-action-creators). All the logic of updating and using count is done in action creator.

### Components

React components are in `src/components`. For this application main components are

1.  App `src\components\Header`
2.  Header `src\components\Header`
3.  Search `src\components\Search`
4.  PostList `src\components\PostList`
5.  Post `src\components\Post`
6.  Paginator `src\components\Paginator`

### Test

I have tried to write basic unit/integration tests for the apps, due to time constrain I opted out only for successful cases.
