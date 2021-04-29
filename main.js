console.log("Shopping List Task");


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

// <!-- E.G. 1 -->
// <li class="in-basket">Item Name</li>
// <!-- E.G. 2 -->
// <li>Other Item Name</li>
// NOTE: the class of in-basket would only be applied when the boolean value of isInBasket is true for the item.
// That way we can use CSS that applies only to completed items to make them appear different.

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

function addAllShoppingtoUL(wordstomakeLi) {
  for (i = 0; i < wordstomakeLi.length; i++) {
        const li = document.createElement("LI");
        const listItem = document.createTextNode(wordstomakeLi[i].item);
        li.appendChild(listItem);
        document.getElementById("shoppingBasket").appendChild(li);
            if (wordstomakeLi[i].isInBasket === true){
                li.classList.add("in-basket");
            }
      }
      }
 
      
addAllShoppingtoUL(shoppingList);



//This takes in the array and looks at the in basket property
// If it is true it returns the items that are in basket

// function filterShoppingInBasket(shoppingObject) {
//       if (shoppingObject.isInBasket === true){
//       return shoppingObject.item
//     }
//    }

// const shoppingInBasket = shoppingList.filter(filterShoppingInBasket)
