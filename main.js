// Función para calcular el signo según el día y mes
function obtenerSignoZodiacal(dia, mes, anio) {
    let signo = "";

    // Condicionales super simples
    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
        signo = "Aries";
    }
    else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 21)) {
        signo = "Tauro";
    }
    else if ((mes == 5 && dia >= 22) || (mes == 6 && dia <= 21)) {
        signo = "Géminis";
    }
    else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
        signo = "Cáncer";
    }
    else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
        signo = "Leo";
    }
    else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
        signo = "Virgo";
    }
    else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
        signo = "Libra";
    }
    else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
        signo = "Escorpio";
    }
    else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
        signo = "Sagitario";
    }
    else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
        signo = "Capricornio";
    }
    else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
        signo = "Acuario";
    }
    else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
        signo = "Piscis";
    }

    return "Naciste el " + dia + "/" + mes + "/" + anio + ". Tu signo es " + signo;
}

