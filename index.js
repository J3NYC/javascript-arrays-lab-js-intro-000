var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrpendKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitt() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}
// Add your functions and code here
