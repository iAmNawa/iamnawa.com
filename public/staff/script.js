//Shifts the window down 50px to account for the size of the navbar on a hashchange

var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);



//  THIS CHANGES THE STATUE PHOTOS FROM BLACK AND WHITE TO COLOR ON HOVER
// this code will be changed, just used as a quick example

$('.bNwTc').hover(function(){
    //change image or color or opacity
    $(this).attr('src', "../images/statueColor.jpg");
});

$(".bNwTc").mouseout(function(){
    $(this).attr('src', "../images/statueBnW.jpeg");
});
