class Werewolf{
  constructor(name, location, hungry){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }


  change(wolf, human){
    if (this.wolf === true){ 
      this.wolf = false;
      this.human = true;
      this.hungry = false;
    } else{
      this.wolf = true;
      this.human = false;
      this.hungry = true;
      }
    }
    eat(victim) {
      if (this.hungry === true){
        victim.alive = false;
        this.hungry = false;
        this.wolf = false;
        this.human = true;
      } else{
      }
  }

  
}




module.exports = Werewolf;

///npm test mythical-creatures/test/werewolf-test.js //