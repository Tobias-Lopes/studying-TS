let shoppingCart = [200.75, 150.12, '33.90', '44', 'not defined'];

export function totalize(values: (number | string)[]) {
  //retornar o total
  return values
    .map((value) => (typeof value === 'number' ? value : parseFloat(value))) // converter todos os valores para números
    .filter((value) => !isNaN(value)) // filtrar os valores válidos
    .reduce((acc, curr) => acc + curr, 0); // Totalizar
}

console.log(totalize(shoppingCart));
