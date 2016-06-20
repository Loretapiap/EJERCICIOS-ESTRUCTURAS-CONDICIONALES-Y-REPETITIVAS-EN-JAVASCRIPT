var n1 = prompt("Ingresa tu texto");
var n2 = parseInt(prompt("Ingresa el número de veces que quieres que se repita"))
while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}
for(i=0;i<n2;i++){
	document.write(n1 + "<br>");
}
