// Add item to shopping list 
// Change Add to Basket button so when clicked move item to items in Basket 
// Add Basket to Clear list Function 

const shoppingList = [

];

// Change Add to Basket button so when clicked move item to items in Basket 



function toggleBasket(event) {
  
  const button = event.target;
  const li = button.parentElement;
  li.classList.toggle("in-basket");
  if (li.classList.contains("in-basket")) {
    document.getElementById("basket").appendChild(li);
    button.textContent = "Move back to list";
    } else {
    document.getElementById("shoppingList").appendChild(li);
    button.textContent = "Add to basket";
  }
}


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
  const inputButton = document.getElementById("change-text");
  inputButton.value = null;
    
}


// Clear Shopping List 

document
  .getElementById("clear-all-items")
  .addEventListener("click", clearItemsFromList);

function clearItemsFromList(event) {
    const shoppingList = document.getElementById("shoppingList");
    const basket = document.getElementById("basket");

       // As long as <ul> has a child node, remove it

    while (basket.hasChildNodes()) {
      basket.removeChild(basket.firstChild);
    }
    while (shoppingList.hasChildNodes()) {
      shoppingList.removeChild(shoppingList.firstChild);
    }
      
    }
//A clear and easy to read function- I like that you have comment about the child node- shows you know what you are doing.


// function toggleBasket(event) {
  
//   const button = event.target;
//   const li = button.parentElement;
//   li.classList.toggle("in-basket");
//   if (li.classList.contains("in-basket")) {
//     button.textContent = "Remove from basket";
//   } else {
//     button.textContent = "Add to basket";
//   }
// }

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
    document.getElementById("shoppingList").appendChild(li);
  }
} 
// I like the use of comments- you have planned really well!

addAllShoppingtoUL(shoppingList);

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
// I like that you have functions to hide and show the items- really great work!

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



function capitalise(word) {
  let lowerCaseWord = word.toLowerCase();
  let upperCaseLetter = lowerCaseWord[0];
  lowerCaseWord = lowerCaseWord.substring(1);
  upperCaseLetter = upperCaseLetter.toUpperCase();
  let capitaliseWord = upperCaseLetter + lowerCaseWord;

  return capitaliseWord;
}
// It's great that you have included a function to capitalise user-input.

// Only suggestion I can think of is for you to declare and move all your const variables to the top of the page, that way your functions can be more concise.
// Overall, I am really impressed with your shopping list and I've learnt a lot just reviewing it. You've really done a great job!