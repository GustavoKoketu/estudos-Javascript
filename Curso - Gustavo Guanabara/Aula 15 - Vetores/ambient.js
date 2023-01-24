let num = [5,8,2,9,3]

console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.push(1)
console.log(num)

num.sort()
console.log(num)

num[6] = 4
console.log(num)

// for (let i=0;i<num.length;i++){
//     console.log(num[i])
// }

// for (let i in num){
//     console.log(num[i])
// }

console.log(num.indexOf(5))
console.log(num.indexOf(6))
