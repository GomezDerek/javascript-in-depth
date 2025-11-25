/*
    1. Create a function called "fetchUser" that returns 
       a Promise that resolves with the value :
       { data: {user: "Monkey", admin: true} } after 3 seconds
    2. Create a function called "login" that takes an Object
       as an argument. If the object has a property called 
       "admin" with a value of true, then log out
       "Successfully logged in!", otherwise log out
       "Failed to log in, please try again."

    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchUser".
    
    5. Pass the user that comes back from "fetchUser" to the
       "login" function you created above

    6. Call the async function you created
    7. Log out "Program complete!"
*/

//1
function fetchUser() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({data: {user: "Monkey", admin: false}})
      }, 3000);
   });
}

//2
function login(obj) {
   if (obj.admin) console.log("Successfully logged in!");
   else console.error("Failed to log in, please try again.");
}

//3
console.log("Program starting...");

//4
async function asyncfunc() {
   const user = await fetchUser();
   login(user.data); // 5
}

asyncfunc(); // 6
console.log("Program complete!"); // 7