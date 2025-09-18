function conveter_calculador(_input_valor,_input_temp_tipo,_converter_tipo) // talvez se eu tivese usado array, teria sido mais facil.
{
    let retorno;
    if(_input_temp_tipo == _converter_tipo) // se tiver o mesmo tipo de grau
    {
        retorno = _input_valor;
    }

    if (_input_temp_tipo == "celsius" && _converter_tipo == "fahrenheit") // celsius para fahrenheit.
    {
        retorno = (9/5 * _input_valor) + 32;
    }
    if (_input_temp_tipo == "celsius" && _converter_tipo == "kelvin") // celsius para kelvin .
    {
        retorno = _input_valor + 273.15;
    }

    
    if (_input_temp_tipo == "fahrenheit" && _converter_tipo == "celsius") // fahrenheit para celsius.
    {
        retorno = (9/5 * _input_valor) + 32;
    }
    if (_input_temp_tipo == "fahrenheit" && _converter_tipo == "kelvin") // fahrenheit para kelvin .
    {
        retorno = 5/9 * (_input_valor - 32);
        retorno = retorno + 273.15;
    }


    if (_input_temp_tipo == "kelvin" && _converter_tipo == "celsius") // kelvin para celsius.
    {
        retorno = _input_valor + 273.15;
    }
    if (_input_temp_tipo == "kelvin" && _converter_tipo == "fahrenheit") // kelvin para fahrenheit .
    {
        retorno = 5/9 * (_input_valor - 32);
        retorno = retorno + 273.15;
    }
    return retorno;
}

function converter_amostrar_o_tipo_bonito(_converter_tipo)
{
    if (_converter_tipo == "celsius")
    {
        _converter_tipo = "ºC"
    }
    else if (_converter_tipo == "fahrenheit")
    {
        _converter_tipo = "ºF"
    }
    else if (_converter_tipo == "kelvin")
    {
        _converter_tipo = "K"
    }
    return _converter_tipo
}



function conveter()
{
    let input_valor = document.getElementById("input_temp_valor").value;    // valor do usario 
    let input_temp_tipo = document.getElementById("input_temp_tipo").value; // tipo de temperatura do usuario
    let converter_tipo = document.getElementById("temperatura_tipo").value; // converter para  

    let retorno_tag = document.getElementById("retorno");
    let retorno_tag_2 = document.getElementById("retorno_tipo"); // eu deveria me basear usando "class" pra fazer isso.
    let retorno;

    input_valor = parseInt(input_valor.replace(/[^0-9.]/g,"")); // limpando o valor e transformando em numero 
    if (input_valor == "" || isNaN(input_valor))
    {
        alert("Coloca algo animal");
        return; // encerra função 
    }

    retorno = conveter_calculador(input_valor,input_temp_tipo,converter_tipo); // função para retornar o valor 

    retorno_tag.innerHTML = retorno; // inserindo na tag o resultado 
    retorno_tag_2.innerHTML = converter_amostrar_o_tipo_bonito(converter_tipo); // inserindo na tag o resultado 
}