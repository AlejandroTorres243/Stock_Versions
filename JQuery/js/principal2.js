$(document).ready(function(){
    $("h1").html("Hola mundo");
    $("h2").html("soy un javascript con dom");
    $("p").append("SOY JAVA");
    $("p").after("SOY JAVA2");
    $("p").css("background-color", "blue");
    $("p").hasClass("clase1");
    $("h3").addClass("clase1");
    $("h3").removeClass("clase1");
    $("h3").addClass("clase1");
    $("h3").css("background-color", "red");

    console.log($("input.spa").val());

});