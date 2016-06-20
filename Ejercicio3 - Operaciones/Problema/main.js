var n1 = prompt("Dime un numero");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n1)){
n1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var n2 = prompt("Dime otro numero");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

while (n2 == 0)
{
    n2 = prompt("No debe ser cero. Dime otro");
}

if(parseInt(n1)>parseInt(n2)){
	var suma = parseInt(n1) + parseInt(n2);
    var resta = parseInt(n1) - parseInt(n2);
    document.write(n1 + " + "+ n2 + " es: " + suma + "<br>" + n1 + " - " + n2 + " es: " + resta);

}
if(parseInt(n1)<parseInt(n2)){
	var multi = parseInt(n1) * parseInt(n2);
    var div = parseInt(n1) / parseInt(n2);
    document.write(n1 + " por "+ n2 + " es: " + multi + "<br>" + n1 + " dividido en " + n2 + " es: " + div);

}

if(n1 == n2) {
	document.write("Ambos números son iguales");
}


