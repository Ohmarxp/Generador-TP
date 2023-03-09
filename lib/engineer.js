const Employee = require('./Employee.js');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, emil);
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return Engineer;
    }
};

module.exports = Engineer;