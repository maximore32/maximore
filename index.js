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

class Moneda{
  constructor(id,nombre,cotizadolar,descripcion){
      this.id=id;
      this.nombre=nombre.toUpperCase();
      this.cotizadolar=parseInt(cotizadolar);
      this.descripcion=descripcion;     
  }
  

}

const listamonedas= [];
listamonedas.push(new Moneda(1,"ars",300,"peso argentino"));
listamonedas.push(new Moneda(2,"ves",3000,"peso venezolano"));
listamonedas.push(new Moneda(3,"clp",0.10,"peso chileno"));
listamonedas.push(new Moneda(4,"bob",0.14,"peso boliviano"));


const carrito = [];
let contenedor = document.getElementById("art");


function mostrarMonedas(){
    for(const moneda of listamonedas){
        contenedor.innerHTML += `
            
                <div class="card-body">
                    
                    <h2 class="card-text">${moneda.nombre}</h2>
                    <p class="card-text">${moneda.cotizadolar}</p>
                    <p class="card-text">${moneda.descripcion}</p>
                    <button id="btn${moneda.id}" class="btn btn-primary">Seleccionar</button>
                </div>
            
        `;
    }
    
    listamonedas.forEach(money => {
          document.getElementById(`btn${money.id}`).addEventListener("click",function(){
          agregarAlCarrito(money);
        });
    })
       
}

mostrarMonedas()

function agregarAlCarrito(monedaElegida){
    carrito.push(monedaElegida);   
    alert("Moneda Seleccionada: "+monedaElegida.nombre+" para convertir a U$$");
    document.getElementById("monelegida").innerText = `
       Moneda seleccionada:${monedaElegida.nombre}        
    `;
    const monedaAJson = JSON.stringify(monedaElegida);
    localStorage.setItem("moneda",monedaAJson);
    
    
       
   
}

let contenedor2 = document.getElementById("art2");

//-----------MONEDAS DEVAULADAS------------------------------------//

function monedasDevaluadas(){
  listamonedas.filter((ruins)=> ruins.cotizadolar >100).map((ruins)=>{
    contenedor2.innerHTML+=`
            
    <div class="card-body">
        
        <h2 class="card-text">${ruins.nombre}</h2>
        <p class="card-text">${ruins.cotizadolar}</p>
        <p class="card-text">${ruins.descripcion}</p>        
    </div>`;
  })

}
monedasDevaluadas()

let ultima = document.getElementById("last");

//-----------ULTIMA MONEDA------------------------------------//

function ultimaMoneda(){
  let miMoneda=localStorage.getItem("moneda");
  if(miMoneda == null){
    console.log("No hay nada en el storage");
    localStorage.setItem("moneda",JSON.stringify(listamonedas[0]))
  }
  else{
    const jsonAObjeto = JSON.parse(miMoneda);
    ultima.innerHTML=jsonAObjeto.nombre;
  }
  
}
ultimaMoneda();

//-----------FUNCION CONVERTIDORA------------------------------------//





function ConvertiraDolar(){
  let local = document.getElementById("numselec").value;
  let miMoneda=localStorage.getItem("moneda");
  const jsonAObjeto = JSON.parse(miMoneda);
  let result = local / parseInt(jsonAObjeto.cotizadolar).toFixed(2);

  let p1 = document.getElementById("filtro");
  let p2 = document.getElementById("resultado");
  
  

  if(local <=0){
    p1.innerText="Debe ser mayor que 0 para convertir";
    p1.style.color="red";
    local.innerHTML="";
    p2.innerHTML="";
    
  }
  else{
    p2.innerText="Su conversión da: "+result+" U$$";
    p1.innerHTML="";
    local.innerHTML="";
  } 
  console.log(result);
 

}
ConvertiraDolar();










