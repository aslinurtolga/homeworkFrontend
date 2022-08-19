// HOMEWORK1: Write an application that enters grades until the character Q or q is entered from the keyboard, and when one of these characters is entered, it calculates the average of all grades entered so far and prints the average to the console.

let note;
let sum = 0;
let counter = 0;

do{
    note = prompt("enter a note or press q/Q to exit ")
    if (note == "q" || note == "Q"){
        break;
    }
    sum += +note;
    ++counter;
} while(note !="q" && note != "Q");
    console.log(`the average of the numbers you entered: ${sum/counter}`);


// HOMEWORK2 : Make the guessing game written in the lesson can be played over and over again.
// Do you want to play again after each game is over Y/N? ask.
// If e or e is entered, the game will start again, otherwise it will be over.


let hak = 5; 
const rastgele = Math.round(Math.random() * 100); 
console.log(rastgele);

let tahmin; 
do { tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:")); 
hak -= 1; if (tahmin === rastgele) { 
    console.log(Tebrikler ${5 - hak} kerede bildiniz.); break; 
} else if (tahmin < rastgele) 
{ console.log("ARTTIR ⬆️"); 
} else { console.log("AZALT ⬇️"); 
} 
} while (hak > 0);

if (tahmin !== rastgele) { console.log("Uzgunuz oyunu kaybettiniz 😔😔"); }