
alert("😀 Hola! bienvenido al calculador de disponibilidad de credito")


function tipoempleo(){
    
        
    let empleo = parseInt( prompt("✔ Por favor ingresa el tipo de empleo en caso de tenerlo: \n 1.Empleado publico \n 2.Municipal \n 3. Independiente y/o autónomo \n 4.Temporal y eventual"));

            switch(empleo) {
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
                alert( "Ha seleccionado Temporal y eventual")
                break;
    
                alert("Debe ingresar una opcion del 1 al 4")
                }
                
       
        }
            
      
    


function calculador(){
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

tipoempleo();
calculador();

