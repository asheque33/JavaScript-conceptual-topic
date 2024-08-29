class Student {
  constructor(name, rollNumber, grade) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
  }

  // Method to display student information
  displayInfo() {
    console.log(
      `Name: ${this.name}, Roll Number: ${this.rollNumber}, Grade: ${this.grade}`
    );
  }
}

// Create an instance of the Student class
const student1 = new Student("Alice", 101, "A");
const student2 = new Student("Bob", 102, "B");

// Accessing properties and methods of the instance
student1.displayInfo(); // Output: Name: Alice, Roll Number: 101, Grade: A

let r = {};
if (student1 instanceof Student && student2 instanceof Student) {
  //   r = { ...student1, ...student2 };//!overwrite 1st parameter
  r = {
    student1,
    student2,
  };
}
console.log("both student in r", r);
