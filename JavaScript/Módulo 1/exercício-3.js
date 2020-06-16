function temHabilidade(skills = []) {
  return skills.indexOf("Javascript") !== -1 ? true : false;
}
console.log(temHabilidade(["Javascript"]));
