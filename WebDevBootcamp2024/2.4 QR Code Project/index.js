/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([{
        message: "Enter an image URL: ",
        name: "URL"
    
    }])
  .then((answers) => {
    console.log("Good so far");
    qr.image(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
        console.log("Fail");
    }
  });

