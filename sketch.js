//HI I am Prakrit Maan 
//I had started working on this project 3 months back 
//I had this vision of this fantastic game, mordern, easu to use and super slick.
// This all started with the idea of helping children recognise colors. 
//No images were taken form the web all have been created my me by graphics software.

// comments describe the structure of this project for help in understanding the mess of variables i hae got and their function


//this is the declaration of the variables that are used in the game most of the talk about their function 
//The weird ones will be commented out
var GameMode = 0
//basic stages of the game is stages of the game are carried by the "GameMode" var which state changes throught the game.
var start
//The start button used at the screen of the game
var introduce, introduce_img
//The vars are display the start screen
var Levelsel, Levelsel_img
//The vars are display the level selection screen
var _1BUTTON, _2BUTTON, _3BUTTON, _4BUTTON, _5BUTTON, _6BUTTON
//The following are the buttons for all the six levels of the game displayed during the level selection screen,
//4 of which are deactivatedue the game being still in development.
var tintL1 = 0, tL1 = 5
//WHAT THE HELL IS THIS?

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

var Level1Pre, Level1Pre_img, Level1_img, Level1
var Level2Pre, Level2Pre_img, Level2_img, Level2
var Level3Pre, Level3Pre_img, Level3_img, Level3
var Level4Pre, Level4Pre_img, Level4_img, Level4
var Level5Pre, Level5Pre_img, Level5_img, Level5
var Level6Pre, Level6Pre_img, Level6_img, Level6
//all of these variables are there to give a reference image to the levels in the game also the main level screen.

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
var colchangerL1 = 0, colchangerL2 = 0, colchangerL3 = 0, colchangerL4 = 0, colchangerL5 = 0, colchangerL6 = 0
//These variables are given for every level so that that the color box don't overlap at the same empty box
//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

var col1L1, col2L1, col3L1, col4L1
var col1L1_img, col2L1_img, col3L1_img, col4L1_img
//The colors of each level at level 1
var col1L2, col2L2, col3L2, col4L2, col5L2, col6L2
var col1L2_img, col2L2_img, col3L2_img, col4L2_img, col5L2_img, col6L2_img
//The colors of each level at level 2
var col1L3, col2L3, col3L3, col4L3, col5L3, col6L3, col7L3
var col1L3_img, col2L3_img, col3L3_img, col4L3_img, col5L3_img, col6L3_img, col7L3_img
//The colors of each level at level 3
var col1L4, col2L4, col3L4, col4L4, col5L4, col6L4, col7L4, col8L4, col9L4
var col1L4_img, col2L4_img, col3L4_img, col4L4_img, col5L4_img, col6L4_img, col7L4_img, col8L4_img, col9L4_img
//The colors of each level at level 4
var col1L5, col2L5, col3L5, col4L5, col5L5, col6L5, col7L5, col8L5, col9L, col10L5, col11L5
var col1L5_img, col2L5_img, col3L5_img, col4L5_img, col5L5_img, col6L5_img, col7L5_img, col8L5_img, col9L5_img, col10L5_img, col11L5_img
//The colors of each level at level 5
var col1L6, col2L6, col3L6, col4L16, col5L6, col6L6, col7L6, col8L6, col9L6, col10L6, col11L6, col12L6, col13L6, col14L6
var col1L6_img, col2L6_img, col3L6_img, col4L6_img, col5L6_img, col6L6_img, col7L6_img, col8L6_img, col9L6_img, col10L6_img, col11L6_img, col12L6_img, col13L6_img, col14L6_img
//The colors of each level at level 6

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

var wrong, wrong_img, wrongsound, wrong_sound, right, right_img, rightsound, right_sound
var soon_sound,pop_sound
//All the sound and the checking variables

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

var nxtlev = 0
var checkerL1, checkerL1_img, checkerL2, checkerL3_img, checkerL4, checkerL4_img, checkerL5, checkerL5_img, checkerL6, checkerL6_img
var nxtleveleL1, nxtlevelerL1_img, nxtlevelerL2, nxtlevelerL2_img, nxtlevelerL3, nxtlevelerL3_img, nxtlevelerL4, nxtlevelerL4_img, nxtlevelerL5, nxtlevelerL5_img, nxtlevelerL6, nxtlevelerL6_img
var poslokL1=0, poslokL2=0, poslokL3=0, poslok4=0, poslokL5=0, poslokL6=0
//Conditionals variables all these variables are defined to add conditions in the "if" loop 

