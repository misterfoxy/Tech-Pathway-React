## 1.4 Props

In this activity we are going to be using props to complete the portfolio application.

# Instructions

* If you haven't done so already, create a folder called `reactworkshop` separate from this repository that you can use for all of the activities in this repo.

* Copy the entire `src` folder with [Unsolved/src](Unsolved/src) and paste it into your `reactworkshop` folder.




* Install node packages if you haven't done so already by running the command `npm install` from within the directory that contains the package.json file.



* Stop the dev server if it is already running. Start the app in dev mode by running `npm start`.




* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.



* You will notice that the application does render but none of the links are clickable


* Now navigate to [Unsolved/src/App.js](Unsolved/src/App.js). You will notice there is a handleLink() function that hasn't been used just yet. You will also notice a number of commented sections labeled "TODO".


* Add handleLink as a prop to the Header component in App.js. Then, go to the Header component [Unsolved/src/components/Header/Header.js](Unsolved/src/components/Header/Header.js) and add props as an argument and pass all the props to the Nav using the spread operator.

**START QA NOTES FOR ABOVE**

- Should we advise them to name the prop the same as the function name? I'm unfamiliar if this is common convention for HOCs. 
- Do we want to advise the spread operator here, in the hints section, or both?
- I was able to successfully complete the above exercise

**END QA NOTES FOR ABOVE**

* Next, go to the Nav component [Unsolved/src/components/Nav/Nav.js](Unsolved/src/components/Nav/Nav.js) and add props to the argument. Then, add each coresponding prop to each TODO section as specified.

**START QA NOTES FOR ABOVE**
- Not sure if this is a "me" issue, but is there an easy answer to the parameter needed for handleScroll to hit the bottom, no matter the length? I had to "trial and error here"
- I was able to successfully complete the above exercise.

**END QA NOTES FOR ABOVE**

* Then, go back to [Unsolved/src/App.js](Unsolved/src/App.js) and add handleLink() as a prop to all Card components.


* Then, go to the Card component [Unsolved/src/components/Card/Card.js](Unsolved/src/components/Card/Card.js) and do the same as you did with the Nav.


### Hints

* You can pass entire functions as props. You will most likely need to do this to get the links to work in this particular application

* You can use the spread operator `{...props}` to not have to list all the props being passed in individually.

**START QA NOTES FOR ABOVE**
- I would advise we should add the Alt+MouseClick VSCode feature to add the handleLink to all Card components simultaneously

**END QA NOTES FOR ABOVE**
