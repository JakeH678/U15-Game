let bg;
let player;
let enemy;
let en;
function movement(){
    if (kb.pressing("shift")){
        if (kb.pressing("A")){
            player.vel.x=-12
        }
        else if (kb.pressing("D")){
            player.vel.x=12
        }
        else{
            player.vel.x=0
        }
        if (kb.pressing("W")){
            player.vel.y=-12
        }
        else if (kb.pressing("S")){
            player.vel.y=12
        }
        else{
            player.vel.y=0
        }
    }

    if (!kb.pressing("shift")){
    if (kb.pressing("A")){
        player.vel.x=-5
    }
    else if (kb.pressing("D")){
        player.vel.x=5
    }
    else{
        player.vel.x=0
    }
    if (kb.pressing("W")){
        player.vel.y=-5
    }
    else if (kb.pressing("S")){
        player.vel.y=5
    }
    else{
        player.vel.y=0
    }
}
}


function preload(){
    bg = loadImage("assets/road.png")
}


function setup(){
createCanvas(windowWidth,windowHeight)

player = new Sprite(windowWidth/2,windowHeight-130,10,10,"d");
player.img = "assets/car.png"
player.scale = (windowWidth/800)/8
player.rotation=270
player.width = 120
player.height = 120
player.debug = true


enemy = new Group();
enemy.img = "assets/enemy.png"
enemy.scale =0.025
}


function draw(){
background(bg)
movement()
enemymovement()
    while (enemy.length<enemynum){
        let en = new enemy.Sprite(random(0,windowWidth),0,10,10,"d")
    }
}
function enemymovement(){
    for(e of enemy){
        e.vel.y=1.3
        if (e.y>windowHeight){
            e.remove()
        }
    }
}
