const listaDeContato = [
    {
        id: 1,
        nome: "Amor❤️",
        ultimaMensagem: "Quem é Luana que curtiu sua foto?",
        horarioUltimaMensagem: "18:41",
        avatar: "./src/assets/images/jessica--drew.png"
    },

    {
        id: 3,
        nome: "Pablo",
        ultimaMensagem: "Meus parabéns pela sua vaga! :)",
        horarioUltimaMensagem: "17:38",
        avatar: "./src/assets/images/greg--james.png"
    },

    {
        id: 4,
        nome: "Luana minha ex",
        ultimaMensagem: "Vamos voltar? estou com sdds 😔",
        horarioUltimaMensagem: "16:19",
        avatar: "./src/assets/images/emily--dorson.png"
    }

];



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


function carregarContatos() {

/*
Loop - laço de repetição 
while 
FOR 
 for 
 for of 
 for in 
 for each
*/

        const divContatosElement = document.querySelector(".div--contacts");


        listaDeContato.forEach((contato, index) => {
            console.log(contato);

            setTimeout(() => {
        
            const divParentElement = document.createElement("div");
            divParentElement.classList.add("flex", "area--contact", "fade-in");

            divParentElement.innerHTML = `
                        <div class="flex justify--content--center align--items--center flex--1">
                            <img class="avatar--left--bar" src="${contato.avatar}" />
                        </div>

                        <div class="flex flex--direction--column justify--content--center flex--3">
                            <div class="flex align--items--center infos--contact">
                                <div class="font--family font--weight--bold">${contato.nome}</div>
                            </div>

                            <div class="last--message">${contato.ultimaMensagem}</div>
                        </div>

                        <div class="flex flex--direction--column justify--content--center align--items--end flex--1 div--last--messages--info">
                        <div class="flex justify--content--center align--items--center quantity--not--viewed--messages background--green">1</div>
                            <div class="hour--last--message">${contato.horarioUltimaMensagem}</div>
                        </div>
            `;
          divContatosElement.appendChild(divParentElement);
          }, index * 1000);        
        });    
    };

    setTimeout(() => {
        carregarContatos();
    }, 2000);

});