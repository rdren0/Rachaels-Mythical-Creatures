class Vampire {
  constructor(name,pet){
    this.thirsty = true;
    this.name = name;
    if (pet ===  undefined){
      this.pet = 'bat';
    } else {
      this.pet = pet;
    }
  }
drink(){
   this.thirsty = false;}
}

module.exports = Vampire;