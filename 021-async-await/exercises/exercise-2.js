/*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why?
    8. How could you speed it up?
*/

const startTime = new Date();

// 1
const fetchFast = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("Fast Done!")
      }, 2000);
   });
}

// 2
const fetchSlow = () => {
   return new Promise((resolve, reject) => { 
      setTimeout(() => {
         resolve("Slow Done")
      }, 6000);
    });
}

// 3
console.log("Program starting...");

// 4
const asyncFunc = async () => {

   // with Promise.all()
   const response = await Promise.all([fetchSlow(), fetchFast()]);
   response.forEach(e => console.log(e))
   console.log(new Date() - startTime);

   // without Promise.all()   
   // const fastResponse = await fetchFast();
   // console.log(fastResponse, new Date() - startTime);

   // const slowResponse = await fetchSlow();
   // console.log(slowResponse, new Date() - startTime);
}

// 5
asyncFunc();

// 6
console.log("Program complete!");

/**
 * 7
 * This program takes 8 seconds to run because we wait for fetchFast to resolve before
 * calling fetchSlow
 * 
 * 8
 * This could be sped up by synchronously calling fetchFast and fetchSlow,
 * with something like resolve.all()
 * 
 */