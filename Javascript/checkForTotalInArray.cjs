// check if the sum of two numbers is equal to the "total" that is specified
// e.g in this case the total is 7 so need to find if any of the pair of numbers in the array add up to 7


function checkForPair(arr, total)
{
    let hashTable = {}
    

    for (var i = 0; i < arr.length; i++)
    {
        if(hashTable[arr[i]] != undefined)
        {
            totalPair++
            console.log("Found a pair :", arr[i], hashTable[arr[i]]);
        }
        else
        {
            hashTable[total - arr[i]] = arr[i]
        }
    }
}

let totalPair = 0
let testArr= [1,3,4,5,6,-1,8,2]
let totalToCheck = 7
checkForPair(testArr,totalToCheck)

console.log("Total number of pairs found :", totalPair)