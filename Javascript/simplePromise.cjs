
/*
https://www.geeksforgeeks.org/javascript-promise-resolve-method/
A Promise is an object that represents either completion or failure of a user task. A promise in JavaScript can be in three states pending, fulfilled, or rejected. 

The main advantage of using a Promise in JavaScript is that a user can assign callback functions to the promises in case of a rejection or fulfillment of a Promise, also by using promises one can easily handle the control flow of all the Asynchronous events or data upcoming. As the name suggests a promise is either kept or broken. So, a promise is either completed(kept) or rejected(broken).

Promise resolve() method: The promise.resolve() method in JS returns a Promise object that is resolved with a given value. Any of the three things can happen: 

If the value is a promise then the promise is returned.
If the value has a “then” attached to the promise, then the returned promise will follow that “then” to till the final state.
The promise fulfilled with its value will be returned.
*/
const { resolveObjectURL } = require("buffer");

const url = "https://dummyjson.com/products/1"
const products = []

async function doSomething()
{
    console.log("function called...");
    return Promise.resolve(url);
}

doSomething()
.then(url =>fetch(url))
.then(res => res.json())
.then(data => {console.log(" List of products retrieved from url :",url," ",JSON.stringify(data));
                products.push(data);} )
.catch(err=> {console.log("error returned", err); failureCallback(err);})

console.log(" Count of products retrieved from url :",url," ",products.length)