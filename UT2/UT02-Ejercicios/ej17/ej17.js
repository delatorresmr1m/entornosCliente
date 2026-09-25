/**************************************************************
 
17.	PEDIR NÚMERO MAYOR QUE 100. Crea una función 
pedirNumeroMayor100(). Esta función  solicita un número mayor 
que 100. Si el usuario ingresa otro número – pídele que ingrese 
un valor de nuevo.

El bucle debe pedir un número hasta que el usuario ingrese un 
número mayor que 100 o bien cancele la entrada/ingrese una línea vacía. 
La función devolverá el número introducido por el usuario o null si ha 
cancelado la entrada/introducido una línea vacía.

Aquí podemos asumir que el usuario sólo ingresará números. 
No hay necesidad de implementar un manejo especial para entradas 
no numéricas en esta tarea.
Esta función hay que probarla en el navegador, ya que utilizaremos 
la sentencia prompt().

 *************************************************************/

"use strict";

function pedirNumeroMayor100(){

    let numero = prompt("Introduce un número mayor que 100: ", null);

    if(numero != "null" || numero != ""){

        numero=Number(numero);

        while(numero < 100 && numero !== "null"){

            let numero = prompt("Debes introducir un número mayor que 100: ", null);

            if(numero != "null" || numero != ""){

                numero=Number(numero);

            }

        }

    }

    alert(`El número introducido es: ${numero}`);

}

pedirNumeroMayor100();