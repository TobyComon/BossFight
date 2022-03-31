const hero = {
    health: 100
}

const boss = {
    id: 1,
    health: 100


}

let bossAttack = Math.floor(Math.random()* 8)


function heroAttack() {
if (boss.health > 0) {
    
    boss.health -= Math.floor(Math.random()* 5)
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

function bossAttack1() {
    if(boss.health >0 ){
        hero.health -= bossAttack
    
    }
if (boss.health == 0) {
    phase2()
}
heroUpdate()
}

function reset() {
    hero.health = 100
    boss.health = 100
    bossUpdate()
    heroUpdate()
}

function phase2() {
    boss.health = 200
    if(boss.health >0 ){
        hero.health -= Math.floor(Math.random()* 16)
    console.log(hero.health);
    }

}

setInterval(bossAttack1, 3000)
