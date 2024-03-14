// <reference path = "./crud.d.ts" />

import { RowID, RowElement } from './interface'; // Importing RowID and RowElement types from 'interface.ts' file
import * as CRUD from './crud.js'; // Importing CRUD functions from 'crud.js' file

const row: RowElement = { // Creating a new row object
    firstName: 'Guillame', // Assigning first name 'Guillame' to the row
    lastName: 'Salva',     // Assigning last name 'Salva' to the row
}

const newRowID: RowID = CRUD.insertRow(row); // Inserting the new row and getting its ID

const updatedRow: RowElement = {...row, age: 23}; // Creating an updated row object with an additional 'age' field

CRUD.updateRow(newRowID, updatedRow); // Updating the row with the new data

CRUD.deleteRow(newRowID); // Deleting the row with the specified ID

