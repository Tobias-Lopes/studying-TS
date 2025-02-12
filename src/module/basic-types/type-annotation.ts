let product: string = 'Micro-ondas';
let price = 647.52;

product.toUpperCase();
price.toFixed(0);

export function display(product: string, price: number) {
  console.log(product, price);
}

display(product, price);
