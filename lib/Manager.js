const Employee = require("./Employee");

class Manager {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.OfficeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
