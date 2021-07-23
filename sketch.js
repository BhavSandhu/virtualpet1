//Create variables here
var dog,dog1img
var dog2img
var database
var foodS
var foodStock
var fedTime


function preload(){

	//load images here
  dog1img=loadImage("images/dogImg.png")
  dog2img=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(250,400)
  dog.addImage("hungryDog",dog1img)
  dog.scale=0.2
  
}
foodStock=database.ref('Food');
foodStock.on("value",readStock);

fedTime=database.ref('feedTime')
fedTime.on("value",function(data){
  lastFed=data.val();


})



function draw() {  
  background(46, 139, 87)


  drawSprites();
  //add styles here
  text("press the UP_ARROW key to feed drago!")
  

}




