## 1.1 Folder Structure

In this activity we are going to implement best practices when it comes to file and folder structure within React apps.

# Instructions

* Create a folder called `reactworkshop` separate from this repository that you can use for all of the activities throughout the lesson.

* Since these activities were all built using Create React App all we will need to do is `npm install` once and then copy and paste the `src` folders for each.

* Copy the entire `src` folder with [Unsolved/src](Unsolved/src) and paste it into your `reactworkshop` folder.

* Install node packages by running the command `npm install` from within the [Unsolved/src](Unsolved/src) folder.

* Stop the dev server if it is already running. Start the app in dev mode by running `npm start`.

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

* Now navigate to [Unsolved/src/App.js](Unsolved/src/App.js). You will notice that there is a folder already included called "styles".

* Import the CSS included in the "styles" folder into App.js by add the following:

```
import "./styles/base.css";
```

* Next, go to the Nav component (/src/components/Nav/Nav.js) and add props to the argument. Then, add each coresponding prop to each TODO section as specified.

* Then, go back to /src/App.js and add handleLink() as a prop to all Card components.

* Then, go to the Card component (/src/components/Card/Card.js) and do the same as you did with the Nav.


### Hints

* You can pass entire functions as props. You will most likely need to do this to get the links to work in this particular application

* You can use the spread operator `{...props}` to not have to list all the props being passed in individually.