function preload() {
  //here all the images of the variable are loaded for example a decorating station of the variables
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
  col7L3_img = loadImage("Levels index/L3 A Poppy/col7.png")

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

  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  wrong_img = loadImage("wrong.png")
  right_img = loadImage("Correct.png")
  wrong_sound = loadSound("Sound Effects/wrong.wav")
  right_sound = loadSound("Sound Effects/correct.wav")
  soon_sound = loadSound("Sound Effects/fall back.wav")
  pop_sound = loadSound("Sound Effects/pop.wav")

  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  checkerL1_img = loadImage("checker.png")
  checkerL2_img = loadImage("checker.png")
  checkerL3_img = loadImage("checker.png")
  checkerL4_img = loadImage("checker.png")
  checkerL5_img = loadImage("checker.png")
  checkerL6_img = loadImage("checker.png")


  nxtlevelerL1_img = loadImage("Nextlevel.png")
  nxtlevelerL2_img = loadImage("Nextlevel.png")
  nxtlevelerL3_img = loadImage("Nextlevel.png")
  nxtlevelerL4_img = loadImage("Nextlevel.png")
  nxtlevelerL5_img = loadImage("Nextlevel.png")
  nxtlevelerL6_img = loadImage("Nextlevel.png")

}

function setup() {
  //defining the shape of the camvas
  createCanvas(windowWidth - 1, windowHeight - 1);
  //a setup station for all the variables just like the preload the varibles are put on outer covering 
  //setup puts them in a packages and ship the to the regardingplace so that they can be used by other people like your phone
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
  ArrowL1_up = createSprite(85, 220, 50, 50)
  ArrowL1_up.visible = false
  ArrowL1_up.shapeColor = ("#282828")
  ArrowL1_down = createSprite(85, 545, 50, 50)
  ArrowL1_down.visible = false
  ArrowL1_down.shapeColor = ("#282828")
  ArrowL2_up = createSprite(85, 220, 50, 50)
  ArrowL2_up.visible = false
  ArrowL2_up.shapeColor = ("#282828")
  ArrowL2_down = createSprite(85, 545, 50, 50)
  ArrowL2_down.visible = false
  ArrowL2_down.shapeColor = ("#282828")
  ArrowL3_up = createSprite(85, 220, 50, 50)
  ArrowL3_up.visible = false
  ArrowL3_up.shapeColor = ("#282828")
  ArrowL3_down = createSprite(85, 545, 50, 50)
  ArrowL3_down.visible = false
  ArrowL3_down.shapeColor = ("#282828")
  ArrowL4_up = createSprite(85, 220, 50, 50)
  ArrowL4_up.visible = false
  ArrowL4_up.shapeColor = ("#282828")
  ArrowL4_down = createSprite(85, 545, 50, 50)
  ArrowL4_down.visible = false
  ArrowL4_down.shapeColor = ("#282828")
  ArrowL5_up = createSprite(85, 220, 50, 50)
  ArrowL5_up.visible = false
  ArrowL5_up.shapeColor = ("#282828")
  ArrowL5_down = createSprite(85, 545, 50, 50)
  ArrowL5_down.visible = false
  ArrowL5_down.shapeColor = ("#282828")
  ArrowL6_up = createSprite(85, 220, 50, 50)
  ArrowL6_up.visible = false
  ArrowL6_up.shapeColor = ("#282828")
  ArrowL6_down = createSprite(85, 545, 50, 50)
  ArrowL6_down.visible = false
  ArrowL6_down.shapeColor = ("#282828")

  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  col1L1 = createSprite(485, 680, 100, 100)
  col1L1.addImage(col1L1_img)
  col1L1.scale = 0.5
  col1L1.visible = false
  col2L1 = createSprite(685, 680, 100, 100)
  col2L1.addImage(col2L1_img)
  col2L1.scale = 0.5
  col2L1.visible = false
  col3L1 = createSprite(885, 680, 100, 100)
  col3L1.addImage(col3L1_img)
  col3L1.scale = 0.5
  col3L1.visible = false
  col4L1 = createSprite(1085, 680, 100, 100)
  col4L1.addImage(col4L1_img)
  col4L1.scale = 0.5
  col4L1.visible = false

  col1L2 = createSprite(285, 680, 100, 100)
  col1L2.addImage(col1L2_img)
  col1L2.scale = 0.5
  col1L2.visible = false
  col2L2 = createSprite(485, 680, 100, 100)
  col2L2.addImage(col2L2_img)
  col2L2.scale = 0.5
  col2L2.visible = false
  col3L2 = createSprite(685, 680, 100, 100)
  col3L2.addImage(col3L2_img)
  col3L2.scale = 0.5
  col3L2.visible = false
  col4L2 = createSprite(885, 680, 100, 100)
  col4L2.addImage(col4L2_img)
  col4L2.scale = 0.5
  col4L2.visible = false
  col5L2 = createSprite(1085, 680, 100, 100)
  col5L2.addImage(col5L2_img)
  col5L2.scale = 0.5
  col5L2.visible = false
  col6L2 = createSprite(1285, 680, 100, 100)
  col6L2.addImage(col6L2_img)
  col6L2.scale = 0.5
  col6L2.visible = false

  col1L3 = createSprite(85, 300, 100, 100)
  col1L3.addImage(col1L3_img)
  col1L3.scale = 0.5
  col1L3.visible = false
  col2L3 = createSprite(85, 300, 100, 100)
  col2L3.addImage(col2L3_img)
  col2L3.scale = 0.5
  col2L3.visible = false
  col3L3 = createSprite(85, 300, 100, 100)
  col3L3.addImage(col3L3_img)
  col3L3.scale = 0.5
  col3L3.visible = false
  col4L3 = createSprite(85, 300, 100, 100)
  col4L3.addImage(col4L3_img)
  col4L3.scale = 0.5
  col4L3.visible = false
  col5L3 = createSprite(85, 300, 100, 100)
  col5L3.addImage(col5L3_img)
  col5L3.scale = 0.5
  col5L3.visible = false
  col6L3 = createSprite(85, 300, 100, 100)
  col6L3.addImage(col6L3_img)
  col6L3.scale = 0.5
  col6L3.visible = false
  col7L3 = createSprite(85, 300, 100, 100)
  col7L3.addImage(col7L3_img)
  col7L3.scale = 0.5
  col7L3.visible = false

  col1L4 = createSprite(85, 300, 100, 100)
  col1L4.addImage(col1L4_img)
  col1L4.scale = 0.5
  col1L4.visible = false
  col2L4 = createSprite(85, 300, 100, 100)
  col2L4.addImage(col2L4_img)
  col2L4.scale = 0.5
  col2L4.visible = false
  col3L4 = createSprite(85, 300, 100, 100)
  col3L4.addImage(col3L4_img)
  col3L4.scale = 0.5
  col3L4.visible = false
  col4L4 = createSprite(85, 300, 100, 100)
  col4L4.addImage(col4L4_img)
  col4L4.scale = 0.5
  col4L4.visible = false
  col5L4 = createSprite(85, 300, 100, 100)
  col5L4.addImage(col5L4_img)
  col5L4.scale = 0.5
  col5L4.visible = false
  col6L4 = createSprite(85, 300, 100, 100)
  col6L4.addImage(col6L4_img)
  col6L4.scale = 0.5
  col6L4.visible = false
  col7L4 = createSprite(85, 300, 100, 100)
  col7L4.addImage(col7L4_img)
  col7L4.scale = 0.5
  col7L4.visible = false
  col8L4 = createSprite(85, 300, 100, 100)
  col8L4.addImage(col8L4_img)
  col8L4.scale = 0.5
  col8L4.visible = false
  col9L4 = createSprite(85, 300, 100, 100)
  col9L4.addImage(col9L4_img)
  col9L4.scale = 0.5
  col9L4.visible = false

  col1L5 = createSprite(85, 300, 100, 100)
  col1L5.addImage(col1L5_img)
  col1L5.scale = 0.5
  col1L5.visible = false
  col2L5 = createSprite(85, 300, 100, 100)
  col2L5.addImage(col2L5_img)
  col2L5.scale = 0.5
  col2L5.visible = false
  col3L5 = createSprite(85, 300, 100, 100)
  col3L5.addImage(col3L5_img)
  col3L5.scale = 0.5
  col3L5.visible = false
  col4L5 = createSprite(85, 300, 100, 100)
  col4L5.addImage(col4L5_img)
  col4L5.scale = 0.5
  col4L5.visible = false
  col5L5 = createSprite(85, 300, 100, 100)
  col5L5.addImage(col5L5_img)
  col5L5.scale = 0.5
  col5L5.visible = false
  col6L5 = createSprite(85, 300, 100, 100)
  col6L5.addImage(col6L5_img)
  col6L5.scale = 0.5
  col6L5.visible = false
  col7L5 = createSprite(85, 300, 100, 100)
  col7L5.addImage(col7L5_img)
  col7L5.scale = 0.5
  col7L5.visible = false
  col8L5 = createSprite(85, 300, 100, 100)
  col8L5.addImage(col8L5_img)
  col8L5.scale = 0.5
  col8L5.visible = false
  col9L5 = createSprite(85, 300, 100, 100)
  col9L5.addImage(col9L5_img)
  col9L5.scale = 0.5
  col9L5.visible = false
  col10L5 = createSprite(85, 300, 100, 100)
  col10L5.addImage(col10L5_img)
  col10L5.scale = 0.5
  col10L5.visible = false
  col11L5 = createSprite(85, 300, 100, 100)
  col11L5.addImage(col11L5_img)
  col11L5.scale = 0.5
  col11L5.visible = false

  col1L6 = createSprite(85, 300, 100, 100)
  col1L6.addImage(col1L6_img)
  col1L6.scale = 0.5
  col1L6.visible = false
  col2L6 = createSprite(85, 300, 100, 100)
  col2L6.addImage(col2L6_img)
  col2L6.scale = 0.5
  col2L6.visible = false
  col3L6 = createSprite(85, 300, 100, 100)
  col3L6.addImage(col3L6_img)
  col3L6.scale = 0.5
  col3L6.visible = false
  col4L6 = createSprite(85, 300, 100, 100)
  col4L6.addImage(col4L6_img)
  col4L6.scale = 0.5
  col4L6.visible = false
  col5L6 = createSprite(85, 300, 100, 100)
  col5L6.addImage(col5L6_img)
  col5L6.scale = 0.5
  col5L6.visible = false
  col6L6 = createSprite(85, 300, 100, 100)
  col6L6.addImage(col6L6_img)
  col6L6.scale = 0.5
  col6L6.visible = false
  col7L6 = createSprite(85, 300, 100, 100)
  col7L6.addImage(col7L6_img)
  col7L6.scale = 0.5
  col7L6.visible = false
  col8L6 = createSprite(85, 300, 100, 100)
  col8L6.addImage(col8L6_img)
  col8L6.scale = 0.5
  col8L6.visible = false
  col9L6 = createSprite(85, 300, 100, 100)
  col9L6.addImage(col9L6_img)
  col9L6.scale = 0.5
  col9L6.visible = false
  col10L6 = createSprite(85, 300, 100, 100)
  col10L6.addImage(col10L6_img)
  col10L6.scale = 0.5
  col10L6.visible = false
  col11L6 = createSprite(85, 300, 100, 100)
  col11L6.addImage(col11L6_img)
  col11L6.scale = 0.5
  col11L6.visible = false
  col12L6 = createSprite(85, 300, 100, 100)
  col12L6.addImage(col12L6_img)
  col12L6.scale = 0.5
  col12L6.visible = false
  col13L6 = createSprite(85, 300, 100, 100)
  col13L6.addImage(col13L6_img)
  col13L6.scale = 0.5
  col13L6.visible = false
  col14L6 = createSprite(85, 300, 100, 100)
  col14L6.addImage(col14L6_img)
  col14L6.scale = 0.5
  col14L6.visible = false
  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  wrong = createSprite(width / 2, 100)
  wrong.addImage(wrong_img)
  wrong.scale = 0.45
  wrong.visible = false

  right = createSprite(width / 2, 100)
  right.addImage(right_img)
  right.scale = 0.45
  right.visible = false

  //_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  checkerL1 = createSprite(1400, 700, 20, 20)
  checkerL1.addImage(checkerL1_img)
  checkerL1.scale = 0.5
  checkerL1.visible = false

  checkerL2 = createSprite(1400, 700, 20, 20)
  checkerL2.addImage(checkerL1_img)
  checkerL2.scale = 0.5
  checkerL2.visible = false

  checkerL3 = createSprite(1400, 700, 20, 20)
  checkerL3.addImage(checkerL1_img)
  checkerL3.scale = 0.5
  checkerL3.visible = false

  checkerL4 = createSprite(1400, 700, 20, 20)
  checkerL4.addImage(checkerL1_img)
  checkerL4.scale = 0.5
  checkerL4.visible = false

  checkerL5 = createSprite(1400, 700, 20, 20)
  checkerL5.addImage(checkerL1_img)
  checkerL5.scale = 0.5
  checkerL5.visible = false

  checkerL6 = createSprite(1400, 700, 20, 20)
  checkerL6.addImage(checkerL1_img)
  checkerL6.scale = 0.5
  checkerL6.visible = false

  nxtlevelerL1 = createSprite(1400, 70, 20, 20)
  nxtlevelerL1.addImage(nxtlevelerL1_img)
  nxtlevelerL1.scale = 0.6
  nxtlevelerL1.visible = false

  nxtlevelerL2 = createSprite(1400, 70, 20, 20)
  nxtlevelerL2.addImage(nxtlevelerL1_img)
  nxtlevelerL2.scale = 0.6
  nxtlevelerL2.visible = false

  nxtlevelerL3 = createSprite(1400, 70, 20, 20)
  nxtlevelerL3.addImage(nxtlevelerL1_img)
  nxtlevelerL3.scale = 0.6
  nxtlevelerL3.visible = false

  nxtlevelerL4 = createSprite(1400, 70, 20, 20)
  nxtlevelerL4.addImage(nxtlevelerL1_img)
  nxtlevelerL4.scale = 0.8
  nxtlevelerL4.visible = false

  nxtlevelerL5 = createSprite(1400, 70, 20, 20)
  nxtlevelerL5.addImage(nxtlevelerL1_img)
  nxtlevelerL5.scale = 0.6
  nxtlevelerL5.visible = false

  nxtlevelerL6 = createSprite(1400, 70, 20, 20)
  nxtlevelerL6.addImage(nxtlevelerL1_img)
  nxtlevelerL6.scale = 0.6
  nxtlevelerL6.visible = false

}

