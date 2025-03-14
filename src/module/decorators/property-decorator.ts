export const bootstrap = (): void => {
  function somAction() {
    return (target: Object, propertyKey: string | symbol) => {
      console.log(target);
      console.log(propertyKey);
      console.log('Executar algo na inicialização da propriedade na classe');
    };
  }

  class Event {
    @somAction()
    date: Date;

    constructor(date: Date) {
      this.date = date;
    }
  }

  const event = new Event(new Date(2025, 2, 13));
  console.log(event);
  event.date = new Date(2025, 3, 13);
};
