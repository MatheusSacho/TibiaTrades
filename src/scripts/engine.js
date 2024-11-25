function redirection(event) {
  // Obtém o valor da opção selecionada no select
  var serverUrl = event.target.value; // Usamos event.target para pegar o select que disparou o evento

  // Verifica se o valor não está vazio
  if (serverUrl) {
    // Redireciona para o link associado
    window.location.href = serverUrl;
  }
}

// Adiciona o evento 'change' a todos os selects com a classe 'server-select'
document.querySelectorAll(".server-select").forEach(function (select) {
  select.addEventListener("change", redirection);
});

document.addEventListener("DOMContentLoaded", function () {
  // Encontre o h2 com o id "lista" que contém a seta
  const listaElement = document.getElementById("lista");
  const dropdown = document.querySelector(".dropdown");

  // Adicione um evento de clique ao h2
  listaElement.addEventListener("click", function () {
    // Alterna a classe 'open' no dropdown, que exibe ou esconde o select
    dropdown.classList.toggle("open");
  });
});
