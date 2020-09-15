let style = {
    color: "green",
    background: "yellow",
}

$("li").css(style)
$("div").css("background", "purple")
$("div.highlight").css("width", "200px")
$("#third").css("border", "4px solid orange")
$("div:first-of-type").css("color", "pink")


// .att

// .val
// $("input").val("Hello there sunshine")

const dropDown = $("select").val()

console.log(dropDown)

$("#clicktest").click(function() {
    console.log("test click listener")
});

$("input").keypress(function() {
    console.log("a key was pressed!")
})