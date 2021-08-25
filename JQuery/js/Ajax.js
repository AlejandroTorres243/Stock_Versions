function done(data){
    console.log("Arranco sin problemas");
    console.log(data);
}

function fail(error){
    console.log("ERROR");
    console.log(error);
}

$(document).ready ((event) => {


let url = "./JQuery Ajax-h1.html"

    $("#getAjax").click(function(){

        $.ajax(url).done(done).fail(fail);

    });
/*
    $.ajax(url)
        .done(success)
        .fail(showError);
*/
});