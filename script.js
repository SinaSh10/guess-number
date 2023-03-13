let ranNumber=Math.round(Math.random()*10)
document.querySelector("#submit").addEventListener('click',()=>{
    let guessNumber=Number(document.querySelector("#input").value)
console.log(ranNumber,guessNumber)
if(ranNumber==guessNumber){
    console.log("you are winner")
}
else if(ranNumber>guessNumber){
    console.log("small")
}
else if(ranNumber<guessNumber){
    console.log("big")
}
})
