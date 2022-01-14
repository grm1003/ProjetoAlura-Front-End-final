const btnMobile = document.getElementById('btn-mobile'); 
const liSair = document.querySelector('#liSair');

//MOSTRA MENU DROPDOWN QUANDO CLICADO NA CAIXA DE USUÁRIO, EXIBINDO O BOTÃO DE FINALIZAR SESSÃO E O LINK DO GITHUB
function showExit(){
    liSair.style.display = 'inline-flex';
}

function hideExit(){
    liSair.style.display = 'none';
}

//MOSTRA O MENU MOBILE SE TOCADO NO BOTÃO, SE NÃO ESCONDE
function toggleMenu(event){
 
    if (event.type=='touchstart')
        event.preventDefault()
        const nav = document.getElementById('nav-mobile');
        nav.classList.toggle('active');     
    }


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu, );


//MOSTRA A BARRA DE PESQUISA MOBILE SE TOCADO NO BOTÃO, SE NÃO ESCONDE
function showSearch() {
    var checkBox = document.getElementById("lupa");
    var searchBar = document.getElementById("mobileSearch");
    var btnSearch = document.getElementById("btn-lupa");
  
    if (checkBox.checked == true){
        btnSearch.style.background = "#1E334E";
        searchBar.style.display = "block";

    } else {
        btnSearch.style.background = "none";
        searchBar.style.display = "none";
    }
  }
