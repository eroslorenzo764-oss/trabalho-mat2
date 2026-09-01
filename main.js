// ==== SIMULAÇÃO DE REAÇÃO EM CADEIA ====
// Cada elemento ativo tem chance "probabilidade" de ativar "novosPorAtivacao" elementos
function simularReacaoEmCadeia(elementosIniciais, probabilidade, novosPorAtivacao, geracoes) {
  let ativos = elementosIniciais;
  const historico = [ativos]; // guarda o total de ativos em cada geração

  for (let g = 0; g < geracoes; g++) {
    let novosAtivados = 0;

    // cada elemento ativo "tenta" ativar novos elementos
    for (let i = 0; i < ativos; i++) {
      for (let j = 0; j < novosPorAtivacao; j++) {
        if (Math.random() < probabilidade) {
          novosAtivados++;
        }
      }
    }

    ativos = novosAtivados;
    historico.push(ativos);

    // condição de parada: se ninguém mais ativa, a reação "morre"
    if (ativos === 0) break;
  }

  return historico;
}


function taxaMediaDeCrescimento(historico) {
  let somaRazoes = 0;
  let contagem = 0;

  for (let i = 1; i < historico.length; i++) {
    if (historico[i - 1] > 0) { 
      somaRazoes += historico[i] / historico[i - 1];
      contagem++;
    }
  }

  return contagem > 0 ? somaRazoes / contagem : 0;
}

function simularReacaoComLimite(elementosIniciais, probabilidade, novosPorAtivacao, geracoes, limiteMaximo) {
  let ativos = elementosIniciais;
  const historico = [ativos];

  for (let g = 0; g < geracoes; g++) {
    let novosAtivados = 0;

    for (let i = 0; i < ativos; i++) {
      for (let j = 0; j < novosPorAtivacao; j++) {
        if (Math.random() < probabilidade) {
          novosAtivados++;
        }
      }
    }


    ativos = Math.min(novosAtivados, limiteMaximo);
    historico.push(ativos);

    if (ativos === 0 || ativos >= limiteMaximo) break;
  }

  return historico;
}

function rodarDemo() {
  const inicial = parseInt(document.getElementById('inicial').value);
  const prob = parseFloat(document.getElementById('prob').value);
  const novos = parseInt(document.getElementById('novos').value);
  const geracoes = parseInt(document.getElementById('geracoes').value);

  const historico = simularReacaoEmCadeia(inicial, prob, novos, geracoes);
  const taxaMedia = taxaMediaDeCrescimento(historico);

  document.getElementById('output').textContent =
    'Ativos por geração:\n' +
    historico.map((v, i) => `Geração ${i}: ${v}`).join('\n') +
    `\n\nTaxa média de crescimento por geração: ${taxaMedia.toFixed(2)}x`;
}