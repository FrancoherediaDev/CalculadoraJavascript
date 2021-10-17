class Display {
  constructor(displayValueTop, displayValueBottom) {
    this.displayValueTop = displayValueTop;
    this.displayValueBottom = displayValueBottom;
    this.calculator = new Calculetor();
    this.typeOperator = undefined;
    this.valueTop = "";
    this.valueBottom = "";
    this.signos = {
      sumar: "+",
      dividir: "÷",
      multiplicar: "x",
      restar: "-",
    };
  }

  deleteAll() {
    this.valueTop = "";
    this.valueBottom = "";
    this.typeOperator = undefined;
    this.showNumbers();
  }

  deleteInOne() {
    this.valueTop = this.valueTop.toString().slice(0, -1);
    this.showNumbers();
  }

  computer(type) {
    this.typeOperator !== "igual" && this.calcular();
    this.typeOperator = type;
    this.valueBottom = this.valueTop || this.valueBottom;
    this.valueTop = "";
    this.showNumbers();
  }

  addNumer(number) {
    if (number === "." && this.valueTop.includes(".")) return;
    this.valueTop = this.valueTop.toString() + number.toString();
    this.showNumbers();
  }
  showNumbers() {
    this.displayValueTop.textContent = this.valueTop;
    this.displayValueBottom.textContent = `${this.valueBottom} ${
      this.signos[this.typeOperator] || ""
    }`;
  }

  calcular() {
    const valueBottom = parseFloat(this.valueBottom);
    const valueTop = parseFloat(this.valueTop);

    if (isNaN(valueTop) || isNaN(valueBottom)) return;
    this.valueTop = this.calculator[this.typeOperator](valueBottom, valueTop);
  }
}
