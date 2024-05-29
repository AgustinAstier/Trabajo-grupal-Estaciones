let estacion = prompt("CON IF" +
    "\nIngreses una estacion del año en minuscula: ");

if (estacion == "verano") {
    alert("Ingresaste la estacion: " + estacion +
        "\nInicio: 21 Diciembre" +
        "\nFin: 21 Marzo");
} else if (estacion == "invierno") {
    alert("Ingresaste la estacion: " + estacion +
        "\nInicio: 21 Junio" +
        "\nFin: 22 Septiembre");
} else if (estacion == "otoño") {
    alert("Ingresaste la estacion: " + estacion +
        "\nInicio: 21 Marzo" +
        "\nFin: 21 Junio");
} else if (estacion == "primavera") {
    alert("Ingresaste la estacion: " + estacion +
        "\nInicio: 22 Septiembre" +
        "\nFin: 21 Diciembre");
} else {
    alert("Ingresaste una estacion invalida");
}

alert("CON SWITCH");

switch (estacion) {
    case "verano":
        alert("Ingresaste la estacion: " + estacion +
            "\nInicio: 21 Diciembre" +
            "\nFin: 21 Marzo");
        break;
    case "otoño":
        alert("Ingresaste la estacion: " + estacion +
            "\nInicio: 21 Marzo" +
            "\nFin: 21 Junio");
        break;
    case "invierno":
        alert("Ingresaste la estacion: " + estacion +
            "\nInicio: 21 Junio" +
            "\nFin: 22 Septiembre");
        break;
    case "primavera":
        alert("Ingresaste la estacion: " + estacion +
            "\nInicio: 22 Septiembre" +
            "\nFin: 21 Diciembre");
        break;
    default:
        alert("Ingresaste una estacion invalida");
}