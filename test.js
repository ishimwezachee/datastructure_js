// hashing a function 


function hashing(key){
    let hash = 0;

    for(let i =0; i< key.length;i++){
        hash = (hash + key.charCodeAt(i)*i)% key.length
    }
    return hash;
}


console.log(hashing('this'))