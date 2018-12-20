class Centaur{
  constructor(name){
    this.name = name;
    this.breed = "Palomino";
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
    this.layingDown = false;
  }
  shoot(){
    this.counter++;
    if (this.counter > 2) {
        this.cranky = true;
        return "NO!"
    }else if(this.layingDown === true){
        return "NO!"
    }else{
      return "Twang!!!";
      } 
    }
  


  run(){
    this.counter++;
    if (this.counter >2) {
      this.cranky = true;
      return "NO!"
    }else if(this.layingDown === true){
      return "NO!"
    }else{
      return "Clop clop clop clop!!!";
    }
  }

  sleep(){
    if(this.standing === true){
      return "NO!";
    } else{
      this.cranky = false;
      this.counter = 0;
      return "ZZZZ";
    }
  }

  layDown(){
    this.layingDown = true;
    this.standing = false;
  }
  
  standUp(){
    this.layingDown = false;
    this.standing = true;
  }

  drinkPotion(){
    if (this.layingDown === true){
      return "Not while I\'m laying down!";
    }else if( this.counter <= 2){
      this.cranky = true;
      return;
    }else{
      this.counter = 0;
      this.cranky = false;
    }
  } 


}


module.exports = Centaur;

///npm test mythical-creatures/test/centaur-test.js //