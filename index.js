
console.log(fizzbuzz('x'))


function fizzbuzz(a){
  if (typeof a === 'number'){
     if (a%3===0 && a%5===0){
        return 'fizzbuzz'
     }
     else if(a%5===0){
        return 'buzz'
     }
     else if (a%3===0){
        return 'fizz'
     }
     else{
        return a

     }


  }
  else{
    return 'not a number'
  }
}