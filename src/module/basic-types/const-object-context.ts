type File = {
  readonly name: string;
  size: number;
};

/*const file = {
  name: 'listadeFuncionarios.txt',
  size: 98765678,
} as const; */

const file: File = {
  name: 'listadeFuncionarios.txt',
  size: 98765678,
};

//file.name = 'listadeDependentes.txt';

export function handleFileUpload(file: File) {
  console.log(`Nome: ${file.name}`);
  console.log(`Size: ${file.size}`);
}

handleFileUpload(file);
