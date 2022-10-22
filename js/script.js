//Funcion para eleccion del numero a PC
function aleatorio(min, max){
    return Math.floor( (Math.random()*(max-min+1))+min); 
    //Math.floor VA A SACAR LOS DECIMALES
    //MATH.RANDOM() VA A DAR UN NUMERO ALATORIO ENTRE 0 Y 1
}

//Funcion para ver qué eligió cada uno
function eleccion (jugada){
    let resultado = '';
    if(jugada == 1){
        resultado = "Elegiste piedra";
    }else if(jugada == 2){
        resultado = "Elegiste papel";
    }else if(jugada == 3){
        resultado = "Elegiste tijera";
    }
    return resultado;
}

var triunfos = 0;
var perdidas = 0;

while (triunfos < 3 && perdidas < 3){
    
    let jugador = prompt('Elije 1 para piedra, 2 para papel, 3 para tijera');
    let pc = aleatorio(1, 3);

        //COMBATE OPCION #2
    if (jugador == pc){
        alert('EMPATE');
    } else if ((jugador == 1 && pc ==3) || (jugador == 2 && pc ==1) || (jugador == 3 && pc ==2)){
        alert('GANASTE');
        triunfos++;
    }else{
        alert('PERDISTE');
        perdidas++
    }
};

alert('Ganaste '+triunfos+' veces y perdiste '+perdidas+' veces.');





//COMBATE OPCION #1
// if (jugador ==  pc){
//     alert('EMPATE');
// }else if (jugador == 1 && pc == 3){
//     alert('GANASTE');
// }else if (jugador == 2 && pc == 1){
//     alert('GANASTE');
// }else if (jugador == 3 && pc == 2){
//     alert('PERDISTE');
// }else {
//     alert('PERDISTE');
// }