$( document ).ready(function() {

  $(function(fade) {
     var divs = $('.name , .sam');   //this selects the divs of class 'fade' (multiple)
     $(window).on('scroll', function() {   //this selects the window and attaches to the scroll event.  when scroll occurs, the inline function is called
         var st = $(this).scrollTop();   //gets the vertical position of the current element
         divs.css({ //this changes the css of the divs from before (specifically margin-top and opacity
             'margin-top' : -(st/3)+"px",
             'opacity' : 1 - st/400
         });
     });
 });

 
});
