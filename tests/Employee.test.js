
const { it } = require('@jest/globals');
const Employee = require('../lib/Employee');


describe('Employee', ()=> {

    it ('should return the name of the employee', () => {
        const name = "Jeremy";
        const employee = new Employee (name);
        expect(employee.name).toEqual('Jeremy');
    });
    it('should set the id of the employee', ()=> {
        const name = "Jeremy";
        const id = "12";
        const employee = new Employee (name, id);
        expect(employee.id).toEqual('12');
    });
    it('should return the email of the employee',() =>{
        const name = "Jeremy";
        const id = "12";
        const email = "something@abc.com"
        const employee = new Employee (name, id, email);
        expect(employee.email).toEqual('something@abc.com')
    }); 
})