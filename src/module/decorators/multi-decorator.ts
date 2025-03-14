export const bootstrap = (): void => {
  const UserLogin = {
    username: 'Tobias',
    permissions: ['User'],
  };

  function RateLimit(limitInMiliseconds: number): MethodDecorator {
    return <T>(
      target: object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      const originalMethod = descriptor.value as (...args: any[]) => T;
      let lastExecution = 0; // a última execução

      descriptor.value = function (this: any, ...args: any) {
        const now = Date.now(); // o instante atual

        if (now - lastExecution < limitInMiliseconds) {
          console.error(
            `O método ${String(propertyKey)} só pode ser chamado novamente após ${limitInMiliseconds}ms.`,
          );
          descriptor.value = function () {} as T;
        } else {
          lastExecution = now;
          // conecta o contexto da nova função associada ao descriptor.value com o contexto do método original, que está sendo decorado
          return originalMethod.apply(this, args);
        }
      } as T;

      return descriptor;
    };
  }

  function CheckPermissions(requiredPermissions: string[]): MethodDecorator {
    return <T>(
      target: object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      const hasPermission = requiredPermissions.some((permission) =>
        UserLogin.permissions.includes(permission),
      );

      if (!hasPermission) {
        console.error(
          `Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertyKey)}`,
        );

        descriptor.value = function () {} as T;
      }

      return descriptor;
    };
  }

  class ShoppingCart {
    constructor(private readonly items: string[]) {}
    /*
    @CheckPermissions(['User', 'Admin', 'Super User'])
    @RateLimit(3000)
    getItems() {
      console.log('Retorna a relação de itens adicionados ao carrinho');
    }
      */

    @CheckPermissions(['User', 'Admin', 'Super User'])
    @RateLimit(3000)
    getItemsFiltered(
      search: string,
      caseInsensitive: boolean = true,
    ): string[] {
      const itemsFiltered = this.items.filter((item) => {
        if (caseInsensitive) {
          return item.toLowerCase().includes(search.toLowerCase());
        } else {
          return item.includes(search);
        }
      });
      return itemsFiltered;
    }
  }

  const shoppingCart = new ShoppingCart([
    'Árvore de Natal',
    'Enfeite de Natal',
  ]);
  document.getElementById('getItems')?.addEventListener('click', () => {
    const itemsFiltered = shoppingCart.getItemsFiltered('natal');
    console.warn(itemsFiltered);
  });
};
