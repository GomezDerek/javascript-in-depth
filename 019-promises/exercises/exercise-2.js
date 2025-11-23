/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/


// 1
console.log("Program started");

// 2
const promise = new Promise((resolve) => {
   console.log("Program in progress"); // 4
   setTimeout( () => resolve('Step 1 complete'), 3000)
});

promise
   .then((resolvedMsg) => console.log(resolvedMsg)) // 5
   .finally(() => {
      // 6
      // const promise2 = new Promise((resolve) => setTimeout(() => resolve('Step 2 complete'), 3000));
      // promise2.then((msg) => console.log(msg)); // 7
      return new Promise((resolve) => setTimeout(() => resolve(), 3000));
   })
   .then(() => console.log("Step 2 complete"));


// 3
console.log(promise);