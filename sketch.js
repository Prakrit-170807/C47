var GameMode = 0

var start

var introduce, introduce_img

var levelselector0_5, levelselector0_5_img

var input, Enter, PL_name

var Levelsel, Levelsel_img

var _1BUTTON, _2BUTTON, _3BUTTON, _4BUTTON, _5BUTTON, _6BUTTON

var tintL1 = 0, tL1 = 5

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

var Level1Pre, Level1Pre_img, Level1_img, Level1
var Level2Pre, Level2Pre_img, Level2_img, Level2
var Level3Pre, Level3Pre_img, Level3_img, Level3
var Level4Pre, Level4Pre_img, Level4_img, Level4
var Level5Pre, Level5Pre_img, Level5_img, Level5
var Level6Pre, Level6Pre_img, Level6_img, Level6

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

var ArrowL1, ArrowL2, ArrowL3, ArrowL4,ArrowL5,ArrowL6
//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

var col1L1,col2L1,col3L1,col4L1
var col1L1_img,col2L1_img,col3L1_img,col4L1_img

var col1L2,col2L2,col3L2,col4L2,col5L2,col6L2
var col1L2_img,col2L2_img,col3L2_img,col4L2_img,col5L2_img,col6L2_img

var col1L3,col2L3,col3L3,col4L3,col5L3,col6L3,col7L3
var col1L3_img,col2L3_img,col3L3_img,col4L3_img,col5L3_img,col6L3_img,col7L3_img

var col1L4,col2L4,col3L4,col4L4,col5L4,col6L4,col7L4,col8L4,col9L4
var col1L4_img,col2L4_img,col3L4_img,col4L4_img,col5L4_img,col6L4_img,col7L4_img,col8L4_img,col9L4_img

var col1L5,col2L5,col3L5,col4L5,col5L5,col6L5,col7L5,col8L5,col9L,col10L5,col11L5
var col1L5_img,col2L5_img,col3L5_img,col4L5_img,col5L5_img,col6L5_img,col7L5_img,col8L5_img,col9L5_img,col10L5_img,col11L5_img

var col1L6,col2L6,col3L6,col4L16,col5L6,col6L6,col7L6,col8L6,col9L6,col10L6,col11L6,col12L6,col13L6,col14L6
var col1L6_img,col2L6_img,col3L6_img,col4L6_img,col5L6_img,col6L6_img,col7L6_img,col8L6_img,col9L6_img,col10L6_img,col11L6_img,col12L6_img,col13L6_img,col14L6_img


