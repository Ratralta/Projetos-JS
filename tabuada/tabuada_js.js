function tabuada()
{
    let number_tabuada = document.getElementById("campo1").value; // pegando o que o usario escreveu COMO INT
    let tag_texto = ""; // variavel que vai servir pra colocar o texto, e depois colocar tudo no "tag_resultado"
    let tag_resultado = document.getElementById("resultado") // tag do resultado

    for(let i=1;i<11;i++)
    {
        let resultado_string = number_tabuada * i; // resultado da tabuada
        tag_texto += `${i} x ` + resultado_string + "<br>"; // adicionando texto para "tag_texto"
    }
    tag_resultado.innerHTML = tag_texto; // inserindo o texto para a tag da variavel "tag_resultado"
    tag_resultado.focus() // não sei
}