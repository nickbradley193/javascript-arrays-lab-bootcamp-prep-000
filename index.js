const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(name) {
  return [...kittens, name];
}

kittens = ["Milo", "Otis", "Garfield"];

function prependKitten(name) {
  return [name, ...kittens];
}

kittens = ["Milo", "Otis", "Garfield"];

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length-1);
  return newKittens;
}

kittens = ["Milo", "Otis", "Garfield"];

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}

kittens = ["Milo", "Otis", "Garfield"];