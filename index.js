// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue -42); 
  }
  
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; 
  }
  
  function distanceTravelledInFeet(start, stop) {
    return Math.abs(start - stop) * 264; 
  }
  
  function calculatesFarePrice(start, stop) {
    const distance = distanceTravelledInFeet(start, stop);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance < 2500) {
      fare = 25; 
    } else {
      return 'cannot travel that far'; 
    }
  
    return fare;
  }
  
  /*
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  }; 
  */

  
