//import { describe } from 'yargs';
import Employee from '../lib/Employee';


test("Propiedades del empleado",()=>{
    const employee =  new Employee('juan',7,'juan@correo.com');
    expect(employee.name).toBe('juan');    
});