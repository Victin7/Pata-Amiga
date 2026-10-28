/* =========================================================
   FUNCIONALIDADE 2 — INTERAÇÃO ADICIONAL (página sobre.html)
   O botão "Mostrar resultados" mostra e oculta o painel
   com os números da ONG.
   ========================================================= */

// 1. Pega os elementos do HTML pelo id
const botaoResultados = document.getElementById("botao-resultados");
const painelResultados = document.getElementById("painel-resultados");

// 2. Guarda se o painel está aberto ou fechado
//    (usamos "let" porque esse valor vai mudar)
let painelAberto = false;

// 3. Função que abre ou fecha o painel
function alternarResultados() {
  if (painelAberto === false) {
    // Está fechado -> vamos MOSTRAR
    painelResultados.style.display = "block";
    botaoResultados.textContent = "Ocultar resultados";
    botaoResultados.setAttribute("aria-expanded", "true");
    painelAberto = true;
  } else {
    // Está aberto -> vamos ESCONDER
    painelResultados.style.display = "none";
    botaoResultados.textContent = "Mostrar resultados";
    botaoResultados.setAttribute("aria-expanded", "false");
    painelAberto = false;
  }
}

// 4. Quando clicar no botão, executa a função acima
botaoResultados.addEventListener("click", alternarResultados);
