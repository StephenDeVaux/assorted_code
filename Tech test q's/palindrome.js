const is_palindrome = (my_string) => {
    const reversed_string = my_string.split("").reverse().join("");
    if (reversed_string === my_string) {
        return true
    }
    return false
}


console.log(is_palindrome(":o!1ll1!o:"))

//A better one for next time!
function isPalindrome(string) {
    stringConditioned = string.toLowerCase().replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)| |“|”|’|/g, "");
    const reversedString = stringConditioned.split("").reverse().join("");
    if (reversedString === stringConditioned) {
        console.log(`${string} is a palindrome`)
        return true
    }
    console.log(`${string} is NOT a palindrome`)
    return false
}

console.log(isPalindrome("A dog, a plan, a canal: pagoda."))
console.log(isPalindrome("A dog! A panic in a pagoda!"))
console.log(isPalindrome("A dog! Ax panic in a pagoda!"))
console.log(isPalindrome("Animal loots foliated detail of stool lamina."))
console.log(isPalindrome('Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.'))