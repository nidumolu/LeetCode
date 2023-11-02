/**
 * @param {number} n
 * @return {Function} counter
 */

//const count = 0
var createCounter = function(count = 0) {
    
    return function() {
        console.log("Current counter is :", count)
        return count ++
       
    };
};

 
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
