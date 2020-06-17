function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    if (idade >= 18) {
      resolve("Maior que 18 anos de idade");
    } else {
      reject("Menor que 18 anos de idade");
    }
  });
}

checaIdade(18)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });
