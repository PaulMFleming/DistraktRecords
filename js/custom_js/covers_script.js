COVERS = {
    "podcast-album": "url(../images/Sample_09.jpg)",
    "first-album": "url(../images/covers/satellite.png)",
    "second-album": "url(../images/covers/mindmap.png)",
    "third-album": "url(../images/covers/nihilus1.png)",
}
LOGOS = {
    "podcast-album": "url(../images/factorybg1.jpg)",
    "first-album": "url(../images/logos/deviateLogo1.jpg)",
    "second-album": "url(../images/logos/andor.png)",
    "third-album": "url(../images/logos/simonPlaceholder.png)",
}

function showAlbum(albumName) {
    $("#blank-pane").css('background-image', COVERS[albumName]);
    $("body").css('background-image', LOGOS[albumName]);

    $("#playlist-style>div").addClass("hidden");
    $("#"+albumName+"-playlist").removeClass("hidden");
}

