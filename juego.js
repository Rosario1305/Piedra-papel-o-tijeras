seleccionUsuario = null;

victoriasUsuario = 0;
victoriasPc = 0;

// 0=piedra
// 1=papel
// 2=tijeras
 
function jugar() {

	//la computadora selecciona su numero
	seleccionPc = Math.floor(Math.random()*2);

	//comprueba que el usuario escogio un valor
	 if (seleccionUsuario != null) {

		//empate
		 if (seleccionUsuario === seleccionPc) {
			 console.log("Empate")
			//no es empate
		 } else {
			 //piedra
			if (seleccionUsuario = 0) {
				 if (victoriasPc = 1) {
					 console.log("Perdiste")
				 } else {
					 console.log("ganaste")
				 }
			 }
			 //papel
			if (seleccionUsuario = 1) {
				if (victoriasPc = 2) {
					console.log("Perdiste")
				} else {
					console.log("ganaste")
				}
			}
			//tijeras
			if (seleccionUsuario = 2) {
				if (victoriasPc = 0) {
					console.log("Perdiste")
				} else {
					console.log("ganaste")
				}
			}
		 }
		//si el usuario no escogio nada
	 } else {
		 console.log("selecciona un valor")
	 }

 }

 jugar();