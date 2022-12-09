var tasa;
var periodoN1;
var periodoN1N;
var periodoN2N;
var periodoN2;

$(function () {});

function getData() {
  tasa = parseFloat($("#tasaN1").val()) / 100;
  periodoN1 = document.getElementById("periodoN1").value;
  periodoN2 = document.getElementById("periodoN2").value;
  tasa = nominal_efectiva(tasa, periodoN1);
  tasa = verificar_anticipada1(tasa);
  tasa = equivalencia_tasas_conversion_nominal(tasa, periodoN1N, periodoN2);
  tasa = verificar_anticipada2(tasa);
  tasa = efectiva_nominal(tasa);
}

function nominal_efectiva(tasa, periodoN) {
  switch (periodoN) {
    case "M":
      periodoN1N = 12;
      tasa = tasa / 12;
      break;
    case "B":
      periodoN1N = 6;
      tasa = tasa / 6;
      break;
    case "T":
      periodoN1N = 4;
      tasa = tasa / 4;
      break;
    case "C":
      periodoN1N = 3;
      tasa = tasa / 3;
      break;
    case "S":
      periodoN1N = 2;
      tasa = tasa / 2;
      break;
    case "A":
      periodoN1N = 1;
      break;
    default:
      periodoN1N = 1;
      break;
  }
  return tasa;
}

function verificar_anticipada1(tasa) {
  if (document.getElementById("nominalA1").checked) {
    tasa = tasa / (1 - tasa);
  }
  return tasa;
}

function equivalencia_tasas_conversion_nominal(tasa, periodoN1N, periodoN2) {
  switch (periodoN2) {
    case "M":
      periodoN2N = 12;
      tasa = Math.pow(Math.pow(1 + tasa, periodoN1N), 1 / 12) - 1;
      break;
    case "B":
      periodoN2N = 6;
      tasa = Math.pow(Math.pow(1 + tasa, periodoN1N), 1 / 6) - 1;
      break;
    case "T":
      periodoN2N = 4;
      tasa = Math.pow(Math.pow(1 + tasa, periodoN1N), 1 / 4) - 1;
      break;
    case "C":
      periodoN2N = 3;
      tasa = Math.pow(Math.pow(1 + tasa, periodoN1N), 1 / 3) - 1;
      break;
    case "S":
      periodoN2N = 2;
      tasa = Math.pow(Math.pow(1 + tasa, periodoN1N), 1 / 2) - 1;
      break;
    case "A":
      periodoN2N = 1;
      tasa = Math.pow(Math.pow(1 + tasa, periodoN1N), 1) - 1;
      break;
    default:
      periodoN2N = 1;
      tasa = Math.pow(Math.pow(1 + tasa, periodoN1N), 1) - 1;
      break;
  }
  return tasa;
}

function verificar_anticipada2(tasa) {
  if (document.getElementById("nominalA2").checked) {
    tasa = tasa / (1 + tasa);
  }
  return tasa;
}

function efectiva_nominal(tasa) {
  return tasa * periodoN2N;
}

function Decimal(tasa) {
  return parseFloat(tasa).toFixed(8);
}

function convertirTasa() {
  getData();
  tasa = Decimal(tasa) * 100;
  document.getElementById("tasaN2").innerHTML = tasa + "%";
  $("#tasaN2").val(tasa);
}
