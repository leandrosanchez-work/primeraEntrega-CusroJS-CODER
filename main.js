
alert("😀 Hola! bienvenido al calculador de disponibilidad de credito")

alert("Ingresa tus datos personales")


class Persona{
    constructor(DNI, nombre, empleo){
        this.DNI = DNI;
        this.nombre = nombre;
        this.empleo = empleo
    }

}

let tipoTrabajo = [
    {id: 1, empleado: "Empleado Publico"},
    {id: 2, empleado: "Municipal"},
    {id: 3, empleado:"Independiente y/o autónomo"},
    {id: 4, empleado:"Temporal y eventual"}
]


function altaPersona(){
    let DNI = prompt("DNI: ");
    let nombre = prompt("Nombre: ");
    let cod = 0;
    do {
    var empleo = prompt("MENU \n✔ Por favor ingresa el tipo de empleo en caso de tenerlo:\n1.Empleado publico\n2.Municipal\n3.Independiente y/o autónomo\n4.Temporal y eventual")
        cod = parseInt((empleo))
        switch (cod) {
        case 1: 
        alert( "Ha seleccionado Empleado Publico")
        break;
        case 2: 
        alert( "Ha seleccionado Municipal")
        break;
        case 3: 
        alert( "Ha seleccionado Independiente y/o autónomo")
        break;
        case 4: 
        alert( "Temporal y eventual")
        break;

        default:alert("Debe ingresar una opcion del 1 al 4")
        
        }
    } while (cod > 4 || cod < 1);
        

        
       
    
    debugger
    const nuevaPersona = new Persona(DNI, nombre,tipoTrabajo[cod -1]);
    arrayPersonas.push(nuevaPersona);

    alert("Hola!" +" "+ nombre)
}


function buscaPersona(){
    arrayPersonas.forEach((persona) =>{
        console.log(`la persona es ${persona.nombre}, dedicado a ${persona.empleo}`)
        
    })
}



function mostrarOcupacion(){
    const ocupacion = tipoTrabajo.filter((laburo) => laburo.empleo)
    alert(`el empleo seleccionado es ${ocupacion.laburo}`)
}

let arrayPersonas = [];


/*function tipoempleo(){

    var menu = "MENU \n✔ Por favor ingresa el tipo de empleo en caso de tenerlo:";
    menu +="\n1.Empleado publico";
    menu +="\n2.Municipal";
    menu +="\n3.Independiente y/o autónomo";
    menu +="\n4.Temporal y eventual";
    

    let cod = 0;


    do {
        cod = parseInt(prompt(menu))

        switch (cod) {
            case 1: 
            alert( "Ha seleccionado Empleado Publico")
            break;
            case 2: 
            alert( "Ha seleccionado Municipal")
            break;
            case 3: 
            alert( "Ha seleccionado Independiente y/o autónomo")
            break;
            case 4: 
            alert( "Temporal y eventual")
            break;

            default:alert("Debe ingresar una opcion del 1 al 4")
            
            }
        } while (cod !== 1 && 4 );
    
    
    }
 */           
      
    


class Calculador{

    constructor(haberSujeto, valor, descuentos){

        this.haberSujeto = haberSujeto;
        this.valor = valor;
        this.descuentos = descuentos;
    }

    otorga(){ 

        let haberSujeto = prompt("💹 Ingrese los haberes de tu ultimo bono de sueldo") 

        let valor = 0
        let i = 0
        let descuentos = 0;

          
        do {
            valor = parseInt(prompt("➕ Ingrese la cantidad de descuentos mensuales, maximio 5 valores a ingresar, \n 0 para finalizar"))
            descuentos = descuentos + valor;
            i++
        } while (valor != 0 && i<=4);
        
    
    let porcetBono = haberSujeto * 0.20;
    
    if(descuentos < porcetBono ){
        let diferencia = porcetBono - descuentos;
        
        alert(" Tu cuota promedio es de: $" + Math.round (diferencia) + 
        "\nPodes acceder a las siguientes opciones de credito: \n Capital auotorizado $" 
        + Math.round(diferencia / 0.21) +" en 12 cuotas \n Capital auotorizado $" 
        + Math.round(diferencia / 0.19)+ " en 15 cuotas \n Capital auotorizado $" 
        + Math.round(diferencia / 0.17)+ " en 18 cuotas ");
    }else if(descuentos > porcetBono){
        alert("⛔ Los descuentos superan tu limite de credito")
    }
        

    }
       
    }

const calculo = new Calculador();


altaPersona();
buscaPersona();
mostrarOcupacion();
//tipoempleo();
calculo.otorga();


