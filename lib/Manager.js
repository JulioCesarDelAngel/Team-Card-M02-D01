import Employee from "./Employee.js";


class Manager extends Employee{
    constructor(name, id, email, role, officeNumber){
        
        super(name, id, email, role);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Gerente';
    }

}

export default Manager;