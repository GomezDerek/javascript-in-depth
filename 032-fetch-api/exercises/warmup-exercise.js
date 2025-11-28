/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
       
    2. Make a request to: https://www.craigslist.org/about/
       and print out the resulting HTML (text) String, using Fetch
    3. Compare what you see in Node to visiting the actual page in
       your Browser - what matches up?
*/

// with async / await
// 1
import fetch from "node-fetch";

// 2
const response = await fetch("https://www.craigslist.org/about/");
console.log(response);

// with promises
fetch("https://www.craigslist.org/about/")
   .then(msg => console.log(msg))
   ;