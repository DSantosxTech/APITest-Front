// Seleciona o formulário no DOM
const formulario = document.querySelector("form");

// Seleciona os elementos de entrada (input) por suas classes
const Inome = document.querySelector(".nome"); // Campo de Nome
const Iemail = document.querySelector(".email"); // Campo de Email
const Isenha = document.querySelector(".senha"); // Campo de Senha
const Itel = document.querySelector(".tel"); // Campo de Telefone

// Função para enviar os dados do formulário via fetch
function cadastrar() {
    // Realiza uma requisição POST para o servidor local
    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // Converte os dados do formulário em um objeto JSON
        body: JSON.stringify({
            nome: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            tel: Itel.value // Campo de Telefone
        })
    })
        .then(function (res) {
            // Exibe a resposta da requisição no console
            console.log(res);
        })
        .catch(function (error) {
            // Em caso de erro, exibe o erro no console
            console.log(error);
        });
}

// Função para limpar os campos do formulário
function limpar() {
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = ""; // Limpa o Campo de Telefone
}

// Adiciona um evento de envio de formulário
formulario.addEventListener('submit', function (event) {
    // Impede o comportamento padrão de envio de formulário
    event.preventDefault();
    // Chama a função para cadastrar os dados
    cadastrar();
    // Chama a função para limpar os campos
    limpar();
});
