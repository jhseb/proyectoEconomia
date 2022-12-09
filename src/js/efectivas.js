var tasa;
var periodoE1;
var periodoE1N;
var periodoE2;

$(function () {});

function getData() {
  tasa = parseFloat($("#tasaE1").val()) / 100;
  periodoE1 = document.getElementById("periodoE1").value;
  periodoE2 = document.getElementById("periodoE2").value;
  tasa = verificar_anticipada1(tasa);
  extraerPeriodo(periodoE1);
  tasa = equivalencia_tasas(tasa, periodoE1N, periodoE2);
  tasa = verificar_anticipada2(tasa);
}

function extraerPeriodo(periodoE1) {
  switch (periodoE1) {
    case "M":
      periodoE1N = 12;
      break;
    case "B":
      periodoE1N = 6;
      break;
    case "T":
      periodoE1N = 4;
      break;
    case "C":
      periodoE1N = 3;
      break;
    case "S":
      periodoE1N = 2;
      break;
    case "A":
      periodoE1N = 1;
      break;
    default:
      periodoE1N = 1;
      break;
  }
  return tasa;
}

function verificar_anticipada1(tasa) {
  if (document.getElementById("efectivaA1").checked) {
    tasa = tasa / (1 - tasa);
  }
  return tasa;
}

function equivalencia_tasas(tasa, periodoE1N, periodoE2) {
  switch (periodoE2) {
    case "M":
      tasa = Math.pow(Math.pow(1 + tasa, periodoE1N), 1 / 12) - 1;
      break;
    case "B":
      tasa = Math.pow(Math.pow(1 + tasa, periodoE1N), 1 / 6) - 1;
      break;
    case "T":
      tasa = Math.pow(Math.pow(1 + tasa, periodoE1N), 1 / 4) - 1;
      break;
    case "C":
      tasa = Math.pow(Math.pow(1 + tasa, periodoE1N), 1 / 3) - 1;
      break;
    case "S":
      tasa = Math.pow(Math.pow(1 + tasa, periodoE1N), 1 / 2) - 1;
      break;
    case "A":
      tasa = Math.pow(Math.pow(1 + tasa, periodoE1N), 1) - 1;
      break;
    default:
      tasa = Math.pow(Math.pow(1 + tasa, periodoE1N), 1) - 1;
      break;
  }
  return tasa;
}

function verificar_anticipada2(tasa) {
  if (document.getElementById("efectivaA2").checked) {
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
  document.getElementById("tasaE2").innerHTML = tasa + "%";
  $("#tasaE2").val(tasa);
}
