var aporte1, aporte2, aporte3
var tiempo1, tiempo2, tiempo3
var producto1, producto2, producto3
var indice1, indice2, indice3, indicet
var fc, cociente, persona, cantidad
function calcular_rc(){
   aporte1 = $("#aporte1").val()
   aporte2 = $("#aporte2").val()
   aporte3 = $("#aporte3").val()

   tiempo1 = $("#tiempo1").val()
   tiempo2 = $("#tiempo2").val()
   tiempo3 = $("#tiempo3").val()

   producto1 = $("#producto1").val()
   producto2 = $("#producto2").val()
   producto3 = $("#producto3").val()

   cantidad = $("#cantidad").val()

    
    if(producto1 > 0){
        indice1 = producto1[0] + producto1[1]
        console.log("producto 1: ",producto1)
    }else{
        console.log("error no se ha ingresado el dato especificado")
    }
    if(producto2 > 0){
        indice2 = producto2[0] + producto2[1]
        console.log("producto 2: ",producto2)
    }else{
        console.log("error no se ha ingresado el dato especificado")
    }
    if(producto3 > 0){
        indice3 = producto3[0] + producto3[1]
        console.log("producto 3: ",producto3)
    }else{
        console.log("error no se ha ingresado el dato especificado")
    }      
    
    indicet = parseFloat(indice1) + parseFloat(indice2) + parseFloat(indice3)
    console.log("total indice: ",indicet)
    fc = parseFloat(cantidad/indicet)
     col1()
     col2()
     col3()
    // col4()

}

function col1(){
    persona = "A"
	html = "";
	if(indice1 > 0 && aporte1 > 0 ){
        cociente = parseFloat((cantidad*indice1)/indicet)
		html += `<tr>
                    <td>${persona}</td>
					<td>${new Intl.NumberFormat().format(aporte1)}</td>
					<td>${new Intl.NumberFormat().format(tiempo1)}</td>
					<td>${new Intl.NumberFormat().format(producto1)}</td>
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
	if(indice2 > 0 && aporte2 > 0 ){
        cociente = parseFloat((cantidad*indice2)/indicet)
		html += `<tr>
                    <td>${persona}</td>
                    <td>${new Intl.NumberFormat().format(aporte2)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo2)}</td>
                    <td>${new Intl.NumberFormat().format(producto2)}</td>
                    <td>${new Intl.NumberFormat().format(indice2)}</td>
                    <td>${new Intl.NumberFormat().format(fc)}</td>
                    <td>${new Intl.NumberFormat().format(cociente)}</td>
					
				</tr>`;	
	}
	$("#col2").html(html);
}

function col3(){
    persona = "C" 
	html = "";
	if(indice3 > 0 && aporte3 > 0  ){
        cociente = parseFloat((cantidad*indice3)/indicet)
		html += `<tr>
                    <td>${persona}</td>
                    <td>${new Intl.NumberFormat().format(aporte3)}</td>
                    <td>${new Intl.NumberFormat().format(tiempo3)}</td>
                    <td>${new Intl.NumberFormat().format(producto3)}</td>
                    <td>${new Intl.NumberFormat().format(indice3)}</td>
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