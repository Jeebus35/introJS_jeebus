//2.2.1 Calculs rapides

let n =prompt('De quel nombre veux-tu calculer la factorielle ?');
if (n === 0) {
  console.log('Le résultat est : 1');
} 
 else {
  let i = 1
  let f = 1
  while (i <= n) {
  f = f*i
  i  +=1 
}
  console.log(`Le résultat est : ${f}`)
}

