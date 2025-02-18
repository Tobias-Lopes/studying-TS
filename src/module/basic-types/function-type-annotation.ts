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
  { cep: '00000-001', default: false },
  { cep: '00000-002', default: true },
];

const customer: Customer = {
  adresses: addresses,
};

//--
let calculateTotal: (sc: ShoppingCart) => number;

calculateTotal = function (shoppingCart: ShoppingCart): number {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  return total;
};

type AddressOrUndefined = (c: Customer) => Address | undefined;

const getPrincipalAddress: AddressOrUndefined = function (
  customer: Customer,
): Address | undefined {
  return customer.adresses.find((addres) => addres.default);
};

//--

const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$ ${total}`);

const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
  console.log(principalAddress);
}

export { getPrincipalAddress, calculateTotal };
