console.log("Hi, GriffinPixel!");

// --- $(document).ready(function () {}); is to safeguard that jquery code will work if the jquery cdn was put
// --- at the header but you won't need this and will certainly be safe if you put jQuery at the most bottom 
// --- of the site before index.js file and </body> tag.
$(document).ready(function () {
    
    // ******** 2️⃣ this section of code get exceuted second after everything outsite $(document).ready(function () {}); *******

    // --- if you have 1 property in it, you are getting the value **
    // --- when you have 2 properties in it, you are setting the value **

    $("h2").css("color", "#484279");
    $("h2").css("font-size", "2rem");
    $("h2").css("margin", "0 0 1rem");

    console.log("🦊💕 ***** Code inside $(document).ready(function () {}); *****");
    console.log("h2 font-size is " + $("h2").css("font-size"));
});

// ******** 1️⃣ this section of code get exceuted first before everything in $(document).ready(function () {}); *******
console.log("h1 color is " + $("h1").css("color") + " originally before adding .title class");

$("h1").addClass("title title-shadow");
$("h1").removeClass("title-redbg");

console.log("h1 color is now " + $("h1").css("color") + " after adding .title class with jQuery");

console.log("h1 has text-shadow? " + $("h1").hasClass("title-shadow"));


// $("button").text("Griffin");
// $("button").html("<em>Pixel</em>");
// $("button").text("<em>Channa</em>");

console.log("🦄🌈 ***** Getting and Setting Attributes *****");
console.log($("img").attr("src"));
console.log($("img").attr("src", "img/nyanoriginal.gif"));
console.log($("img").attr("src"));

console.log($("a").attr("href"));
console.log($("a").attr("href", "https://yahoo.com"));
console.log($("a").attr("href"));

// ***** Add EventLisetener with jQuery *****");
// document.querySelector("h1").addEventListener("click", function () { 
//     $("h1").text("PiffinGrixel");
// });

$("h1").click(function () {
    $("h1").text("PiffinGrixel");
    $("h1").css("color", "#2da5a5");
    $("h1").css("text-shadow", "3px 4px 0 #342e63");   
    
    setTimeout(function () {
        $("h1").text("GriffinPixel");
        $("h1").css("color", "#342e63");
        $("h1").css("text-shadow", "2px 4px 0 #2da5a5");  
    }, 2000);
});


// ********************
// Add event Listener to all buttons - Vanilla JavaScript
for (var i = 0; i < 5; i++) { 
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "red";
    });
}

// Add event Listener to all buttons - jQuery
$("button").click(function () { 
    $("h1").css("color", "blue");
})

$(document).keydown(function(event) {
    console.log(event.key);
});

$("input").keydown(function(event) {
    console.log(event.key);
});


// WRONG
// $("h3").text($(document).keydown(function (event) { 
//     return event.key;
// }));

// CORRECT
var typedCharacters = [];

$(document).keydown(function (event) {
    typedCharacters.push(event.key);
    
    $("h3").text(typedCharacters);

    // $("h3").text(event.key);
});

$("h1").on("mouseover", function (param) {
    $("h1").text("<h1> is mouseovered.");
    
    setTimeout(function () {
        $("h1").text("GriffinPixel");
    }, 3000);
});

// ********************
// Adding and removing elements using jQuery
$("h1").before("<h4>This is a new element.</h3>");
$("h2").after("This is another new element.");
$("h2").prepend("<span style='color: #ff88c4;'>🦄'preprend'</span> ");
$("h2").append(" <span style='color: pink;'>'apprend'🦊</span>");


$('.rmvbtn').click(function () { 
    $('button').remove();
});

// ********************
// Animations with jQuery
$(".hide-h1").click(function () { 
    $("h1").hide();
});

$(".show-h1").click(function () { 
    $("h1").show();
});

$(".toggle-h1").click(function () { 
    $("h1").toggle();
});

$(".fadeout-h1").click(function () { 
    $("h1").fadeOut();
});

$(".fadein-h1").click(function () { 
    $("h1").fadeIn();
});

$(".fadetoggle-h1").click(function () { 
    $("h1").fadeToggle();
});

$(".slideup-h1").click(function () { 
    $("h1").slideUp();
});

$(".slidedown-h1").click(function () { 
    $("h1").slideDown();
});

$(".slidetoggle-h1").click(function () { 
    $("h1").slideToggle();
});

// animate method can only animate property with numeric value **
$(".animate-h1").click(function () { 
    $("h1").animate({opacity: .5});
});

// Chaine animations
$(".chainanimate-h1").click(function () { 
    $("h1").slideUp().slideDown().animate({opacity: .5});
});


// ******* Archive *******
// $(".gr").css("color", "#ffa9d3");
// $(".if").css("color", "#ff8bc5");
// $(".fin").css("color", "#ff58a2");
// $(".pi").css("color", "hotpink");
// $(".xel").css("color", "#ffa4d2");