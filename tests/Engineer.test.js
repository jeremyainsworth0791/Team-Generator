const { it } = require('@jest/globals');
const Engineer = require('../lib/Engineer');


describe('Engineer', ()=> {

    it ('should return the name of the Engineer', () => {
        const name = "Jeremy";
        const engineer = new Engineer(name);
        expect(engineer.name).toEqual('Jeremy');
    });
    it('should set the id of the Engineer', ()=> {
        const name = "Jeremy";
        const id = "12";
        const engineer = new Engineer (name, id);
        expect(engineer.id).toEqual('12');
    });it('should return the email of the Engineer',() =>{
        const name = "Jeremy";
        const id = "12";
        const email = "something@abc.com"
        const engineer = new Engineer (name, id, email);
        expect(engineer.email).toEqual('something@abc.com')
    });
    it('should return the Github of the Engineer',() =>{
        const name = "Jeremy";
        const id = "12";
        const email = "something@abc.com"
        const gitHub = "something1234"
        const engineer = new Engineer (name, id, email, gitHub);
        expect(engineer.gitHub).toEqual('something1234')
    });
})