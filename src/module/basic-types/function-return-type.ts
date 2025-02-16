//TODO cartItem
type CartItem = {
  id: number;
  price: number;
};

type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  adresses: Address[];
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

const addresses: Address[] = [
  { cep: '00000-000', default: false },
  { cep: '00000-001', default: true },
  { cep: '00000-002', default: false },
];

const customer: Customer = {
  adresses: addresses,
};

//console.log('Detalhes do customer', customer);

export function calculateTotal(shoppingCart: ShoppingCart): string {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  return total.toFixed(2);
}

const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$ ${total}`);

export function getPrincipalAddress(customer: Customer): Address | undefined {
  return customer.adresses.find((addres) => addres.default);
}

const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
  console.log(principalAddress);
}
