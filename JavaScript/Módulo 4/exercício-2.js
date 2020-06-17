const createElement = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};

function adicionarUsuario() {
  const usuário = document.querySelector("input#user").value;
  const userDiv = document.querySelector("div#users");

  fetch(`https://api.github.com/users/${usuário}/repos`)
    .then(function (response) {
      return response.json();
    })
    .then(function (repositories) {
      const títuloUsuário = createElement(`<h2>${usuário}</h2>`);
      const listaDeRepositorio = createElement(
        `<ul id="repositories-${usuário}"></ul>`
      );

      userDiv.appendChild(títuloUsuário);
      userDiv.appendChild(listaDeRepositorio);

      for (const repository of repositories) {
        const listaDeRepositorioElement = document.querySelector(
          `ul[id=repositories-${usuário}]`
        );

        const repositoryInList = createElement(
          `<li><a href="${repository.html_url}">${repository.name}</a></li>`
        );

        listaDeRepositorioElement.appendChild(repositoryInList);
      }
    })
    .catch(function (error) {
      const errorMessage = createElement(
        `<h2 class="error">Usuário não encontrado!</h2>`
      );
      userDiv.appendChild(errorMessage);
    });
}
