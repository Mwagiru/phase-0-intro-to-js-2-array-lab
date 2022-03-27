// Write your solution here!
 const cats=["Milo", "Otis","Garfield"];
 function destructivelyAppendCat(name){
     cats.push("Ralph");
     console.log(cats);
 }
 destructivelyAppendCat();
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    console.log(cats);
}
destructivelyPrependCat();
//
function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);
}
destructivelyRemoveLastCat();
function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
}
destructivelyRemoveFirstCat();
function appendCat(name){
    const lotsaCats = [...cats, "Broom"];
    console.log(lotsaCats);
}
appendCat();



  
