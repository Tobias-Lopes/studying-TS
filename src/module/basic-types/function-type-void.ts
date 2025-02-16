//TODO cartItem
type CartItem = {
  id: number;
  price: number;
};

//TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};

//TODO criar variável do tipo shoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 1000, price: 200 },
    { id: 1070, price: 300 },
    { id: 3000, price: 500 },
  ],
};

//TODO função do tipo void para somar os valores dos itens
export function calculateTotal(shoppingCart: ShoppingCart): void {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
}

calculateTotal(shoppingCart);
