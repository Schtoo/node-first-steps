const chalk = require('chalk')
const hello = require('./greet')
const styledMessage = chalk.bgBlue.black(hello('Schtoo'))
console.log(styledMessage)

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


