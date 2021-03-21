var homePage,tutorial_page;
var player,characterForLevel1,characterForLevel2,characterForLevel3,characterForLevel4,lev1,lev2,lev3,lev4;
var game;
var enemy1,enemy2,enemy3;

function preload()
{
   player = loadImage('Images/images.png');
}
function setup()
{
   createCanvas(700,700);
   homePage = new Home();
   homePage.display();
}

function draw()
{
   background("white");
}