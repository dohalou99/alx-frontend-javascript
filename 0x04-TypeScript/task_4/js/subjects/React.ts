namespace Subjects {

    export interface Teacher {
        experienceTeachingReact?: number; // Optional field representing the experience teaching React
    }

    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React'; // Method to get the requirements for React
        }

        getAvailableTeacher(): string {
            // Method to check for an available teacher with experience teaching React
            return this.teacher.experienceTeachingReact > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}

