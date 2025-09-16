function enquanto(){
    let tag_value = document.getElementById("campo1").value;
    let resultado = "";

    if (tag_value <= 0)
    {
        alert("Numero maior que 0 seu preto.");
    }
    else
    {
        for(let i=1; i<=tag_value;i++)
        {
            if(i==tag_value)
            {
                resultado += i + ". "; // printa o ultimo valor do i
            }
            else
            {
                resultado += i + ", "; // printa o resto dos valores
            }
        }
    }
    document.getElementById("campo1").value = ""; // limpando a tag do input
    campo1.focus();

    document.getElementById("res-enquanto").innerHTML = resultado; // escrevendo isso na class "res-enquanto"

}