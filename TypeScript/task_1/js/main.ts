export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: string | number | boolean | undefined;
}

const teacher1: Teacher = {
  firstName: 'Ghaida',
  fullTimeEmployee: false,
  lastName: 'Almutairir',
  location: 'Riyadh',
  contract: false,
};

export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const StudentCtor: StudentConstructor = StudentClass;

console.log(
  teacher1,
  director1,
  printTeacher('John', 'Doe'),
  new StudentCtor('Jane', 'Smith')
);