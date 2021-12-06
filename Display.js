class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculator = new Calculator();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signs = {
      sum: "+",
      divide: "%",
      multiply: "x",
      subtract: "-",
    };
  }

  delete() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.printValue();
  }

  deleteTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.printValue();
  }

  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.printValue();
  }

  addNumber(number) {
    if (number === "." && this.valorActual.includes(".")) return;
    this.valorActual = this.valorActual.toString() + number.toString();
    this.printValue();
  }

  printValue() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signs[this.tipoOperacion] || ""
    }`;
  }

  //con parseFloat logramos parsear el valor anterior (que deje de ser un string y vuelva a ser un numero)
  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculator[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
}
