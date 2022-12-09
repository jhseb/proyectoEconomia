var tasa;
var periodoE;
var periodoEN;
var periodoN;

$(function () {});

function getData() {
  tasa = parseFloat($("#tasaE").val()) / 100;
  periodoE = document.getElementById("periodoE").value;
  periodoN = document.getElementById("periodoN").value;
  tasa = verificar_anticipada1(tasa);
  extraerPeriodo(periodoE);
  tasa = equivalencia_tasas_conversion_nominal(tasa, periodoEN, periodoN);
  tasa = verificar_anticipada2(tasa);
}

function extraerPeriodo(periodoE) {
  switch (periodoE) {
    case "M":
      periodoEN = 12;
      break;
    case "B":
      periodoEN = 6;
      break;
    case "T":
      periodoEN = 4;
      break;
    case "C":
      periodoEN = 3;
      break;
    case "S":
      periodoEN = 2;
      break;
    case "A":
      periodoEN = 1;
      break;
    default:
      periodoEN = 1;
      break;
  }
  return tasa;
}

function verificar_anticipada1(tasa) {
  if (document.getElementById("efectivaA").checked) {
    tasa = tasa / (1 - tasa);
  }
  return tasa;
}

function equivalencia_tasas_conversion_nominal(tasa, periodoEN, periodoN) {
  switch (periodoN) {
    case "M":
      tasa = Math.pow(Math.pow(1 + tasa, periodoEN), 1 / 12) - 1;
      tasa = tasa * 12;
      break;
    case "B":
      tasa = Math.pow(Math.pow(1 + tasa, periodoEN), 1 / 6) - 1;
      tasa = tasa * 6;
      break;
    case "T":
      tasa = Math.pow(Math.pow(1 + tasa, periodoEN), 1 / 4) - 1;
      tasa = tasa * 4;
      break;
    case "C":
      tasa = Math.pow(Math.pow(1 + tasa, periodoEN), 1 / 3) - 1;
      tasa = tasa * 3;
      break;
    case "S":
      tasa = Math.pow(Math.pow(1 + tasa, periodoEN), 1 / 2) - 1;
      tasa = tasa * 2;
      break;
    case "A":
      tasa = Math.pow(Math.pow(1 + tasa, periodoEN), 1) - 1;
      break;
    default:
      tasa = Math.pow(Math.pow(1 + tasa, periodoEN), 1) - 1;
      break;
  }
  return tasa;
}

function verificar_anticipada2(tasa) {
  if (document.getElementById("nominalA").checked) {
    tasa = tasa / (1 + tasa);
  }
  return tasa;
}

function Decimal(tasa) {
  return parseFloat(tasa).toFixed(8);
}

function convertirTasa() {
  getData();
  tasa = Decimal(tasa) * 100;
  document.getElementById("tasaN").innerHTML = tasa + "%";
  $("#tasaN").val(tasa);
}
