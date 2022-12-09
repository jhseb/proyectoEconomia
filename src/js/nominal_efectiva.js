var tasa;
var periodoN;
var periodoNN;
var periodoE;

$(function () {});

function getData() {
  tasa = parseFloat($("#tasaN").val()) / 100;
  periodoN = document.getElementById("periodoN").value;
  periodoE = document.getElementById("periodoE").value;
  tasa = nominal_efectiva(tasa, periodoN);
  tasa = verificar_anticipada1(tasa);
  tasa = equivalencia_tasas(tasa, periodoNN, periodoE);
  tasa = verificar_anticipada2(tasa);
}

function nominal_efectiva(tasa, periodoN) {
  switch (periodoN) {
    case "M":
      periodoNN = 12;
      tasa = tasa / 12;
      break;
    case "B":
      periodoNN = 6;
      tasa = tasa / 6;
      break;
    case "T":
      periodoNN = 4;
      tasa = tasa / 4;
      break;
    case "C":
      periodoNN = 3;
      tasa = tasa / 3;
      break;
    case "S":
      periodoNN = 2;
      tasa = tasa / 2;
      break;
    case "A":
      periodoNN = 1;
      break;
    default:
      periodoNN = 1;
      break;
  }
  return tasa;
}

function verificar_anticipada1(tasa) {
  if (document.getElementById("nominalA").checked) {
    tasa = tasa / (1 - tasa);
  }
  return tasa;
}

function equivalencia_tasas(tasa, periodoNN, periodoE) {
  switch (periodoE) {
    case "M":
      tasa = Math.pow(Math.pow(1 + tasa, periodoNN), 1 / 12) - 1;
      break;
    case "B":
      tasa = Math.pow(Math.pow(1 + tasa, periodoNN), 1 / 6) - 1;
      break;
    case "T":
      tasa = Math.pow(Math.pow(1 + tasa, periodoNN), 1 / 4) - 1;
      break;
    case "C":
      tasa = Math.pow(Math.pow(1 + tasa, periodoNN), 1 / 3) - 1;
      break;
    case "S":
      tasa = Math.pow(Math.pow(1 + tasa, periodoNN), 1 / 2) - 1;
      break;
    case "A":
      tasa = Math.pow(Math.pow(1 + tasa, periodoNN), 1) - 1;
      break;
    default:
      tasa = Math.pow(Math.pow(1 + tasa, periodoNN), 1) - 1;
      break;
  }
  return tasa;
}

function verificar_anticipada2(tasa) {
  if (document.getElementById("efectivaA").checked) {
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
  document.getElementById("tasaE").innerHTML = tasa + "%";
  $("#tasaE").val(tasa);
}
