// script to highlight the release names on the first page of the audio player

$(document).ready(function(){
    $("#radio-list-item-one").mouseenter(function() {
        $("#first-album.album-button").css('text-decoration', 'underline');
    });
    $("#radio-list-item-one").mouseleave(function() {
        $("#first-album.album-button").css('text-decoration', 'none');
    });

    $("#radio-list-item-two").mouseenter(function() {
        $("#second-album.album-button").css('text-decoration', 'underline');
    });
    $("#radio-list-item-two").mouseleave(function() {
        $("#second-album.album-button").css('text-decoration', 'none');
    });

    $("#radio-list-item-three").mouseenter(function() {
        $("#third-album.album-button").css('text-decoration', 'underline');
    });
    $("#radio-list-item-three").mouseleave(function() {
        $("#third-album.album-button").css('text-decoration', 'none');
    });
});