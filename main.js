const hero = {
    health: 100,
    gold: 0
}

const boss = {
    health: 100,
    attack: 5


}

let bossAttack = Math.floor(Math.random()* 8)


function heroAttack() {
if (boss.health > 0) {
    
    boss.health -= Math.floor(Math.random()* 5)
}
if(boss.health < 0){
    boss.health= 0
}

bossUpdate()

}


function bossUpdate() {
// console.log(boss.health);

    let elem = document.getElementById("bossHealth")
    let progressBar = elem.querySelector('.progress-bar')
    progressBar.style.width = boss.health + "%"  
}

function heroUpdate() {
    let elem = document.getElementById("heroHealth")
    let progressBar = elem.querySelector('.progress-bar')
    progressBar.style.width = hero.health + "%"
}

function drawGold() {

document.getElementById("gold").innerHTML = hero.gold.toString()


}



function bossAttack1() {
    if(boss.health >0 ){
        hero.health -= boss.attack
    
    }
if (boss.health == 0) {
    phase2()
}
heroUpdate()
bossUpdate()
}

function buyHealth() {
    if(hero.gold >= 50){
        hero.gold -= 50
        hero.health += 25
    }
    if(hero.health>100){

        hero.health = 100
    }
heroUpdate()
drawGold()
}

function reset() {
    hero.health = 100
    boss.health = 100
    bossUpdate()
    heroUpdate()
}

function phase2() {
    boss.health = 200
    boss.attack = 10
    hero.gold = 50
    let elem = document.getElementById("bossHealth")
   let progressBar2 = elem.querySelector('.progress-bar')
   progressBar2.max= boss.health.toString()
   console.log('testing', progressBar2.max)
   drawGold()
}

setInterval(bossAttack1, 3000)

drawGold()