const { number } = require('yargs')

const input =process.argv.slice(2)
const result = input.reduce((acc , num)=>{
    return acc+ +num
},0)
console.log(result)