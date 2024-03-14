namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number; // Optional field representing the experience teaching C++
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return `Here is the list of requirements for Cpp`; // Method to get the requirements for C++
        }

        getAvailableTeacher(): string {
            // Method to check for an available teacher with experience teaching C++
            return this.teacher.experienceTeachingC > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}

