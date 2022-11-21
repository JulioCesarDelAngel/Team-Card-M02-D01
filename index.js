import inquirer from "inquirer";
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import fs from 'node:fs';

const listadoEmp = [];

const datosGte = [
    {
        type: 'input',
        name: 'nomGte',
        message: '¿Nombre del Gerente?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un nombre valido';
            }
        }        
    },
    {
        type: 'input',
        name: 'IdGte',
        message: '¿Id del gerente?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un id valido';
            }
        }        
    },
    {
        type: 'input',
        name: 'emailGte',
        message: '¿e-mail del gerente?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un id valido';
            }
        }        
    },
    {
        type: 'input',
        name: 'numOficina',
        message: '¿no. de oficina del gerente?',
        validate: dataInput => {
            if (dataInput !=="")
            {                
                return true;
            }
            else{
                return 'Capture un numero valido';
            }
        }        
    }    
]

const datosIng = [
    {
        type: 'input',
        name: 'nomIng',
        message: '¿Nombre del Ingeniero?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un nombre valido';
            }
        }        
    },
    {
        type: 'input',
        name:'IdIng',
        message:'¿Id del ingeniero?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un id valido';
            }
        }        
    },
    {
        type: 'input',
        name:'emailIng',
        message:'¿e-mail del ingeniero?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un email valido';
            }
        }        
    },
    {
        type:'input',
        name:'gitIng',
        message:'¿Usuario de GitHub?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;                
            }
            else{
                return 'Capture un usuario valido';
            }
        }        
    }   
]

const datosPas = [
    {
        type: 'input',
        name:'nomPas',
        message:'¿Nombre del Pasante?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un nombre valido';
            }
        }        
    },
    {
        type: 'input',
        name:'idPas',
        message:'¿Id del Pasante?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un id valido';
            }
        }        
    },
    {
        type: 'input',
        name:'emailPas',
        message:'¿e-mail del pasante?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un email valido';
            }
        }        
    },
    {
        type: 'input',
        name:'escPas',
        message:'Escuela del pasante?',
        validate: dataInput => {
            if (dataInput !=="")
            {
                return true;
            }
            else{
                return 'Capture un dato valido';
            }
        }        
    }    
]


function generarGte(){
    inquirer.prompt(datosGte).then(datos =>{        
        const gerente = new Manager(datos.nomGte, datos.IdGte, datos.emailGte,'Gerente',datos.numOficina);
        listadoEmp.push(gerente);
        menu();
    })
}

function generarIng(){
    inquirer.prompt(datosIng).then(datos=>{
        const ingeniero = new Engineer(datos.nomIng, datos.IdIng, datos.emailIng, 'Ingeniero', datos.gitIng);
        listadoEmp.push(ingeniero);
        menu();
    })
}

function generarPas(){
    inquirer.prompt(datosPas).then(datos=>{
        const interno = new Intern(datos.nomPas, datos.idPas, datos.emailPas, 'Interno', datos.escPas );
        listadoEmp.push(interno);
        menu();
    })
}

function generarArchivo(){
    var listado='';
    var icon = '';
    var otrosDatos = '';
    
    listadoEmp.forEach(function(emp){
        switch (emp.getRole()){
            case 'Gerente':
                icon = 'fas fa-mug-hot';
                otrosDatos = `<p class="card-text">No. de Oficina: ${emp.getOfficeNumber()}</p>`;
                break;
            case 'Ingeniero':
                icon = 'fas fa-glasses';
                otrosDatos = `<p class="card-text">GitHub: <a href="https://github.com/${emp.getGitHub()}" target="_blank">${emp.getGitHub()} </a></p>`;
                break;
            case 'Interno':
                icon = 'fas fa-user-graduate';
                otrosDatos = `<p class="card-text">Universidad: ${emp.getSchool()}</p>`;
                break;
        }

        const card = `
        <div class="card text-white  mb-3" style="max-width: 18rem;">
            <div class="card-header text-left">${emp.getName()}</div>
            <h7 class="card-subtitle"><i class="${icon}"></i> ${emp.getRole()}</h7>
            <div class="card-body">
                <p class="card-text">ID :${emp.getId()}</p>
                <p class="card-text">Email : <a href="mailto:${emp.getEmail()}">${emp.getEmail()} </a></p>
                ${otrosDatos}
            </div>
        </div>            
        `
        listado += card;
    })

    fs.readFile('./src/plantilla.html', 'utf8', function(err, data){
        
        var tarjetas = data.replace('__TARJETAS__', listado);

        fs.writeFile('./dist/Tarjetas.html', tarjetas, function(){ 
            console.log('ARCHIVO GENERADO');

        });
        
    });

}

function menu(){
    inquirer.prompt([
        {
            type: "list",
            name: "nivel",
            message: "¿Desea agregar un elemento al equipo?",
            choices: [
                new inquirer.Separator(),
                "Ingeniero",
                "Pasante",
                "Terminar",
                new inquirer.Separator()
            ]
        }
    ]).then(answer => {
        switch(answer.nivel){
            case "Ingeniero":
                //console.log('Ingeniero');
                generarIng();
                break;
            case "Pasante":
                //console.log('Pasante');
                generarPas();
                break;
            default:
                /*Test
                const dataList = JSON.stringify(listadoEmp);
                fs.writeFileSync('./dist/empleados.json',dataList, (error)=>{
                    err? console.log('Error al guardar el archivo.'): console.log('Archivo de datos generado.');
                })
                */
                /**GenerarHtml */
                generarArchivo();
                
        }; 
    });
}

function init() {

    inquirer.prompt(
    {
        type: 'confirm',
        name: 'iniciar',
        message: '¿Desea inicar la captura de un equipo(presione ENTER para Iniciar)?',
        default: true,
    },
    ).then((respuesta) => {

        if (respuesta.iniciar) {
            generarGte();
        } 
        else {
            console.log('No se genero el equipo:');
        }
    });
}

init();