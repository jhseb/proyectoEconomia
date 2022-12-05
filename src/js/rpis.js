var edad1, edad2, edad3
var inverso1, inverso2, inverso3
var producto1, producto2, producto3
var indice1, indice2, indice3, indicet
var fc, cociente, persona, cantidad
function calcular_rc(){
   edad1 = $("#edad1").val()
   edad2 = $("#edad2").val()
   edad3 = $("#edad3").val()

   tiempo1 = $("#tiempo1").val()
   tiempo2 = $("#tiempo2").val()
   tiempo3 = $("#tiempo3").val()

   producto1 = $("#producto1").val()
   producto2 = $("#producto2").val()
   producto3 = $("#producto3").val()

   cantidad = $("#cantidad").val()

   inverso1 = parseFloat(1/edad1)
   inverso2 = parseFloat(1/edad2)
   inverso3 = parseFloat(1/edad3)


   console.log("inverso 1: ",inverso1)
   console.log("inverso 2: ",inverso2)
   console.log("inverso 3: ",inverso3)
    // if(producto1 > 0){
    //     indice1 = producto1[0] + producto1[1]
    //     console.log("producto 1: ",producto1)
    // }else{
    //     console.log("error no se ha ingresado el dato especificado")
    // }
    // if(producto2 > 0){
    //     indice2 = producto2[0] + producto2[1]
    //     console.log("producto 2: ",producto2)
    // }else{
    //     console.log("error no se ha ingresado el dato especificado")
    // }
    // if(producto3 > 0){
    //     indice3 = producto3[0] + producto3[1]
    //     console.log("producto 3: ",producto3)
    // }else{
    //     console.log("error no se ha ingresado el dato especificado")
    // }      
    
     
    // indicet = parseFloat(indice1) + parseFloat(indice2) 
    // fc = parseFloat(cantidad/indicet)
    
      col1()
      col2()
    //   col3()
    //  col4()

}

const maximoComunDivisor = (a, b) => {
    // https://parzibyte.me/blog
    let temporal; //Para no perder b
    while (b !== 0 ) {
        temporal = b;
        b = a % b;
        a = temporal ;
    }
    return a;
};


const minimoComunMultiplo = (a, b) => {
    // https://parzibyte.me/blog
    return (a * b) / maximoComunDivisor(a, b);
};

// https://parzibyte.me/blog
//   const a = 10, b = 15;
// if(edad1 > 0  ){
//     var mcm= minimoComunMultiplo(a, b);
//     console.log(`Mínimo común múltiplo de ${a} y ${b} es ${mcm}`);
// }
 
function col1(){
    persona = "A"
    html = "";
    if(edad1 > 0 ){
         var mcm1
        // if(edad1 == 10 && edad2 == 15){
        //     mcm = 30;
        // }else if(edad1 == 1 && edad2 == 2){
        //     mcm = 2;
        // }
        const mcm= minimoComunMultiplo(edad1, edad2);
        mcm1 = parseFloat(1/mcm);
        indice1 = parseFloat(inverso1/mcm1);
        indicet = parseFloat(indice1) + parseFloat(indice2) 
        fc = parseFloat(cantidad/indicet)
        cociente = parseFloat((cantidad*indice1)/indicet)
        html += `<tr>
                    <td>${persona}</td>
                    <td>${new Intl.NumberFormat().format(edad1)}</td>
                    <td><label for="">1 /</label> ${ edad1}</td>
                    <td>${new Intl.NumberFormat().format(indice1)}</td>
                    <td>${new Intl.NumberFormat().format(fc)}</td>
                    <td>${new Intl.NumberFormat().format(cociente)}</td>
                    
                </tr>`;	
            
    }
    $("#col1").html(html);
}

function col2(){
    persona = "B" 
	html = "";
	if(edad2 > 0 ){
        var indiced;
        const mcm= minimoComunMultiplo(edad1, edad2);
        mcm1 = parseFloat(1/mcm);
        indice2 = parseFloat(inverso2/mcm1);
        indicet = parseFloat(indice1) + parseFloat(indice2) 
        fc = parseFloat(cantidad/indicet)
        console.log("total indice: ",indicet)
        cociente = parseFloat((cantidad*indice2)/indicet)
		html += `<tr>
                    <td>${persona}</td>
                    <td>${new Intl.NumberFormat().format(edad2)}</td>
                    <td><label for="">1/</label> ${ edad2}</td>
                    <td>${new Intl.NumberFormat().format(indice2)}</td>
                    <td>${new Intl.NumberFormat().format(fc)}</td>
                    <td>${new Intl.NumberFormat().format(cociente)}</td>
					
				</tr>`;	
	}
	$("#col2").html(html);
}

function col3(){
    persona = "Total" 
	html = "";
	if(edad1 > 0 && edad2 > 0  ){
        indicet = parseFloat(indice1) + parseFloat(indice2) 
        cociente = parseFloat((cantidad*indice3)/indicet)
		html += `<tr>
                    <td>${persona}</td>
                    <td>${new Intl.NumberFormat().format(tiempo3)}</td>
                    <td>${new Intl.NumberFormat().format(producto3)}</td>
                    <td>${new Intl.NumberFormat().format(indicet)}</td>
                    <td>${new Intl.NumberFormat().format(fc)}</td>
                    <td>${new Intl.NumberFormat().format(cociente)}</td>
					
				</tr>`;	
	}
	$("#col3").html(html);
}

// function col4(){
//     persona = "total"
// 	html = "";
// 	if(edads > 0 ){
// 		html += `<tr>
//                     <td>${persona}</td>
// 					<td>${new Intl.NumberFormat().format(edads)}</td>
// 					<td>${new Intl.NumberFormat().format(fc)}</td>
// 					<td>${new Intl.NumberFormat().format(cantidad)}</td>
					
// 				</tr>`;	
// 	}
// 	$("#col4").html(html);
// }