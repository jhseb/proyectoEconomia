var cuota;
var tasa;
var monto;
var periodo;
var saldo;
var aboInteres;
var amortizacion;
var plazo;

$(function(){

});

function calcular(){
	plazo = $("#plazo").val();
	interes  = $("#tasa").val();
	//interes = interes/12;
	tasa = (parseFloat(interes));
	monto = $("#monto").val();
	saldo = monto;
	

	tipo_i = document.getElementById("tipo_i").value;
	tipo_p = document.getElementById("tipo_p").value;
	tipo_a = document.getElementById("tipo_a").value;
	mostrar = document.getElementById("tipo_a").value;


	tasa = tasa / 100;
	//Pasar a efectiva sin importar el caso
	tasa = transformar_interes(tasa, tipo_i, tipo_a);
	// Comversion de tasas
	tasa = definir_variables(tasa, tipo_i, plazo, tipo_p);

	calcularCuota();
	construct();
	generarTabla();
}


function calcular_plazo(plazo, tipo_p) {
	switch (tipo_p) {
		case "M":
			mostrar = "Mensual";
			break;
		case "B":
			mostrar = "Bimestral";
			break;
		case "T":
			mostrar = "Trimestral";
			break;
		case "C":
			mostrar = "Cuatrimestral";
			break;
		case "S":
			mostrar = "Semestral";
			break;
		case "A":
			mostrar = "Anual";
			break;
	}

	return plazo;

}

function anticipada(interes, tipo_a) {
	switch (tipo_a) {
		case "Si":
			interes = (interes / (1 - interes));
			break;
		case "No":
			break;
	}
	return interes;
}

function transformar_interes(interes, tipo, tipo_a) {
	if (tipo == "N_M") {
		interes = interes / 12;
	} else if (tipo == "N_B") {
		interes = interes / 6;
	} else if (tipo == "N_T") {
		interes = interes / 4;
	} else if (tipo == "N_C") {
		interes = interes / 3;
	} else if (tipo == "N_S") {
		interes = interes / 2;
	} else if (tipo == "N_A") {
		interes = interes / 1;
	}
	interes = anticipada(interes, tipo_a);
	return interes;

}

function definir_variables(interes, tipo_i, plazo, tipo_p) {

	if (tipo_p == "M") {
		ele1 = 12;
	} else if (tipo_p == "B") {
		ele1 = 6;
	} else if (tipo_p == "T") {
		ele1 = 4;
	}
	else if (tipo_p == "C") {
		ele1 = 3;
	} else if (tipo_p == "S") {
		ele1 = 2;
	} else if (tipo_p == "A") {
		ele1 = 1;
	}

	if (tipo_i == "Ef_M" || tipo_i == "N_M") {
		ele2 = 12;
	} else if (tipo_i == "Ef_B" || tipo_i == "N_B") {
		ele2 = 6;
	} else if (tipo_i == "Ef_T" || tipo_i == "N_T") {
		ele2 = 4;
	} else if (tipo_i == "Ef_C" || tipo_i == "N_C") {
		ele2 = 3;
	} else if (tipo_i == "Ef_S" || tipo_i == "N_S") {
		ele2 = 2;
	} else if (tipo_i == "Ef_A" || tipo_i == "N_A") {
		ele2 = 1;
	}

	interes = conversion(interes, ele1, ele2);
	return interes;
}


function conversion(interes, ele1, ele2) {
	division = (ele2 * (1 / ele1));

	if (ele1 != ele2) {
		interes = (Math.pow(interes + 1, division));
		interes = interes - 1;

	}
	return interes;
}

function calcularCuota() {
	k =  ( 1 - Math.pow((1 + tasa), (plazo*-1))  ) /  tasa;
	cuota = monto / k;
	cuota = cuota.toFixed(2);
}

function generarTabla(){
	html = "";
	while(Math.round(saldo) > 0){
		if(periodo == 0) cuotaAux = 0;
		else cuotaAux = cuota;
		html += `<tr>
					<td>${periodo}</td>
					<td>${new Intl.NumberFormat().format(saldo)}</td>
					<td>${new Intl.NumberFormat().format(aboInteres)}</td>
					<td>${new Intl.NumberFormat().format(cuotaAux)}</td>
					<td>${new Intl.NumberFormat().format(amortizacion)}</td>
					
				</tr>`;	
		
		periodo++;
		aboInteres = Decimal(saldo*tasa);
		amortizacion = Decimal(cuota - aboInteres);
		saldo = Decimal(saldo - amortizacion);
		
	}
	html += `<tr>
					<td>${periodo}</td>
					<td>${new Intl.NumberFormat().format(saldo)}</td>
					<td>${new Intl.NumberFormat().format(aboInteres)}</td>
					<td>${new Intl.NumberFormat().format(cuota)}</td>
					<td>${new Intl.NumberFormat().format(amortizacion)}</td>
					
				</tr>`;	
	$("#table-c").html(html);
	mensaje();
}

function mensaje(){
	html = `<div class="alert alert-success alert-dismissible fade show" role="alert">
				Se cancelarán ${periodo} cuotas, cada una por un valor de $ ${new Intl.NumberFormat().format(cuota)}.
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  			</div>`;
	$("#mensaje").html(html);
}

function Decimal(val){
	return parseFloat(val).toFixed(3);
}

function construct(){
	periodo = 0;
	aboInteres = 0;
	amortizacion = 0;
}


