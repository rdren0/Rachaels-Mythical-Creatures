class Wizard{
  constructor(WizardObject){
    this.name = 'Jhun';
    this.counter = 0;
    this.isRested = true;
    if (WizardObject.bearded === false){
      this.bearded = false;
    } else{
      this.bearded = true;
    }
  }
  


  incantation(power){
    this.counter++;
    if(this.counter <=3)
      {
        return power.toUpperCase();
      }
      else{
        return 'I SHALL NOT CAST!;'
      }
    
  }
}


module.exports = Wizard;




///npm test mythical-creatures/test/wizard-test.js //