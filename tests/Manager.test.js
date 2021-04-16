const { it } = require('@jest/globals');
const Manager = require('../lib/Manager');


describe('Manager', ()=> {

    it ('should return the name of the Manager', () => {
        const name = "Jeremy";
        const manager = new Manager(name);
        expect(manager.name).toEqual('Jeremy');
    });
    it('should set the id of the Manager', ()=> {
        const name = "Jeremy";
        const id = "12";
        const manager = new Manager (name, id);
        expect(manager.id).toEqual('12');
    });it('should return the email of the Manager',() =>{
        const name = "Jeremy";
        const id = "12";
        const email = "something@abc.com"
        const manager = new Manager (name, id, email);
        expect(manager.email).toEqual('something@abc.com')
    });
    it('should return the office number of the Manager',() =>{
        const name = "Jeremy";
        const id = "12";
        const email = "something@abc.com"
        const officeNumber = "555-555-5555"
        const manager = new Manager (name, id, email, officeNumber);
        expect(manager.officeNumber).toEqual('555-555-5555')
    });
})