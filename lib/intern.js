const Employee = require('./Employee.js');
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, emil);
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        return Intern;
    }
};

module.exports = Intern;