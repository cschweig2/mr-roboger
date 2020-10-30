# Mr. Roboger's Neighborhood

#### Code Review for Epicodus, 10.30.2020

#### **By Chelsea Becker**

## Description

_This application takes a number from a user and returns a range of numbers from 0 up to the user's inputted number. The application will replace all 1's or numbers containing 1's with "Beep!", replace all 2's and numbers containing 2's with "Boop!", and it will replace all 3's and numbers containing 3's with "Won't you be my neighbor?", in order of priority. Numbers containing 3's receive top priority, followed by 2's, then 1's._

## Setup/Installation Requirements
### View Online
1. _Open the webpage at https://cschweig2.github.io/mr-roboger._
2. _Enter a number from 1 to 50._
3. _Wait for Mr. Roboger's reply._
4. _Enter a new number if you would like for Mr. Roboger to count again._

### View locally (on computer)
1. _Open web browser and go to https://github.com/cschweig2/mr-roboger._
2. _After clicking the green "code" button, you can copy the URL for the repository._
3. _Open a terminal window, such as Command Prompt or Git Bash
  3a. Type in this command: "git clone", followed by the URL you just copied. The full command should look like this: "git clone https://github.com/cschweig2/mr-roboger"._
4. _You may view the website displaying the application by clicking the index.html file or view the code on your favorite text editor, such as Visual Studio Code._

## Known Bugs

_There are no known bugs at this time._

## Test Specs

Describe: roboger();

Test: "It returns a warning message if the user enters a letter."<br>
Expect(roboger("a")).toEqual("Please enter numbers only.");

Test: "It converts the user's input to an integer from a string."<br>
Expect(roboger("23")).toEqual(23);

Test: "It returns a warning message if the user enters a number outside of the range of 1-50."<br>
Expect(roboger(0)).toEqual("Please enter a number between 1 and 50.");

Test: "It stores the user's input in a for loop"<br>
Expect(roboger(10)).toEqual(0,1,2,3,4,5,6,7,8,9,10);

Test: "It converts the number 1 back to a string"<br>
Expect(roboger(1)).toEqual(0,"1");

Test: "It replaces each instance of 1 with the word 'Beep!'"<br>
Expect(roboger(5)).toEqual(0,"Beep!",2,3,4,5);

Test: It converts the number 2 back to a string"<br>
Expect(roboger(2)).toEqual(0,"1","2");

Test: "It replaces each instance of 2 with the word 'Boop!'"<br>
Expect(roboger(5)).toEqual(0,"Beep!","Boop!",3,4,5);

Test: "It converts the number 3 back to a string"<br>
Expect(roboger(3)).toEqual(0,"1","2","3");

Test: "It replaces each instance of 3 with the words 'Won't you be my neighbor?'"<br>
Expect(roboger(5)).toEqual(0,"Beep!","Boop!","Won't you be my neighbor?",4,5);

Test: "It replaces all numbers with 'Won't you be my neighbor?' for numbers starting or ending with a 3."<br>
Expect(roboger(13)).toEqual(0,1,2,3,4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?");

Test: "It replaces all numbers with 'Boop!' for numbers starting with a 2 or ending with a 2, except when starting or ending with a 3."<br>
Expect(roboger(12)).toEqual(0,1,2,3,4,5,6,7,8,9,10,11,"Boop!");

Test: "It replaces all numbers with 'Beep!' for numbers starting with a 1 or ending with a 1, except when starting or ending with a 2 or 3."<br>
Expect(roboger(15)).toEqual(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,"Beep!");

Test: "If the user's number is greater than 45, Mr. Roboger will say 'Whew, that was a lot!'"<br>
Expect(roboger(46)).toEqual("Whew, that was a lot!");

## Support and contact details

_If you run into any issues, you can contact the creator at cschweig2@gmail.com, or make contributions to the code on GitHub via forking and creating a new branch._

## Technologies Used

_VS Code_ <br />
_HTML_ <br />
_CSS_ <br />
_Bootstrap_ <br />
_JavaScript_ <br />
_JQuery_

## Legal

*This software is licensed under the MIT license.*

Copyright (c) 2020 **Chelsea Becker**