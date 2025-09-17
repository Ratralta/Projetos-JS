function random()
{
let meuVetor = new Array(8);
let result = ""; // variavel pra juntar dados e colocar no html
let somaVetor = 0;
let multVetor = 0;
let resultTabela = "";

for(let i=0;i<meuVetor.length;i++)
{
    let random_number = Math.round(Math.random() * 20);
    meuVetor[i] = random_number;
}


for(i=0;i<meuVetor.length;i++) // colocando o conteudo de "meuVetor" como uma string em "concat"
{
    let i_vetor = meuVetor[i];
    result += "[" + i_vetor + "] <br>" ;

    somaVetor += i_vetor;

    resultTabela += "<td>" + i_vetor + "</td>";

}
multVetor = meuVetor[0] + " X " + meuVetor[meuVetor.length-1] + " = " + meuVetor[0] * meuVetor[meuVetor.length-1];


document.getElementById("resultado").innerHTML = result;
document.getElementById("soma").innerHTML = somaVetor;
document.getElementById("produto").innerHTML = multVetor;
document.getElementById("tabela").innerHTML = "<table border=3 align=center> <tr>" + resultTabela + "</tr> </table>";
}