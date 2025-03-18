let amigos = [];

    function adicionarAmigo() {
        const input = document.getElementById('amigo');
        const nome = input.value.trim();

    if (nome) {
        if (amigos.includes(nome)) {
          alert('Este nome já foi adicionado.');
    } else {
          amigos.push(nome);
          atualizarListaAmigos();
          input.value = '';
        }
    } else {
        alert('Por favor, insira um nome válido.');
      }
    }

    function atualizarListaAmigos() {
            const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        amigos.forEach((amigo) => {
            const li = document.createElement('li');
          li.textContent = amigo;
          lista.appendChild(li);
        });
      }

    function embaralhar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
      }
    function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
    return;
        }

        embaralhar(amigos);

        const indice = amigos.indexOf(participante);

    if (indice !== -1) {
            const amigoSecreto = amigos[(indice + 1) % amigos.length];
            exibirResultado(`O amigo secreto de ${participante} é: ${amigoSecreto}`);
    } else {
            exibirResultado(`O participante ${participante} não está na lista.`);
        }
        }

    function exibirResultado(mensagem) {
            const resultado = document.getElementById('resultado');
            resultado.textContent = mensagem;
          }
        atualizarListaAmigos();