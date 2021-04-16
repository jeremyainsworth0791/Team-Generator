const { it } = require('@jest/globals');
const Intern = require('../lib/Intern');


describe('Intern', ()=> {

    it ('should return the name of the Intern', () => {
        const name = "Jeremy";
        const intern = new Intern(name);
        expect(intern.name).toEqual('Jeremy');
    });
    it('should set the id of the Intern', ()=> {
        const name = "Jeremy";
        const id = "12";
        const intern = new Intern (name, id);
        expect(intern.id).toEqual('12');
    });it('should return the email of the Intern',() =>{
        const name = "Jeremy";
        const id = "12";
        const email = "something@abc.com"
        const intern = new Intern (name, id, email);
        expect(intern.email).toEqual('something@abc.com')
    });
    it('should return the Github of the Intern',() =>{
        const name = "Jeremy";
        const id = "12";
        const email = "something@abc.com"
        const school = "university"
        const intern = new Intern (name, id, email, school);
        expect(intern.school).toEqual('university')
    });
})