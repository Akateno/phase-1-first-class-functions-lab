// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (drivers){
return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers)=>{
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
selectingDrivers[0];

function createFareMultiplier(fare){
    const fareMultiplier = ()=> {
        return fare*fare
    }
    return fareMultiplier
}
const fareDoubler = function(faress){
    return (faress*2)
}
const fareTripler = function(faresss){
    return (faresss*3)
}
const selectDifferentDrivers = function (drivers, returnLastTwoDrivers){
     return returnLastTwoDrivers(drivers)

}


// function createFareMultiplier(fare)
//{
//      const fareMultiplier = () =>
//     {
//         return fare*fare
//     }
//     return fareMultiplier
// }



