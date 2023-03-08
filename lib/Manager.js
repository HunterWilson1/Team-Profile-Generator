const employee = require("./Employee");

class manager extends employee{
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.OfficeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.OfficeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = manager;
