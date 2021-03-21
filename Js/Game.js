class Game
{
   constructor()
   {}
   tutorial()
   {
     this.movement = createButton("Use WASD to move");
     this.shoot = createButton("Press left mouse button to shoot");
     this.aim = createButton("Press right arrow button to aim");
   }
   level1()
   {
     enemy1 = new Enemy(600,600);
     characterForLevel1 = new Character(100,100);
   }
   level2()
   {
     enemy2 = new Enemy(600,500);
     characterForLevel2 = new Character(100,100);
   }
   level3()
   {
     enemy3 = new Enemy(500,600);
     characterForLevel3 = new Character(100,100);
   }
   level4()
   {
     enemy4 = new Enemy(550,600);
     characterForLevel4 = new Character(100,100);
   }
   display()
   {
     this.movement.display();
     this.movement.position(400,350,60,60);
     this.shoot.display();
     this.shoot.position(500,350,60,60);
     this.aim.display();
     this.aim.position(550,350,60,60);
   }
}