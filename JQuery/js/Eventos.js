function Aviso(){
    alert("Bienvenido a Javacript");
    console.log("Bienvenido a Javacript");
}

function Bord_Color(){
    $("#otroboton").css("border-color","red");
}

function Backg_Color(){
    $("#mitercerbot").css("background-color","green");
}

function Presta_Atencion(){
    console.log("Estoy prestando atencion");
}

function Pierde_Atencion(){
    console.log("No te estoy prestando atencion");
}

/*function target(evento){
    if (event.target.id=="campo2"){
        $("#campo2").focus(Presta_Atencion);
        $("#aviso").html("SI PAPU");
    }
    else{
        $("#campo2").blur(Presta_Atencion);
        $("#aviso").html("NO PAPU");
    }
}*/

function avisoBoton(evento){
    alert("Has hecho un click");
    console.log("Has hecho un click");    
    evento.preventDefault();
}

function init(){
    $("#miboton").click(Aviso);
    $("#otroboton").click(Bord_Color);
    $("#mitercerbot").click(Backg_Color);
    $("#campo").blur(Pierde_Atencion);
    $("#campo").focus(Presta_Atencion);
    $("#aviso2").click(avisoBoton);
    //var campo2 = document.getElementById("campo2");
    
    //campo2.addEventListener("click", target);



};

$(document).ready(init);