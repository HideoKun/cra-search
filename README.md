# About

cra-search is a small redux app build on top of CRA, made for the YND recruitment process purposes.
Inside, you can find react, redux, redux-saga, material-ui, and a little bit of ramda to prove that I am ok with complexity.

## How to start

Please download this repo and run `npm install && npm start`.
After that, please visit `http://localhost:3000` to see the app running.

## Explanations, insights and technical info

- the app was designed for newest chrome
- accessibility is essential to me, that is why there is full keyboard navigation support (tab/ shift+tab/ enter)
- all links are valid anchor links - no js-based redirects
- to keep visual layer performant, I've used react memo a lot (but only when it make sense to do so)
- the app is well tested, you can find error handling on almost every level - react(componentDidCatch), axios(status code), saga(try-catch block). I was not able to break it:) If you could, please let me know how. I am always curious and ready to grow.
- I've created a basic input validation on the form level- input value is required, white spaces are illegal. Some chars (`;`) in login are not allowed by Github. The error message should be visible for those cases.
- the form was created with the ui-locking pattern
- I've applied a micro-caching strategy to limit redundant api calls. Repos list is loaded just once per users during the single search. Expanding the repos list will not re-send request when data is already in place
- I could limit the number of users fetching from Github with `per_page=5` param, although I decided not to. Not every `text_match` is related to user name. That is why I've decided to filter all the data, and take the first five users at the very end
- unit tests are limited in volume because I run out of time :)
