// counts occurences of a character in a String



function countNumberOfOccurences(a, str)
{
    let position = str.indexOf(a)
    let count = 0

    while (position != -1)
    {
        count ++
        position = str.indexOf(a, position + 1)
    }

    return count
}

console.log("Character count of 'a' in str - Have a nice day :",countNumberOfOccurences('a',"Have a nice day !"))
