const desligar = document.getElementById('botao_desligar'); // o "document" procura o arquivo 
const image = document.getElementById('lamp'); // seu parametro se baseia em algum ID de alguma tag.
var quebrada = 0

function ligar_lampada()
{
    if (check_quebrou_lampada() === 1)
    {
    lamp.src = './img/ligada.jpeg' // mudando o caminho da imagem para "ligada.jpeg"
    }
}

function desligar_lampada()
{
    if (check_quebrou_lampada() === 1)
    {
    lamp.src = './img/desligada.jpeg' // mudando o caminho da imagem para "ligada.jpeg"
    }
}

function quebrar_lampada()
{
lamp.src = './img/quebrada.jpeg' // mudando o caminho da imagem para "ligada.jpeg"
quebrada = 1
}

function check_quebrou_lampada() // retorna 0 ou 1, baseado no valor de "quebrado" 
{
    if ( quebrada === 0)
    {
    return 1
    }
    else
    {
    return 0
    }
}






lamp.addEventListener('mouseover',ligar_lampada); // liga a lampada
lamp.addEventListener('dblclick',quebrar_lampada);
image.addEventListener('mouseleave',desligar_lampada);

