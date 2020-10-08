/*
*
*
*       Complete the handler logic below
*       
*       
*/

const units = {
  gal:'L',
  L:'gal',
  lbs:'kg',
  kg:'lbs',
  mi:'km',
  km:'mi'
}


function ConvertHandler() {
  
this.getNum = function(input) {
  const unit = this.getUnit(input);


  if (unit === null){
    return null;
  } 

  const calc = input.split(unit)[0];

  try {
  const result = eval(calc === '' ? 1 : calc);

  return result;
  } catch(e){
    return null;
  }
}; 
  
  
  this.getUnit = function(input) {

    const reg =/(gal)|(L)|(lbs)|(kg)|(mi)|(km)$/;

    const result = input.match(reg);

    return result === null ? null :result[0];
  };
  
  this.getReturnUnit = function(initUnit) {
    if(initUnit === null) {
      return null;
    }
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    var result = unit;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const LtoGal = 1/ galToL;
    const kgToLbs = 1/ lbsToKg;
    const kmToMi = 1 / miToKm;


    if(initNum === null) {
      return null;
    }
    switch(initUnit){
      case 'gal':{

        return initNum * galToL;
      }
      case 'L':{

        return initNum * LtoGal;
      }
      case 'lbs':{

        return initNum * lbsToKg;
      }
      case 'kg':{

        return initNum * kgToLbs;
      }
      case 'mi':{

        return initNum * miToKm;
      }
      case 'km':{

        return initNum * kmToMi;
      }

      default:{
        return null;
      }
    }

    var result = initNum;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    if(initNum === null || initUnit === null || returnNum ===null || returnUnit ===null){
      return null;
    }

    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
  };
  
}

module.exports = ConvertHandler;
