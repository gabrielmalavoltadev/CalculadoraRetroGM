let operacao = '';
//clique.addEventListener('click', clicar);


function limparTela() {
    document.getElementById('result').innerHTML = '';
}

function clicar(btn) {
    document.getElementById('result').innerHTML += btn;
    operacao += btn;
}

function mostrar() {
    document.getElementById('result').innerHTML = eval(operacao);
    operacao = '';
}

