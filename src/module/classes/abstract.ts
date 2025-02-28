export const bootstrap = (): void => {
  //TODOS OS MEMBROS DA INTERFACE SÃO PÚBLICOS (implicitamente)
  interface VehicleInterface {
    type: string;
    description(): string;
  }
  //Dar forma aos objetos, sem se preocupar com a lógica
  //Não suportam os operadores de visibilidade(public, protected e private)

  abstract class VehicleAbstract {
    //abstract type: string; //Implicitamente públicos
    constructor(protected readonly type: string) {}
    //abstract description(): string;
    public description(): string {
      return `Tipo do veículo: ${this.type}`;
    }
  }
  //Podem dar forma aos objetos e também implementar lógicas
  //Quando implementado (Atributo ou método), eles suportam os operadores de visibilidade

  // Interfaces são implementadas. Podemos ter N interfaces
  class BicycleWithInterface implements VehicleInterface {
    public readonly type: string;
    constructor(type: string) {
      this.type = type;
    }
    description(): string {
      return `Tipo do veículo: ${this.type}`;
    }
  }

  const bicycleWithInterface = new BicycleWithInterface('Bicicleta');
  console.log(bicycleWithInterface.description());

  //---

  // Classes abstratas são extendidas. Só pode extender uma
  class BicycleWithAbstract extends VehicleAbstract {
    constructor(type: string) {
      super(type);
    }
    public description(): string {
      return `Tipo do veículo: ${this.type}`;
    }
  }
  const bicycleWithAbstract = new BicycleWithAbstract('Bicicleta');
  console.log(bicycleWithAbstract.description());
};
