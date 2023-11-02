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