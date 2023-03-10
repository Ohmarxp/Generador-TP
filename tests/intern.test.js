// Creates variable to bring in the file "intern.js" to test
const Intern = require('../lib/intern');

describe('intern class', () => {
    // This begins the test with a variable filling in all details matching that of the Intern class
    const intern = new Intern('Ivan', '5757769', 'Ivan@email.com', 'UofA');
    it('Returns the name from the input', () => {
        // This creates a variable to test
        const internName = intern.getName('Ivan');
        // This test confirms if the variable to test matches the expected value
        expect(internName).toMatch('Ivan');
    })
    it('Returns the id from the input', () => {
        const internID = intern.getId('5757769');

        expect(internID).toEqual('5757769');
    })
    it('Returns the email from the input', () => {
        const internEmail = intern.getEmail('Ivan@email.com');

        expect(internEmail).toMatch('Ivan@email.com');
    })
    it('Returns the school name from the input', () => {
        const internGithub = intern.getSchool('UofA');

        expect(internGithub).toMatch('UofA');
    })
    it('Returns the role Intern from the input', () => {
        const internRole = intern.getRole();

        expect(internRole).toMatch('Intern');
    })
});