export const bootstrap = (): void => {
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    departament: string;
  };

  type Customer = {
    wishlist: string[];
  };

  type EmployeeDetails = Person & Employee;

  const employee: EmployeeDetails = {
    name: 'Tobias',
    age: 19,
    departament: 'TI',
  };

  type CustomerDetails = Person & Customer;

  const customer: CustomerDetails = {
    name: 'Lidiane',
    age: 50,
    wishlist: ['Smartphone', 'Laptop', 'Headphones'],
  };
};
