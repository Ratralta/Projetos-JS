function number_random_spawn()
{
let meuVetor = new Array(5);

for(let i=0;i<meuVetor.length;i++)
{
    let random_number = Math.round(Math.random() * 100);
    meuVetor[i] = random_number;
}

let concat = ""; // variavel pra juntar dados e colocar no html

for(i=0;i<meuVetor.length;i++) // colocando o conteudo de "meuVetor" como uma string em "concat"
{
    concat += "[" + meuVetor[i] + "] <br>" ;
}

document.getElementById("resultado").innerHTML = concat;
}