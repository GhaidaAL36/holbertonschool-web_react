interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ghaida",
  lastName: "Almutairi",
  age: 22,
  location: "Riyadh",
};

const student2: Student = {
  firstName: "Lama",
  lastName: "Almutairi",
  age: 21,
  location: "Jeddah",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
