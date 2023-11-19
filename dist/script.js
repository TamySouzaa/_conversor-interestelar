var anosLuz = 4.73;
var distanciaEmMetros = 9460536207068.16;
var nome = prompt("Por favor, digite seu nome");

var totalDistanciaKm = distanciaEmMetros * anosLuz;
totalDistanciaKm = totalDistanciaKm.toFixed(2);
alert(" Olá " + nome + ", a distancia é de " + totalDistanciaKm);