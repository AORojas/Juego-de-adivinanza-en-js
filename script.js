let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;


function chequearResultado() {
        intentos += 1;
        intento.textContent = intentos;
        document.getElementById('tituloIntentos').style.visibility = 'visible';
        intento.style.visibility = 'visible';
        let numeroIngresado = parseInt(numeroEntrada.value);
    
        if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
            mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
            return;
        }
    
        if (numeroIngresado === numeroAzar) {
            mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
            mensaje.style.color = 'green';
            numeroEntrada.disabled = true;
        } else if (numeroIngresado < numeroAzar) {
            mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
            mensaje.style.color = 'red';
        } else {
            mensaje.textContent = 'El número es menor. Intenta de nuevo.';
            mensaje.style.color = 'red';
        }
    }

function reiniciarJuego() {
    numeroAzar = Math.floor(Math.random() * 100) + 1;
    numeroEntrada.disabled = false;
    numeroEntrada.value = '';
    mensaje.textContent = '¡A Jugar!';
    mensaje.style.color = 'black';
    intentos = 0;
    intento.textContent = intentos;
    intento.textContent = ''; 
    document.getElementById('tituloIntentos').style.visibility = 'hidden';
    intento.style.visibility = 'hidden';
}