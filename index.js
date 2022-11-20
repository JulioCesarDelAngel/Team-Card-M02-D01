import inquirer from "inquirer";

const listadoEmp = [];

const datosGte = [
    {
        type: 'input',
        name:'nomGte',
        message:'¿Nombre del Gerente?',
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
]

const datosIng = [
    {
        type: 'input',
        name:'nomIng',
        message:'¿Nombre del Ingeniero?',
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
]


function generarGte(){
    inquirer.prompt(datosGte).then(datos =>{
        console.log('datos gte',datos);
        listadoEmp.push(datos);
        menu();
    })
}

function generarIng(){
    inquirer.prompt(datosIng).then(datos=>{
        console.log('datos ing',datos);
        listadoEmp.push(datos);
        menu();
    })
}

function generarPas(){
    inquirer.prompt(datosPas).then(datos=>{
        console.log('datos ing',datos);
        listadoEmp.push(datos);
        menu();
    })
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
                console.log('Ingeniero');
                generarIng();
                break;
            case "Pasante":
                console.log('Pasante');
                generarPas();
                break;
            default:
                console.log('terminar listado:' ,listadoEmp);
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
            console.log('iniciar')            
            generarGte();
        } 
        else {
            console.log('No se genero el equipo:');
        }
    });
}

init();