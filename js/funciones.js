const AFP = 6.25;
const ISSS = 0.3;

function generar(){
    nombre = document.getElementById('nom');
    sueldo = document.getElementById('sueldo');
    cargo = document.getElementById('cargo')

    nom = nombre.value;
    sueldoBase = sueldo.value;
    cargo = cargo.value;

    var sueldoFinal, Trabajo, descuentoAFP, descuentoISSS, descuentoRenta;

    switch(cargo){
        case "operario":
            Trabajo = 'Operario';
           function getRandomInt(max){
                return Math.floor(Math.random() * max);
           } 
           var aleatorio = getRandomInt(8);
           if (aleatorio >= 5 && aleatorio < 8 ){
            alert("Se le ha otorgado un bono del 10% extra a su sueldo base");
            sueldoFinal = sueldoBase * 0.10;
            descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
            }else{
                if(sueldoBase => 0.01 || sueldoBase <= 472.00){
                    sueldoFinal = sueldoBase - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
                    descuentoISSS = sueldoFinal - ISSS;
                    descuentoRenta = sueldoFinal;
                }else if(sueldoBase => 472.01 || sueldoBase <= 895.24){
                    sueldoFinal = sueldoBase - 472.00 * 0.10 + 17.67 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
                }else if(sueldoBase => 895.25 || sueldoBase <= 2038.25){
                    sueldoFinal = sueldoBase - 895.24 * 0.20 + 60 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
                }else if(sueldoBase > 2038.11){
                    sueldoFinal = sueldoBase - 2038.10 * 0.30 + 288.57 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
                }
            }
        break;

        case "supervisor":
            Trabajo = 'Supervisor';
            if(sueldoBase => 0.01 || sueldoBase <= 472.00){
                sueldoFinal = sueldoBase - AFP - ISSS;
                descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal; 
            }else if(sueldoBase => 472.01 || sueldoBase <= 895.24){
                    sueldoFinal = sueldoBase - 472.00 * 0.10 + 17.67 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
            }else if(sueldoBase => 895.25 || sueldoBase <= 2038.25){
                    sueldoFinal = sueldoBase - 895.24 * 0.20 + 60 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
            }else if(sueldoBase > 2038.11){
                    sueldoFinal = sueldoBase - 2038.10 * 0.30 + 288.57 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
            }
        break;

        case "gerente":
            
            Trabajo = 'Gerente';
            if(sueldoBase => 0.01 || sueldoBase <= 472.00){
                sueldoFinal = sueldoBase - AFP - ISSS;
                descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
            }else if(sueldoBase => 472.01 || sueldoBase <= 895.24){
                    sueldoFinal = sueldoBase - 472.00 * 0.10 + 17.67 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
            }else if(sueldoBase => 895.25 || sueldoBase <= 2038.25){
                    sueldoFinal = sueldoBase - 895.24 * 0.20 + 60 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
            }else if(sueldoBase > 2038.11){
                    sueldoFinal = sueldoBase - 2038.10 * 0.30 + 288.57 - AFP - ISSS;
                    descuentoAFP = sueldoFinal - AFP;
            descuentoISSS = sueldoFinal - ISSS;
            descuentoRenta = sueldoFinal;
            }
        break;

        default:
            break;
    }  

    pantalla = document.getElementById('tabla');
    var table = document.getElementsByTagName('table');
    var x;
    x = 0;
    if (x == 0){
        let table = document.createElement('table');
    let header = document.createElement('thead');
    let body = document.createElement('tr');

        pantalla.appendChild(table);
        table.appendChild(body);
        table.appendChild(header);
        header.innerHTML = "<td>Nombre</td><td>Cargo</td><td>Sueldo Base</td><td>Descuento por AFP</td><td>Descuento por ISSS</td><td>Descuento por renta</td><td>Total Descuento</td><td>Bono</td><td>Salario Neto</td>"; 
        body.innerHTML += "<td>"+ nombre +"</td><td>"+ Trabajo +"</td><td>"+ sueldoBase +"</td>" + "<td>"+ descuentoAFP +"</td><td>"+ descuentoISSS +"</td><td>"+ descuentoRenta +"</td>" + sueldoFinal +"</td>";
        x++;
    }else{
        let body = document.createElement('tr');
        table[0].appendChild(body);
        body.innerHTML += "<td>"+ nombre +"</td><td>"+ Trabajo +"</td><td>"+ sueldoBase +"</td>" + "<td>"+ descuentoAFP +"</td><td>"+ descuentoISSS +"</td><td>"+ descuentoRenta +"</td>" + sueldoFinal +"</td>";
}
}