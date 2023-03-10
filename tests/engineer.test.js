// Creates variable to bring in the file "engineer.js" to test
const Engineer = require('../lib/engineer');

describe('engineer class', () => {
    // This begins the test with a variable filling in all details matching that of the Engineer class
    const engineer = new Engineer('Scot', '1324369', 'Scot@email.com', 'Scot-github');
    it('Returns the name from the input', () => {
        // This creates a variable to test
        const engineerName = engineer.getName('Scot');
        // This test confirms if the variable to test matches the expected value
        expect(engineerName).toBe('Scot');
    })
    it('Returns the id from the input', () => {
        const engineerID = engineer.getId('1324369');

        expect(engineerID).toEqual('1324369');
    })
    it('Returns the email from the input', () => {
        const engineerEmail = engineer.getEmail('Scot@email.com');

        expect(engineerEmail).toBe('Scot@email.com');
    })
    it('Returns the GitHub username from the input', () => {
        const engineerGithub = engineer.getGithub('Scot-github');

        expect(engineerGithub).toBe('Scot-github');
    })
    it('Returns the role Engineer from the input', () => {
        const engineerRole = engineer.getRole();

        expect(engineerRole).toBe('Engineer');
    })
});