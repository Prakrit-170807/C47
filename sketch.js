var play,play_img
var introduce
var levelselector=1
var GameMode=0
var UP_arrow,UP_arrow_img,DOWN_arrow,DOWN_arrow_img
var con,con_img
var text1
var Level1,Level1_img

function preload(){
  play_img = loadImage("PLAY.png")
  UP_arrow_img = loadImage("up.png")
  DOWN_arrow_img = loadImage("down.png")
  Level1_img = loadImage("level1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  introduce = createSprite(width/2,0,width/2,width)

  play = createSprite(width/2,500,200,80)
  play.addImage(play_img)

  UP_arrow = createSprite(width/2,440,40,40)
  UP_arrow.addImage(UP_arrow_img)
  UP_arrow.scale=0.5

  DOWN_arrow = createSprite(width/2,560,40,40)
  DOWN_arrow.addImage(DOWN_arrow_img)
  DOWN_arrow.scale=0.5

  con = createSprite(width/2+50,500,50,20)
  con.shapeColor="black"

  DOWN_arrow.visible=false
  UP_arrow.visible=false
  con.visible=false

  Level1=createSprite(width-150,100,200,200)
  Level1.addImage(Level1_img)
  Level1.scale=0.4
  Level1.visible=false

  text1="Mind Mapping"
  
}

function draw() {
  background('#2E2E2E'); 
  drawSprites(); 
  if(mousePressedOver(play)){
    GameMode=1
  }
  if(GameMode==1){
    play.destroy()
    fill("black")
    textSize(40)
    // textFont("")
    DOWN_arrow.visible=true
    UP_arrow.visible=true
    con.visible=true
    text(levelselector,width/2-10,520)

    if(mousePressedOver(UP_arrow)){
      levelselector++
    }
    if(keyWentDown("UP_ARROW")){
      levelselector++
    }
    
    if(mousePressedOver(DOWN_arrow)){
      levelselector--
    }

    if(keyWentDown("DOWN_ARROW")){
      levelselector++
    }
    
    if(mousePressedOver(con)){
      if(levelselector==1){
        GameMode=2
      }
      if(levelselector==2){
        GameMode=3
      }
      if(levelselector==3){
        GameMode=4
      }
      if(levelselector==4){
        GameMode=5
      }
      if(levelselector==5){
        GameMode=6
      }
      if(levelselector==6){
        GameMode=7
      }
      if(levelselector==7){
        GameMode=8
      }
      if(levelselector==8){
        GameMode=9
      }
    }
  }

  if(GameMode==2){
    //background('#2E2E2E');
    introduce.destroy()
    UP_arrow.destroy()
    DOWN_arrow.destroy()
    con.destroy()
    Level1.visible=true
    text1="⠀"
    
  }
  console.log(GameMode)
  textSize(50)
  fill("black")
  textFont("Fattern") 
  text(text1,width/2-170,90)

}