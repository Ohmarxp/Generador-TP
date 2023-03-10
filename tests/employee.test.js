// Creates variable to bring in the file "employee.js" to test
const Employee = require('../lib/employee');

describe('Employee class', () => {
    // This begins the test with a variable filling in all details matching that of the Employee class
    const employee = new Employee('Marx', '7161217', 'Marx@email.com');
    it('Returns the name from the input', () => {
        // This creates a variable to test
        const employeeName = employee.getName('Marx');
        // This test confirms if the variable to test matches the expected value
        expect(employeeName).toBe('Marx');
    })
    it('Returns the id from the input', () => {
        const employeeID = employee.getId('7161217');

        expect(employeeID).toEqual('7161217');
    })
    it('Returns the email from the input', () => {
        const employeeEmail = employee.getEmail('Marx@email.com');

        expect(employeeEmail).toBe('Marx@email.com');
    })
    it('Returns the role Employee from the input', () => {
        const employeeRole = employee.getRole();

        expect(employeeRole).toBe('Employee');
    })
});