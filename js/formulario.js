/* =========================================================
   FUNCIONALIDADE 1 — FORMULÁRIO VALIDADO (página contato.html)
   Confere os campos e mostra erro ou confirmação na tela.
   O envio é SIMULADO: nada é enviado nem guardado.
   ========================================================= */

// 1. Pega o formulário e o parágrafo de retorno pelo id
const formulario = document.getElementById("form-contato");
const retorno = document.getElementById("mensagem-retorno");

// 2. Função que mostra uma mensagem de ERRO
function mostrarErro(texto, campo) {
  retorno.textContent = texto;
  retorno.className = "retorno erro";
  campo.focus(); // leva o cursor até o campo com problema
}

// 3. Função que mostra a mensagem de SUCESSO
function mostrarSucesso(texto) {
  retorno.textContent = texto;
  retorno.className = "retorno sucesso";
}

// 4. Quando o formulário for enviado...
formulario.addEventListener("submit", function (evento) {
  // Impede a página de recarregar / enviar de verdade
  evento.preventDefault();

  // Pega os campos
  const campoNome = document.getElementById("nome");
  const campoEmail = document.getElementById("email");
  const campoAssunto = document.getElementById("assunto");
  const campoMensagem = document.getElementById("mensagem");

  // Lê os valores e tira espaços do começo e do fim (trim)
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const assunto = campoAssunto.value.trim();
  const mensagem = campoMensagem.value.trim();

  // Devolve o e-mail sem espaços para o campo antes de checar o formato
  campoEmail.value = email;

  // 5. Verifica cada regra, uma de cada vez
  if (nome.length < 3) {
    mostrarErro("O nome precisa ter pelo menos 3 caracteres.", campoNome);
  } else if (email === "") {
    mostrarErro("Preencha o seu e-mail.", campoEmail);
  } else if (campoEmail.checkValidity() === false) {
    // checkValidity usa o type="email" do HTML para conferir o formato
    mostrarErro("Digite um e-mail válido, por exemplo: nome@email.com", campoEmail);
  } else if (assunto === "") {
    mostrarErro("Preencha o assunto.", campoAssunto);
  } else if (mensagem.length < 10) {
    mostrarErro("A mensagem precisa ter pelo menos 10 caracteres.", campoMensagem);
  } else {
    // Tudo certo: mostra a confirmação simulada e limpa o formulário
    mostrarSucesso(
      "Obrigado, " + nome + "! Mensagem recebida (simulação): " +
      "nenhum e-mail foi enviado e nenhum dado foi guardado."
    );
    formulario.reset();
  }
});
