import Manager from '../lib/Manager.js';

test("Propiedades del Gerente",()=>{
    const manager = new Manager('John Doe',2,'manager@correo.com','Gerente','800-0102');
    expect(manager.name).toBe('John Doe');
    expect(manager.id).toBeCloseTo(2);
    expect(manager.email).toBe('manager@correo.com');
    expect(manager.getRole()).toBe('Gerente');
});