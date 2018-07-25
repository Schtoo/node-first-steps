const figlet = require('figlet');
const greet = require('./greet');

figlet('Hello Schtoo', function(err, data) {
  if (err) {
    console.log('Something went wrong..');
    console.log(err);
    return;
 }
  console.log(data)
});
