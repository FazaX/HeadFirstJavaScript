var location1 = Math.floor(Math.random()*5);
var location2 = location1 + 1;
var location3 = location1 + 2;

var guess;
var hits=0;
var guesses=0;
var isSunk = false;

while (!isSunk){

    guess = prompt("Cel!Pal! (podaj liczbę z zakresu 0-6)");
    if (guess < 0 || guess > 6){
        alert("Podaj prawidłową wartość.");
    }else{

        guesses++;
        if (guess == location1 || guess==location2 || guess==location3){
            hits++;
            if(hits == 3){
                isSunk = true;
                alert("Zatopiłeś okręt !!!");

            }else {
                alert("Trafiony !!! Ale nie zatopiony.");
            }
        }else {
            alert("Pudło !!!");
        }
    }
}
document.write("Koniec gry." + "<br />"
    + "Zatopiłeś statek po "+ guesses + " strzałach" + "<br/>"
    + " ( Ratio: " + 3/guesses + " )");
