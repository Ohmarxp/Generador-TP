class Employee {
    constructor(name, id, email) {
        this.name = name || 'Unknown';
        this.id = id || 'Unknown'
        this.email = email || 'Unknown';
    }
    getName(){
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
};

module.exports = Employee;