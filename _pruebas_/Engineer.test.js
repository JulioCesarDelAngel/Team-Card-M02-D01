import Engineer from '../lib/Engineer.js';

test("Pruebas ",()=>{
    const engineer = new Engineer('John Doe',3,'engineer@correo.com','Ingeniero','https://github.com/JulioCesarDelAngel') ;
    //const uriGit = 'https://github.com/'
    expect (engineer.name).toBe('John Doe');
    expect (engineer.id).toBeCloseTo(3);
    expect (engineer.email).toBe('engineer@correo.com');
    expect (engineer.getRole()).toBe('Ingeniero');
    expect (engineer.gitHub).toBe('https://github.com/JulioCesarDelAngel');
});