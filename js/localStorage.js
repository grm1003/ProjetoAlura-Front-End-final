const nomeProjeto = document.querySelector ('#nomeprojeto');
const descricaoProjeto = document.querySelector('#descricaoprojeto');
const editorCodigo= document.querySelector('code')
const linguagemSeletor = document.querySelector('#liguagem');
const coresValor = document.querySelector ('#cores');
const salvarProjeto = document.querySelector('#salvarProjeto')


salvarProjeto.addEventListener('click', ()=>{

    if(typeof(Storage) !=="undefined"){
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
        console.log(projeto)
    }
})

function montaProjeto(){
    let projeto = {
        'id': criaId(),
        'detalhesDoProjeto':{
            'nomeDoProjeto': nomeProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagemDoProjeto': linguagem.value,
            'codigoDoProjeto': editorCodigo.textContent,
            'codCor': coresValor.value
        }
    }
        return projeto

}

function criaId(){
 return localStorage.length
}


function salvaLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}



/* 
function salvar(){
    let listaProjeto = JSON.parse(localStorage.getItem('listaProjeto') || '[]')   
    listaProjeto.push(
        {
            nomeProjetoSalva: nomeprojeto.value,
            descricaoProjetoSalva: descricaoprojeto.value,
            linguagemSalva: linguagem.value,
            editorCodigoSalva: editorCodigo.textContent,
            coresSalva: cores.value,
        });
        localStorage.setItem('listaProjeto', JSON.stringify(listaProjeto));
}    */


/* const nomeProjeto = document.querySelector ('#nomeprojeto');
const descricaoProjeto = document.querySelector('#descricaoprojeto');
const editorCodigo= document.querySelector('code')
const linguagemSeletor = document.querySelector('#liguagem');
const coresValor = document.querySelector ('#cores');
const salvarProjeto = document.querySelector('#salvarProjeto')


salvarProjeto.addEventListener('click', ()=>{
    if(typeof(Storage) !=="undefined"){
        console.log("suporta o localstorage")
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
        console.log(projeto)
    }
})
//
let numeroId = 1

if(localStorage.length > 0){
    numeroId = localStorage.length
}

function montaProjeto(){
    let projeto = {
        'id': criaId(),
        'detalhesDoProjeto':{
            'nomeDoProjeto': nomeProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagemDoProjeto': linguagem.value,
            'codigoDoProjeto': editorCodigo.textContent,
            'codCor': coresValor.value
        }
    }
    return projeto
}

function criaId(){
    if (localStorage.length == 0){
        return 0
    }else{
        if (localStorage.length == numeroId){
            let novoId = numeroId
            numeroId++
            return novoId
        }
    }
}


function salvaLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}

function salvar(){
        let listaProjeto = JSON.parse(localStorage.getItem('listaProjeto') || '[]')   
        listaProjeto.push(
            {
                nomeProjetoSalva: nomeprojeto.value,
                descricaoProjetoSalva: descricaoprojeto.value,
                linguagemSalva: linguagem.value,
                editorCodigoSalva: editorCodigo.textContent,
                coresSalva: cores.value,
            });
            localStorage.setItem('listaProjeto', JSON.stringify(listaProjeto));
}   



 */