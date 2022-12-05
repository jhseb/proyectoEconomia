var capital, tinteres, tiempo, tiempof, interesb, i, tiempor, interesr

function calcular_i(){
    capital = $("#capital").val();
    tinteres = $("#tinteres").val();
    tiempo = $("#tiempo").val();
    console.log("mes: ",tiempo)
    i = parseFloat(tinteres/100)
    tiempof = parseFloat(tiempo/360);
    tiempor = parseFloat(tiempo/366);
    interesb = parseFloat(capital*i*tiempof);
    if (interesb > 0){
    html= ""
    html += `${new Intl.NumberFormat().format(interesb)}`
    }
    $("#interes").html(html);
    interesr = parseFloat(capital*i*tiempor);
    if (interesr > 0){
    html= ""
    html += `${new Intl.NumberFormat().format(interesr)}`
    }
    $("#interesr").html(html);

}