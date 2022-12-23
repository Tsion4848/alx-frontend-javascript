import Building from '/5-building';

class SkyHighBuilding extends Building{
  constructor(sqft, floors){
    super(sqft);
    this._floor = floors;
  }
  
  get floors(){
    return this._floors;
  }
  
  evacuationWarningMessage(){
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}

export default SkyHighBuilding;
