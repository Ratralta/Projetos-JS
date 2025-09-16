function conveter()
{
    let input_valor = document.getElementById("input_temp_valor").value;
    let input_temp_tipo = document.getElementById("input_temp_tipo").value;

    let converter_tipo = document.getElementById("temperatura_tipo").value;

    if (input_valor !== "")
    {
        console.log("o valor é " + input_valor)
    }
    else
    {
        alert("Coloca algo animal")
    }
}