const calcular = document.getElementById('calcular') // tag do botão de submit




function calc_imc()
{
    const nome = document.getElementById('nome').value; // o ".value" pega o valor do input
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    var resultado_texto = document.getElementById("calcular_resultado"); // tag para amostrar o texto 

    let resultado = peso/(altura*altura); // "let" é um tipo de variavel LOCAL 
    resultado = resultado.toFixed(2); // tirando numeros depois da virgula

    resultado_texto.textContent = "Ola " + `${nome}` + ", seu IMC deu : " + `${resultado}`;  
}




calcular.addEventListener('click',calc_imc)
