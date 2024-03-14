interface MajorCredits {
    credits: number; // Number of credits for the major subject
    brand: string;   // Brand or type of the major subject
}

interface MinorCredits {
    credits: number; // Number of credits for the minor subject
    brand: string;   // Brand or type of the minor subject
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    // Function to sum the credits of two major subjects
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    // Function to sum the credits of two minor subjects
    return subject1.credits + subject2.credits;
}

