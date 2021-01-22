var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var line1, line2, line3, line4;

function preload(){
   // music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    line1 = createSprite(800,600,1600,20);

    line2 = createSprite(800,600,20,1600);

    line3 = createSprite(0,0,1600,20);

    line4 = createSprite(0,0,20,1200);


    box1 = createSprite(90,580,140,15);
    box1.shapeColor = "red";

    box2 = createSprite(250,580,140,15);
    box2.shapeColor = "blue";

    box3 = createSprite(410,580,140,15);
    box3.shapeColor = "green";

    box4 = createSprite(570,580,140,15);
    box4.shapeColor = "yellow";
   
    ball = createSprite(random(20,750),300, 30, 30);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 3;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
  
    if(ball.x-box1.x<ball.width/2+box1.width/2 
       && box1.x-ball.x<ball.width/2+box1.width/2 
       && ball.y-box1.y<ball.height/2+box1.height/2 
       && box1.y-ball.y<ball.height/2+box1.height/2
       && ball.bounceOff(box1)) {
          
            ball.shapeColor = "red";
          //  ball.velocityX = 0;
          //               ball.velocityY = 0;
        }
       

       else  if(ball.x-box2.x<ball.width/2+box2.width/2 
            && box2.x-ball.x<ball.width/2+box2.width/2 
            && ball.y-box2.y<ball.height/2+box2.height/2 
            && box2.y-ball.y<ball.height/2+box2.height/2
            && ball.bounceOff(box2)) {
               
                 ball.shapeColor = "blue";
               //  ball.velocityX = 0;
                         ball.velocityY = 0;
             }
            


            else  if(ball.x-box3.x<ball.width/2+box3.width/2 
                && box3.x-ball.x<ball.width/2+box3.width/2 
                && ball.y-box3.y<ball.height/2+box3.height/2 
                && box3.y-ball.y<ball.height/2+box3.height/2
                && ball.bounceOff(box3)) {
                   
                     ball.shapeColor = "green";
                  //   ball.velocityX = 0;
                  //       ball.velocityY = 0;
                 }
                 



                 else if(ball.x-box4.x<ball.width/2+box4.width/2 
                    && box4.x-ball.x<ball.width/2+box4.width/2 
                    && ball.y-box4.y<ball.height/2+box4.height/2 
                    && box4.y-ball.y<ball.height/2+box4.height/2
                    && ball.bounceOff(box4)) {
                       
                         ball.shapeColor = "yellow";
                       //  ball.velocityX = 0;
                       //  ball.velocityY = 0;
                     }
                    
             else {
                 ball.shapeColor = "white";
                 
             }

          
            ball.bounceOff(line1);
            ball.bounceOff(line2);
            ball.bounceOff(line3);
            ball.bounceOff(line4);
                
    //add condition to check if box touching surface and make it box
    drawSprites();
}
