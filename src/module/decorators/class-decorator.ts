export const bootstrap = (): void => {
  type ConstructorFunction = { new (...args: any[]): {} };

  function AddLogMethod(dateFormat: string, className: string, prefix: string) {
    return function <T extends ConstructorFunction>(constructor: T): T {
      constructor.prototype.loggerInfo = function () {
        console.log(
          `${prefix} - ${className} - ${new Date().toLocaleString(dateFormat)} - ${JSON.stringify(this)}`,
        );
      };

      return constructor;

      /*
        atributos = estados
        atributos -> métodos = comportamentos
        //
        propriedades
            atributos = estados
            métodos = comportamentos
        */
    };
  }

  /*
  function AddLogMethod(dateFormat: string, className: string, prefix: string) {
    return function <T extends ConstructorFunction>(constructor: T): T {
      //console.log('Chegamos no decorador');
      console.log(constructor);

      return class extends constructor {
        loggerInfo = () => {
          console.log(
            `${prefix} - ${className} - ${new Date().toLocaleString(dateFormat)} - ${JSON.stringify(this)}`,
          );
        };
      };
    };
  }*/
  /* @AddLogMethod()
  class Product {
    name: string;
    loggerInfo!: () => void;
    constructor(name: string) {
      this.name = name;
    }
  }

  const product = new Product('Bicicleta');
  console.log(product);
  product.loggerInfo(); */

  @AddLogMethod('pt-BR', 'Person', '[LOG]')
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person = new Person('Tobias', 19);
  console.log(person);
  (person as any).loggerInfo();
};
