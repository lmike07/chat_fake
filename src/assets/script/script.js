const listaDeContato = [
    {
        id: 1,
        nome: "Amor❤️",
        ultimaMensagem: "pq a luana curtiu sua foto?",
        horarioUltimaMensagem: "18:41",
        avatar: "./src/assets/images/jessica--drew.png",
        conversas: [
            {mensagem: "você conhece luana?", tipo: "recebida", horario: "20:20"},
            {mensagem: "não faço a menor ideia", tipo: "enviada", horario: "20:21"},
            {mensagem: "pq a luana curtiu sua foto?", tipo: "recebida", horario: "20:22"}
        ],
    },

    {
        id: 3,
        nome: "Pablo",
        ultimaMensagem: "vamos codar juntos?",
        horarioUltimaMensagem: "17:38",
        avatar: "./src/assets/images/greg--james.png",
        conversas: [
            {mensagem: "Graças a Deus irmão", tipo: "recebida", horario: "20:20"},
            {mensagem: "que legal, cara", tipo: "enviada", horario: "20:21"},
            {mensagem: "vamos codar juntos?", tipo: "recebida", horario: "20:22"}
        ],
    },

    {
        id: 4,
        nome: "Luana minha ex",
        ultimaMensagem: "Vamos voltar? estou com sdds 😔",
        horarioUltimaMensagem: "16:19",
        avatar: "./src/assets/images/emily--dorson.png",
        conversas: [
            {mensagem: "você está fazendo falta", tipo: "recebida", horario: "20:20"},
            {mensagem: "Você também faz faltar", tipo: "enviada", horario: "20:21"},
            {mensagem: "Vamos voltar? estou com sdds 😔", tipo: "recebida", horario: "20:22"}
        ],
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

    const inputBuscarContato = document.querySelector(".div--search input[type='search']");
    console.log(inputBuscarContato);

    const inputBuscaMessagem = document.getElementById ("search-message");
    console.log(inputBuscaMessagem);

    inputBuscaMessagem.addEventListener("input", () => {
        const termoDeBusca = inputBuscaMessagem.value;
        console.log(`O termo de buscado foi: ${termoDeBusca}`);
        carregarContatos(termoDeBusca);
    });

     inputBuscaMessagem.addEventListener("input", () => {
        const termoDeBusca = inputBuscaMessagem.value;
        console.log(`O termo de buscado foi: ${termoDeBusca}`);
        buscarMensagem(termoDeBusca);
    });


    function buscarMensagem(termo) {
        let encontrouMensagem = false;
        const mensagemElement = document.querySelectorAll(".message");
        console.log(mensagemElement);

        mensagemElement.forEach((mensagem) => {
            const textoOriginal = mensagem.innerText;
            const textoNormalizado = textoOriginal.toLowerCase();
            const termoNormalizado = termo.toLowerCase();

            if (textoNormalizado.includes(termoNormalizado)) {
                encontrouMensagem = true;
                const textoDestacado = textoOriginal.replace(
                    new RegExp(`(${termo})`, "gi"),
                    "<span class='highlight'>$1</span>"
                );

                mensagem.innerHTML = textoDestacado;
                mensagem.style.display = "block"; //Exibir a mensagem
            }else {
                mensagem.style.display = "none"; //Ocultar a mensagem   
            }
        });

        if (!encontrouMensagem && termo !== "") {
            listaMensgens.innerHTML = "<div>Não houve resultado</div>";
        }else if (termo === "") {
            mensagemElement.forEach((mensagem) => {
                mensagem.style.display = "block";
                mensagem.innerHTML = mensagem.innerText;
            });
        }
    }

    inputBuscarContato.addEventListener("input", () => {
        const termoDeBusca = inputBuscarContato.value;
        console.log(`O termo buscado foi: ${termoDeBusca}`);
        carregarContatos(termoDeBusca);
    });

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
            const mensagemRenderizada = renderizarMensagem("enviada", texto, "20:35");
            listaMensgens.appendChild(mensagemElement);
            inputMsg.value = "";

        //setTimeout -> Executa uma única vez após um tempo determinado.    
        //setInterval -> Executa a mesma função várias vezes, com intervalo fixo de tempo.

        setTimeout(responderMensagem, 2000);    
    };
};

function responderMensagem() {
    const posicao = Math.floor(Math.random() * respostasParaOBot.length);
    const mensagemBot = respostasParaOBot[posicao];
    const mensagemRenderizada = renderizarMensagem("recebida", mensagemBot, "21:10");
    listaMensgens.appendChild(mensagemRenderizada);
};

    buttonSend.addEventListener("click", () => {
        enviarMensagem();
    }); 

    inputMsg.addEventListener('keydown', function(evento) {
        if (evento.key === "Enter" ) {
            enviarMensagem();
        }
    });


function renderizarMensagem(tipo, mensagem, horario) {
    const divMensagem = document.createElement("div");
    const direcao = tipo === "enviada" ? "end" : "start";
    const styleDiv = tipo === "enviada" ? "you" : "other";

    divMensagem.classList.add("flex",
        "flex--direction--row",
        "width--100",
        `justify--content--${direcao}`,
        "fade-in"
    )

    divMensagem.innerHTML = `
        
            <div class="flex flex--direction--column message ${styleDiv}">
                    <div class="flex--6">
                        ${mensagem}
                    </div>

                    <div class="flex--1 flex flex--direction--row justify--content--end align--items--center font--size--12 infos--message">                 
                        <div>${horario}</div>
                        <img src="./src/assets/icons/viewed.svg" />
                    </div>            
            </div>
        `
        return divMensagem
}


function carregarMensagemContatos(index) {
    const contato = listaDeContato[index];
    listaMensgens.innerHTML = "";

    contato.conversas.forEach((conversa) => {
        const mensagemRenderizada = renderizarMensagem(conversa.tipo, conversa.mensagem, conversa.horario);
        listaMensgens.appendChild(mensagemRenderizada);
    });

}

function carregarContatos(filtro = "") {

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
        divContatosElement.innerHTML = "";

        //toLowerCase() -> transforma uma string para minusculo
        //toUppercase() -> transforma uma string para maiusculo

        const contatosfiltrados = listaDeContato.filter((contato) => 
        contato.nome.toLowerCase().includes(filtro.toLocaleLowerCase())
        );

        if (contatosfiltrados.length === 0) {
            divContatosElement.innerHTML = "<div><span>Contato não encotrado</span></div>";
            return
        }


        contatosfiltrados.forEach((contato, index) => {
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

            divParentElement.addEventListener("click", () => {
                carregarMensagemContatos(index);
            });

          divContatosElement.appendChild(divParentElement);
          }, index * 1000);        
        });    
    };

    setTimeout(() => {
        carregarContatos();
    }, 2000);

});