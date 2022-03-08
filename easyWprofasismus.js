let possibleFeriRatings = ["Feri approves.", "Feri is not concerned", "Feri is only slightly concerned.", "Feri disapproves.", "Feri is going to commit hate crimes."]
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
    let length = feriInput.value.length;
    if(length < 6){
        uwu.nya(feriRates, "Feri říká: heslo musí mít aspoň 6 znaků");
    }
    else{
        uwu.nya(feriRates, "Feri říká: heslo má dostatek znaků");
        uwu.nyah(length);
        return
    }
    let bonusLength = length - 6;
    if(bonusLength > 0 && bonusLength < 4){
        // 1.25 * n
        
    }
    else if(bonusLength >= 4 && bonusLength < 8){
        // 1.75 * n
    }
    else{
        // 2 * n
    }
    uwu.nyah(length);
}

FeriRating();

feriInput.addEventListener("input", e => {
    FeriRating();
});   