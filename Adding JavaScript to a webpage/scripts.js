console.log("JavaScript is working!");
$('h1').html('<strong>Ahoj Jardo</strong>');

let myVariable = false;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
} else {
    console.log('myVariable is fale');
}

/* let bookCount = 20;

for (let i = 2; i <= bookCount; i+=2) {
    console.log(i);
  // this block will be repeated bookCount times
}
 */

// vytiskne n-krát a vždy přičte +1, i,i = dvě čísla vedle sebe
let printNumbersTill = (n) => {
   for (let i = 1; i <= n; i++) {
       console.log(i,i)};
  };
 
  //vytiskne prvek funkce, prvek zadaný níže, a přidá Hello
  let getGreetingTo = (name) => {
        console.log('Hello', name);
  };              
getGreetingTo ("Jarda!");

// funkce na vypsání prvků množiny, množina zadána níže, funkce obshuje smyčku for
let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

  printValues ([10, 20, 30, 50, 12]);

//vypsání prvků množiny
// množina čísel
  let myNumbers = [1, 2, 3, 5, 12];

        myNumbers.forEach(cislo => {
            console.log(cislo);
 });

console.log("--END--");