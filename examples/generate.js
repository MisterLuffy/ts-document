const path = require('path');
const { generate } = require('../lib');

const schema = generate(path.resolve(__dirname, 'a.tsx'), {
  sourceFilesPaths: ['**/*.ts', '**/*.tsx'],
  strictOrder: true,
});

console.log(JSON.stringify(schema, null, 2));
