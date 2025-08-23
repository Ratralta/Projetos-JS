const calcular = document.getElementById('calcular') // tag do botão de submit




function calc_imc()
{
    const nome = document.getElementById('nome').value; // o ".value" pega o valor do input
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    var resultado_texto = document.getElementById("calcular_resultado"); // tag para amostrar o texto 

    let resultado = peso/(altura*altura); // "let" é um tipo de variavel LOCAL 
    resultado = resultado.toFixed(2); // tirando numeros depois da virgula

    let situacao = check_imc_categoria(resultado) // situação da pessoa

    resultado_texto.textContent = "Ola " + `${nome}` + ", seu IMC deu : " + `${resultado}` + ", Sua situação é : " + `${situacao}`;  
}

function check_imc_categoria(_value)
{
    let retorno = "" // variavel que vai retorna

    if (_value < 18.5)
    {
    retorno = "Abaixo do Peso"
    }
    else if (_value <= 24.9)
    {
    retorno = "Normal"
    }
    else if (_value <= 29.9)
    {
    retorno = "Acima do Peso"
    }
    else if (_value <= 34.9)
    {
    retorno = "Obeso 1"
    }
    else if (_value <= 39.9)
    {
    retorno = "Obeso 2"
    }
    else if (_value > 39.9)
    {
    retorno = "Obeso Ultra"
    }
    else // isso não é pra acontecer
    {
    retorno = "Você não existe"
    }
    return retorno // retornando string depedendo da situação 
}





calcular.addEventListener('click',calc_imc) // adicionando um evento para o botão
