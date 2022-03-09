let possibleFeriRatings = ["Feri approves.", "Feri is sligthy pleased", "Feri is apolitical.", "Feri disapproves.", "Feri is going to commit hate crimes."] // 2 1 2
let feriInput = document.getElementById("feri-password");
let feriRates = document.getElementById("feri-rating");

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
    hasUppercase = false;
    uwu.nyah(points);
    uwu.nyah(hasUppercase)
}
function LengthRatingByFeri(points, hasUppercase){
    let length = feriInput.value.length;
    if(length < 6){
        uwu.nya(feriRates, "Feri říká: heslo musí mít aspoň 6 znaků");
        return
    }
    else{
        uwu.nya(feriRates, "Feri říká: heslo má dostatek znaků");
    }
    let bonusLength = length - 6;
    if(bonusLength > 0 && bonusLength < 6){
        // 1.25 * n
        if(hasUppercase){
            return points = 1.25 * (bonusLength + 1);

        }
        else{
            return points = 1.25 * bonusLength;
        }
    }
    else if(bonusLength >= 6 && bonusLength < 9){
        // 1.75 * n
        if(hasUppercase){
            return points = 1.75 * (bonusLength + 1);

        }
        else{
            return points = 1.75 * bonusLength;
        }
    }
    // 2 * n
    if(hasUppercase){
        return points = 2 * (bonusLength + 1);

    }
    else{
        return points = 2 * bonusLength;
    }
}
function UpperCaseRatingByFeri(){
    if(feriInput.value.toLowerCase() == feriInput.value){
        return false;
    }
    return true
}

feriInput.addEventListener("input", e => {
    FeriRating();
});   

FeriRating(); //Start
