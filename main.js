const form = document.getElementById('form-atividade')
const contato = [];
const num = [];
let linhas ='';

form.addEventListener ('submit', function(e) {
    e.preventDefault();

adicionaLinha();
atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumTelefone = document.getElementById('num-telefone')

if (contato.includes(inputNomeContato.value)) {
    alert(`O Contato: ${inputNomeContato.value} já foi cadastrado`);
} else {
    contato.push(inputNomeContato.value);
    num.push(parseFloat(inputNumTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumTelefone.value}</td>`
    linha += '</tr>';

    linhas += linha;
}
inputNomeContato.value = '';
inputNumTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

