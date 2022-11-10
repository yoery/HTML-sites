let diceNumbers = [0, 0, 0, 0, 0];
let diceHold = [false, false, false, false, false];
let roll = 0;
let totaalOnder = 0;
var count = 3;


function DiceRoll() {
    for (let i = 0; i < diceNumbers.length; i++) {
        if (!diceHold[i] && roll == 0) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "rgb(175, 255, 255)";
        } else if (!diceHold[i] && roll == 1) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "rgb(164, 236, 236)";
        } else if (!diceHold[i] && roll == 2) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "rgb(145, 206, 206)";
        }

        document.getElementById("dice" + (i + 1)).innerHTML = diceNumbers[i];
    }
    if (roll <= 2) {
        roll++;
    } else if (roll == 3) {
        
        roll = 0;
        for (i = 0; i < diceNumbers.length; i++) {
            document.querySelector(".dobbelsteen" + (i + 1)).style.backgroundColor = "rgb(243, 229, 213)";
            document.querySelector(".dobbelsteen" + (i + 1)).innerHTML = "Dice";
            document.querySelector(".dobbelsteen" + (i + 1)).style.border = "0.5px solid black";
            diceHold = [false, false, false, false, false];
        }
    }
}


function HoldDice(number) {
    diceHold[number] = !diceHold[number];
    if (diceHold[number]) {
        document.querySelector(".dobbelsteen" + (number + 1)).style.border = "5px solid red";
    } else {
        document.querySelector(".dobbelsteen" + (number + 1)).style.border = "0.5px solid black";
    }

}


function CheckNumbers(number) {
    let totaal = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        if (diceNumbers[i] == number) {
            totaal += number;
        }
    }
    document.getElementById("score" + number).innerHTML = totaal;
}


function OfKind(number) {
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same >= number) {
            found = true;
        }
    }
    let totaal = 0;
    if (found) {
        for (let i = 0; i < diceNumbers.length; i++) {
            totaal += diceNumbers[i];

        }
        document.getElementById("OfKind" + number).innerHTML = totaal;
        totaalOnder += totaal;
    }
}


function FullHouse() {
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same == 2) {
            found = true;
        }
    }
    let same2 = 0;
    let found2 = false;
    for (let i = 1; i <= 6; i++) {
        same2 = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same2++;
            }
        }
        if (same2 == 3) {
            found2 = true;
        }
    }
    if (found && found2) {
        document.getElementById("fullHouse").innerHTML = 25;
        totaalOnder += 25;
    }
}


function SmallStreet() {
    let order = [0, 0, 0, 0, 0, 0];
    for (let i = 1; i <= 6; i++) {
        for (let j = 0; j <= diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                order[i - 1] = 1;
            }
        }
    }

    let tellen = 0;
    let telbool = false;
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            tellen++;
        } else {
            tellen = 0;
        }
        if (tellen >= 4) {
            telbool = true;
        }
    }
    if (telbool) {
        document.getElementById('straatKlein').innerHTML = 30;
        totaalOnder += 30;
    }
}


function BigStreet() {
    let order = [0, 0, 0, 0, 0, 0];
    for (let i = 1; i <= 6; i++) {
        for (let j = 0; j <= diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                order[i - 1] = 1;
            }
        }
    }
    let tellen = 0;
    let telbool = false;
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            tellen++;
        } else {
            tellen = 0;
        }
        if (tellen == 5) {
            telbool = true;
        }
    }
    if (telbool) {
        document.getElementById('straatGroot').innerHTML = 40;
        totaalOnder += 40;
    }
}


function Yahtzee(number) {
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same >= number) {
            found = true;
        }
    }
    if (found) {
        document.getElementById("yahtzee").innerHTML = 50;
        totaalOnder += 50;
    }
}


function Chance() {
    let totaal = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        totaal += diceNumbers[i];
    }
    document.getElementById("chance").innerHTML = totaal;
    totaalOnder += totaal;
}

function TotalScore() {
    let totaal = 0;
    for (let i = 1; i <= 6; i++) {
        totaal += parseInt(document.getElementById("score" + i).innerHTML);
    }
    document.getElementById("totalScore").innerHTML = totaal;
    GetBonus(totaal);
}


function GetBonus(totaal) {
    if (totaal >= 63) {
        totaal += 35;
        document.getElementById("bonus").innerHTML = 35;
    }
    TotalUp(totaal);
}


function TotalUp(totaal) {
    document.querySelector(".scoreItem-28").innerHTML = totaal;
    document.querySelector(".scoreItem-53").innerHTML = totaal;
}


function TotalUnder() {
    document.getElementById("totalUnder").innerHTML = totaalOnder;
}


function TotalAll() {
    let totaal = 0;
    totaal += parseInt(document.getElementById("totalUp").innerHTML);
    totaal += parseInt(document.getElementById("totalUnder").innerHTML);
    document.getElementById("totalAll").innerHTML = totaal;
}

document.querySelector('.restart').addEventListener('click', function(){
    window.location.reload();
    return false;
  });
/*
var oButton = document.getElementById("rolknop");
var oText = document.getElementById("text");
var count = 3;
oButton.addEventListener('click', function(i, a) {
    count -=1;
    oText.innerHTML = count;
}, false);*/

function rollcount(){   
var oText=document.getElementById("span");
count -=1;
oText.innerHTML=count;
}

function myfunction(){
    rollcount();
    DiceRoll();
}