function preload() {
  introduce_img = loadImage("intro.png")
  levelselector0_5_img = loadImage("level0.5.png")
  Levelsel_img = loadImage("Level sel.png")

  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  Level1Pre_img = loadImage("Levels index/L1 The Beginning/Level1Pre.png")
  Level1_img = loadImage("Levels index/L1 The Beginning/Level1.png")

  Level2Pre_img = loadImage("Levels index/L2 The Smiles/Level2Pre.png")
  Level2_img = loadImage("Levels index/L2 The Smiles/Level2.png")

  Level3Pre_img = loadImage("Levels index/L3 A Poppy/Level3Pre.png")
  Level3_img = loadImage("Levels index/L3 A Poppy/Level3.png")

  Level4Pre_img = loadImage("Levels index/L4 Hills and Valleys/Level4Pre.png")
  Level4_img = loadImage("Levels index/L4 Hills and Valleys/Level4.png")

  Level5Pre_img = loadImage("Levels index/L5 Look a Bird/Level5Pre.png")
  Level5_img = loadImage("Levels index/L5 Look a Bird/Level5.png")

  Level6Pre_img = loadImage("Levels index/L6 See You Soon/Level6Pre.png")
  Level6_img = loadImage("Levels index/L6 See You Soon/Level6.png")
  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  col1L1_img = loadImage("Levels index/L1 The Beginning/col1.png")
  col2L1_img = loadImage("Levels index/L1 The Beginning/col2.png")
  col3L1_img = loadImage("Levels index/L1 The Beginning/col3.png")
  col4L1_img = loadImage("Levels index/L1 The Beginning/col4.png")

  col1L2_img = loadImage("Levels index/L2 The Smiles/col1.png")
  col2L2_img = loadImage("Levels index/L2 The Smiles/col2.png")
  col3L2_img = loadImage("Levels index/L2 The Smiles/col3.png")
  col4L2_img = loadImage("Levels index/L2 The Smiles/col4.png")
  col5L2_img = loadImage("Levels index/L2 The Smiles/col5.png")
  col6L2_img = loadImage("Levels index/L2 The Smiles/col6.png")

  col1L3_img = loadImage("Levels index/L3 A Poppy/col1.png")
  col2L3_img = loadImage("Levels index/L3 A Poppy/col2.png")
  col3L3_img = loadImage("Levels index/L3 A Poppy/col3.png")
  col4L3_img = loadImage("Levels index/L3 A Poppy/col4.png")
  col5L3_img = loadImage("Levels index/L3 A Poppy/col5.png")
  col6L3_img = loadImage("Levels index/L3 A Poppy/col6.png")
  col6L3_img = loadImage("Levels index/L3 A Poppy/col7.png")

  col1L4_img = loadImage("Levels index/L4 Hills and Valleys/col1.png")
  col2L4_img = loadImage("Levels index/L4 Hills and Valleys/col2.png")
  col3L4_img = loadImage("Levels index/L4 Hills and Valleys/col3.png")
  col4L4_img = loadImage("Levels index/L4 Hills and Valleys/col4.png")
  col5L4_img = loadImage("Levels index/L4 Hills and Valleys/col5.png")
  col6L4_img = loadImage("Levels index/L4 Hills and Valleys/col6.png")
  col7L4_img = loadImage("Levels index/L4 Hills and Valleys/col7.png")
  col8L4_img = loadImage("Levels index/L4 Hills and Valleys/col8.png")
  col9L4_img = loadImage("Levels index/L4 Hills and Valleys/col9.png")

  col1L5_img = loadImage("Levels index/L5 Look a Bird/col1.png")
  col2L5_img = loadImage("Levels index/L5 Look a Bird/col2.png")
  col3L5_img = loadImage("Levels index/L5 Look a Bird/col3.png")
  col4L5_img = loadImage("Levels index/L5 Look a Bird/col4.png")
  col5L5_img = loadImage("Levels index/L5 Look a Bird/col5.png")
  col6L5_img = loadImage("Levels index/L5 Look a Bird/col6.png")
  col7L5_img = loadImage("Levels index/L5 Look a Bird/col7.png")
  col8L5_img = loadImage("Levels index/L5 Look a Bird/col8.png")
  col9L5_img = loadImage("Levels index/L5 Look a Bird/col9.png")
  col10L5_img = loadImage("Levels index/L5 Look a Bird/col10.png")
  col11L5_img = loadImage("Levels index/L5 Look a Bird/col11.png")

  col1L6_img = loadImage("Levels index/L6 See You Soon/col1.png")
  col2L6_img = loadImage("Levels index/L6 See You Soon/col2.png")
  col3L6_img = loadImage("Levels index/L6 See You Soon/col3.png")
  col4L6_img = loadImage("Levels index/L6 See You Soon/col4.png")
  col5L6_img = loadImage("Levels index/L6 See You Soon/col5.png")
  col6L6_img = loadImage("Levels index/L6 See You Soon/col6.png")
  col7L6_img = loadImage("Levels index/L6 See You Soon/col7.png")
  col8L6_img = loadImage("Levels index/L6 See You Soon/col8.png")
  col9L6_img = loadImage("Levels index/L6 See You Soon/col9.png")
  col10L6_img = loadImage("Levels index/L6 See You Soon/col10.png")
  col11L6_img = loadImage("Levels index/L6 See You Soon/col11.png")
  col12L6_img = loadImage("Levels index/L6 See You Soon/col12.png")
  col13L6_img = loadImage("Levels index/L6 See You Soon/col13.png")
  col14L6_img = loadImage("Levels index/L6 See You Soon/col14.png")
}

function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1);

  introduce = createSprite(width / 2 - 83, height / 2)
  introduce.addImage(introduce_img)
  introduce.scale = 0.71
  start = createSprite(120, 618, 180, 61)
  start.visible = false

  levelselector0_5 = createSprite(width / 2 + 30, height / 2)
  levelselector0_5.addImage(levelselector0_5_img)
  levelselector0_5.scale = 0.83
  levelselector0_5.visible = false

  Levelsel = createSprite(width / 2 - 38, height / 2)
  Levelsel.addImage(Levelsel_img)
  Levelsel.scale = 0.76
  Levelsel.visible = false
