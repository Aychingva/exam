function swap(text){
    let result=""
    for (let i=0;i<text.length;i++){
       
        if (text[i]===text[i].toUpperCase()){
            result+=text[i].toLowerCase()
        }else{
            result+=text[i].toUpperCase()
        }
    }
    return result
}

let word="heLlO"
let result=swap(word)
console.log(result)