const fs = require('fs') ; 
const path = require('path')
const dire = process.argv[2];
const exte =`.${process.argv[3]}`; 

fs.readdir(dire, (err ,list)=>{
    list.forEach(file=>{
        if(path.extname(file)=== exte) {
            console.log(file)
        }
    })
})