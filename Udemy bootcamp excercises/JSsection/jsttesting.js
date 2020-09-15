// var name = prompt("whats your name?")
// var age = prompt("whats your age?")
// alert("Hello " + name + "And you are " + 365.25 * age + "days old")
// console.log('Hello' + name)

///////////////////////////////Conditionals Excercise
// var age = prompt("How old are you")
// if (age < 18) {
//     alert("you cant enter the club")
// } else if (age < 21) {
//     alert("You can enter but you cant drink, have an X!")
// } else {
//     alert("Welcome on in!")
// }

///////////////////////////////Guessing Game
// Create secret number
// var secretNum = Math.floor(Math.random() * 100)
// var guess = secretNum + 1
// while (guess !== secretNum) {
//     var guess = Number(prompt("guess a number"))
//     if (guess === secretNum) {
//         alert('You got it right!')
//         console.log("the secret was - " + secretNum)
//     } else if (guess > secretNum) {
//         alert("To high, guess again!")
//     } else {
//         alert("To low, guess again!")
//     }
// }

///////////////////////////////Loop testing
// console.log("Printing all numbers divisiable by 5 and 3 between 5 and 50")
// var counter = 5;
// while (counter <= 50) {
//     if (counter % 5 === 0 && counter % 3 === 0) {
//         console.log(counter)
//     }
//     counter += 1;
// }

///////////////////////////////Functions! 
// function isEven(num) {
//     return num % 2 === 0;
// }

// function factorial(num) {
//     var result = 1;
//     for (var i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// function kebabTosnack(str) {
//     //Replace all dashed ot underscores
//     const newstr = str.replace(/-/g, "_")
//     return newstr
// }

///////////////////////////////Array Exampels
//Print reverse function
function printReverse(arr) {
    for (i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}
// printReverse([1, 2, 3, 4])
// printReverse(["a", "b", "c"])

function isUniform(arr) {
    const check = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (check !== arr[i]) {
            console.log('False')
            return false
        }
    }
    console.log("true")
    return true
}
// isUniform([1, 1, 2, 1, 1, 1, 1, 1, 1])
// isUniform([1, 1, 1, 1, 1, 1, 1, 1, 1])
// isUniform(["a", "a", "a", "a"])
// isUniform(["a", "a", "a", "b"])

function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log('Sum is = ' + sum)
    return sum
}
// sumArray([1, 2, 3, 4])
// sumArray([10, 3, 10, 4])
// sumArray([-5, 100])

function max(arr) {
    let max = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    console.log(max)
}
max([10, 2, 3, 4, 5, 6, 6])

//If you wanted to amke your own forEach function
Array.prototype.myForEach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}
const friends = ["char", "dave", "mat"]
friends.myForEach(function(name) {
    console.log("This works - " + name)
})