import {
    apiKey as key,
    host, greet, address, tallinn} from './config';

import person from './person';
import wierdPerson from './person';

console.log('main.js');
console.log(key, host);
greet('John');
console.log(person);
console.log(address, tallinn);