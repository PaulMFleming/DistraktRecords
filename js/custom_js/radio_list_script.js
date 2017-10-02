$(document).ready(function(){
    $("#radio-list-item-one").mouseenter(function() {
        $("#first-album.album-button").css('text-decoration', 'underline');
    });
    $("#radio-list-item-one").mouseleave(function() {
        $("#first-album.album-button").css('text-decoration', 'none');
    });
});