//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  Level1Pre = createSprite(width / 2, height / 2 - 50)
  Level1Pre.addImage(Level1Pre_img)
  Level1Pre.scale = 0.80
  Level1Pre.visible = false

  Level1 = createSprite(width / 2, height / 2 - 0)
  Level1.addImage(Level1_img)
  Level1.scale = 0.80
  Level1.visible = false

  Level2Pre = createSprite(width / 2, height / 2 - 50)
  Level2Pre.addImage(Level2Pre_img)
  Level2Pre.scale = 0.80
  Level2Pre.visible = false

  Level2 = createSprite(width / 2, height / 2 - 0)
  Level2.addImage(Level2_img)
  Level2.scale = 0.80
  Level2.visible = false

  Level3Pre = createSprite(width / 2, height / 2 - 50)
  Level3Pre.addImage(Level3Pre_img)
  Level3Pre.scale = 0.80
  Level3Pre.visible = false

  Level3 = createSprite(width / 2, height / 2 - 0)
  Level3.addImage(Level3_img)
  Level3.scale = 0.80
  Level3.visible = false

  Level4Pre = createSprite(width / 2, height / 2 - 10)
  Level4Pre.addImage(Level4Pre_img)
  Level4Pre.scale = 0.80
  Level4Pre.visible = false

  Level4 = createSprite(width / 2, height / 2 - 0)
  Level4.addImage(Level4_img)
  Level4.scale = 0.80
  Level4.visible = false

  Level5Pre = createSprite(width / 2, height / 2 - 50)
  Level5Pre.addImage(Level5Pre_img)
  Level5Pre.scale = 0.80
  Level5Pre.visible = false

  Level5 = createSprite(width / 2, height / 2 - 0)
  Level5.addImage(Level5_img)
  Level5.scale = 0.80
  Level5.visible = false

  Level6Pre = createSprite(width / 2, height / 2 + 40)
  Level6Pre.addImage(Level6Pre_img)
  Level6Pre.scale = 0.80
  Level6Pre.visible = false

  Level6 = createSprite(width / 2, height / 2 - 0)
  Level6.addImage(Level6_img)
  Level6.scale = 0.80
  Level6.visible = false
  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  ArrowL1= createSprite(85,220,50,50)
  ArrowL1.visible = false
  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  col1L1 = createSprite(85,300,100,100)
  col1L1.addImage(col1L1_img)
  col1L1.scale = 0.5
  col1L1.visible = false
  col2L1= createSprite(85,300,100,100)
  col2L1.addImage(col2L1_img)
  col2L1.scale = 0.5
  col2L1.visible = false
  col3L1 = createSprite(85,300,100,100)
  col3L1.addImage(col3L1_img)
  col3L1.scale = 0.5
  col3L1.visible = false
  col4L1 = createSprite(85,300,100,100)
  col4L1.addImage(col4L1_img)
  col4L1.scale = 0.5
  col4L1.visible = false

  col1L2 = createSprite(85,300,100,100)
  col1L2.addImage(col1L2_img)
  col1L2.scale = 0.5
  col1L2.visible = false
  col2L2 = createSprite(85,300,100,100)
  col2L2.addImage(col2L2_img)
  col2L2.scale = 0.5
  col2L2.visible = false
  col3L2 = createSprite(85,300,100,100)
  col3L2.addImage(col3L2_img)
  col3L2.scale = 0.5
  col3L2.visible = false
  col4L2 = createSprite(85,300,100,100)
  col4L2.addImage(col4L2_img)
  col4L2.scale = 0.5
  col4L2.visible = false
  col5L2 = createSprite(85,300,100,100)
  col5L2.addImage(col5L2_img)
  col5L2.scale = 0.5
  col5L2.visible = false
  col6L2 = createSprite(85,300,100,100)
  col6L2.addImage(col6L2_img)
  col6L2.scale = 0.5
  col6L2.visible = false

  col1L3 = createSprite(85,300,100,100)
  col1L3.addImage(col1L3_img)
  col1L3.scale = 0.5
  col1L3.visible = false
  col2L3 = createSprite(85,300,100,100)
  col2L3.addImage(col2L3_img)
  col2L3.scale = 0.5
  col2L3.visible = false
  col3L3 = createSprite(85,300,100,100)
  col3L3.addImage(col3L3_img)
  col3L3.scale = 0.5
  col3L3.visible = false
  col4L3 = createSprite(85,300,100,100)
  col4L3.addImage(col4L3_img)
  col4L3.scale = 0.5
  col4L3.visible = false
  col5L3 = createSprite(85,300,100,100)
  col5L3.addImage(col5L3_img)
  col5L3.scale = 0.5
  col5L3.visible = false
  col6L3 = createSprite(85,300,100,100)
  col6L3.addImage(col6L3_img)
  col6L3.scale = 0.5
  col6L3.visible = false
  col7L3 = createSprite(85,300,100,100)
  col7L3.addImage(col7L3_img)
  col7L3.scale = 0.5
  col7L3.visible = false

  col1L4 = createSprite(85,300,100,100)
  col1L4.addImage(col1L4_img)
  col1L4.scale = 0.5
  col1L4.visible = false
  col2L4 = createSprite(85,300,100,100)
  col2L4.addImage(col2L4_img)
  col2L4.scale = 0.5
  col2L4.visible = false
  col3L4 = createSprite(85,300,100,100)
  col3L4.addImage(col3L4_img)
  col3L4.scale = 0.5
  col3L4.visible = false
  col4L4 = createSprite(85,300,100,100)
  col4L4.addImage(col4L4_img)
  col4L4.scale = 0.5
  col4L4.visible = false
  col5L4 = createSprite(85,300,100,100)
  col5L4.addImage(col5L4_img)
  col5L4.scale = 0.5
  col5L4.visible = false
  col6L4 = createSprite(85,300,100,100)
  col6L4.addImage(col6L4_img)
  col6L4.scale = 0.5
  col6L4.visible = false
  col7L4 = createSprite(85,300,100,100)
  col7L4.addImage(col7L4_img)
  col7L4.scale = 0.5
  col7L4.visible = false
  col8L4 = createSprite(85,300,100,100)
  col8L4.addImage(col8L4_img)
  col8L4.scale = 0.5
  col8L4.visible = false
  col9L4 = createSprite(85,300,100,100)
  col9L4.addImage(col9L4_img)
  col9L4.scale = 0.5
  col9L4.visible = false
  
  col1L5 = createSprite(85,300,100,100)
  col1L5.addImage(col1L5_img)
  col1L5.scale = 0.5
  col1L5.visible = false
  col2L5 = createSprite(85,300,100,100)
  col2L5.addImage(col2L5_img)
  col2L5.scale = 0.5
  col2L5.visible = false
  col3L5 = createSprite(85,300,100,100)
  col3L5.addImage(col3L5_img)
  col3L5.scale = 0.5
  col3L5.visible = false
  col4L5 = createSprite(85,300,100,100)
  col4L5.addImage(col4L5_img)
  col4L5.scale = 0.5
  col4L5.visible = false
  col5L5 = createSprite(85,300,100,100)
  col5L5.addImage(col5L5_img)
  col5L5.scale = 0.5
  col5L5.visible = false
  col6L5 = createSprite(85,300,100,100)
  col6L5.addImage(col6L5_img)
  col6L5.scale = 0.5
  col6L5.visible = false
  col7L5 = createSprite(85,300,100,100)
  col7L5.addImage(col7L5_img)
  col7L5.scale = 0.5
  col7L5.visible = false
  col8L5 = createSprite(85,300,100,100)
  col8L5.addImage(col8L5_img)
  col8L5.scale = 0.5
  col8L5.visible = false
  col9L5 = createSprite(85,300,100,100)
  col9L5.addImage(col9L5_img)
  col9L5.scale = 0.5
  col9L5.visible = false
  col10L5 = createSprite(85,300,100,100)
  col10L5.addImage(col10L5_img)
  col10L5.scale = 0.5
  col10L5.visible = false
  col11L5 = createSprite(85,300,100,100)
  col11L5.addImage(col11L5_img)
  col11L5.scale = 0.5
  col11L5.visible = false

  col1L6 = createSprite(85,300,100,100)
  col1L6.addImage(col1L6_img)
  col1L6.scale = 0.5
  col1L6.visible = false
  col2L6 = createSprite(85,300,100,100)
  col2L6.addImage(col2L6_img)
  col2L6.scale = 0.5
  col2L6.visible = false
  col3L6 = createSprite(85,300,100,100)
  col3L6.addImage(col3L6_img)
  col3L6.scale = 0.5
  col3L6.visible = false
  col4L6 = createSprite(85,300,100,100)
  col4L6.addImage(col4L6_img)
  col4L6.scale = 0.5
  col4L6.visible = false
  col5L6 = createSprite(85,300,100,100)
  col5L6.addImage(col5L6_img)
  col5L6.scale = 0.5
  col5L6.visible = false
  col6L6 = createSprite(85,300,100,100)
  col6L6.addImage(col6L6_img)
  col6L6.scale = 0.5
  col6L6.visible = false
  col7L6 = createSprite(85,300,100,100)
  col7L6.addImage(col7L6_img)
  col7L6.scale = 0.5
  col7L6.visible = false
  col8L6 = createSprite(85,300,100,100)
  col8L6.addImage(col8L6_img)
  col8L6.scale = 0.5
  col8L6.visible = false
  col9L6 = createSprite(85,300,100,100)
  col9L6.addImage(col9L6_img)
  col9L6.scale = 0.5
  col9L6.visible = false
  col10L6 = createSprite(85,300,100,100)
  col10L6.addImage(col11L6_img)
  col10L6.scale = 0.5
  col10L6.visible = false
  col11L6 = createSprite(85,300,100,100)
  col11L6.addImage(col12L6_img)
  col11L6.scale = 0.5
  col11L6.visible = false
  col12L6 = createSprite(85,300,100,100)
  col12L6.addImage(col13L6_img)
  col12L6.scale = 0.5
  col12L6.visible = false
  col13L6 = createSprite(85,300,100,100)
  col13L6.addImage(col13L6_img)
  col13L6.scale = 0.5
  col13L6.visible = false
  col14L6 = createSprite(85,300,100,100)
  col14L6.addImage(col14L6_img)
  col14L6.scale = 0.5
  col14L6.visible = false
}

