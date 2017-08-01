$(document).ready(function(){
    /* logo box */
    $("#home-logo-box").mouseenter(function() {
        $("#listenbtn").animate({fontSize: '1.5em'} ,"slow");
        $("#home-logo").fadeTo(1000, 1);
        $("#listenbtn").fadeTo(1000, 1);
        $("#jumbo-text-box").fadeTo(1000, 0.3);
        $("#listenbtn").removeClass("visibility");
        $("#home-logo").removeClass("blur");

    });
    $('#home-logo-box').mouseleave(function() {
        $("#listenbtn").animate({fontSize: '0em'} ,"slow");
        $("#home-logo").fadeTo(1000, 0.5);
        $("#listenbtn").fadeTo(1000, 0.5);
        $("#jumbo-text-box").fadeTo(800, 0.5);
    });
    /* text box */
    $("#jumbo-text-box").mouseenter(function(){
        $("#moreinfo").animate({fontSize: '1.5em'} ,"slow");
        $("#jumbo-text-box").fadeTo(1000, 1);
        $("#moreinfo").fadeTo(1000, 1);
        $("#home-logo").fadeTo(1000, 0.3);
        $("#text-box-image").removeClass("blur");
        $("#moreinfo").removeClass("visibility");
        /*$("#jumbo-text-box").addClass("white-box");*/
    });
    $("#jumbo-text-box").mouseleave(function(){
        $("#moreinfo").animate({fontSize: '0em'} ,"slow");
        $("#jumbo-text-box").fadeTo(800, 0.5);
        $("#moreinfo").fadeTo(800, 0.5);
    });



});