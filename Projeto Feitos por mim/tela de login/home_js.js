// class
let User_login = class User_login 
{
    constructor(_name,_passowrd)
    {
        this.name = _name;
        this.passowrd = _passowrd;
    }
};
/////// class


// funções
function inserir_result(_tag,_string_result)
{
    _tag.innerHTML = _string_result
}
/////// funções 

// variaveis


// NÃO TA DANDO PRA PEGAR OS VALORES DO FORM ATRAVÉS DO "DOCUMENT"
const form = new URLSearchParams(window.location.search) // cria um objeto do form recebido. (GET)

let user_nome = form.get("nome")
let user_senha = form.get("senha")
let Object_user_dados = new User_login(user_nome,user_senha) // objeto com os dados enviados no "submit" do "login"

let string_result = user_nome + "<br>" + user_senha // texto que será colocado na tag
let html_tag_result = document.getElementById("tag_result"); // tag que ira inserir o resultado 
////// variaveis


inserir_result(html_tag_result,string_result)