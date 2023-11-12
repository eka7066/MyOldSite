// /* умный аналог window.onload */
// $(function(){
    
//     /* получение элементов */
//     var jqInputs = $('.check');
    
//     /* событие */
//     jqInputs.on('click', function(){
//         $(this).removeClass('err');
//     });
    
//     jqInputs.on('focus', function(){
//         $(this).addClass('focus');
//     });

//     jqInputs.on('blur', function(){
//         $(this).removeClass('focus');
//     });
    
//     jqInputs.addClass('some').addClass('some1').addClass('some2');
    
//     $('.items .item').on('click', function(){
//         $(this).fadeOut(1000, function(){
//             $(this).fadeIn(1000);
//         });
//     });

// });


var action="click";
var speed="500";

$(document).ready(function() {
    // Question handler
    $('.question').on(action, function() {
        // Get next element 
        $(this).next()           
            .slideToggle(speed)
        // Select all other answers
            .siblings('.answer')
            .slideUp();
    });
});