import { handleCadastro } from './cadastro.js';
import { voluntarioInscrever, doarValor } from './projetos.js';

document.addEventListener('DOMContentLoaded', () => {

    // Cadastro
    const formCadastro = document.getElementById('formCadastro');
    if(formCadastro) {
        formCadastro.addEventListener('submit', handleCadastro);
    }

    // Voluntariado
    const btnVoluntario = document.getElementById('btnVoluntario');
    if(btnVoluntario) {
        btnVoluntario.addEventListener('click', () => voluntarioInscrever('Projeto Solidário'));
    }

    // Doações
    const btnDoar = document.getElementById('btnDoar');
    if(btnDoar) {
        btnDoar.addEventListener('click', () => doarValor('Projeto Solidário', 50));
    }

});
