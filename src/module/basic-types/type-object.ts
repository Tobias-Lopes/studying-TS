let programmer = {
  name: 'Tobias',
  age: 19,
  skills: ['JavaScript', 'TypeScript'],
};

programmer.name = 'Alberto';
programmer.age = 18;

export function showProgrammer(programmer: {
  name: string;
  age: number;
  skills?: string[];
}) {
  console.log(programmer);
}
showProgrammer({ name: 'José', age: 20, skills: ['Python', 'Java'] });
