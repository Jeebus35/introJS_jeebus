//2.2.2 Pyramide de Mario

let n = prompt ('Salut, bienvenue dans ma super pyramide ! Combien d_étages veux-tu ?'); 
let a = '#';
let b = ' ';
for (let i = 0; i <= n; i++) {     
  stage = b.repeat(n-i) + a.repeat(i)  ;
  console.log(`${stage}`);
}

