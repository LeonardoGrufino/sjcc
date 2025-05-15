const comentario = textarea.value;
const nome = "Anônimo"; // ou obtenha de um input

fetch("https://sjcc.onrender.com/api/comments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    content: comment,
    name: nome,
  }),
})
  .then((resposta) => {
    if (!resposta.ok) {
      return resposta.json().then((erro) => {
        throw new Error(erro.error || "Erro desconhecido.");
      });
    }
    return resposta.json();
  })
  .then((data) => {
    alert("Comentário enviado com sucesso!");
  })
  .catch((erro) => {
    alert("Erro ao enviar comentário: " + erro.message);
    console.error(erro);
  });