const todosOsProjetos = document.querySelector('.js-todos-projetos')
new function () {
    mostraProjetos()
}

function montaCartao(projeto) {

    let cartao =
        `
            <a style="cursor: pointer" class='codigo__wrapper' data-id='${projeto.id}'>

            <article class='projetoBorda'>
                <div class="fundo" style = "background: ${projeto.detalhesDoProjeto.codCor}">
                    <div class = bordaEditor>
                        <div class='sinal'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#FF5F56" />
                                </svg>

                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#FFBD2E" />
                                </svg>

                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#27C93F" />
                                </svg>
                            </div>
                            <div class="codigo-wrapper">
                                <code class='projeto__codigo preview hljs'${projeto.detalhesDoProjeto.linguagemDoProjeto}></code>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="textoProjeto">
                    <h2 class='projeto__titulo'>${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
                    <p class='projeto__descricao'>${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
                    <span class='projeto__linguagem linguagem--${projeto.detalhesDoProjeto.linguagemDoProjeto}'>${projeto.detalhesDoProjeto.linguagemDoProjeto}</span>
                </div>
            </article>
            </a>
    `
    return cartao
}

function mostraProjetos() {
    if (localStorage.length == 0) {
        return
    }
    
    let projetos = []
    for (let i = 2; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        todosOsProjetos.innerHTML += montaCartao(projeto)
        const codigoHtml = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigoDoProjeto
    })
}



/* 
const todosOsProjetos = document.querySelector('.js-todos-projetos')
new function () {
    mostraProjetos()
}

function montaCartao(projeto) {

    let cartao =
        `
            <a style="cursor: pointer" class='codigo__wrapper' data-id="${projeto.id}">

            <article class='projetoBorda'>
                <div class="fundo" style = "background: ${projeto.detalhesDoProjeto.codCor}">
                    <div class = bordaEditor>
                        <div class='sinal'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#FF5F56" />
                                </svg>

                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#FFBD2E" />
                                </svg>

                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#27C93F" />
                                </svg>
                            </div>
                            <div class="codigo-wrapper">
                                <code class='projeto__codigo preview hljs'${projeto.detalhesDoProjeto.linguagemDoProjeto}></code>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="textoProjeto">
                    <h2 class='projeto__titulo'>${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
                    <p class='projeto__descricao'>${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
                    <span class='projeto__linguagem linguagem--${projeto.detalhesDoProjeto.linguagemDoProjeto}'>${projeto.detalhesDoProjeto.linguagemDoProjeto}</span>
                </div>
            </article>
            </a>
    `
    return cartao
}

function mostraProjetos() {
    if (localStorage.length == 0) {
        return
    }
    let projetos = []
    for (let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        todosOsProjetos.innerHTML += montaCartao(projeto)
        const codigoHtml = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigoDoProjeto
    })
} */




