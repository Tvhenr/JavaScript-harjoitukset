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

function v10() {
    const ERROR = "Points should be between 0 - 60.";
    document.getElementById("grade").innerHTML = "";
    document.getElementById("grade_error").innerHTML = "";    
    var points = Number(document.getElementById("points").value);

    if (points < 0 || points > 60) {
        document.getElementById("grade_error").innerHTML = ERROR;
        return;
    }
    if (points <= 29) {
        document.getElementById("grade").innerHTML = "fail";
    } else if (points <= 34) {
        document.getElementById("grade").innerHTML = "satisfactory";
    } else if (points <= 39) {
        document.getElementById("grade").innerHTML = "fair";
    } else if (points <= 49) {
        document.getElementById("grade").innerHTML = "good";
    } else {
        document.getElementById("grade").innerHTML = "excellent";
    }
}


function v11() {
    const ERROR = "Hours should be between 0 - 24.";
    document.getElementById("greeting").innerHTML = "";
    document.getElementById("clock_error").innerHTML = "";
    var clock = Number(document.getElementById("clock").value);
    
    if (clock <0 || clock > 24) {
        document.getElementById("clock_error").innerHTML = ERROR;
        return;
    }    
    if (clock < 4) {
        document.getElementById("greeting").innerHTML = "Good night";
    } else if (clock < 12) {
        document.getElementById("greeting").innerHTML = "Good morning";
    } else if (clock < 18) {
        document.getElementById("greeting").innerHTML = "Good afternoon";
    } else if (clock < 21) {
        document.getElementById("greeting").innerHTML = "Good evening";
    } else {
        document.getElementById("greeting").innerHTML = "Good night";
    }    
}

function v12() {
    const ERROR_NEG = "Number of guests cannot be negative.";
    const ERROR_DIGIT = "Number of guests must be integer.";
    const ERROR_FEW = "Party is cancelled due to too few guests."; 
    
    const ADDRESS1 = "Naapuritie 1";
    const ADDRESS2 = "Naapuritie 12";
    const ADDRESS3 = "Juhlasalintie 34";
    
    document.getElementById("shopping_list").innerHTML = "";
    document.getElementById("address").innerHTML = "";
    document.getElementById("party_error").innerHTML = "";
    var guests = Number(document.getElementById("guests").value);
    
    let sausages = 0;
    let drinks = 0;
    let tomatoes = 0;
    let eggs = 0;
             
    if (guests < 0) {        
        document.getElementById("party_error").innerHTML = ERROR_NEG;
        return;
    }
    if (Number.isInteger(guests)=== false) {
        document.getElementById("party_error").innerHTML = ERROR_DIGIT;
        return;    
    } 
    if (guests <= 3) {
        document.getElementById("party_error").innerHTML = ERROR_FEW;
        return;
    } 
    if (guests <= 15) {
        sausages = guests*3;
        drinks = guests*5;
        tomatoes = guests*2;
        eggs = guests*1;

        document.getElementById("address").innerHTML = ADDRESS1;
    } 
    else if (guests <= 50) {
        sausages = guests*2;
        drinks = guests*3;
        tomatoes = guests*1;
        eggs = guests*0.5;            

        document.getElementById("address").innerHTML = ADDRESS2;
    } 
    else {
        sausages = guests*2;
        drinks = guests*3;
        tomatoes = guests*1;
        eggs = guests*0.5;    

        document.getElementById("address").innerHTML = ADDRESS3;
    }
        document.getElementById("shopping_list").innerHTML = "Shopping list: <br>" + 
                "- Sausages " + sausages + " pcs<br>" + 
                "- Drinks " + drinks + " bottles<br>" + 
                "- Tomatoes " + tomatoes + " pcs<br>" + 
                "- Eggs " + eggs + " pcs";
}





