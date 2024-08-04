// Selecciona el campo de entrada de la calculadora que muestra los números y los resultados
const display = document.querySelector("#display");

// Aquí estamos seleccionando todos los botones de la calculadora
const buttons = document.querySelectorAll("button");

// Para cada botón, estamos añadiendo una función que se ejecutará cuando el botón sea clicado
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Si el botón clicado es el "=", calculamos el resultado de la expresión en el display
        if (btn.id === "=") {
        // Toma el texto actual en el display (display.value),
        // lo evalúa como una expresión matemática y luego asigna el resultado3
        // de esa evaluación de vuelta al display.
            display.value = eval(display.value);
        } 
        // Si el botón clicado es "AC", limpiamos todo el contenido del display
        else if (btn.id === "ac") {
            display.value = "";
        } 
        // Si el botón clicado es "DE", borramos el último carácter del display
        else if (btn.id == "de") {
            // elimina el último carácter de ese texto, y luego asigna el texto
            // modificado de vuelta al display.
            display.value = display.value.slice(0, -1);
        } 
        // añadimos el texto del botón al display
        else {
            display.value += btn.id;
        }
    });
});
