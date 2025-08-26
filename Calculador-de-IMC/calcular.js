const calcular = document.getElementById('calcular') // tag do botão **imc**

const calcular_rcq = document.getElementById('box_2_calcular') // tag do botão **rcq**




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

function calc_RCQ()
{
    const idade = document.getElementById('box_2_idade').value; // o ".value" pega o valor do input
    const cintura = document.getElementById('box_2_cintura').value;
    const quadril = document.getElementById('box_2_quadril').value;

    let resultado = cintura/quadril;
    resultado = resultado.toFixed(2)
    const botao = document.getElementById('box_2_calcular_resultado'); // pegando a tag do texto
    
    botao.textContent = `RCQ : ${resultado} , seu resultado foi :  ${check_rcq_categoria(resultado,idade)}`
}

function check_rcq_categoria(_value,_idade)
{
    let retorno = ""; // variavel que vai retorna
    let idade_variavel  = 0; // depende da idade da pessoa  

    if (_idade < 20) // depedendo da idade, muda o calculo 
    {
    return "Da certo não"  
    }
    else if (_idade < 29)
    {idade_variavel += 0.01}
    else if (_idade < 39)
    {idade_variavel += 0.02}
    else if (_idade < 49)
    {idade_variavel += 0.03}
    else if (_idade < 59)
    {idade_variavel += 0.04}
    else if (_idade < 69)
    {idade_variavel += 0.04}
    else
    {
    return "Da certo não"    
    }

    if (_value < 0.83+idade_variavel){
    retorno = "Baixo"
    } 
    else if (_value <= 0.88+idade_variavel){
    retorno = "Moderado"
    }
    else if (_value <= 0.94+idade_variavel){
    retorno = "Alto"
    }
    else{ // isso não é pra acontecer
    retorno = "Muito Alto"
    }

    return retorno // retornando string depedendo da situação 
}





calcular.addEventListener('click',calc_imc) // adicionando um evento para o botão
calcular_rcq.addEventListener('click',calc_RCQ)