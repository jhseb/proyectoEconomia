var capital, tinteres, tiempo, tiempof, interesb, i, i_n,monto
function calcular_m(){
    capital = $("#capital").val();
    tinteres = $("#tinteres").val();
    tiempo = $("#tiempo").val();
    console.log("mes: ",tiempo)
    i = parseFloat(tinteres/100)
    tiempof = parseFloat(tiempo/365);
    i_n = parseFloat(tiempof*i);
    interesb = parseFloat(1+ i_n);
    monto = parseFloat(capital*interesb)
    if (monto > 0){
    html= ""
    html += `${new Intl.NumberFormat().format(monto)}`
    }
    $("#monto").html(html);

}