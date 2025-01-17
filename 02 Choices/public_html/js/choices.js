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

function v01() {
    let year = Number(document.getElementById("year").value);
    let today = new Date();
    let year1 = today.getFullYear();
    let ikä = year1 - year;
    if (ikä >= 18) {
        document.getElementById("allow").innerHTML = "Welcome!";
    } else {
        document.getElementById("allow").innerHTML = "too young";
    }
}

function v02() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    if (number1 < number2) {
        document.getElementById("smaller").innerHTML = number1;
    } else {
        document.getElementById("smaller").innerHTML = number2; 
    }
}

function v03() {
    const NEG = "One of the numbers is negative.";
    const POS = "Both numbers are either positive or negative.";
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let tulo = number1 * number2;
    if (tulo >= 0) {
        document.getElementById("negative").innerHTML = POS;
    } else {
        document.getElementById("negative").innerHTML = NEG;
    }
}

function v04() {
    const REC = "rectangle";
    const SQ = "square";
    let side1 = Number(document.getElementById("side1").value);
    let side2 = Number(document.getElementById("side2").value);
    if (side1 === side2) {
        document.getElementById("square").innerHTML = SQ;        
    } else if (side1 < side2) {
        document.getElementById("square").innerHTML = REC;
    } else {
        document.getElementById("square").innerHTML = REC;
    }
}

function v05() {
    const EVEN = "even";
    const ODD = "odd";
    let number3 = Number(document.getElementById("number3").value);
    if (number3 % 2 === 0) {
        document.getElementById("even").innerHTML = EVEN;
    } else {
        document.getElementById("even").innerHTML = ODD;
    }
}

function v06() {
    let number3 = Number(document.getElementById("number3").value);
    if (number3 < 0) {
        document.getElementById("positive").innerHTML = "negative";        
    } else if (number3 > 0) {
        document.getElementById("positive").innerHTML = "positive";
    } else {
        document.getElementById("positive").innerHTML = "zero";
    }
}

function v07() {
    let digit_a = Number(document.getElementById("digit_a").value);
    let digit_b = Number(document.getElementById("digit_b").value);
    let digit_c = Number(document.getElementById("digit_c").value);
    let digit_d = Number(document.getElementById("digit_d").value);
    
    let smallest = digit_a;
    let biggest = digit_a;
    
    if (digit_b < smallest) {
        smallest = digit_b;
        document.getElementById("smallest").innerHTML = digit_b;
    } else {
        document.getElementById("smallest").innerHTML = smallest;
    }
    if (digit_c < smallest) {
        smallest = digit_c;
        document.getElementById("smallest").innerHTML = digit_c;
    } else {
        document.getElementById("smallest").innerHTML = smallest;
    }
    if (digit_d < smallest) {
        smallest = digit_b;
        document.getElementById("smallest").innerHTML = digit_d;
    } else {
        document.getElementById("smallest").innerHTML = smallest;
    }     
    if (digit_b > biggest) {
        biggest = digit_b;
        document.getElementById("biggest").innerHTML = digit_b;
    } else {
        document.getElementById("biggest").innerHTML = biggest;
    }
    if (digit_c > biggest) {
        biggest = digit_c;
        document.getElementById("biggest").innerHTML = digit_c;
    } else {
        document.getElementById("biggest").innerHTML = biggest;
    }
    if (digit_d > biggest) {
        biggest = digit_d;
        document.getElementById("biggest").innerHTML = digit_d;
    } else {
        document.getElementById("biggest").innerHTML = biggest;
    }     
}

function v08() {
    let yearx = Number(document.getElementById("yearx").value);
    if (yearx % 4 ===0 && (yearx % 100 !== 0 || yearx % 400 === 0)) {
        document.getElementById("leap_year").innerHTML = "is leap year";
    } else {
        document.getElementById("leap_year").innerHTML = "is not leap year";
    }
}