function draw() {
  //draw helps the same variables to function like you get updates on your phones helping it constantly be updated 
  //it also houses all the information conduction major decicive task
  background('#2E2E2E');
  // declaring the background colour
  drawSprites();
  //A command to initialize the variables refresh
  if (keyWentDown("D")) {
    dev()
  }
  //A funciton to qucick enter "DEV" mode (only use in case of development of the game not during playing game)
  if (mousePressedOver(start)) {
    GameMode = "Lpick"
  }
//For changing the GameMode to the level picker 
  if (GameMode == "Lpick") {
    //level picker GameMode
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
    //display all the level selecting buttons
    if (mousePressedOver(_1BUTTON)) {
      GameMode = "L1"
      Levelsel.destroy()
    }
    if (mousePressedOver(_2BUTTON)) {
      GameMode = "L2"
      Levelsel.destroy()
    }
    if (mousePressedOver(_3BUTTON)) {
      soon_sound.play()
    }
    if (mousePressedOver(_4BUTTON)) {
      soon_sound.play()
    }
    if (mousePressedOver(_5BUTTON)) {
      soon_sound.play()
    }
    if (mousePressedOver(_6BUTTON)) {
      soon_sound.play()
    }
    //Giving function to the level selection buttons
  }


  if (GameMode == "L1") {
    //The first level is the game
    Level1Pre.visible = true
    //making the image preview visible
    if (frameCount % 120 == 0) {
      Level1Pre.destroy()
      Level1.visible = true
    }
    //Destroying the image preview after a short time period if not destryed it whould hve defeted the porpose of the game. 
    //The level 1 is also make visiable to the player after the level 1 preview is destroyed.
    if (Level1.visible == true) {
      col1L1.visible = true
      col2L1.visible = true
      col3L1.visible = true
      col4L1.visible = true
    }
    //Making all the colors visible so that they can be placed in the appropriate place in level 1 

    if(col1L1.y==470 || col2L1.y==470 || col3L1.y==470 || col4L1.y==470 ){
      poslokL1=1
    }
    //This "if" loop prevents the color form being filled if all the boxes are already filled with alternate colors.

    if (mousePressedOver(col1L1) && col1L1.x != 1365 && col1L1.y != 285) {
      col1L1.x = 1365
      col1L1.y = 285
      pop_sound.play()
      if (colchangerL1 == 1) {
        col1L1.x = 1365
        col1L1.y = 470
      }
      if(poslokL1==1){
        col1L1.x=485
        col1L1.y=680
      }
      colchangerL1 = 1
    }
    //checking if a color is already filled in the box and placing the color depending on the condition
    if (mousePressedOver(col1L1) && col1L1.x == 1365 && col1L1.y == 285 && frameCount % 2 == 0) {
      col1L1.x = 485
      col1L1.y = 680
      pop_sound.play()
      colchangerL1 = 0
      poslokL1 = 0
    }
    //placing the color back to the final position from the filling box in the right side top box
    if (mousePressedOver(col1L1) && col1L1.x == 1365 && col1L1.y == 470 && frameCount % 2 == 0) {
      col1L1.x = 485
      col1L1.y = 680
      pop_sound.play()
      colchangerL1 = 0
      poslokL1 = 0
    }
    //placing the color back to the final position from the filling box in the right side bottom box

    if (mousePressedOver(col2L1) && col2L1.x != 1365 && col2L1.y != 285) {
      col2L1.x = 1365
      col2L1.y = 285
      pop_sound.play()
      if (colchangerL1 == 1) {
        col2L1.x = 1365
        col2L1.y = 470
      }
      if(poslokL1==1){
        col2L1.x=685
        col2L1.y=680
      }
      colchangerL1 = 1
    }
    //checking if a color is already filled in the box and placing the color depending on the condition
    if (mousePressedOver(col2L1) && col2L1.x == 1365 && col2L1.y == 285 && frameCount % 2 == 0) {
      col2L1.x = 685
      col2L1.y = 680
      pop_sound.play()
      colchangerL1 = 0
      poslokL1 = 0
    }
    //placing the color back to the final position from the filling box in the right side top box
    if (mousePressedOver(col2L1) && col2L1.x == 1365 && col2L1.y == 470 && frameCount % 2 == 0) {
      col2L1.x = 685
      col2L1.y = 680
      pop_sound.play()
      colchangerL1 = 0
      poslokL1 = 0
    }
    //placing the color back to the final position from the filling box in the right side bottom box

    if (mousePressedOver(col3L1) && col3L1.x != 1365 && col3L1.y != 285) {
      col3L1.x = 1365
      col3L1.y = 285
      pop_sound.play()
      if (colchangerL1 == 1) {
        col3L1.x = 1365
        col3L1.y = 470
      }
      if(poslokL1==1){
        col3L1.x=885
        col3L1.y=680
      }
      colchangerL1 = 1
    }
    //checking if a color is already filled in the box and placing the color depending on the condition
    if (mousePressedOver(col3L1) && col3L1.x == 1365 && col3L1.y == 285 && frameCount % 2 == 0) {
      col3L1.x = 885
      col3L1.y = 680
      pop_sound.play()
      colchangerL1 = 0
      poslokL1 = 0
    }
    //placing the color back to the final position from the filling box in the right side top box
    if (mousePressedOver(col3L1) && col3L1.x == 1365 && col3L1.y == 470 && frameCount % 2 == 0) {
      col3L1.x = 885
      col3L1.y = 680
      pop_sound.play()
      colchangerL1 = 0
      poslokL1 = 0
    }
    //placing the color back to the final position from the filling box in the right side bottom box

    if (mousePressedOver(col4L1) && col4L1.x != 1365 && col4L1.y != 285) {
      col4L1.x = 1365
      col4L1.y = 285
      pop_sound.play()
      if (colchangerL1 == 1) {
        col4L1.x = 1365
        col4L1.y = 470
      }
      if(poslokL1==1){
        col4L1.x=1085
        col4L1.y=680
      }
      colchangerL1 = 1
    }
    //checking if a color is already filled in the box and placing the color depending on the condition
    if (mousePressedOver(col4L1) && col4L1.x == 1365 && col4L1.y == 285 && frameCount % 2 == 0) {
      col4L1.x = 1085
      col4L1.y = 680
      pop_sound.play()
      colchangerL1 = 0
      poslokL1 = 0
    }
    //placing the color back to the final position from the filling box in the right side top box
    if (mousePressedOver(col4L1) && col4L1.x == 1365 && col4L1.y == 470 && frameCount % 2 == 0) {
      col4L1.x = 1085
      col4L1.y = 680
      pop_sound.play()
      colchangerL1 = 0
      poslokL1 = 0
    }
    //placing the color back to the final position from the filling box in the right side bottom box

    if (colchangerL1 == 1) {
      checkerL1.visible = true
    }
    else {
      checkerL1.visible = false
    }
    //making the checking box visible

    if (mousePressedOver(checkerL1)) {
      if (col1L1.x == 1365 && col1L1.y == 285 || col1L1.x == 1365 && col1L1.y == 470) {
        if (col2L1.x == 1365 && col2L1.y == 285 || col2L1.x == 1365 && col2L1.y == 470) {
          colchangerL1 = 2
        }
        else {
          colchangerL1 = 3
        }
      }
      else {
        colchangerL1 = 3
      }
    }
    //checking the filled color is right or woring and changing the condition respectively

    if (colchangerL1 == 2) {
      right_sound.play()
      colchangerL1 = 0
      
    }
    //playing a plesent tone as the answer is correct 
    if (colchangerL1 == 3) {
      wrong_sound.play()
      colchangerL1 = 0
    }
    //playing a unplesent tone as the answer is wrong

    if (colchangerL1 == 0  && checkerL1.visible==false) {
      nxtlev = 1
      poslokL1=2
    }
    //giving conditions to make the next level button only visiable if the check is right

    if (col1L1.x == 1365 && col1L1.y == 285 || col1L1.x == 1365 && col1L1.y == 470 &&  nxtlev == 1 && poslokL1==2) {
      if(col2L1.x == 1365 && col2L1.y == 285 || col2L1.x == 1365 && col2L1.y == 470 &&  nxtlev == 1 && poslokL1==2){
        nxtlevelerL1.visible = true
      }
      else{ 
        nxtlevelerL1.visible = false        
      }
    }
    else {
      nxtlevelerL1.visible = false
    }
    //Making the next leveler visiable and unvisible respectively from the result of the outcome above conditions

    if (mousePressedOver(nxtlevelerL1)&&GameMode=="L1") {
      GameMode = "L2"
    }
    //moving to the next level in the next level button is pressed

  }


  if (GameMode == "L2") {
    Level1.destroy
    col1L1.destroy()
    col2L1.destroy()
    col3L1.destroy()
    col4L1.destroy()
    checkerL1.destroy()
    nxtlevelerL1.destroy()
    colchangerL1=0
    nxtlev=0

    Level2Pre.visible = true
    if (frameCount % 120 == 0) {
      Level2Pre.destroy()
      Level2.visible = true
    }
    if (Level2.visible == true) {
      col1L2.visible = true
      col2L2.visible = true
      col3L2.visible = true
      col4L2.visible = true
      col5L2.visible = true
      col6L2.visible = true
    }

    if (mousePressedOver(col1L2) && col1L2.x != 1378 && col1L2.y != 210) {
      col1L2.x = 1378
      col1L2.y = 210
      if (colchangerL2 == 1) {
        col1L2.x = 1378
        col1L2.y = 370
      }
      colchangerL2 = 1
    }
    if (mousePressedOver(col1L2) && col1L2.x == 1378 && col1L2.y == 210 && frameCount % 10 == 0) {
      col1L2.x = 285
      col1L2.y = 680
      colchangerL2 = 0
    }
    if (mousePressedOver(col1L2) && col1L2.x == 1378 && col1L2.y == 370 && frameCount % 10 == 0) {
      col1L2.x = 285
      col1L2.y = 680
      colchangerL2 = 0
    }

    if (mousePressedOver(col2L2) && col2L2.x != 1378 && col2L2.y != 210) {
      col2L2.x = 1378
      col2L2.y = 210
      if (colchangerL2 == 1) {
        col2L2.x = 1378
        col2L2.y = 370
      }
      colchangerL2 = 1
    }
    if (mousePressedOver(col2L2) && col2L2.x == 1378 && col2L2.y == 210 && frameCount % 10 == 0) {
      col2L2.x = 485
      col2L2.y = 680
      colchangerL2 = 0
    }
    if (mousePressedOver(col2L2) && col2L2.x == 1378 && col2L2.y == 370 && frameCount % 10 == 0) {
      col2L1.x = 485
      col2L1.y = 680
      colchangerL2 = 0
    }


    if (mousePressedOver(col3L2) && col3L2.x != 1378 && col3L2.y != 210) {
      col3L2.x = 1378
      col3L2.y = 210
      if (colchangerL2 == 1) {
        col3L2.x = 1378
        col3L2.y = 370
      }
      colchangerL2 = 1
    }
    if (mousePressedOver(col3L2) && col3L2.x == 1378 && col3L2.y == 210 && frameCount % 10 == 0) {
      col3L2.x = 685
      col3L2.y = 680
      colchangerL2 = 0
    }
    if (mousePressedOver(col3L2) && col3L2.x == 1378 && col3L2.y == 370 && frameCount % 10 == 0) {
      col3L2.x = 685
      col3L2.y = 680
      colchangerL2 = 0
    }

    if (mousePressedOver(col4L2) && col4L2.x != 1378 && col4L2.y != 210) {
      col4L2.x = 1378
      col4L2.y = 210
      if (colchangerL2 == 1) {
        col4L2.x = 1365
        col4L2.y = 370
      }
      colchangerL2 = 1
    }
    if (mousePressedOver(col4L2) && col4L2.x == 1378 && col4L2.y == 210 && frameCount % 10 == 0) {
      col4L2.x = 885
      col4L2.y = 680
      colchangerL2 = 0
    }
    if (mousePressedOver(col4L2) && col4L2.x == 1378 && col4L2.y == 370 && frameCount % 10 == 0) {
      col4L2.x = 885
      col4L2.y = 680
      colchangerL2 = 0
    }

    if (mousePressedOver(col5L2) && col5L2.x != 1378 && col5L2.y != 210) {
      col5L2.x = 1378
      col5L2.y = 210
      if (colchangerL2 == 1) {
        col5L2.x = 1378
        col5L2.y = 370
      }
      colchangerL2 = 1
    }
    if (mousePressedOver(col5L2) && col5L2.x == 1378 && col5L2.y == 210 && frameCount % 10 == 0) {
      col5L2.x = 1085
      col5L2.y = 680
      colchangerL1 = 0
    }
    if (mousePressedOver(col5L2) && col5L2.x == 1378 && col5L2.y == 370 && frameCount % 10 == 0) {
      col5L2.x = 1085
      col5L2.y = 680
      colchangerL2 = 0
    }

    if (mousePressedOver(col6L2) && col6L2.x != 1378 && col6L2.y != 210) {
      col6L2.x = 1378
      col6L2.y = 210
      if (colchangerL2 == 1) {
        col6L2.x = 1378
        col6L2.y = 370
      }
      colchangerL2 = 1
    }
    if (mousePressedOver(col6L2) && col6L2.x == 1378 && col6L2.y == 285 && frameCount % 10 == 0) {
      col6L2.x = 1285
      col6L2.y = 680
      colchangerL2 = 0
    }
    if (mousePressedOver(col6L2) && col6L2.x == 1378 && col6L2.y == 370 && frameCount % 10 == 0) {
      col6L2.x = 1285
      col6L2.y = 680
      colchangerL2 = 0
    }

    if (colchangerL2 == 1) {
      checkerL2.visible = true
    }
    else {
      checkerL2.visible = false
    }

    if (mousePressedOver(checkerL2)) {
      if (col1L2.x == 1378 && col1L2.y == 210 || col1L2.x == 1378 && col1L2.y == 370) {
        if (col2L2.x == 1378 && col2L2.y == 210 || col2L2.x == 1378 && col2L2.y == 370) {
          colchangerL2 = 2
        }
        else {
          colchangerL2 = 3
        }
      }
      else {
        colchangerL2 = 3
      }
    }

    if (colchangerL2 == 2) {
      right_sound.play()
      colchangerL2 = 0
      
    }
    if (colchangerL2 == 3) {
      wrong_sound.play()
      colchangerL2 = 0
    }

    if (colchangerL2 == 0 && mousePressedOver(checkerL2) && checkerL2.visible==false){
      nxtlev = 1
    }

    if (col1L2.x == 1378 && col1L2.y == 210 || col1L2.x == 1378 && col1L2.y == 370 && colchangerL2 == 0 && nxtlev == 1 && mousePressedOver(checkerL2) && checkerL2.visible==false) {
      if(col2L2.x == 1378 && col2L2.y == 210 || col2L2.x == 1378 && col2L2.y == 370){
        nxtlevelerL1.visible = true
      }
    }

  }

// this part Of the game is comming Soon PLS wait...

  // if (GameMode == "L3") {

  //   Level3Pre.visible = true
  //   if (frameCount % 120 == 0) {
  //     Level3Pre.destroy()
  //     Level3.visible = true
  //   }
  // }
  // if (GameMode == "L4") {

  //   Level4Pre.visible = true
  //   if (frameCount % 120 == 0) {
  //     Level4Pre.destroy()
  //     Level4.visible = true
  //   }
  // }
  // if (GameMode == "L5") {

  //   Level5Pre.visible = true
  //   if (frameCount % 120 == 0) {
  //     Level5Pre.destroy()
  //     Level5.visible = true
  //   }
  // }
  // if (GameMode == "L6") {

  //   Level6Pre.visible = true
  //   if (frameCount % 120 == 0) {
  //     Level6Pre.destroy()
  //     Level6.visible = true
  //   }
  // }
}

function dev() {
  GameMode = "Lpick"
  fill("white")
  text('BYPASS MODE', 30, 20)
}