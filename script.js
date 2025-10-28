
// Modal de voluntário
function abrirModal() {
  document.getElementById("modal-voluntario").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal-voluntario").style.display = "none";
}

function enviarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  alert(`Obrigado, ${nome}! Sua inscrição foi enviada com sucesso.`);
  fecharModal();
}

// Formulário de contato
function enviarContato(event) {
  event.preventDefault();
  const nome = document.getElementById("nome-contato").value;
  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
}
