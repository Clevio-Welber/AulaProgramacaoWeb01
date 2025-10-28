import { showAlert, validateEmail } from './utils.js';

export function handleCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (!nome || !email) {
        showAlert('Preencha todos os campos!');
        return;
    }

    if (!validateEmail(email)) {
        showAlert('Email inválido!');
        return;
    }

    showAlert(`Cadastro de ${nome} realizado com sucesso!`);
    document.getElementById('formCadastro').reset();
}
