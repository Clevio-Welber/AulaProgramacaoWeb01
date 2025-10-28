import { showAlert } from './utils.js';

export function voluntarioInscrever(nomeProjeto) {
    showAlert(`Você se inscreveu no projeto: ${nomeProjeto}`);
}

export function doarValor(nomeProjeto, valor) {
    showAlert(`Você doou R$${valor} para o projeto: ${nomeProjeto}`);
}
