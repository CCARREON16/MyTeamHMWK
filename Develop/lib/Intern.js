// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name,id,email,office) {
    super(name,id,email);

    this.school = this.school;
    this.special = `school: ${this.school}`;
  }

  getSchool() { return this.school; }
  getRole() { return "Intern"; }
}

module.exports = Intern;