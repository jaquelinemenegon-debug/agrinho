// Função para aumentar e diminuir a fonte
let tamanhoAtual = 16;

function mudarTamanhoFonte(mudanca) {
    tamanhoAtual += mudanca;
    // Limita o tamanho para não quebrar o layout da página
    if (tamanhoAtual >= 12 && tamanhoAtual <= 24) {
        document.documentElement.style.setProperty('--tamanho-fonte', tamanhoAtual + 'px');
    } else {
        tamanhoAtual -= mudanca; // reverte a mudança se passar dos limites permitidos
    }
}

// Função para alterar as cores (Modo escuro / Alto contraste)
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}