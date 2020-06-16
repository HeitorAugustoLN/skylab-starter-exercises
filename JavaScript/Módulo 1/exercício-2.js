function pares(x, y) {
  var númerosPares = [];
  for (var número = x; número < y; número++) {
    if (número % 2 === 0) {
      númerosPares.push(número);
    }
  }
  return númerosPares;
}

console.log(pares(32, 321));
