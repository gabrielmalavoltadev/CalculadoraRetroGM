var clique = '';
//clique.addEventListener('click', clicar);


function clicar(btn) {
    document.getElementById('result').innerHTML = btn;
    clique += btn;
}

function mostrar() {
    document.getElementById('result').innerHTML = eval(clique);
    clique = '';
}

