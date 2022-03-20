let images = [
"dice_01.png",
"dice_02.png",
"dice_03.png",
"dice_04.png",
"dice_05.png",
"dice_06.png"];

let dice = document.querySelectorAll("#dice__img");

console.log(dice);

function roll() {

    dice.forEach(function(die){
        die.classList.add("shake");
    });

    setTimeout (function(){
        dice.forEach(function(die){
           die.classList.remove("shake");
        });
        let dieOneValue = Math.floor (Math.random () *6);
        let dieTwoValue = Math.floor (Math.random () *6);
        let dieThreeValue = Math.floor (Math.random () *6);

        console.log(dieOneValue,dieTwoValue,dieThreeValue);
        document.querySelector("#die-1").setAttribute("src", "assets/img/" + images[dieOneValue]);
        document.querySelector ("#die-2").setAttribute("src", "assets/img/" + images[dieTwoValue]);
        document.querySelector ("#die-3").setAttribute("src", "assets/img/" + images[dieThreeValue]);

        let result = ( (dieOneValue +1) + (dieTwoValue + 1) + (dieThreeValue + 1));
        let result_text = '';
        if (result <= 10)
        {
            result_text = "XỈU";
        }
        else
        {
            result_text = "TÀI";
        }

        document.querySelector ("#total").innerHTML = "Dự Đoán: " + result + " ==> " + result_text;
        
    },
    1000
    ) ;
}