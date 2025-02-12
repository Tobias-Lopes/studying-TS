let filmArray: (number | string | boolean)[] = [1, 'Guerra Civil', true];
let filmTuple: [number, string, boolean] = [2, 'Planeta dos Macacos', true];
let filmTupleOpcionalPosicion: [number, string, boolean?] = [
  2,
  'Planeta dos Macacos',
  true,
];

const [idArr, titleArr, availableArr] = filmArray;
const [id, title, available] = filmTuple;

console.log(id);

//type-tuples
