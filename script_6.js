
let Molec = prompt('Donne moi ta molécule')

var a = Molec.slice(0,2)
var b = Molec.slice(3,5)
var c = Molec.slice(6,8)
var d = Molec.slice(9,11)

if (a==='UCU' || a==='UCC' || a==='UCG' || a==='AGU' || a==='AGC') {
    a = 'Sérine'
 }   
else if (a==='CCU' || a==='CCC' || a==='CCA' || a==='CCG') {
  a = 'Proline'
}

console.log(`${a}`)