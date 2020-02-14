/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */
/*
 * to.Fixed()=pyöristäminen
 */
// what shape is selected?
// 
// 1 = ?, 2 = ?
let whatShape = 1;
function shape(i) {
    whatShape = i;
    document.getElementById('result').innerHTML = "";
    let radius = Number(document.getElementById("radius1").value);
    
}

// do not change this function
// this is for printing
//tehtävä3
function print(place, shape, area, around) {
    place.innerHTML = shape + " area is " + area + ", around is " + around + ".";
}

// Circle functions are here
function calculateCirleAround (r) {
    return 2* Math.PI * r;
}

function calculateCirleArea (r) {
    return Math.PI * Math.pow(r, 2);
}

// Write Square function here
//tehtävä4
function calculateSquareAround (s) {
    return 4 * s;
}

function calculateSquareArea (s) {
    return Math.pow(s, 2);
}

// Button functions
function f01() {           
    let radius = Number(document.getElementById("radius1").value);
    let piiri = 2 * Math.PI * radius;
    let ala = Math.PI * Math.pow(radius, 2);
    document.getElementById("c_around").innerHTML = Math.round(piiri);
    document.getElementById("c_area").innerHTML = Math.round(ala);
}

function f02() {
    let side = Number(document.getElementById("side").value);
    let bottom = Number(document.getElementById("bottom").value);
    
    let height = Math.sqrt((Math.pow(side, 2) - Math.pow((bottom / 2), 2)));
    let area = (bottom * height) / 2;
    let around = 2 * side + bottom;
    document.getElementById("t_height").innerHTML = Math.round(height);
    document.getElementById("t_around").innerHTML = Math.round(around);
    document.getElementById("t_area").innerHTML = Math.round(area);    
}

function f03() {    
    let radius = Number(document.getElementById("radius2").value);
//    var p = document.getElementById('circle');
//    print(p, ...);
    let piiri = calculateCirleAround(radius);
    let ala = calculateCirleArea(radius);
    
    let p = document.getElementById("circle");
    print(p, "Circle:", Math.round(ala), Math.round(piiri));
}

function f04() {
    let side = Number(document.getElementById("side2").value);
    let piiri = calculateSquareAround(side);
    let ala = calculateSquareArea(side);      
    let p = document.getElementById("square");
    print(p, "Square:", ala, piiri);
}

function f05() {
    let radius = Number(document.getElementById("amount").value);
    let piiri1 = calculateCirleAround(radius);
    let ala1 = calculateCirleArea(radius);
    let side = Number(document.getElementById("amount").value);
    let piiri2 = calculateSquareAround(side);
    let ala2 = calculateSquareArea(side);

    let p = document.getElementById("result");
    if (whatShape === 1) {
        print(p, "Circle:", Math.round(ala1), Math.round(piiri1));
    } else {
        print(p, "Square:", ala2, piiri2); 
    }
}

// Paste here the random number generator function
//tehtävä 6
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  
function f06() {
    let min = 1;
    let max = 6;
    let arpa = getRndInteger(min, max);
    document.getElementById("dice").innerHTML = arpa;
}

function f07() {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let luku = getRndInteger(min, max);
    document.getElementById("randoms").innerHTML += luku + " ";    
}

// Write getCharacter and getDigit functions here
function getDigit() {
    let today = new Date();
    let year = today.getFullYear();
    let str = year.toString();
    return str.charAt(str.length-1);
}
function getCharacter(text, index, uppercase) {    
    let merkki = text.charAt(index);
    if (uppercase === true) {
        return merkki.toUpperCase();
    } else {
        return merkki.toLowerCase();
    }    
}
function f08() {
    // write here the user id and password by hand to have an example of 
    // the desired result of the task, use your own name
    // first name: Toni 
    // last name: Henriksson
    // user id: n0tohe00
    // password: !?tOhNO+/1
    let etunimi = document.getElementById("firstName").value;
    let sukunimi = document.getElementById("lastName").value;
    let kirjain1 = getCharacter(etunimi, 0, false);
    let kirjain2 = getCharacter(etunimi, 1, false);
    let kirjain3 = getCharacter(sukunimi, 0, false);
    let kirjain4 = getCharacter(sukunimi, 1, false);
    let numero1 = getDigit();
    let str = sukunimi;
    let kirjain5 = getCharacter(etunimi, str.length, true);
    let kirjain6 = getCharacter(sukunimi, str.length-1, true);
    let kirjain7 = getCharacter(sukunimi, str.length-2, true);
    let numero2 = Number(getDigit()+1);
    document.getElementById("userid").innerHTML = "n" + numero1 + kirjain1 +kirjain2 + kirjain3 + kirjain4 + "00";
    document.getElementById("password").innerHTML = "!?" + kirjain1 + kirjain5 + kirjain3 + kirjain6 + kirjain7 + "+/" + numero2;
}

