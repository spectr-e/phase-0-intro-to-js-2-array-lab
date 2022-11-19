// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}
function destructivelyPrependCat(name) {
  return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  return cats.pop();
}
function destructivelyRemoveFirstCat() {
  return cats.shift();
}
function appendCat(name) {
  let newCats = [];
  return (newCats = [...cats, name]);
}
function prependCat(name) {
  let newCats = [];
  return (newCats = [name, ...cats]);
}
function removeLastCat() {
  let newCats = [];
  return (newCats = cats.slice(0, -1));
}
function removeFirstCat() {
  let newCats = [];
  return (newCats = cats.slice(1));
}
