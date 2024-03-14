namespace Subjects {

    export interface Teacher {
        experienceTeachingJava?: number; // Optional field representing the experience teaching Java
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java'; // Method to get the requirements for Java
        }

        getAvailableTeacher(): string {
            // Method to check for an available teacher with experience teaching Java
            return this.teacher.experienceTeachingJava > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}