function draw() {
  background('#2E2E2E');
  drawSprites();
  if (keyWentDown("D")) {
    dev()
  }
  if (mousePressedOver(start)) {
    GameMode = 0.5
  }
  if (GameMode == 0.5) {
    introduce.destroy()
    levelselector0_5.visible = true

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

    if (keyWentDown(ENTER)) {
      GameMode = "Lpick"
    }
  }

  if (GameMode == "Lpick") {
    // levelselector0_5.destroy()
    // input.hide()
    // Enter.hide()
    Levelsel.visible = true

    _1BUTTON = createSprite(615, 235, 260, 240)
    _1BUTTON.visible = false
    _2BUTTON = createSprite(942, 235, 260, 240)
    _2BUTTON.visible = false
    _3BUTTON = createSprite(1269, 235, 260, 240)
    _3BUTTON.visible = false
    _4BUTTON = createSprite(615, 583, 260, 240)
    _4BUTTON.visible = false
    _5BUTTON = createSprite(942, 583, 260, 240)
    _5BUTTON.visible = false
    _6BUTTON = createSprite(1269, 583, 260, 240)
    _6BUTTON.visible = false

    if (mousePressedOver(_1BUTTON)) {
      GameMode = "L1"
      Levelsel.destroy()
    }
    if (mousePressedOver(_2BUTTON)) {
      GameMode = "L2"
      Levelsel.destroy()
    }
    if (mousePressedOver(_3BUTTON)) {
      GameMode = "L3"
      Levelsel.destroy()
    }
    if (mousePressedOver(_4BUTTON)) {
      GameMode = "L4"
      Levelsel.destroy()
    }
    if (mousePressedOver(_5BUTTON)) {
      GameMode = "L5"
      Levelsel.destroy()
    }
    if (mousePressedOver(_6BUTTON)) {
      GameMode = "L6"
      Levelsel.destroy()
    }

  }

  if (GameMode == "L1") {

    Level1Pre.visible = true
    if (frameCount % 120 == 0) {
      Level1Pre.destroy()
      Level1.visible = true
    }
    if(Level1.visible==true){
      if(mousePressedOver(ArrowL1)){
        col1L1.visible =false
      }

    }
  }
  if (GameMode == "L2") {
    
    Level2Pre.visible = true
    if (frameCount % 120 == 0) {
      Level2Pre.destroy()
      Level2.visible = true
    }
  }
  if (GameMode == "L3") {
    
    Level3Pre.visible = true
    if (frameCount % 120 == 0) {
      Level3Pre.destroy()
      Level3.visible = true
    }
  }
  if (GameMode == "L4") {
    
    Level4Pre.visible = true
    if (frameCount % 120 == 0) {
      Level4Pre.destroy()
      Level4.visible = true
    }
  }
  if (GameMode == "L5") {
    
    Level5Pre.visible = true
    if (frameCount % 120 == 0) {
      Level5Pre.destroy()
      Level5.visible = true
    }
  }
  if (GameMode == "L6") {
    
    Level6Pre.visible = true
    if (frameCount % 120 == 0) {
      Level6Pre.destroy()
      Level6.visible = true
    }
  }



  function dev() {
    GameMode = "Lpick"
    fill("white")
    text('BYPASS MODE', 30, 20)
  }
}