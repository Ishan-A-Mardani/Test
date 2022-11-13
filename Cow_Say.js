const cowsay = require("cowsay");

// console.log(
//   cowsay.say({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U ",
//   })
// );

// console.log(
//   cowsay.say({
//     text: "MY NAME IS ISHAN",
//     e: "$$",
//     T: "YY",
//   })
// );

var oneLinerJoke = require('one-liner-joke')

const getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
  'exclude_tags': ['dirty', 'racist', 'marriage']
});

console.log(getRandomJoke);

console.log(
  cowsay.say({
    text: getRandomJoke['body'],
    e: "$$",
    T: "YY",
  })
);