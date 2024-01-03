import { scanDatabase } from './scanDatabase';

const namesOfUsers = scanDatabase('/names-of-users');
const nameDups = new Map();

// alert(namesOfUsers);

for (let name of namesOfUsers) {
  const fullName = `${name['First name']} ${name['Last name']}`;
  if (nameDups.has(fullName))
    nameDups.set(fullName, nameDups.get(fullName) + 1);
  else nameDups.set(fullName, 1);
}

export { nameDups };
