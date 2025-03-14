export const bootstrap = (): void => {
  const UserLogin = {
    username: 'Tobias',
    permissions: ['User'],
  };

  function CheckPermissions(requiredPermissions: string[]): MethodDecorator {
    return <T>(
      target: object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      console.log(descriptor.value);
      //console.log(requiredPermissions);

      // Target: classe na qual o método está definido
      //console.log(target);

      //propertyKey: nome do método que está sendo decorado
      //console.log(propertyKey);

      // descriptor: descreve as propriedades do método (descriptor.value utilizado para manipular o método)
      //console.log(descriptor);

      const hasPermission = requiredPermissions.some((permission) =>
        UserLogin.permissions.includes(permission),
      );

      if (!hasPermission) {
        console.error(
          `Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertyKey)}`,
        );

        descriptor.value = function () {} as T;
      }

      console.log(descriptor.value);
      return descriptor;
    };
  }

  class ShoppingCart {
    @CheckPermissions(['User', 'Admin', 'Super User'])
    getItems() {
      console.log('Retorna a relação de itens adicionados ao carrinho');
    }

    //@CheckPermissions(['Admin', 'Super User'])
    deleteItem() {
      console.log('Remove um item do carrinho');
    }
  }

  const shoppingCart = new ShoppingCart();
  shoppingCart.getItems();
  shoppingCart.deleteItem();
};
