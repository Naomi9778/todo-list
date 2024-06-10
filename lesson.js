const data = ['a', 'b', 'c',1, 2, 3] 

// data.map(( element) => {
//     if (typeof element === 'string') {
//     return element + 'hello';
//     }
//     return element * 10 ;
    
// })
 


const stringArr = [];

const numArr = [];

 data.map((element) => {
        if ( typeof element === 'string'){
           stringArr.push(element)
        } else {
            numArr.push(element)
        }
    })

console.log(stringArr)
console.log(numArr)

data.map