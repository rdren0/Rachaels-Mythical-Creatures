class Pirate{
  constructor(name, job){
    this.name = name;
    this.counter = 0;
    this.booty = 0;
    this.cursed = false;
    if (job ===  undefined){
      this.job = 'Scallywag';
      } else {
      this.job = job;
      }
    }
  
  commitHeinousAct(){
    this.counter++;
    if(this.counter >=3)
      {
        this.cursed = true;
      }
    }
  
  robShip(booty){
    this.booty = this.booty + 100;
    return 'YAARRR!';
    }
  
}
  
module.exports = Pirate;

// npm test mythical-creatures/test/pirate-test.js

