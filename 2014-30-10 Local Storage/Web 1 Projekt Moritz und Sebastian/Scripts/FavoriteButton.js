﻿$(document).ready(function () {


    $(".buy-button").after(

      "<input class='favorite_button' type='button' value='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favorit'/>");

        var list = $(document.getElementsByClassName('favorite_button'));
    $.each(list, function(index, data) {

        $(this).click(function() {

            alert("geklickd" + index + "");
        });
    });
});