var GameMode=0
var start
var introduce,introduce_img
var levelselector0_5,levelselector0_5_img
var input,Enter,PL_name
var Levelsel,Levelsel_img
var _1BUTTON,_2BUTTON,_3BUTTON,_4BUTTON,_5BUTTON,_6BUTTON

function preload(){
  introduce_img = loadImage("intro.png")
  UP_arrow_img = loadImage("up.png")
  DOWN_arrow_img = loadImage("down.png")
  levelselector0_5_img = loadImage("level0.5.png")
  Levelsel_img = loadImage("Level sel.png")
}

function setup() {
  createCanvas(windowWidth-1,windowHeight-1);

  introduce = createSprite(width/2-83,height/2)
  introduce.addImage(introduce_img)
  introduce.scale=0.71
  start = createSprite(120,618,180,61)
  start.visible=false

  levelselector0_5 = createSprite(width/2+30,height/2)
  levelselector0_5.addImage(levelselector0_5_img)
  levelselector0_5.scale=0.83
  levelselector0_5.visible=false

  Levelsel = createSprite(width/2-38,height/2)
  Levelsel.addImage(Levelsel_img)
  Levelsel.scale = 0.76
  Levelsel.visible=false
}

function draw() {
  background('#2E2E2E'); 
  drawSprites(); 
  if(keyWentDown("D")){
    dev()
  }
  if(mousePressedOver(start)){
    GameMode=0.5
    
  }
  if(GameMode==0.5){
    introduce.destroy()
    levelselector0_5.visible=true

    // input = createInput("What is your name?")
    // input.position(15,350)
    // input.size(240,41)
    // // input.value(Player)
    // Enter = createButton("Continue ▶")
    // Enter.position(133,565)
    // Enter.size(240,61)

    // Enter.mousePressed(function(){
    //   PL_name = input.value();
    //   levelselector0_5.destroy()
    //   input.hide()
    //   Enter.hide()
    //   GameMode="L1"
    //   input.hide()
    //   Enter.hide()
    // })

    // console.log(PL_name)  

    if(keyWentDown(ENTER)){
      GameMode="Lpick"
    }
  }
  
  if(GameMode=="Lpick"){
    // levelselector0_5.destroy()
    // input.hide()
    // Enter.hide()
    Levelsel.visible=true

    _1BUTTON = createSprite(615,235,260,240)
    _1BUTTON.visible=false
    _2BUTTON = createSprite(942,235,260,240)
    _2BUTTON.visible=false
    _3BUTTON = createSprite(1269,235,260,240)
    _3BUTTON.visible=false
    _4BUTTON = createSprite(615,583,260,240)
    _4BUTTON.visible=false
    _5BUTTON = createSprite(942,583,260,240)
    _5BUTTON.visible=false
    _6BUTTON = createSprite(1269,583,260,240)
    _6BUTTON.visible=false

    if(mousePressedOver(_1BUTTON)){
      GameMode="L1"
      Levelsel.destroy()
    }
    if(mousePressedOver(_2BUTTON)){
      GameMode="L2"
      Levelsel.destroy()
    }
    if(mousePressedOver(_3BUTTON)){
      GameMode="L3"
      Levelsel.destroy()
    }
    if(mousePressedOver(_4BUTTON)){
      GameMode="L4"
      Levelsel.destroy()
    }
    if(mousePressedOver(_5BUTTON)){
      GameMode="L5"
      Levelsel.destroy()
    }
    if(mousePressedOver(_6BUTTON)){
      GameMode="L6"
      Levelsel.destroy()
    }

  }

  if(GameMode=="L1"){
    
  }
  if(GameMode=="L2"){
    
  }
  if(GameMode=="L3"){
    
  }
  if(GameMode=="L4"){
    
  }
  if(GameMode=="L5"){
    
  }
  if(GameMode=="L6"){
    
  }



  function dev (){
    GameMode="Lpick"
    fill("white")
    text('BYPASS MODE',30,20) 
  }  
} 