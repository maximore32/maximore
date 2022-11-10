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

/*class Moneda{
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

listamonedas[1].ConvertiraDolar();*/

//---------------------------------------TERCERA ENTREGA-------------------------------------------//
const carrito = [];
let contenedor = document.getElementById("art");


function mostrarMonedas(){
   const URLJSON="https://raw.githubusercontent.com/maximore32/monedas/master/monedas.json";  
   fetch(URLJSON)
    .then(resp => resp.json())
    .then(monedas => {    
        for(let moneda of monedas){
          contenedor.innerHTML += `
            
          <div class="card-body">
              <h2 class="card-text">${moneda.moneda.toUpperCase()}</h2>
              <p class="card-text">$${moneda.cotizacion}</p>
              <p class="card-text">${moneda.descripcion}</p>
              <button id="btn${moneda.id}" class="btn btn-primary">Seleccionar</button>
          </div> `;
                             
        }
        
        
        monedas.forEach(moneda => {
          document.getElementById(`btn${moneda.id}`).addEventListener("click",function(){
          agregarAlCarrito(moneda);
        });
    })             

  })
    
  
       
}

mostrarMonedas();

function agregarAlCarrito(monedaElegida){
    carrito.push(monedaElegida);   
    swal("Moneda Seleccionada: "+monedaElegida.moneda.toUpperCase()+" para convertir a U$$");
    document.getElementById("monelegida").innerText = `
       Moneda seleccionada: ${monedaElegida.moneda.toUpperCase()}        
    `;
    const monedaAJson = JSON.stringify(monedaElegida);
    localStorage.setItem("moneda",monedaAJson);
     
       
   
}

//-----------MONEDAS DEVAULADAS------------------------------------//

let contenedor2 = document.getElementById("art2");

function monedasDevaluadas(){
  const URLJSON="https://raw.githubusercontent.com/maximore32/monedas/master/monedas.json";  
   fetch(URLJSON)
    .then(resp => resp.json())
    .then(monedas => {
      monedas.filter((ruins)=> ruins.cotizacion >100).map((ruins)=>{
        contenedor2.innerHTML+=`
                
        <div class="card-body">
            
            <h2 class="card-text">${ruins.moneda.toUpperCase()}</h2>
            <p class="card-text">$${ruins.cotizacion}</p>
            <p class="card-text">${ruins.descripcion}</p>        
        </div>`;
      })
                  

  })

}
monedasDevaluadas()

//-----------ULTIMA MONEDA------------------------------------//
let ultima = document.getElementById("last");

function ultimaMoneda(){
  let miMoneda=localStorage.getItem("moneda");
  if(miMoneda == null){
    console.log("No hay nada en el storage");
    localStorage.setItem("moneda",JSON.stringify(extraerMoneda[0]))
  }
  else{
    const jsonAObjeto = JSON.parse(miMoneda);
    ultima.innerHTML=jsonAObjeto.moneda.toUpperCase();
  }
  
}
ultimaMoneda();

//-----------FUNCION CONVERTIDORA------------------------------------//





function ConvertiraDolar(){
  let local = document.getElementById("numselec").value;
  let miMoneda=localStorage.getItem("moneda");
  const jsonAObjeto = JSON.parse(miMoneda);
  let result = local / parseFloat(jsonAObjeto.cotizacion).toFixed(2);
  

  let p1 = document.getElementById("filtro");
  let p2 = document.getElementById("resultado");
  
  

  if(local <=0){
    p1.innerHTML=`<div class="alert alert-danger" role="alert">
    Debe ser mayor que 0 para convertir!
  </div>`    
  }
  else if(isNaN(local) == true){
    p1.innerText="Debe colocar un Número";
    p1.style.color="red";
    

  }
  else{
    p1.innerHTML=`<div class="alert alert-primary" role="alert">
    Su conversión da: ${result.toFixed(2)} U$$!
  </div>`   
    
  }
  
  console.log(result);
}

function LimpiarCampo(){
  let form = document.getElementById("form")
  let p1 = document.getElementById("filtro");
  let p2 = document.getElementById("resultado");
  if( p1 && p2 != null){
    p1.innerHTML="";
    p2.innerHTML="";
    
  }
  form.reset()
}












