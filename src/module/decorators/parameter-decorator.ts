export const bootstrap = (): void => {
  function someAction() {
    return (target: Object, propertyKey: string | symbol) => {
      console.log('Executar algo na inicialização da propriedade na classe');
    };
  }

  function AnotherAction(param: string) {
    return (
      target: Object,
      propertyKey: string | symbol,
      parameterIndex: number,
    ) => {
      console.log(param);
      console.log('target', target);
      console.log('propertyKey', propertyKey);
      console.log('parameterIndex', parameterIndex);

      console.log('Executa algo no parâmetro decorado');
    };
  }

  class Event {
    @someAction()
    date: Date;

    constructor(date: Date) {
      this.date = date;
    }

    checkAvailability(teste: string, @AnotherAction('xyz') room: number) {
      console.log('verifica disponibilidade do espaço');
    }
  }

  const event = new Event(new Date(2025, 2, 13));
  event.date = new Date(2025, 3, 13);
  event.checkAvailability('teste', 15);
};
