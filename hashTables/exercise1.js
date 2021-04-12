// given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2


// Given an array = [2,1,1,2,3,5,1,2,4];

// it should return 1

// Given an array = [2,3,4,5];

// return undefined 

 function firstRecurringCharacter2(input){
     let map = {};
     for(let i =0; i<input.length;i++){
         if(map[input[i]]!== undefined){
             return input[i]
         }else{
             map[input[i]]  = i
         }
         console.log(map)
     }
 }

 firstRecurringCharacter2([2,3,4,5])

