// Creates variable to bring in the file "manager.js" to test
const Manager = require('../lib/manager');

describe('Manager class', () => {
    // This begins the test with a variable filling in all details matching that of the Manager class
    const manager = new Manager('Kai', '6543210', 'Kai@email.com', '10');
    it('Returns the name from the input', () => {
        // This creates a variable to test
        const managerName = manager.getName('Kai');
        // This test confirms if the variable to test matches the expected value
        expect(managerName).toBe('Kai');
    })
    it('Returns the id from the input', () => {
        const managerID = manager.getId('6543210');

        expect(managerID).toEqual('6543210');
    })
    it('Returns the email from the input', () => {
        const managerEmail = manager.getEmail('Kai@email.com');

        expect(managerEmail).toBe('Kai@email.com');
    })
    it('Returns the office number from the input', () => {
        const managerOfficeNumber = manager.getOfficeNumber('10');

        expect(managerOfficeNumber).toBe('10');
    })
    it('Returns the role Manager from the input', () => {
        const managerRole = manager.getRole();

        expect(managerRole).toBe('Manager');
    })
});
