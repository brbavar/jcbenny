import { scanDatabase } from './scanDatabase';

const nameDups = new Map();

scanDatabase('/names-of-users').then((namesOfUsers) => {
  for (let name of namesOfUsers) {
    const fullName = `${name['First name']} ${name['Last name']}`;
    if (nameDups.has(fullName))
      nameDups.set(fullName, nameDups.get(fullName) + 1);
    else nameDups.set(fullName, 1);
  }
});

export { nameDups };
