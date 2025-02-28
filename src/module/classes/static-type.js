class Product {

    // ECMASCRIPT 2023 / ES14
    name = 'Smartphone';
    price = 3750.55;

    showDetails() {
        console.log(`${this.name}: ${this.price}`);
    }
}

product = new Product();
product.showDetails();
console.log('Atributo público: ', product.name); 