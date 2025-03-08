export const bootstrap = (): void => {
  class Stack<T> {
    constructor(private stack: T[]) {}
    last(): T | undefined {
      if (this.stack.length > 0) return this.stack[this.stack.length - 1];
    }
  }

  type Product = { id: number; name: string };

  const products: Product[] = [
    { id: 1, name: 'Smartphone' },
    { id: 2, name: 'Bicicleta' },
    { id: 3, name: 'Microfone' },
  ];

  const stack1 = new Stack(products);
  const stak1LastItem = stack1.last();
  console.log(stak1LastItem);

  const stack2 = new Stack(['Tobias', 'Zé', 'Guga']);
  const stak2LastItem = stack2.last();
  console.log(stak2LastItem);

  /*
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
  */
};
