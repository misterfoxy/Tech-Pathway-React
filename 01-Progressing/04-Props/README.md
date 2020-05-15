## 1.4 Props

# Step 1:

Npm install

# Step 2:

Npm start and investigate what is provided. You are given a repo that loads but none of the links work when clicked. Also none of the projects appear any different than one another.

# Step 3:

Navigate to /src/App.js. You will notice there is a handleLink() function that hasn't been used yet. You will also notice a number of commented sections labeled "TODO".

# Step 4:

Add handleLink as a prop to the Header component in App.js. Then, go to the Header component (/src/components/Header/Header.js) and add props as an argument and pass all the props to the Nav using the spread operator (HINT: {...props}).


# Step 5:

Next, go to the Nav component (/src/components/Nav/Nav.js) and add props to the argument. Then, add each coresponding prop to each TODO section as specified.

# Step 6:

Then, go back to /src/App.js and add handleLink() as a prop to all Card components.

# Step 7:

Then, go to the Card component (/src/components/Card/Card.js) and do the same as you did with the Nav.

