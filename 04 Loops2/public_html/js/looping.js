/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name : Toni Henriksson
 * Started date :
 * Ended   date :
 * 
 */

// define here the common functions calculateHedgeRow and getMeters
function calculateHedgeRow(plant, distance) {
    return plant * distance;
}

function getMeters(distance) {
    return distance / 100;
}

let length_cm1_total = 0;
let length_m1_total = 0;
let plants1_total = 0;

function lt01() {
    let plants = Number(document.getElementById("plants1").value);
    let distance = Number(document.getElementById("distance1").value);

    let pituus_cm = calculateHedgeRow(plants, distance);
    let pituus_metreinä = getMeters(pituus_cm);

    length_cm1_total += pituus_cm;
    length_m1_total += pituus_metreinä;
    plants1_total += plants;

    document.getElementById("length_cm1").innerHTML = pituus_cm;
    document.getElementById("length_m1").innerHTML = pituus_metreinä;

    document.getElementById("length_cm1_total").innerHTML = length_cm1_total;
    document.getElementById("length_m1_total").innerHTML = length_m1_total;
    document.getElementById("plants1_total").innerHTML = plants1_total;
}

let length_cm2_total = 0;
let length_m2_total = 0;
let plants2_total = 0;
let family_total = 4;

function lt02() {
    if (family_total > 0) {
        let plants = Number(document.getElementById("plants2").value);
        let distance = Number(document.getElementById("distance2").value);

        let pituus_cm = calculateHedgeRow(plants, distance);
        let pituus_metreinä = getMeters(pituus_cm);

        length_cm2_total += pituus_cm;
        length_m2_total += pituus_metreinä;
        plants2_total += plants;

        document.getElementById("length_cm2").innerHTML = pituus_cm;
        document.getElementById("length_m2").innerHTML = pituus_metreinä;

        document.getElementById("length_cm2_total").innerHTML = length_cm2_total;
        document.getElementById("length_m2_total").innerHTML = length_m2_total;
        document.getElementById("plants2_total").innerHTML = plants2_total;
        family_total--;
    } else {
        document.getElementById("finish").innerHTML = "All data entered.";
    }
}

function lt03() {
    let plants = Number(document.getElementById("plants3").value);
    let distance = Number(document.getElementById("distance3").value);

    let pituus_cm = calculateHedgeRow(plants, distance);
    let pituus_metreinä = getMeters(pituus_cm);

    let length_cm3_total = 0;
    let length_m3_total = 0;
    let plants3_total = 0;

    for (let i = 0; i < 4; i++) {
        length_cm3_total += pituus_cm;
        length_m3_total += pituus_metreinä;
        plants3_total += plants;
    }
    document.getElementById("length_cm3").innerHTML = pituus_cm;
    document.getElementById("length_m3").innerHTML = pituus_metreinä;

    document.getElementById("length_cm3_total").innerHTML = length_cm3_total;
    document.getElementById("length_m3_total").innerHTML = length_m3_total;
    document.getElementById("plants3_total").innerHTML = plants3_total;
}