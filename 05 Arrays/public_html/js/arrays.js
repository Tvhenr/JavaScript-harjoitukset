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


let numbers = [15, 4, 68, 23, 22, 7, 15, 10, 32, 15];

// copy and paste here the random number generator function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function t01a() {
    document.getElementById("result_a1").innerHTML = numbers;
    
    document.getElementById("result_a2").innerHTML = "";

    for (let i = 0; i < numbers.length; i++) {
        document.getElementById("result_a2").innerHTML += numbers[i] + " ";
    }        
}

function t01b() {
    document.getElementById("result_b").innerHTML = "";
    
    for (let i = numbers.length-1; i >= 0; i--) {
        document.getElementById("result_b").innerHTML += numbers[i] + " ";
    }
}

function t01c() {
    let summa = 0;
    let keskiarvo = 0;

    for (let i = 0; i < numbers.length; i++) {
        summa +=numbers[i];
        keskiarvo = summa / numbers.length;
    }
    document.getElementById("result_c1").innerHTML = summa;
    document.getElementById("result_c2").innerHTML = keskiarvo;
}

function t01d() {
    let pienin = numbers[0];
    let suurin = numbers[0];
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < pienin) {
            pienin = numbers[i];
            document.getElementById("result_d1").innerHTML = numbers[i];
        } else {
            document.getElementById("result_d1").innerHTML = pienin;
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if (suurin < numbers[i]) {
            suurin = numbers[i];
            document.getElementById("result_d2").innerHTML = numbers[i];
        } else {
            document.getElementById("result_d2").innerHTML = suurin;
        }
    }
}

function t01e() {
    document.getElementById("result_e").innerHTML = "";
    numbers.sort(function(a, b){return a-b;});
    
    for (let i = 0; i < numbers.length; i++) {
        document.getElementById("result_e").innerHTML += numbers[i] + " ";
    }
}


function t01f() {
    numbers = new Array();
    
    for (let i = 0; i < 20; i++) {
        let luvut = getRndInteger(1, 20);
        numbers.push(luvut);
    }
    t01a();
    t01b();
    t01c();
    t01d();
    t01e();
}

function t02() {
    document.getElementById("joker").innerHTML = "";
    let jokers = new Array();
    
    for (i = 0; i < 7; i++) {
        let luvut = getRndInteger(0, 9);
        jokers.push(luvut);
    }
    for (let i = 0; i < jokers.length; i++) {
        document.getElementById("joker").innerHTML += jokers[i] + " ";
    }
}

function t03() {
    let lotto = new Array();
    
    for (let i = 0; i <= 40; i++) {
        lotto.push(0);
    }

//lotto numerot    
    let number = 0;
    while (number < 7) {
        let lottonumber = getRndInteger(1, 40);
        if (lotto[lottonumber] === 0) {
            lotto[lottonumber] = 1;
            number++;
        }
    }

// extra numero
    number = 0;
    while (number < 1) {
        let lottonumber = getRndInteger(1, 40);
        if (lotto[lottonumber] === 0) {
            lotto[lottonumber] = 2;
            number++;
        }
    }

    document.getElementById("lotto").innerHTML = "";
    for (let i = 0; i < lotto.length; i++) {
        if (lotto[i] === 1) {
            document.getElementById("lotto").innerHTML += i + " ";
        }
    }
    
    document.getElementById("extra").innerHTML = "";
    for (let i = 0; i < lotto.length; i++) {
        if (lotto[i] === 2) {
            document.getElementById("extra").innerHTML = i;
        }
    }
    
// plus numero
    let plus_number = getRndInteger(1, 40);
    document.getElementById("plus").innerHTML = plus_number;
}

function t04() {    
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    document.getElementById("random").innerHTML = "";
    
    while (numbers.length > 0) {
        let i = getRndInteger(0, numbers.length-1);
        document.getElementById("random").innerHTML += numbers[i] + " ";
        numbers.splice(i,1);
    }
}

