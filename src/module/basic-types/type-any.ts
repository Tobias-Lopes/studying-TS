export function handleFileUpload(file: any) {
  console.log(`Nome: ${file.name}`);
  console.log(`Size: ${file.sise}`);
}

const file = { name: 'listadeFuncionarios.txt', size: 98765678 };
handleFileUpload(file);
