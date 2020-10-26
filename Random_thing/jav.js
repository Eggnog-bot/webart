//pseudocode: half human/half computer L

//make random alters all around the screan

// (button).on(click){
//     //add random alert box
    
//     append alert box class to the body 
    
//     calcuate random x location
//     calcuate random y location
//     set the  css to have the random location

// }

$(document).ready(function(){

    $(window).on('click', function(){

    let altBox = `<div class="alt-box"> Well shit you got an Error
    <button>ok</button>
</div>`
let randomX = Math.floor(Math.random()* $(window).width());
let randomY = Math.floor(Math.random()* $(window).height());

console.log("randomc: " + randomX)
console.log("randomc: " + randomY)

    $('body').append(altBox);

$('.alt-box:last-child').css(`transform`, `translate(${randomX}px, ${randomY}px`);



    })


})



