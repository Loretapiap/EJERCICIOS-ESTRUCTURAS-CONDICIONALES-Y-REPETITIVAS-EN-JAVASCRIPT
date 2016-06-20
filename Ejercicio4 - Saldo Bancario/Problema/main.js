var n1 = prompt("Ingrese nombre de usuario");
var n2 = prompt("Ingrese número de cuenta");
while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}
var n3 = prompt("Ingrese saldo");
while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n3)){
n3 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

if(parseInt(n3)>0){
    document.write("Número de cuenta: " + n2 + "<br>" + "Nombre de cliente: " + n1 + "<br>" + "Estado de cuenta: " + n3 + " ACREEDOR");
}

if(parseInt(n3)<0){
    document.write("Número de cuenta: " + n2 + "<br>" + "Nombre de cliente: " + n1 + "<br>" + "Estado de cuenta: " + n3 + " DEUDOR");
}

if(parseInt(n3)=0){
    document.write("Número de cuenta: " + n2 + "<br>" + "Nombre de cliente: " + n1 + "<br>" + "Estado de cuenta: " + n3 + " NULO");
}


