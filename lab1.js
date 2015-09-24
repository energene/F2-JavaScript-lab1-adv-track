'use strict';
/* LAB 1: A Trip to Woodland Park Zoo

Welcome to Lab 1 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below. Look for the
word TODO in comments.  Each TODO will have a description of what is
required.

To run this file, type the following (in the terminal):

node lab1.js

and then press enter/return.

Instructions for turning this lab in are in the assignment description in
Canvas.

I'm happy to answer any questions on Slack.

*/
/* ----------------- Helper ------------------------------------------------
We've implemented a function that will help you sanity-check your code.
*/
  function assert(expression, failureMessage) {
    if (!expression) {
      console.log('assertion failure: ', failureMessage);
    }
  }
/*
An assertion is something we expect to be true about the state of the
program at the point where the assertion is made.

Remember, state is all the variables that we've declared and their current
values.

Here are some examples for how to use the assert method:
*/
//assert(1 === 1, '1 equals 1 - this assert will pass.');
//assert(1 === 2, 'this is an example of a failing assertion. 1 does not equal 2.');
/* ===========================================================================
------------------Assertions (8 points total)---------------------------------
==============================================================================
TODO: Invoke assert twice (4 points each).
(In other words, create two assertions like the ones
above.)
Use any boolean expressions that you like, but preferably
zoo-themed.  Make one pass and one fail. In the failure message, describe why
it failed.
*/
//your code goes here
  var penguins = 30;
  var birds = 30;
  var elephants = 0;
  assert(penguins === birds);
  assert(elephants === birds, 'this fails, 0 does not equal 30.');
/* ========================================================================
----------------- Meerkats (20 points total)-------------------------------
===========================================================================
Meerkats make a sort of chirping noise (according to my 30 seconds of
research).  We're going to translate two sentences into meerkat speech.
*/
  var sentence1 = 'More food please.';
  var sentence2 = 'Come over here so you can scratch my belly.';
/*
Your goal is to replace the words in the above sentences with 'chirp' The
assertions at the end of this section should pass when you're done.
HINT: the 'split' method on String will be useful.
*/
// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)
// your code goes here
  var sentence1Split = sentence1.split(' '); //new array created with 3 elements
  sentence1 = ''; //emptied sentence1 variable
  for (var i = 0; i < sentence1Split.length; i++) {
    sentence1Split[i] = 'chirp'; //changed every word to chirp
    sentence1 += sentence1Split[i] + ' '; //+= each chirp to sentence1
  }
  sentence1 = sentence1.substring(0, sentence1.length - 1); //nuked the space off end
  sentence1 += '.'; //added the period
  console.log(sentence1); //checked work
// TODO: part #2: use a while or do-while loop to replace the words in sentence 2
// with 'chirp' (10 points)
// your code goes here
  { //added wrapper to make sure variable i is contained
  var i = 0;
  var sentence2Split = sentence2.split(' '); //new array created with 9 elements
  sentence2 = '';
  while (i < sentence2Split.length) {
    sentence2Split[i] = 'chirp';
    sentence2 += sentence2Split[i] + ' ';
    i++;
  }
  sentence2 = sentence2.substring(0, sentence2.length - 1);
  sentence2 += '.';
  console.log(sentence2);
  }
// Leave these assertions as-is! If they pass, your code works.
assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.',
  'sentence 2 should have 9 chirps');
/* ========================================================================
----------------- Favorite Animals (12 points)-----------------------------
===========================================================================
The zoo is closing in 20 minutes. You still haven't seen your four favorite
animals. You only have time for one. Use Math.random() to pick which animal
to see next.
Hint: read the Math.random description on MDN.
*/
var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];
var nextAnimal;
// TODO: 12 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick
// your code goes here
nextAnimal = favoriteAnimals[Math.floor(Math.random() * favoriteAnimals.length)];
assert(nextAnimal, 'assign something to nextAnimal');
/* ===================================================================
----------------- Hungry Lion (20 points) ----------------------------
======================================================================
As long as the lion is well-fed, he doesn't take too much heed of the
humans that pass through. Unfortunately, the new caretaker is a little
absent minded.

The lion needs 4 meals per day on average to stay happy. You're going to
figure out how many days it took before the lion decided to supplement his
diet with the caretaker.
*/
// number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;
/*
TODO: 20 points
Cycle through the days in mealsPerDay. At each day, print out the average
number of meals/day the lion got since the new caretaker started.
tooHungryDay should receive the number of days before the lion started
pondering protein supplements (the first day the average dips below 4
meals)
*/
//your code goes here
var totalMeals = 0; //we need total meals to calc daily average
var mealsAverage = 0;
for (var i = 0; i < mealsPerDay.length; i++) {
  var day = i + 1; //i is zero-based, day count is one-based
  totalMeals = totalMeals + mealsPerDay[i]; //added the daily meals to our total
  mealsAverage = totalMeals / day;
  console.log('Average meals on day ' + day + ' = ' + mealsAverage);
  if (mealsAverage < 4 && !tooHungryDay) { //we need the comparator to flag the first tooHungryDay
    tooHungryDay = day;
  }
}
console.log('tooHungryDay is Day ' + tooHungryDay); //checking our work
console.log('test');
assert(tooHungryDay, 'remember to assign the answer to tooHungryDay');
assert(tooHungryDay < 10, 'the lion is too hungry before the end of the array');
/* ==================================================================
----------------- Code Style (10 points) ----------------------------
=====================================================================
TODO: 10 points (5 points each for passing jshint and jscs)
Now, we're going to use two tools: jshint and jscs, to check our code for
best-practices and style consistency.

If you haven't already, run this command in the terminal (inside of this
directory): npm install

Now, type
grunt
and it will run both jshint and jscs on your code.

Error and warning descriptions will be printed in the terminal.
To get full points, correct all of the errors/warnings.
*/
