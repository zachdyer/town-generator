Math.randomSeed = function(seed){
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}
Math.randomSeedBetween = function(seed, min, max) {
  return Math.floor(Math.randomSeed(seed) * (max - min)) + min
}
Array.prototype.pick = function(seed){
  return this[Math.randomSeedBetween(seed,0,this.length)]
}
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1)
}
function Town(x, y){
  this.x = x
  this.y = y
  let seed = x + y
  let syllables = ['g','gh','s','p','br','am','ch','at','lan','tic','th','sh']
  let vowels = ['a','e','i','o','u']
  let finalWord = [null, 'City','Town', 'Villiage']
  let sCount = Math.randomSeedBetween(seed++, 2, 5)
  let name = ''
  for(let i = 0; i < sCount; i++){
    name += syllables.pick(seed+=100)
    name += vowels.pick(seed+=100)
  }
  finalWord = finalWord.pick(seed++)
  if(finalWord)
    this.name = name.capitalize() + ` ${finalWord}`
  else
    this.name = name.capitalize()
  this.population = Math.randomSeedBetween(seed++, 10, 100000)
}

let town = new Town(0,0)
console.log(town)
document.getElementById('town-output').innerHTML = JSON.stringify(town)