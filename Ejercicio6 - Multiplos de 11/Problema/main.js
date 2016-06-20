var numero = 3000;
var suma = 12;
document.write("11,");
for(i=12;i<=numero;i++){
	if(i%11===0) {
		suma += i;
		document.write(i + ",");
	} 
} document.write("<br> La suma de tus números es " + suma);