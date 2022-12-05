var cuota;
var tasa;
var monto;
var plazo;
var tipo_i;
var tipo_p;
var ele1;
var ele2;
var divi;
$(function(){

});

function getData(){
	plazo = $("#plazo").val();
	interes  = parseFloat( $("#tasa").val() );
	monto = $("#monto").val();
	capital = parseFloat($("#capital").val());
	tipo_i = document.getElementById("tipo_i").value;
	tipo_p = document.getElementById("tipo_p").value;
	interes = transformar_interes(interes, tipo_i);
	interes = interes / 100;
	definir_variables(interes, tipo_i, plazo, tipo_p);
}

function transformar_interes(interes,tipo) {
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
	return interes;
}

function definir_variables(interes, tipo_i, plazo, tipo_p) {
	alert(tipo_i);
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

	conversion(ele1, ele2);
}


function conversion(ele1, ele2) {
	division = ele1 / ele2;

	if (ele1 != ele2) {
		interes = (Math.pow(interes + 1, division));
		interes = interes - 1;
		alert(interes);
	}
	
}

function Decimal(val){
	return parseFloat(val).toFixed(2);
}



function calcularMonto(){
	getData();
	monto = capital*( Math.pow( ( 1 + interes ), plazo) );
	monto = Decimal(monto);
	$("#monto").val(monto);
}

function calcularCapital(){
	getData();
	capital = monto / ( Math.pow( ( 1 + interes ), plazo) );
	capital = Decimal(capital);
	$("#capital").val(capital);
	/*alert(tipo_p);*/
	/*alert(interes + tipo_i + plazo + tipo_p);*/
}




