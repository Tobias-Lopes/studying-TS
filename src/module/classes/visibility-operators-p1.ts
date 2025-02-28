export const bootstrap = (): void => {
  class Product {
    public name: string;
    protected price: number;
    private stock: number;

    //ACESSO NA CLASSE
    constructor(name: string, price: number, stock: number) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
  }

  class Eletronic extends Product {
    showDetails(): string {
      //ACESSO NA SUBCLASSE
      return `Detalhes: ${this.name} - ${this.price}`;
    }
  }

  //ACESSO FORA DA CLASSE

  //Por meio de uma intância (Objeto)
  const product = new Product('Smartphone', 4500, 10);
  console.log(product);
};
