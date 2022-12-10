var cuota;
var tasa;
var monto;
var plazo;
var tipo_i;
var tipo_p;
var ele1;
var ele2;
var division;
var interes;
var mostrar;

$(function(){

});

function getData() {
	plazo = $("#plazo").val();
	interes = parseFloat($("#tasa").val());
	monto = $("#monto").val();
	capital = parseFloat($("#capital").val());
	tipo_i = document.getElementById("tipo_i").value;
	tipo_p = document.getElementById("tipo_p").value;
	tipo_a = document.getElementById("tipo_a").value;
	mostrar = document.getElementById("tipo_a").value;

	
	interes = interes / 100;
	//Pasar a efectiva sin importar el caso
	interes = transformar_interes(interes, tipo_i, tipo_a);
	// Comversion de tasas
	interes = definir_variables(interes, tipo_i, plazo, tipo_p);
	
	//Calcular plazo
	//plazo = calcular_plazo(plazo, tipo_p);

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
			interes = (interes/(1 - interes));
			break;
		case "No":
			break;
	}
	return interes;
}

function transformar_interes(interes,tipo,tipo_a) {
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
	} else if (tipo_p == "B"){
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
	} else if (tipo_i == "Ef_B" || tipo_i == "N_B"){
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

	interes = conversion(interes,ele1, ele2);
	return interes;
}


function conversion(interes, ele1, ele2) {
	division = (ele2 * (1 / ele1));
	
	if (ele1 != ele2) {
		interes = (Math.pow(interes+1, division ));
		interes = interes - 1;
	
	}
	return interes;
}

function Decimal(val){
	return parseFloat(val).toFixed(2);
}



function calcularMonto(){
	getData();
	monto = capital*( Math.pow( ( 1 + interes ), plazo) );
	monto = Decimal(monto);
	$("#monto").val(monto);
	document.getElementById("mensaje").innerHTML = "El monto es:" + monto;
	document.getElementById("mensaje").style.display = "block";
}

function calcularCapital(){
	getData();
	capital = monto / ( Math.pow( ( 1 + interes ), plazo) );
	capital = Decimal(capital);
	
	$("#capital").val(capital);
	document.getElementById("mensaje").innerHTML = "El capital inicial es:"+ capital;
	document.getElementById("mensaje").style.display = "block";
	/*alert(tipo_p);*/
	/*alert(interes + tipo_i + plazo + tipo_p);*/
}




