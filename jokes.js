   const jokesters = require ('give-me-a-joke');
   const colors = require ('colors')
   jokesters.getRandomDadJoke (function(joke) {
     console.log(joke.rainbow);
   });


//JSON PACKAGES
//   const figlet = require('figlet');
//   const colors = require ('colors')
//   figlet('Hello World', function(err, data){
//     if (err){
//       console.log('Something went wrong');
//       return;
//       console.dir(err);
//     console.log(data.blue);
//     }
//   })