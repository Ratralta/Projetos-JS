const desligar = document.getElementById('botao_desligar'); // o "document" procura o arquivo 
const image = document.getElementById('lamp'); // seu parametro se baseia em algum ID de alguma tag.
const glow = document.getElementById('glow')
const git = document.getElementById('gif')
let quebrada = 0;

function ligar_lampada()
{
    if (check_quebrou_lampada() === 1)
    {
    lamp.src = './img/ligada.png' // mudando o caminho da imagem para "ligada.jpeg"
    // glow.style.opacity = '100%'
    // fade_in()
    }
}

function desligar_lampada()
{
    if (check_quebrou_lampada() === 1)
    {
    lamp.src = './img/desligada.png' // mudando o caminho da imagem para "ligada.jpeg"
    // glow.style.opacity = '0%'
    // fade_out()
    }
}

function quebrar_lampada()
{
lamp.src = './img/quebrada.png' // mudando o caminho da imagem para "ligada.jpeg"
glow.style.opacity = '0%'
quebrada = 1
explode();
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

function fade_in() {
    var i = 0;
    var h1 = glow;
    h1.style.opacity = 0;
    var k = window.setInterval(function() {
      if (i >= 10) {
        clearInterval(k);
      } else {
        h1.style.opacity = i / 10;
        i++;
      }
    }, 100);
  };


function fade_out() {
    var h1 = glow;
    var i = parseInt(window.getComputedStyle(glow).getPropertyValue("opacity"));
    var k = window.setInterval(function() {
      if (i < 0) {
        clearInterval(k);
      } else {
        h1.style.opacity = i;
        i--;
      }
    }, 100);
  };

function explode() {
    gif.style.zIndex = 3;
    gif.style.display = "block";
    gif.style.opacity = 100;
    gif.currentTime = 0;
    gif.play();
}





lamp.addEventListener('mouseover',ligar_lampada); // liga a lampada
lamp.addEventListener('dblclick',quebrar_lampada);
image.addEventListener('mouseleave',desligar_lampada);

