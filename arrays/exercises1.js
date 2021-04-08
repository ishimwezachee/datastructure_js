/**create a function that reverses a string*/

function reverse(str){
   // check the input 
   if(!str || str.length<2 || typeof str !=='string'){
       return 'hmm that is not good '
   }

   const backwards =[];
   for(let i = str.length-1; i>=0; i--){
       backwards.push(str[i])
   }
   return backwards.join('');
}


function reverse2(str){
  return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('');


console.log(reverse3('Hi My name is Andrei'));