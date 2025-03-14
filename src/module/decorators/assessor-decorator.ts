export const bootstrap = (): void => {
  function CapitalizeText() {
    return function <T>(
      target: object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) {
      const originalMethod = descriptor.set as (v: any) => void;
      descriptor.set = function (this: any, value: T) {
        console.log('--->', value);
        if (typeof value === 'string') {
          const newValue = value
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          originalMethod?.apply(this, [newValue]);
        }
      };

      return descriptor;
    };
  }

  function AddPrefix(prefix: string) {
    return function <T>(
      target: object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) {
      const originalMethod = descriptor.get as () => T;

      descriptor.get = function (this: any): T {
        const originalValue = originalMethod.apply(this);
        return `${prefix} ${originalValue}` as T;
      };

      return descriptor;
    };
  }

  class ServiceOrder {
    private _title: string = '';

    @CapitalizeText()
    @AddPrefix('[Ordem de Serviço]')
    set title(value: string) {
      this._title = value;
    }

    get title(): string {
      return this._title;
    }
  }

  const serviceOrder = new ServiceOrder();
  serviceOrder.title =
    'Refatorar o código para que as funções de tratamento de dados sejam convertidas p/ decoradores';
  console.warn(serviceOrder.title);
};
