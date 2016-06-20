var suma1 = 0,
	suma2 = 0;

for(i=1;i<=3;i++){
	var lista1 = parseInt(prompt("Ingresa el valor N° " + i + " de la primera lista"));
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(lista1)){
		lista1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}
	suma1 += lista1;
} document.write ("La suma de la primera lista es: " + suma1 + "<br>");

for(j=1;j<=3;j++){
	var lista2 = parseInt(prompt("Ingresa el valor N° " + j + " de la segunda lista"));
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(lista2)){
		lista2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
	}
	suma2 += lista2;
} document.write ("La suma de la segunda lista es: " + suma2);

if(lista1 > lista2) {
	alert("Lista 1 mayor");
} else if (lista2 > lista1) {
	alert("Lista 2 mayor");
} else {
	alert("Listas iguales");
}