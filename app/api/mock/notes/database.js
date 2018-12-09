import loremIpsum from 'lorem-ipsum';

const loremParams = {
  count: 1,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7,
  format: 'plain',
};

const generate = (id) => (id + ': ' + loremIpsum(loremParams));

const notes = [
  "Default user note", // 0
  generate(1), // 1
  generate(2), // 2
  generate(3), // 3 
  generate(4), // 4
  generate(5), // 5
  generate(6), // 6
  generate(7), // 7
  generate(8), // 8
  generate(9), // 9
  generate(10), // 10
  generate(11), // 11
  generate(12), // 12
];

export default notes;
