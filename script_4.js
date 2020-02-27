//2.3.1 Startup Nation

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];




//***********Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70

prompt('Quels entrepreneurs sont nés dans les années 70?')

let count = 0;

for(let index in entrepreneurs) {
  let entrepreneur = entrepreneurs[index]
  if (entrepreneur.year >= 1970 && entrepreneur.year <= 1980) {
  count += 1;
 }
} 
console.log(`Les entrepreneurs des années 70 sont au nombre de : ${count}`);




//***********Sors une array qui contient le prénom et le nom des entrepreneurs

prompt('Sors une array qui contient le prénom et le nom des entrepreneurs');

let nameArray = [];
for(let index in entrepreneurs) {
  let entrepreneur = entrepreneurs[index];
  nameArray.push(entrepreneur.first, entrepreneur.last);
}
console.log(`${nameArray}`);




//***********Quel âge aurait chaque inventeur aujourd'hui ?

prompt('Quel âge aurait chaque inventeur aujourd_hui ?');

for (let index in entrepreneurs) {
  let entrepreneur = entrepreneurs[index];
  let age = 2020 - entrepreneur.year;
  let f_n = entrepreneur.first;
  let l_n = entrepreneur.last;
  console.log(`${f_n + ' ' + l_n} a/aurait ${age} ans aujourd_hui`);
}




//***********Trie les entrepreneurs par ordre alphabétique du nom de famille

prompt('Trie les entrepreneurs par ordre alphabétique du nom de famille');

last_name_Array = [];
for(let index in entrepreneurs) {
  let entrepreneur = entrepreneurs[index];
  last_name_Array.push(entrepreneur.last);
}
sorted_Array=last_name_Array.sort();
console.log(sorted_Array)