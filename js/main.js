let titulo = document.querySelector('h1');
titulo.textContent = 'Bateria Virtual';

//Função que ira reproduzir o som;

function tocaSom(idSomElementos) {
   const elementoAudio = document.getElementById(idSomElementos);

    if (elementoAudio != null && elementoAudio.localName === 'audio' ) {
        elementoAudio.play();
    } else {
        console.log('Elemento não encontrado ou seletor invalido');
    }

}

//Fim da função;

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `som_${instrumento}`;

//Função de click que quando eu clicar o botão ira executar o idAudio;

    tecla.onclick = function () {
        tocaSom(`${idAudio}`);
    }

//Executar a função quando a tecla estiver precionada o levantada;

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');   
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

  