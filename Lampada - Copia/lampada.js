const lamp = document.getElementById('lamp');
const botaoLigar = document.getElementById('botao_ligar');
const botaoDesligar = document.getElementById('botao_desligar');
const botaoQuebrar = document.getElementById('botao_quebrar');
let quebrada = false;

function ligar_lampada() {
    if (!quebrada) {
        lamp.src = './img/ligada.jpeg';
    }
}

function desligar_lampada() {
    if (!quebrada) {
        lamp.src = './img/desligada.jpeg';
    }
}

function quebrar_lampada() {
    lamp.src = './img/quebrada.jpeg';
    quebrada = true;
}

lamp.addEventListener('mouseover', ligar_lampada);
lamp.addEventListener('mouseleave', desligar_lampada);
lamp.addEventListener('dblclick', quebrar_lampada);

botaoLigar.addEventListener('click', ligar_lampada);
botaoDesligar.addEventListener('click', desligar_lampada);
botaoQuebrar.addEventListener('click', quebrar_lampada);