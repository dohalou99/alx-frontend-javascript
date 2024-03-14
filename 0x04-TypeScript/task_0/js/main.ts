interface Student {
    firstName: string; // First name of the student
    lastName: string;  // Last name of the student
    age: number;       // Age of the student
    location: string;  // Location of the student
}

const student1: Student = {
    firstName: 'larry',         // Assigning first name 'larry' to student1
    lastName: 'lobster',        // Assigning last name 'lobster' to student1
    age: 678,                   // Assigning age 678 to student1
    location: 'bikini bottom',  // Assigning location 'bikini bottom' to student1
}

const student2: Student = {
    firstName: 'mermaid man',   // Assigning first name 'mermaid man' to student2
    lastName: 'man',            // Assigning last name 'man' to student2
    age: 678,                   // Assigning age 678 to student2
    location: 'the invisible boat mobile' // Assigning location 'the invisible boat mobile' to student2
}

let studentsList: Student[] = []; // Declaring an empty array to store student objects

studentsList.push(student1); // Adding student1 object to the studentsList array
studentsList.push(student2); // Adding student2 object to the studentsList array

let myVar = document.createElement('table'); // Creating a new HTML table element

// Looping through the studentsList array to populate the table rows
for (let i = 0; i < studentsList.length; i++) {
    let row = myVar.insertRow();       // Creating a new row for each student
    let name = row.insertCell();       // Creating a cell for student name
    let location = row.insertCell();   // Creating a cell for student location
    name.innerHTML = studentsList[i].firstName; // Populating the 'name' cell with student's first name
    location.innerHTML = studentsList[i].location; // Populating the 'location' cell with student's location
}

document.body.appendChild(myVar); // Appending the table to the body of the HTML document

