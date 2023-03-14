let ranNumber=Math.round(Math.random()*10)
document.querySelector("#submit").addEventListener('click',()=>{
    let guessNumber=Number(document.querySelector("#input").value)
    let status=document.querySelector("#status")
console.log(ranNumber,guessNumber)
if(ranNumber==guessNumber){
    status.innerHTML="you won the game"
    document.querySelector("#input").disabled="true"
    document.querySelector('#game').style.backgroundColor="green"
    document.querySelector('#input').classList.add("win")
    
}
else if(ranNumber>guessNumber){
    status.innerHTML="your number is small"
    document.querySelector('#game').style.backgroundColor="red"
   

}
else if(ranNumber<guessNumber){
    status.innerHTML="your number is big"
    document.querySelector('#game').style.backgroundColor="red"
    
    


}
})
