function escribeparrafo(){
	var child=document.createElement("p");
	var texto=document.createTextNode("Texto de parrafo");
	child.appendChild(texto);
	//document.getElementById("body").appendChild(child);
	document.body.appendChild(child);
}
function cambiadiv(){
	document.getElementById("parrafo").innerHTML="Párrafo cambiado";
}

function sumar(a,b){
	return a+b;
}
