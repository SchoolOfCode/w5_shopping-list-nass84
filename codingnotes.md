### Stage 1

Have a think about how you would use JavaScript data structures to store this information.
In `main.js`, create a variable called shopping list and recreate the above list. Once you have had a go at
doing this yourself, have a look at the way we have structured the data and compare it
to your own. There is no one way to do this, but each way has pros and cons.

## Plan - Must be an Array

We need 2 lists, one for to buy and one for basket - Potential nested array
  Pros   - This would be more accurate amd could be used for other projects, Clearly see what is in each categry, Can move items from one list to another to keep all the data
  Cons   - Potentially unnecessary and would be more complicated than 1 list
Array 1 - Things to buy Array 2 Things bought
const Shopping List - [["Rice", "Onion", "Garlic", "Wild Mushroom", "Chicken Stock", "White Wine"],["Butter", "Parmesan", "Basil", "Oregano","Chili Flakes"]];
 Or
 const Shopping List - ["Rice", "Onion", "Garlic", "Wild Mushroom", "Chicken Stock", "White Wine"]
 const Basket - ["Butter", "Parmesan", "Basil", "Oregano","Chili Flakes"]

Could have 1 list and remove it completely once it's in the basket as its no longer needed
  Pros   - This would be simple to code
  Cons   - We don't know for definate that the items in the basket are no longer needed and if this was real word the basket would exist
 const Shopping List - ["Rice", "Onion", "Garlic", "Wild Mushroom", "Chicken Stock", "White Wine"]

Could make an Array like Object
  Pros   - Data is organised nicely and easily accessed through dot notation. Ive found these more complicated so would be good to practice.
  Cons   - Potentially unnecessary and would be more complicated. May have issues with using certain functions.
const Shopping List = [
  { Buy: "Rice", "Onion", "Garlic", "Wild Mushroom", "Chicken Stock", "White Wine"},
  { Basket: "Butter", "Parmesan", "Basil", "Oregano","Chili Flakes"},
];

I think that the simplest solution that keeps all the data would be take 1 array and turn it into 2 arrays
 const shoppinglist - [- "Rice", "Onion", "Butter", "Parmesan", "Garlic", "Wild Mushroom", "Chicken Stock", "White Wine", "Basil", "Oregano", "Chili Flakes"]
 const shopping - ["Rice", "Onion", "Garlic", "Wild Mushroom", "Chicken Stock", "White Wine"]
 const basket - ["Butter", "Parmesan", "Basil", "Oregano","Chili Flakes"]

Recommended way to complete was

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

  