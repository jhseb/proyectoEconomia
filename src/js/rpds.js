var edad1,edad2,edad3,cantidad,suma,edads,fc,cociente,persona
function calcular_rs(){
   edad1 = $("#edad1").val()
   edad2 = $("#edad2").val()
   edad3 = $("#edad3").val()
    cantidad = $("#cantidad").val()
    edads = parseInt(edad1) + parseInt(edad2) + parseInt(edad3)
    fc = parseFloat(cantidad/edads)
    console.log(edad1)
    col1()
    col2()
    col3()
    col4()

}

function col1(){
    persona = 1 
	html = "";
	if(edads > 0 ){
		cociente = parseFloat((cantidad*edad1)/edads)
		html += `<tr>
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad1)}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cociente)}</td>
					
				</tr>`;	
        	
	}
	$("#col1").html(html);
}

function col2(){
    persona = 2 
	html = "";
	if(edads > 0 ){
		cociente = parseFloat((cantidad*edad2)/edads)
		html += `<tr>
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad2)}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cociente)}</td>
					
				</tr>`;	
	}
	$("#col2").html(html);
}

function col3(){
    persona = 3 
	html = "";
	if(edads > 0 ){
		cociente = parseFloat((cantidad*edad3)/edads)
		html += `<tr>
					<td>${new Intl.NumberFormat().format(persona)}</td>
					<td>${new Intl.NumberFormat().format(edad3)}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cociente)}</td>
					
				</tr>`;	
	}
	$("#col3").html(html);
}

function col4(){
    persona = "total"
	html = "";
	if(edads > 0 ){
		html += `<tr>
                    <td>${persona}</td>
					<td>${new Intl.NumberFormat().format(edads)}</td>
					<td>${new Intl.NumberFormat().format(fc)}</td>
					<td>${new Intl.NumberFormat().format(cantidad)}</td>
					
				</tr>`;	
	}
	$("#col4").html(html);
}