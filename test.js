const fetch = require("node-fetch");

async function testarViaCEP() {
  const cep = "01001000";

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.localidade === "São Paulo") {
      console.log("Teste passou: API funcionando corretamente.");
    } else {
      console.log("Teste falhou: Dados inesperados.");
    }
  } catch (erro) {
    console.log("Teste falhou: Erro na integração.");
  }
}

testarViaCEP();