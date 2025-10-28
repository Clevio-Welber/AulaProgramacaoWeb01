const formContato = document.getElementById("form-contato");
const status = document.getElementById("status");

if (formContato) {
    formContato.addEventListener("submit", (e) => {
        e.preventDefault();
        status.textContent = "✅ Mensagem enviada com sucesso!";
        status.style.color = "green";
        formContato.reset();
    });
}

const formCadastro = document.getElementById("form-cadastro");
const msgSucesso = document.getElementById("mensagem-sucesso");

if (formCadastro) {
    formCadastro.addEventListener("submit", (e) => {
        e.preventDefault();
        msgSucesso.textContent = "🎉 Cadastro enviado com sucesso! Entraremos em contato em breve.";
        msgSucesso.style.color = "green";
        formCadastro.reset();
    });
}
