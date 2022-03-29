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
    const newCats = [...cats, "Broom"];
    return newCats;
}
appendCat();
function prependCat(name) {
    const lotCats = ["Arnold", ...cats];
    return lotCats;
}
prependCat();
function removeLastCat(name) {
    const newPaka = [...cats];
    newPaka.pop();
    return newPaka;
}
removeLastCat();
function removeFirstCat(name) {
    const lotPaka = [...cats];
    lotPaka.shift();
    return lotPaka;
}
removeFirstCat();

  
