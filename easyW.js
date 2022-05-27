let possibleFeriRatings = ["Feri approves.", "Feri is slightly pleased", "Feri is apolitical.", "Feri disapproves.", "Feri is going to commit hate crimes."] // 2 1 2
let feriInput = document.getElementById("feri-password");
let feriRates = document.getElementById("feri-rating");
let aside = document.getElementById("aside");

class uwu {
    constructor(nyah) {
        this.nyah = nyah;
    }
    static nyah(nyahParam) {
        return console.log(nyahParam);
    }
    static nya(nyabject, nyaParam) {
        if (nyabject != null) {
            return nyabject.innerText = nyaParam;
        }
    }
}

function FeriRating() {
    let points = 0;
    let hasUppercase = false;
    hasUppercase = UpperCaseRatingByFeri();
    points = LengthRatingByFeri(points, hasUppercase);
    if (points == undefined) {
        points = 0;
    }
    points += NumberRatingByFeri();
    if (feriInput.value.length > 6) {
        points += SpecialRatingSexByFeri();
        //Swapping text rating
        if (points < 5) {
            uwu.nya(feriRates, possibleFeriRatings[4]);
            HandleProgressBars(0);
        }
        else if (points < 15) {
            uwu.nya(feriRates, possibleFeriRatings[3]);
            HandleProgressBars(1);
        }
        else if (points < 25) {
            uwu.nya(feriRates, possibleFeriRatings[2]);
            HandleProgressBars(2);
        }
        else if (points < 35) {
            uwu.nya(feriRates, possibleFeriRatings[1]);
            HandleProgressBars(3);
        }
        else {
            uwu.nya(feriRates, possibleFeriRatings[0]);
            HandleProgressBars(4);
        }
    }
    else{
        HandleProgressBars();  
    }


    //Update score
    hasUppercase = false;

    uwu.nyah(points);
    uwu.nyah(hasUppercase)
}
function LengthRatingByFeri(points, hasUppercase) {
    let length = feriInput.value.length;
    if (length < 6) {
        uwu.nya(feriRates, "Feri říká: heslo musí mít aspoň 6 znaků");
        return
    }
    let bonusLength = length - 6;
    if (bonusLength > 0 && bonusLength < 6) {
        // 1.25 * n
        if (hasUppercase) {
            return points = 1.25 * (bonusLength + 1);

        }
        else {
            return points = 1.25 * bonusLength;
        }
    }
    else if (bonusLength >= 6 && bonusLength < 9) {
        // 1.75 * n
        if (hasUppercase) {
            return points = 1.75 * (bonusLength + 1);

        }
        else {
            return points = 1.75 * bonusLength;
        }
    }
    // 2 * n
    if (hasUppercase) {
        return points = 2 * (bonusLength + 1);

    }
    else {
        return points = 2 * bonusLength;
    }
}
function UpperCaseRatingByFeri() {
    if (feriInput.value.toLowerCase() == feriInput.value) {
        return false;
    }
    return true
}
function NumberRatingByFeri() {
    if (/\d/.test(feriInput.value)) {
        return 1.5;
    }
    return 0;
}
function SpecialRatingSexByFeri() {
    let specials = /[^A-Za-z 0-9]/g;
    if (specials.test(feriInput.value)) {
        return 2;
    }
    uwu.nyah("Doesn't have special characters");

    return 0;
}
function HandleProgressBars(index) {
    let spanOne = aside.children[0];

    switch (index) {
        case 0:
            spanOne.style.backgroundColor = "#A61F2B";
            break;
        case 1:
            spanOne.style.backgroundColor = "rgb(235 72 86)";
            break;
        case 2:
            spanOne.style.backgroundColor = "#F2D680";
            break;
        case 3:
            spanOne.style.backgroundColor = "#88A672";
            break;
        case 4:
            spanOne.style.backgroundColor = "rgb(116 225 116)";
            break;
        default:
            spanOne.style.backgroundColor = "#fff";
            break;
    }
}

feriInput.addEventListener("input", e => {
    FeriRating();
});

FeriRating(); //Start
