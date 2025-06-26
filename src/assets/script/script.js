// DOMContentLoaded -> É um evento do JavaScript que acontece quando todo o HTML da página já foi carregado.

document.addEventListener("DOMContentLoaded", () => {
    console.log('minha página carregou');

    const inputMsg = document.querySelector('#inputMensagem');
    console.log(inputMsg);

    inputMsg.placeholder = "Digite sua mensagem";

    const buttons = document.querySelectorAll(".cursor--pointer");
    console.log(buttons)

    const buttonSend = document.querySelector(".cursor--pointer[src*='send']");
    console.log(buttonSend);

    const listaMensgens = document.querySelector(".div--messages"); 
    console.log(listaMensgens);

    const respostasParaOBot = [
        "Quantos jogadores tem um time de futebol em campo?",
        "Qual é a duração oficial de uma partida de futebol?",
        "Qual é a principal função do goleiro?",
        "O que é um pênalti no futebol?",
        "Quais são as cores do cartão que o árbitro usa para advertir os jogadores?",
        "O que significa impedimento no futebol?",
        "Qual é o maior torneio de seleções do mundo?",
        "Qual jogador é conhecido como 'Rei do Futebol'?"
    ]



function enviarMensagem() {
      const texto = inputMsg.value.trim();
        
        if (texto === "") {
            alert("não tem mensagem");
        }else {
            adicionarMensagem("enviada", texto);
            inputMsg.value = "";

        //setTimeout -> Executa uma única vez após um tempo determinado.    
        //setInterval -> Executa a mesma função várias vezes, com intervalo fixo de tempo.

        setTimeout(responderMensagem, 2000);    
    };
};

function responderMensagem() {
    const posicao = Math.floor(Math.random() * respostasParaOBot.length);
    const mensagemBot = respostasParaOBot[posicao];
    adicionarMensagem("recebida", mensagemBot);
};

function adicionarMensagem(tipoMensagem, texto) {
    const mensagemElement = document.createElement("div");

    mensagemElement.classList.add("message", "fade-in");

    if (tipoMensagem === 'enviada') {
        mensagemElement.classList.add('you');
    } else {
        mensagemElement.classList.add('other');
    }

    mensagemElement.innerText = texto;
    listaMensgens.appendChild(mensagemElement);

    setTimeout(() => {
        mensagemElement.classList.remove("fade-in");
    }, 500);

};

    buttonSend.addEventListener("click", () => {
        enviarMensagem();
    }); 

    inputMsg.addEventListener('keydown', function(evento) {
        if (evento.key === "Enter" ) {
            enviarMensagem();
        }
    });
});