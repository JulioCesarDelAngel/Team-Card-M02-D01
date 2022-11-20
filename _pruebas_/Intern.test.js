import Intern from "../lib/Intern.js";

test('Propeidades del Pasante',()=>{
    const inter = new Intern('Jane Doe',4,'jane@correo.com','Interno','https://www.anahuac.mx');
    expect(inter.name).toBe('Jane Doe');
    expect(inter.id).toBeCloseTo(4);
    expect(inter.email).toBe('jane@correo.com');
    expect(inter.school).toBe('https://www.anahuac.mx');
    expect(inter.getRole()).toBe('Interno');
})