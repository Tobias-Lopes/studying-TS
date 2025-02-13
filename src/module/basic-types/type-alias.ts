type Salary = number | string;
type Programmer = {
  name: string;
  age: number;
  skills?: string[];
  contact: { email: string; phone: string };
  salary: Salary;
};

export function showProgrammer(programmer: Programmer) {
  console.log(programmer);
}

showProgrammer({
  name: 'José',
  age: 20,
  skills: ['Python', 'Java'],
  contact: {
    email: 'tobias.lopes.712@ufrn.edu.br',
    phone: '+55 84 99103-7015',
  },
  salary: 1800,
});
