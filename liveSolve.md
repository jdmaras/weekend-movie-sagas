

- Make the database
- Setup all the tables one to many and many to many
- fire up the website and take in what you're looking at

                    This is finding the circle of Redux using Sagas
- pull up 'inspect' and check the logger to see what is in NEXT STATE
        - in this one you would see a huge array of movie information
- open up the page and check what's happening in useEffect (for this particular assigment)
- follow back the 'fetchMovies' and you find it's in the sagas and they create a fetchAllMovies function for the saga
- you see that function is going up to the server and getting the data back
- you then do a 'put' which you should read as dispatching an action 'SET_MOVIES' and you're sending it to the redux store
- you can then see it is down in combineReducers (store) as 'movies'
- then you would globally grab that store with useSelector() on your original component page

- what does a component need and have it be in charge of it's own stuff
        having a component do a dispatch and and it would grab all it's own stuff. in details, you have a useEffect that fetch's it's own details because you setup a grab of all the information you needed from the DB

SUGGESTION - start with grabbing from the server so you know that you can check if any information is coming through

ANOTHER SUGGESTION
look at what you need to append to the DOM and maybe that will help you figure out how to build what you need in your store





