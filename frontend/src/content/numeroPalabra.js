function numeroEnPalabras(numero) {
    if (numero === 0) return "cero";

    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const especiales = ["", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    function convertirCentenas(num) {
        let palabras = "";

        if (num >= 100) {
            if (num === 100) {
                return "cien";
            } else {
                let centena = Math.floor(num / 100);
                palabras += centenas[centena] + " ";
                num %= 100;
            }
        }

        if (num >= 20) {
            let decena = Math.floor(num / 10);
            palabras += decenas[decena];
            num %= 10;
            if (num > 0) {
                palabras += " y ";
            }
        } else if (num >= 11 && num <= 19) {
            palabras += especiales[num - 10];
            num = 0;
        } else if (num === 10) {
            palabras += decenas[1];
            num = 0;
        }

        palabras += unidades[num];
        return palabras.trim();
    }

    function convertirMiles(num) {
        let palabras = "";

        if (num >= 1000) {
            let miles = Math.floor(num / 1000);
            if (miles === 1) {
                palabras += "mil ";
            } else {
                palabras += convertirCentenas(miles) + " mil ";
            }
            num %= 1000;
        }

        palabras += convertirCentenas(num);
        return palabras.trim();
    }

    function convertirMillones(num) {
        let palabras = "";

        if (num >= 1000000) {
            let millones = Math.floor(num / 1000000);
            if (millones === 1) {
                palabras += "un millón ";
            } else {
                palabras += convertirCentenas(millones) + " millones ";
            }
            num %= 1000000;
        }

        palabras += convertirMiles(num);
        return palabras.trim();
    }

    return convertirMillones(numero);
}

// Ejemplo de uso:
console.log(numeroEnPalabras(1320));  // "un millón doscientos treinta y cuatro mil quinientos sesenta y siete"
console.log(numeroEnPalabras(100));   // "novecientos ochenta y siete mil seiscientos cincuenta y cuatro"
console.log(numeroEnPalabras(20));     // "dos mil veinte"














function numeroEnMoneda(numero, moneda = "dólares") {
    const parteEntera = Math.floor(numero);
    const parteDecimal = Math.round((numero - parteEntera) * 100);

    let resultado = numeroEnPalabras(parteEntera) + " " + moneda;

    if (parteDecimal > 0) {
        resultado += " con " + numeroEnPalabras(parteDecimal) + " centavos";
    }

    return resultado;
}

// Ejemplo de uso:
console.log(numeroEnMoneda(1234.56));  // "mil doscientos treinta y cuatro dólares con cincuenta y seis centavos"
console.log(numeroEnMoneda(987.10, "soles"));  // "novecientos ochenta y siete soles con diez centavos"
