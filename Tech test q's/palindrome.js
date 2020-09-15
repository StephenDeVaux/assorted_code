const is_palindrome = (my_string) => {
    const reversed_string = my_string.split("").reverse().join("");
    if (reversed_string === my_string) {
      return true
    }
    return false
  }
  
  
  console.log(is_palindrome(":o!1ll1!o:"))