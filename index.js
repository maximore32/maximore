//------------------PRIMERA ENTREGA----------------------------------------------------//
/*function calculo(){
    let local= parseInt(prompt("ingrese moneda local (0 para salir)"));
   

while(local!=0){
     if(local<0){
        alert("debe ser positivo");
    }
  
     else if(isNaN(local) == true){
       alert("Debe ser un numero");
     }

     
     else{
       alert("usted ingreso: "+local+" de su moneda local");
       break;
       }
     local= parseInt(prompt("ingrese moneda local (0 para salir)"));
   }

 let dolar= parseInt(prompt("ingrese monto en U$$ (0 para salir)"));
 let resultado = local / dolar;
 

while(dolar!=0){
   if(dolar<=0){
       alert("debe ser positivo");
      }
  
   else if(isNaN(dolar) ==true){
       alert("Debe ser un  numero");
      }

   
   else{
       alert("El valor de : "+local+" "+" a "+dolar+" U$$ es :" +resultado+" U$$");        
       break;
   }
   dolar= parseInt(prompt("ingrese monto en dolar (s para salir)"));
}
}

calculo();*/

//------------------------SEGUNDA ENTREGA----------------------------------//

class Moneda{
  constructor(nombre,cotizadolar,descripcion){
      this.nombre=nombre.toUpperCase();
      this.cotizadolar=parseInt(cotizadolar);
      this.descripcion=descripcion;
      
      
      
  }
  ConvertiraDolar(){
    let local= parseInt(prompt("ingrese monto a convertir (0 para salir)"));   

      while(local!=0){
        if(local<0){
         alert("debe ser positivo");
        }
  
        else if(isNaN(local) == true){
         alert("Debe ser un numero");
        }

     
        else{
          alert("usted ingreso: "+local+" de su moneda local");
          break;
        }
       local= parseInt(prompt("ingrese moneda local (0 para salir)"));       
   }
   //-----NO SE COMO HACER LA CONVERSION SI LA COTIZACION ES EN NUMEROS DECIMALES-----//
   if(this.cotizadolar % 1 == 0){
    let resultado = local / this.cotizadolar;
    alert("Su monto: "+local+" a convertir a dolar es: "+" U$$ "+resultado);
   }
   else{
    let resultado = local * this.cotizadolar;
    alert("Su monto: "+local+" a convertir a dolar es: "+" U$$ "+resultado);
   }
   

 }
}

const listamonedas= [];
listamonedas.push(new Moneda("ars",300,"peso argentino"));
listamonedas.push(new Moneda("ves",3000,"peso venezolano"));
listamonedas.push(new Moneda("clp",0,01,"peso chileno"));
listamonedas.push(new Moneda("bob",0,14,"peso boliviano"));

for(const moneda of listamonedas){
  console.log("Monedas disponibles: "+moneda.nombre+" "+"con monto de cotizacion a dolar "+moneda.cotizadolar)
  console.log("*********")
}
console.log(listamonedas);
const devaluados=listamonedas.filter((ruins)=> ruins.cotizadolar >100).map((ruins)=>"Monedas devaluadas :"+ruins.nombre)
console.log(devaluados);

listamonedas[1].ConvertiraDolar();






