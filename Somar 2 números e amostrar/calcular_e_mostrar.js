function show_resultado(_resultado)
{
    let texto_nas_tags; // valor que vai ser colocado nas tags. 

    if (!isNaN(_resultado)) // Se "_resultado" não for "NaN"
    {texto_nas_tags = _resultado;}
    else
    {texto_nas_tags = "Não coloca letra animal";}

    document.getElementById("resultado-p").innerHTML = texto_nas_tags 
    document.getElementById("resultado-table").innerHTML = texto_nas_tags 
    document.getElementById("resultado-div").innerHTML = texto_nas_tags 

    let obj3 = document.getElementById("resultado-div") 
    obj3.className = "container"

    let resultado = (document.getElementById("resultado-input").value = texto_nas_tags)
}


function somar()
{
let t1 = parseInt(document.getElementById("campo1").value); // "Filtra" o valor da <tag> "campo1" e retorna como int
let t2 = parseInt(document.getElementById("campo2").value); 

let result = t1 + t2;

return show_resultado(result)
}

function subtrair()
{
let t1 = parseInt(document.getElementById("campo1").value);// 
let t2 = parseInt(document.getElementById("campo2").value); 

let result = t1 - t2;

return show_resultado(result)
}


function multplicar()
{
let t1 = parseInt(document.getElementById("campo1").value);// 
let t2 = parseInt(document.getElementById("campo2").value); 

let result = t1 * t2;

return show_resultado(result)
}

function dividir()
{
let t1 = parseInt(document.getElementById("campo1").value);// 
let t2 = parseInt(document.getElementById("campo2").value); 

let result = t1 / t2;

return show_resultado(result)
}