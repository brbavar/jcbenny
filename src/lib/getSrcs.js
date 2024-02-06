import { scanDatabase } from './scanDatabase';

const srcs = [];

scanDatabase('/merch', {
  params: {
    expressionAttributeNames: { '#M': 'Merch' },
  },
}).then((items) => {
  if (items) for (let item of items) srcs.push(item[2].S);
});

export { srcs };
