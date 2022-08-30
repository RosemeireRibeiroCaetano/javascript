const notas = [10, 6.5, 8, 7]

const media = notas.reduce((a,b) => b + a,0)/notas.length
console.log(`A média é ${media}`)