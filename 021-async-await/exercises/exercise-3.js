/*
    1. Create a function called "goGetCandies" which will
       return a Promise Object that resolves to the value:
       { candy: "sour keys", quantity: 10 }
       This should take 2 seconds

    2. Create another function called "sellCandies" that
       will take a candy Object like above ^ and return
       a Number that is 25 * quantity. This will be 
       how much (in cents) we get for our candies. However,
       make this function take 3 seconds to do this math
       (return a Promise with a setTimeout with the answer).

    3. Write an async function that uses await to:
       1. Get the candy object from goGetCandies()
       2. Passes it to "sellCandies" and waits for the response
       3. Prints out how much money we made from our sale

    4. Do the same steps as #3 but with vanilla Promises.

    Q1: Which of these 2 methods do you prefer?
    Q2: Which of these 2 methods is easier to read?
*/

// 1
const goGetCandies = () => {
   console.log("Getting candies...");
   return new Promise((resolve, reject) => { 
      setTimeout(() => {
         resolve({candy: "sour keys", quantity: 10});
      }, 2000);
   });
};

// 2
const sellCandies = (candyObj) => {
   console.log("Selling candies...");
   return new Promise((resolve, reject) => { 
      setTimeout(() => {
         resolve(candyObj.quantity * 25);
      }, 3000);
   });
};

// 3
// const asyncFunc = async () => {
//    const candy = await goGetCandies();
//    const revenue = await sellCandies(candy);
//    console.log(`${revenue}`);
// }

// asyncFunc();

// 4
goGetCandies()
   .then((candy) => sellCandies(candy))
   .then((revenue) => console.log(revenue))
   ;