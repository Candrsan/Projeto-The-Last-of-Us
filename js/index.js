const botoesCarrosel = document.querySelectorAll('.botao');
const carrosel = document.querySelectorAll('.imagem');

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        carrosel[indice].classList.add('ativa');
    })
})


