class calculadora {


    somar(a, b) {
        return a + b;

    }

    subtrair(a, b) {
        return a - b;

    }

    multiplicar(a, b) {
        return a * b;

    }

    dividir(a, b) {

        if (b == 0) {
            throw new Error("Divisão por zero não é permitido");

        }





        return a / b;

    }





}
module.exports = calculadora;