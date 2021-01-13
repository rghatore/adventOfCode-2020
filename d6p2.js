/*
As you finish the last group's customs declaration, you notice that you misread one word in the instructions:

You don't need to identify the questions to which anyone answered "yes"; you need to identify the questions to which everyone answered "yes"!

Using the same example as above:

abc

a
b
c

ab
ac

a
a
a
a

b
This list represents answers from five groups:

In the first group, everyone (all 1 person) answered "yes" to 3 questions: a, b, and c.
In the second group, there is no question to which everyone answered "yes".
In the third group, everyone answered yes to only 1 question, a. Since some people did not answer "yes" to b or c, they don't count.
In the fourth group, everyone answered yes to only 1 question, a.
In the fifth group, everyone (all 1 person) answered "yes" to 1 question, b.
In this example, the sum of these counts is 3 + 0 + 1 + 1 + 1 = 6.

For each group, count the number of questions to which everyone answered "yes". What is the sum of those counts?
*/
const fs = require('fs');

const countMatching = (groupAnswers) => {

  let sum = 0;
  // split each group into persons
  for (let group of groupAnswers) {
    // split at newline 
    persons = group.split('\n');
    // console.log(`${persons} ${persons.length}\n`);
    const orgLength = persons.length;
    // when there is only one person, all answers are counted
    if (orgLength === 1) {
      sum = sum + persons[0].length;
    } else {
      // loop through the first string
      for (let i = 0; i < persons[0].length; i++) {
        const letter = persons[0][i];
        // check if the letter exists in each element
        let length = persons.length;
        let num = 1;
        while (length - 1 > 0) {
          if (persons[length - 1].includes(letter)) {
            num++;
          } else {
            break;
          }
          if (num === orgLength) {
            sum++;
          }
          length--;
        }
      }
    }
  }

  return sum;
}


fs.readFile('./data/day6_data.txt', 'utf-8', (error, data) => {

  if (error) throw error;
  // split double new line
  const groups = data.split('\n\n');

  console.log(countMatching(groups));

});