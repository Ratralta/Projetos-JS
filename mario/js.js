const mario_img = document.querySelector('.mario_class');


function jump()
{
    mario_img.classList.add('mario_jump'); // faz mario pular
    
    setTimeout(() => { // iniciando timer em 0.03s
    timer_reset_jump()
    },30)    
}

function timer_reset_jump()
{
    let _bottom = parseInt(window.getComputedStyle(mario_img).getPropertyValue("bottom"))
    if(_bottom > 0) // não está no chão 
    {
        console.log("FUI LIDO");
        return setTimeout(() => { // retornando função para ser ativada em 0.03s
        timer_reset_jump()
        },1)
    }
    else
    {
    mario_img.classList.remove('mario_jump')
    console.log("resetou pulo");
    }
}


//console.log(mario_img);
mario_img.addEventListener('click',jump);