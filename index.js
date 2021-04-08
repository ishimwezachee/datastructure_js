function mergesortedArray(arr1,arr2){
    // create a empty array 
    // nested loop and compares the element of both arrays to keep the sam
    // return the created array 

    let newArr = [];
    for(let i =0; i< arr1.length;i++){
        newArr.push(arr1[i]);
    }

    for(let j =0; j< arr2.length;j++){
        newArr.push(arr2[j]);
    }

   return newArr;
}


// Another method that should be used are hash tables methods 

// console.log(mergesortedArray([0,3,4,31],[4,6,31]));


for(let step =0; step<5; step++){  // 0,1,2,3,4,5
    console.log('I am going step one  East')
}