const mario = document.querySelector('mario')

const jump = () => {
    mario.classList.add('mario_jump')
}



document.addEventListener('keydown',jump())