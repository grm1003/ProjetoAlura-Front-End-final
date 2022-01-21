//-------------------------------------------ENCERRAR SESSÃO-------------------------------------------------
let token = localStorage.getItem('token')

 if (localStorage.getItem('token') == null) {
    alert('Você precisa logar para continuar');
    window.location.href = 'index.html';
}


function sair() {
    localStorage.removeItem('token');
    window.location.href = 'https://grm1003.github.io/ProjetoAlura-Front-End-final/';
}

