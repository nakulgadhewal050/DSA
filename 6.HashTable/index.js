const person = {
    name: "jhone Doe",
    profession: "Software Engineer",
    age: 30,
    city: "New York"
}

                               


function simpleHash (key, size){
    let total = 0
    for(let i = 0; i<key.length; i++){
       
        let asciCode = key[i].charCodeAt(0)
         total += asciCode
    }
    return total % size
}

console.log(simpleHash("asdfg", 10))