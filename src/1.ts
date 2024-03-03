/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

// class Student {
//   public name: string;
//   public age: number;
//   public grade: string;

//   constructor(name: string, age: number, grade: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

// Приклад використання
let student = new Student('Oleksandr', 18, 'IT');
console.log(student);

student.name = 'Oleksandr Vasylenko';
student.age = student.age + 1;
student.grade = 'Information Securety';
console.log(student);
export {};
