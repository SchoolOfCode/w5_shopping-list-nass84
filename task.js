
function capitalise(word) {
    let lowerCaseWord = word.toLowerCase();
    let upperCaseLetter = lowerCaseWord[0];
    lowerCaseWord = lowerCaseWord.substring(1);
    upperCaseLetter = upperCaseLetter.toUpperCase();
    let capitaliseWord = upperCaseLetter + lowerCaseWord;
  
    return capitaliseWord;
  }
  
  // ### Stage 1
  
  // Have a think about how you would use JavaScript data structures to store this information.
  // In `main.js`, create a variable called shopping list and recreate the above list. Once you have had a go at
  // doing this yourself, have a look at the way we have structured the data and compare it
  // to your own. There is no one way to do this, but each way has pros and cons.
  
  // const shoppinglist - [- "Rice", "Onion", "Butter", "Parmesan", "Garlic", "Wild Mushroom", "Chicken Stock", "White Wine", "Basil", "Oregano", "Chili Flakes"]
  // const shopping - ["Rice", "Onion", "Garlic", "Wild Mushroom", "Chicken Stock", "White Wine"]
  // const basket - ["Butter", "Parmesan", "Basil", "Oregano","Chili Flakes"]
  
  // ### Stage 2
  
  // So, our task is to use this array of objects to display an unordered list on our page.
  // We know we will want a ul so lets create that in the index.html.
  // We now want to create a list item for each object in our array.
  // Using our computational thinking skills we can break this problem down and create a function
  // that takes in a single item name as a string and a boolean telling us if it is in the basket,
  // and creates a single li. We can then loop over all the items and use our function multiple times.
  // This should happen as soon as the page loads.
  // This problem will need breaking down further but that will be down to you!
  
  // Each list item should be something like this:
  
  // Plan
  // Outcome - Create unordered list on page with all the shopping items on
  // Create UL in HTML
  // Add items to UL as List Items
  // Add class of inbasket to items in basket
  
  const shoppingList = [
    { item: "Rice", isInBasket: false },
    { item: "Onion", isInBasket: false },
    { item: "Butter", isInBasket: true },
    { item: "Parmesan", isInBasket: true },
    { item: "Garlic", isInBasket: false },
    { item: "Wild Mushroom", isInBasket: false },
    { item: "Chicken Stock", isInBasket: false },
    { item: "White Wine", isInBasket: false },
    { item: "Basil", isInBasket: true },
    { item: "Oregano", isInBasket: true },
    { item: "Chili Flakes", isInBasket: true },
  ];
  
  // How to write this using array methods
  
  // Plan
  // Outcome - Create unordered list on page with all the shopping items on
  // Create UL in HTML
  // Go through the Shopping List
  // Create li element
  // Make individual elements using index
  // Add li items to UL
  // Add class of inbasket to items in basket if isInbasket is true
  
  // ### Stage 3
  
  // We are now at the stage where we have an array of items and an unordered list displayed on the page.
  //Lets add the functionality to add items to the list. We will first do this using prompt and then
  // refactor to use an HTML text input.
  
  // 1. Create a function that asks the user to input an item using a prompt.
  
  // 2. Create a button on the page that calls your function.
  
  // document
  //   .getElementById("add-item-button")
  //   .addEventListener("click", promptAddItem);
  
  // 3. Add the item to the array by creating an object with two keys: item (the string you have got from the user prompt)
  // and isInBasket (which defaults to false). If you have used different key names in your array of objects then use those.
  // Take input stored in userAnswer, give key of item and is In Basket
  // ** How to use capatalise in the prompt Answer Function
  
  // 4. Display the item on the page by using your function from stage 2 to display your item on the page
  
  // function promptAddItem() {
  //   let userAnswer = prompt("What would you like to add to the shopping list?");
  //   userAnswer = capitalise(userAnswer);
  //   const userAnswerObject = { item: userAnswer, isInBasket: false };
  //   addAllShoppingtoUL([userAnswerObject]);
  // }
  
  // **Refactor to use HTML input**
  
  document
    .getElementById("add-item-button")
    .addEventListener("click", promptAddItem);
  
  function promptAddItem(userInput) {
    let userAnswer = (userInput.innerText = document.getElementById(
      "change-text"
    ).value);
    userAnswer = capitalise(userAnswer);
    const userAnswerObject = { item: userAnswer, isInBasket: false };
    addAllShoppingtoUL([userAnswerObject]);
      
  }
  
  // ### Stage 4
  
  // The following steps you should breakdown yourself. Remember to keep breaking down and to write yourself a plan.
  
  // Add a button to clear the list.
  //Plan
  //Add button to html with id to identify it  x
  //Add event listener to button so when clicked it triggers a function
  //Add function that removes the Lis from the UL
  
  document
    .getElementById("clear-all-items")
    .addEventListener("click", clearItemsFromList);
  
  function clearItemsFromList(event) {
    const shoppingList = document.getElementById("shoppingBasket");
    // As long as <ul> has a child node, remove it
    while (shoppingList.hasChildNodes()) {
      shoppingList.removeChild(shoppingList.firstChild);
    }
  }
  
  // ???? Add a button on each item to toggle whether it is in the basket.
  // PLAN
  // Add checkbox that appears when li load
  // If the box is tick change key to true
  // If the box is unticked change key to false
  
  // value	Sets or returns the value of the value attribute of a checkbox
  
  // function to use when button is clicked
  function toggleBasket(event) {
    // Can't use id as they dont have an individual id would need to use something like data attribute https://www.w3schools.com/tags/att_data-.asp
    // This chains one thing onto the other, so when event is clicked it looks for the button thats attached to the li
    // target refers to the html element that was clicked aka the button
    // the parent element gives us the li as button is inside it;
    const button = event.target;
    const li = button.parentElement;
    li.classList.toggle("in-basket");
    if (li.classList.contains("in-basket")) {
      button.textContent = "Remove from basket";
    } else {
      button.textContent = "Add to basket";
    }
  }
  
  function addAllShoppingtoUL(wordsToMakeLi) {
    // check how many times to run the code
    for (i = 0; i < wordsToMakeLi.length; i++) {
      // create li element
      const li = document.createElement("li");
      // add the item name to the li inner text
      li.innerText = wordsToMakeLi[i].item;
       // add class to li 
      li.classList.add("li-item");
      // sort alphabetically 
    
      // create a button element
      let button = document.createElement("button");
      // Set button text
      button.textContent = "Add to basket";
      // Adds events listener to button to add in basket
      button.addEventListener("click", toggleBasket);
      // add button to li
      li.appendChild(button);
      // add li to the UL id shopping basket
      document.getElementById("shoppingBasket").appendChild(li);
    }
  }
  
  addAllShoppingtoUL(shoppingList);
  
  
  // ### Optional Further JS Challenges
  
  // ???? Add a button that clears only the completed items.
  
  // Add button
  // If button is clicked clear items
  
  document
    // Attached to hide basket item button
    .getElementById("hide-basket-items")
    // if click on button do the function
    .addEventListener("click", hideBasketItems);
  
  function hideBasketItems(event) {
    // get items that need to be cleared
    const itemsInBasket = document.getElementsByClassName("in-basket");
    // change into Array
    const arrayBasketItems = Array.from(itemsInBasket);
    // hide those items from list
    arrayBasketItems.map((element) => element.classList.add("hide"));
    // show those items in list
  }
  
  document
    .getElementById("show-all-items")
    .addEventListener("click", showAllItems);
  
  function showAllItems(event) {
     // get items that need to be cleared
    const itemsInBasket = document.getElementsByClassName("in-basket");
    // change into Array
    const arrayBasketItems = Array.from(itemsInBasket);
     // hide those items from list
    arrayBasketItems.map((element) => element.classList.remove("hide"));
  }
  
  
  // ???? Sort the list alphabetically.
  
  // Plan 
  // As item is added to the list sort whole list alphabetically 
  // Attach sort to the add item 
  
  