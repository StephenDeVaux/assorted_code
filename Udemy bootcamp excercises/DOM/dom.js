let tag = document.getElementById("highlight")
let classTags = document.getElementsByClassName("bolded")

let tag1 = document.querySelector("li")
let tag1s = document.querySelectorAll("li")

let tag2 = document.querySelector("#flower1")

console.log("tag2 " + tag2.innerText)
console.log("tag2 " + tag2.innerHTML)
console.log("tag2 " + tag2.textContent)

let butt = document.querySelector("button")

butt.addEventListener("click", function() {
    document.body.classList.toggle("changeBackground")
});

let liList = document.querySelectorAll("li")
    // liList[0].classList.add("makeRed")

for (i = 0; i < liList.length; i++) {
    liList[i].addEventListener('mouseover', function() {
        this.classList.add('makeRed')
    })
    liList[i].addEventListener('mouseout', function() {
        this.classList.remove('makeRed')
    })
    liList[i].addEventListener('click', function() {
        this.classList.toggle('done')
    })

}