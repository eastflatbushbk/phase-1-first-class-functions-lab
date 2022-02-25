// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    const firstTwo = drivers.slice(0,2);
    return firstTwo;
}
const returnLastTwoDrivers = function(){
    const lastTwo = drivers.slice(2,4);
    return lastTwo;
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
         return function (){return fare * fare; } ;
}
function fareDoubler(fare){
        return fare * 2;
}
function fareTripler(fare){
    return fare * 3;
}
function selectDifferentDrivers(drivers, func){
    const result =[] ;
          if ( func === returnLastTwoDrivers){ const value = returnLastTwoDrivers();
            result.push(value);
             }
    else if ( func === returnFirstTwoDrivers){ const value = returnFirstTwoDrivers();
        result.push(value) ;
          }
          const finalResult = result.shift();
                 return finalResult;
          }                