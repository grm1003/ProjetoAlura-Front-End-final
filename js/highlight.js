const linguagem = document.querySelector('.linguagem');
const areaDoCodigo = document.querySelector('.codigo-wrapper');
const botao = document.querySelector('.botao-highlight');
function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value} " contenteditable="true" aria-label="Editor de código" aria-autocomplete="none"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight();
}
)



