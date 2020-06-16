function experiencia(anos) {
  if (anos === 0 || anos === 1) return "Iniciante";
  else if (anos > 1 && anos < 4) return "Intermédiario";
  else if (anos >= 4 && anos <= 6) return "Avançado";
  else return "Jedi Master";
}

console.log(experiencia(10));
