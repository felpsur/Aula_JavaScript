var nome = "Felipe Rosa";
var idade = 21;
var frase = "Japão é o melhor time do mundo"

alert(nome +" tem " + idade + " anos.");
console.log(nome);
//trocar informação com replace
console.log(frase.replace("Japão","Brasil"));
alert(nome.replace("Rosa","Urias"));
console.log(frase.toUpperCase);

var lista = ["maça", "pêra", "laranja"];
//add elemento a lista
lista.push("uva");
//remover elemento da lista
lista.pop();
//visualizar tamanho da lista
console.log(lista.length);
//inverter ordem da lista
console.log(lista.reverse);
//transformar array em string
console.log(lista.toString);
//agrupar elementos de uma array e retornar em uma string
console.log(lista.join);

//dicionario
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor: "roxa"}];
console.log(frutas[1].nome);

//condicional
var idade = prompt("Qual sua idade?");
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

// estrutura de repetição
var count = 0;
while(count<=5){
    console.log(count);
    count++;
}
for(count-0;count<5;count++){
    console.log(count);
}
//receber data
var data = (new Date());
alert(data.getMinutes()+1);

