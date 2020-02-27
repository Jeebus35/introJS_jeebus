const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];




//***********Est-ce que tous les livres ont été au moins empruntés une fois ?
prompt("Est-ce que tous les livres ont été au moins empruntés une fois ?")

for (let index in books) {
  let rent = books.rented
  if (rent === 0) {
    console.log('Non')
  }
  else {
    console.log('Oui')
  }
}



//***********Quel est livre le plus emprunté ?
prompt("Quel est livre le plus emprunté ?")

loanArray=[]
for (let index in books) {
  let loan = books[index]
  loanArray.push(loan.rented)  
  }
let mostLoan = Math.max(...loanArray)
let mostLoanIndex = loanArray.indexOf(mostLoan)
let mostLoanBook = books[mostLoanIndex].title
console.log(`${mostLoanBook}`)



//***********Quel est livre le moins emprunté ?
prompt("Quel est livre le moins emprunté ?")

loanArray=[]
for (let index in books) {
  let loan = books[index]
  loanArray.push(loan.rented)  
  }
let lessLoan = Math.min(...loanArray)
let lessLoanIndex = loanArray.indexOf(lessLoan)
let lessLoanBook = books[lessLoanIndex].title
console.log(`${lessLoanBook}`)



//***********Trouve le livre avec l'ID: 873495 ;
prompt("Trouve le livre avec l'ID: 873495")

let idArray1 = []
for (let index in books) {
  idArray1.push(books[index].id)
} 
let idIndex1 = idArray1.indexOf(873495)
console.log(`${books[idIndex1].title}`)



//***********Supprime le livre avec l'ID: 133712 ;
prompt("Supprime le livre avec l'ID: 133712")

var listBooks = []
let idArray2 = []
for (let index in books) {
  idArray2.push(books[index].id)
  listBooks.push(books[index].title)
} 
let idIndex2 = idArray2.indexOf(133712)
let finallistBooks = listBooks.splice(idIndex2,1)
console.log(`${listBooks}`)



//************Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
prompt("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")

let sortedlistBooks = listBooks.sort()
console.log(`${sortedlistBooks}`)




