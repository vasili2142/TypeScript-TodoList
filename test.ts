export interface Person {
  name: string;
  age: number;
}

export default function greet(person: Person) {
  console.log('Hello ' + person.name);
}

greet({ name: 'ooga', age: 22 });
