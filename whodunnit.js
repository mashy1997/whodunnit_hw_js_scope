// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// //Miss Scarlet is the murderer because scenario has lexical scope so the declareMurderer function can access the scenario variable, therefor it can see that the murdere is Miss Scarlet

// -----------------------------------------------------------------------

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// //the murderer will be professor plum as the murderer variable is a const, therefore will give an error message

// -----------------------------------------------------------------------

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//first verdict will be Mrs. Peacock as the murderer variable is a let, the second verdict will also be Mrs. Peacock as through hoisting, the variable has changed from professor plum to mrs. peacock. 
// right, so second one i was wrong as it is professor plum because mrs. peacock is only ever defined in the function declareMurderer, and as secondVerdict tries to find the murderer variable it will be professor plum.

// -----------------------------------------------------------------------

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// suspects will be miss scarlet, professor plum and colonel mustard as suspects is calling from the declareAllSuspects variable and this will change to colonel mustard as it changes within the variable so it is block scoped. 
//the second console log will be mrs peacock as one again, it is accessing the variable suspect 3 which is mrs peacock instead of colonel mustard

// -----------------------------------------------------------------------


// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

  //the verdict will be that the weapon is revolver as all of scenario is in one function which will all know the changing of variables

  // -----------------------------------------------------------------------


//   let murderer = 'Colonel Mustard';

//   const changeMurderer = function() {
//     murderer = 'Mr. Green';
  
//     const plotTwist = function() {
//       murderer = 'Mrs. White';
//     }
  
//     plotTwist();
//   }
  
//   const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);

//change murderer is mrs white and as this function gets called before the verdict variabl, the murderer would be changed from mr green to mrs white. 

// -----------------------------------------------------------------------


// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//         murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//the murderer is colonel mustard as in the change murderer function, the unexpected outcome of miss scarlet is called but then straightafterwards the plot twist is called which would be colonel mustard.
//okay i am wrong, the murdere is mr green and i am guessing this because on line 127 the murderer is let, so it may pass the murderer as colonel mustard but will never print back that it is him, but mr green

// -----------------------------------------------------------------------

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

//the weapon is candlestick

// -----------------------------------------------------------------------

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//murderer is mrs. peacock
//i am wrong it is professor plum and i am guessing it is because the let  murderer variable at line 194 is block scoped.