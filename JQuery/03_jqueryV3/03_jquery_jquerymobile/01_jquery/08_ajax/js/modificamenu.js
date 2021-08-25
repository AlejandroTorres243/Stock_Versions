	$(document).ready(function(){

		$("#new-nav li a").click(
			function(event){
				var enlace=$(this).attr("href");
				//alert(enlace);
				$("#wrapper").load(enlace+ " #contenido");
				event.preventDefault();
			}
		);
		$("#second-nav li a").click(
				function(event){
					var enlace=$(this).attr("href");
					//$(this).attr("href","partial_"+enlace);
					//alert(enlace);
					$("#contenido").load(
							"partial_"+enlace);
					event.preventDefault();
				}
			);
	});