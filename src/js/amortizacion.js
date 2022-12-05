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
	tasa = (parseFloat(interes)/100);
	monto = $("#monto").val();
	saldo = monto;
	calcularCuota();
	construct();
	generarTabla();
}

function calcularCuota(){
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


