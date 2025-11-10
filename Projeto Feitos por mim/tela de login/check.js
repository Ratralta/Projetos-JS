// classe pro login
let Pessoa = class Pessoa {
    constructor(_nome,_senha,_senha_nova)
    {
    this.nome = _nome;
    this._senha = _senha;
    this._senha_nova = _senha_nova;
    }
}
//

// dados do form 
const nome_form = document.getElementById("nome").value;
const senha = document.getElementById("senha").value;
const senha_confirmada = document.getElementById("senha_confirmar").value;



//

let form_dados = new Pessoa();
