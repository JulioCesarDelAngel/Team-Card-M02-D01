import inquirer from "inquirer";

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
        name:'IdIng',
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
        name:'emailIng',
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
                console.log(dataInput)
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