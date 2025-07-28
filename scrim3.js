let score_a = document.getElementById("score-a")
let score_b = document.getElementById("score-b")
let foul_a = document.getElementById("foul-a")
let foul_b = document.getElementById("foul-b")
let lead = document.getElementById("lead")
let team_a = document.getElementById("name-a")
let team_b = document.getElementById("name-b")
let counta = 0
let countb = 0
let foula = 0
let foulb = 0
function add1() {
   counta++
   console.log(counta)
   score_a.innerHTML = counta
   winner()
}
function add2() {
    counta+=2
    console.log(counta)
   score_a.innerHTML = counta
   winner()
}
function add3() {
    counta+=3
    console.log(counta)
   score_a.innerHTML = counta
   winner()
}
function add1b() {
   countb++
   console.log(countb)
   score_b.innerHTML = countb
   winner()
}
function add2b() {
    countb+=2
    console.log(countb)
   score_b.innerHTML = countb
   winner()
}
function add3b() {
    countb+=3
    console.log(countb)
   score_b.innerHTML = countb
   winner()
}
function afoul() {
    foula++
    foul_a.textContent = "FOUL : " + foula
    if(foula >= 5){
        foul_a.style.backgroundColor = "red"
        foul_a.style.width = "120px"
        foul_a.style.height = "50px"

}    
}
function bfoul() {
    foulb++
    foul_b.textContent = "FOUL : " + foulb
    if(foulb >= 5){
        foul_b.style.backgroundColor = "red"
        foul_b.style.width = "120px"
        foul_b.style.height = "50px"        
}
}

function winner () {
    if(countb > counta){
       lead.innerText = "TEAM B IS IN THE LEAD"
       team_b.style.color = "green"
       team_a.style.color = "red"

    }
    else if(countb === counta){
        lead.innerText = "BOTH ARE SAME"
       team_b.style.color = "orange"
       team_a.style.color = "orange"        
    }
    else{
    lead.innerText = "TEAM A IS IN THE LEAD"
       team_b.style.color = "red"
       team_a.style.color = "green"
}
}
