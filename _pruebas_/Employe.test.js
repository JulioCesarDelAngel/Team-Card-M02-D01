import Employee from '../lib/Employee';


test("Propiedades del empleado",()=>{
    const employee =  new Employee('John Doe',1,'john@correo.com','Empleado');
    expect(employee.name).toBe('John Doe');    
    expect(employee.id).toBeCloseTo(1);    
    expect(employee.email).toBe('john@correo.com');    
    expect(employee.getRole()).toBe('Empleado');    
});