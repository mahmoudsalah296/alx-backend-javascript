interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student;
let student2: Student;

student1 = {
  firstName: 'Mahmoud',
  lastName: 'Salah',
  age: 24,
  location: 'Egypt',
};

student2 = {
  firstName: 'Ahmed',
  lastName: 'Youssef',
  age: 20,
  location: 'Egypt',
};

const studentsList: Array<Student> = [student1, student2];

const html = `
  <table>
    <thead>
      <tr>
        <th>first name</th>
        <th>last name</th>
        <th>age</th>
        <th>location</th>
      </tr>
    </thead>
    <tbody>
    ${studentsList
      .map((student) => {
        return `<tr>
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.age}</td>
          <td>${student.location}</td>
        </tr>`;
      })
      .join('')}
    </tbody>
  </table>
`;

const tableStyle = `
  table {
    border-collapse: collapse;
  }
  table,
  td,
  th {
    border: 1px solid black;
  }
  th,
  td {
    padding: 8px;
  }
`;

document.body.insertAdjacentHTML('beforeend', html);

let style = document.createElement('style');
style.innerHTML = tableStyle;
document.getElementsByTagName('head')[0].appendChild(style);
