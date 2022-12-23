import Building from '/5-building.';

export default class SkyHighBuilding extends Building{
  constructor(sqft, floors){
    if (typeof sqft !== 'number'){
      throw new TypeError('sqft must be a number');
    }
    else if (typeof floors !== 'number'){
      throw new TypeError('sqft must be a number');
    }
    super._sqft = sqft;
    this._floor = floors;
  }
  
  get sqft(){
    return super._sqft;
  }
  get floors(){
    return this.floors;
  }
  
  evacuationWarningMessage(){
    return `Evacuate slowly the NUMBER_OF_FLOORS ${floors}`;
  }
}
