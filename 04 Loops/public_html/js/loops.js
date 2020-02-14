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

function l01() {
    let first_name = document.getElementById("name1").value;
    let last_name = document.getElementById("name2").value;
    
    for (let i = 0; i < 5; i++) {
    document.getElementById("first_name").innerHTML +=
            first_name + "<br>";
    }
    let i = 0;
    while (i < 5) {
        document.getElementById("last_name").innerHTML +=
            last_name + "<br>";
            i++;
    }
}

function l02() {    
    for (let i = 5; i <= 50; i = i + 5) {
    document.getElementById("five").innerHTML +=
        i + " ";
    }
        
    let i = 6;
    while (i <= 60) {
        document.getElementById("six").innerHTML +=
            i + " ";
            i = i+6;
    }
}

function l03() {
    let määrä = Number(document.getElementById("amount").value);
    let stars = "*";
    for (let i = 0; i < määrä; i++) {
        document.getElementById("stars1").innerHTML += stars + "<br>";
        stars += "*";
    }
    
    let i = 0;
    stars = "*";
    while (i < määrä) {
        document.getElementById("stars2").innerHTML += stars + "<br>";
        stars += "*";
        i++;
    }
}

function l04() {

    for (let i = 10; i >= -10; i--) {
        document.getElementById("numbers1").innerHTML += i + " ";
    }
    
    for (let i = -20; i <= 20; i=i+2) {
        document.getElementById("numbers2").innerHTML += i + " ";
    }

    for (let i = 29; i >=1; i = i-2) {
        document.getElementById("numbers3").innerHTML += i + " ";
    }
}

function l05() {
    let luku1 = Number(document.getElementById("min").value);
    let luku2 = Number(document.getElementById("max").value);
    let i = 0;
    let luku = 0;
    while (luku1 + i <= luku2) {
        luku = luku1 + i;
        i++;
        if (luku % 3 === 0) {
            document.getElementById("divisibility3").innerHTML += luku + " ";
        }
        
        if (luku % 5 === 0) {
            document.getElementById("divisibility5").innerHTML += luku + " ";
        } 
    }
}

// copy and paste here the random number generator function 
// and use it in the following functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function l06() {
    let nollia = 0;
    let ykkösiä = 0;
    for (i = 0; i < 1000; i++) {
        let arpa = getRndInteger(0, 1);
        if (arpa === 0) {
            nollia++;
        }
        else {
            ykkösiä++;
        }
        document.getElementById("zeros").innerHTML = nollia;
        document.getElementById("ones").innerHTML = ykkösiä;
    }
}

function l07() {
    let viikko = getRndInteger(1, 52);
    document.getElementById("week").innerHTML = viikko;
    
    for (i = 0; i < 7; i++) {
        let jokeri = getRndInteger(0, 9);
        document.getElementById("joker").innerHTML = jokeri + " ";
    }
}

function l08() {
    let luku = Number(document.getElementById("multiplier").value);
    i= 0;
    while (i <= 10) { 
        tulo = luku * i;
        document.getElementById("table").innerHTML += luku + " * " + i + " = " + tulo + "<br>";
        i++;
    }    
}

function l09() {
    const space = ";&nbsp;&nbsp;";
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            tulo = i * j;
            document.getElementById("multiplication").innerHTML += i + " * " + j + " = " + tulo + space;            
        }
        document.getElementById("multiplication").innerHTML += "<br>";  
    }    
}

