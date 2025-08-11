const display =  new Display()
display.start()

let s = 0
let hst = new Component("25px", "Consolas", "black", 240, 40, "text")
hs = Number(localStorage.hs)
display.backgroundColor("grey")
let jumpPower = -1
const dino = new Component(75/2, 75, "img/dino.png", 0,display.canvas.height - 100, "image")
display.add(dino)
const obt = new Component(75 /4, 75/2, "img/obt.png", display.canvas.width, display.canvas.height - 75/2, "image")
const score = new Component("25px", "Cambria Math", "red", 10, 40, "text")

setInterval(()=>{
    obt.speedX -= 0.25
}, 3000)
// setInterval(()=>{
//     jumpPower -= 0.1

// }, 5000)
display.add(obt)
obt.speedX = -1
dino.gravity = true
dino.physics = true
setInterval(()=>{
    s += 1
}, 1000)
window.addEventListener("keydown", function(e){
    if(e.key=== " "){

        if(dino.gravity == 1 && dino.y >= display.canvas.height - 75){
            dino.gravity = jumpPower
            s += 1
            console.log(Math.random())
            this.setTimeout(()=>{
                dino.gravity = 1
            }, 250)
        }
        
    }
})
display.add(hst)
display.add(score)
function update(){
    
    score.text = `Score : ${s}`
    hst.text = `Highscore : ${hs}`
    if(dino.y >= display.canvas.height - 75){
        dino.y = display.canvas.height - 75
        dino.gravitySpeed = 0
    }
    if(obt.x <= 0 - 75/ 2){
        obt.x = display.canvas.width
    }
    if(dino.crashWith(obt)){
        alert("you lose")
        obt.x = -74
        obt.speedX = -2
        s = 0
    }
    if(s>hs){
        hs = s
        localStorage.hs = s
    }
}