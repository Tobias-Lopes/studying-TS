export const bootstrap = (): void => {
  class Stack {
    static last<T>(arr: T[]): T | undefined {
      if (arr.length > 0) return arr[arr.length - 1];
    }
  }

  const numbers = [1, 2, 5, 15];
  const lastNumber = Stack.last(numbers);
  console.log(lastNumber);

  type Product = { id: number; name: string };

  const products: Product[] = [
    { id: 1, name: 'Smartphone' },
    { id: 2, name: 'Bicicleta' },
    { id: 3, name: 'Microfone' },
  ];

  const lastProduct = Stack.last(products);
  console.log(lastProduct);
};
