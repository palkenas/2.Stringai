// pirma uzduotis

let string1 = "Anthony";
let string2 = "Hopkinsas";
if (string1.length > string2.length) {
    console.log(string1);
}
else {
    console.log(string2);
}

// antra uzduotis

let string3 = "Brad"
let string4 = "Pitt"

console.log(string3.toUpperCase(), string4.toLowerCase());

// trecia uzduotis

let string5 = "Scarlett";
let string6 = "Johannson";
let string7 = string5.charAt(0) + string6.charAt(0);

console.log(string7);

// ketvirta uzduotis

let string8 = "Johny";
let string9 = "Depp";
let string10 = string8.substring((string8.length - 3), (string8.length + 1)) + string9.substring((string9.length - 3), (string9.length + 1)) 

console.log(string10);

// penkta uzduotis

let string11 = "An American in Paris";
let string12 = string11.replace(/[Aa]/g, "*"); 
// let string12 = string11.replace(/A/gi, "*");

console.log(string12);

// sesta uzduotis

let string13 = "An American in Paris";
let string14 = string13.replace(/[aeiou]/gi, "")

console.log(string14); 

let string15 = "Breakfast at Tiffany's";

console.log(string15.replace(/[aeiou]/gi, ""));

let string16 = "2001: A Space Odyssey";

console.log(string16.replace(/[aeiou]/gi, ""));

let string17 = "It's a Wonderful Life"

console.log(string17.replace(/[aeiou]/gi, ""));

// septinta uzduotis

let string18 = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope";
 
console.log(string18[string18.length - 14]);

// astunta uzduotis

let string19 =  "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";  

let x = string19.split(" ");
let count = 0;
for (let i = 0; i < x.length; i++) {
    const word = x[i];
    if(word.length <= 5){
        count++;
    }
}
console.log(count)

let string20 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";

let y = string20.split(" ")
let counter = 0;

for (let i = 0; i < y.length; i++) {
    const word2 = y[i];
    if(word2.length <= 5){
        counter++
    }
}

console.log(counter)

// devinta uzduotis

let r = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 3);

console.log(r);

// desimta uzduotis

let p = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 3);

x = 