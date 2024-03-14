interface DirectorInterface {
    workFromHome(): string;    // Method signature for working from home
    getCoffeeBreak(): string;  // Method signature for taking a coffee break
    workDirectorTasks(): string; // Method signature for performing director tasks
}

interface TeacherInterface {
    workFromHome(): string;    // Method signature for working from home
    getCoffeeBreak(): string;  // Method signature for taking a coffee break
    workTeacherTasks(): string; // Method signature for performing teacher tasks
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'; // Implementation for working from home
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'; // Implementation for taking a coffee break
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'; // Implementation for performing director tasks
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'; // Implementation for working from home
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'; // Implementation for taking a coffee break
    }

    workTeacherTasks(): string {
        return 'Getting to work'; // Implementation for performing teacher tasks
    }
}

function createEmployee(salary: string | number) {
    if (typeof(salary) === 'number' && salary < 500) {
        return new Teacher(); // Creates a new Teacher instance if salary is less than 500
    } else {
        return new Director(); // Creates a new Director instance otherwise
    }
}

function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director; // Checks if the given employee is an instance of Director
}

function executeWork(employee: Teacher | Director) {
    if (employee instanceof Director) {
        employee.workDirectorTasks(); // Executes director tasks if the employee is a Director instance
    } else if (employee instanceof Teacher) {
        employee.workTeacherTasks(); // Executes teacher tasks if the employee is a Teacher instance
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math'; // Teaches Math if today's class is Math
    } else {
        return 'Teaching History'; // Teaches History otherwise
    }
}

