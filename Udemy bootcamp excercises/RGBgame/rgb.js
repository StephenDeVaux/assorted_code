let squares = document.querySelectorAll('.square')
let message = document.querySelector("#message")
let easyBtn = document.querySelector('#easyBtn')
let hardBtn = document.querySelector('#hardBtn')
let resetBtn = document.querySelector('#reset')
let pickedColormsg = document.querySelector('#pickedColor')
let headingElement = document.querySelector(".heading")
let sizeOfGame = 6;
let pickedColor;
let colors;

setupColors(sizeOfGame)

easyBtn.addEventListener('click', function() {
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    squares[3].style.display = "none";
    squares[4].style.display = "none";
    squares[5].style.display = "none";
    setupColors(3)
})
hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    squares[3].style.display = "block";
    squares[4].style.display = "block";
    squares[5].style.display = "block";
    setupColors(6)
})
resetBtn.addEventListener('click', function() {
    setupColors(sizeOfGame)
})

function setupColors(num) {
    //Setup game and reset background colors
    sizeOfGame = num
    colors = generateRandomArray(sizeOfGame)
    pickedColor = pickColor(num)
    pickedColormsg.innerText = pickedColor
    headingElement.style.backgroundColor = 'steelblue';
    resetBtn.textContent = "New colors?";
    message.textContent = "";

    //Setup all squares
    for (i = 0; i < squares.length; i++) {
        //Add colors to sqaures
        squares[i].style.backgroundColor = colors[i]

        //Add click listeners
        squares[i].addEventListener('click', function() {
            if (this.style.backgroundColor === pickedColor) {
                message.textContent = "Correct!"
                document.querySelector('#reset').textContent = "Play again?"
                changeAllColors(pickedColor)
            } else {
                this.style.backgroundColor = '#232323';
                message.textContent = "Try again"
            }
        });
    }
}

function randRGb() {
    const col1 = Math.floor(Math.random() * 255);
    const col2 = Math.floor(Math.random() * 255);
    const col3 = Math.floor(Math.random() * 255);

    return "rgb(" + col1 + ", " + col2 + ", " + col3 + ")"
}

function changeAllColors(color) {
    for (i = 0; i < squares.length; i++) {
        //Add colors to sqaures
        squares[i].style.backgroundColor = color
    }
    headingElement.style.backgroundColor = color;
}

function pickColor(numberOfcolors) {
    const index = Math.floor(Math.random() * numberOfcolors);
    return colors[index]
}

function generateRandomArray(num) {
    let arr = []
    for (i = 0; i < num; i++) {
        arr.push(randRGb())
    }
    return arr;
}