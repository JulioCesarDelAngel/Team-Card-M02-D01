import Employee from "./Employee.js";

class Engineer extends Employee{
    constructor(name, id, email, role, gitHub ){
        super(name, id, email, role)
        this.gitHub = gitHub;

    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return 'Ingeniero';
    }
}

export default Engineer;