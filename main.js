const displayValorAnterior = document.querySelector("#valor-anterior");
const displayValorActual = document.querySelector("#valor-actual");
const botonesNumeros = document.querySelectorAll(".number");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.addNumber(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})