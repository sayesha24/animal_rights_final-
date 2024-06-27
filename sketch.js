var bg1, bg2, bg3, bg4, bg5, bg6, background_img;
var count = 0; // Initialize count here

function preload() {
  bg1 = loadImage("backgroundImg/leopard.png");
  bg2 = loadImage("backgroundImg/lion.webp");
  bg3 = loadImage("backgroundImg/panda.webp");
  bg4 = loadImage("backgroundImg/blackbuck.png");
  bg5 = loadImage("backgroundImg/black_monkey.png");
  bg6 = loadImage("backgroundImg/rh.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  background_img = createSprite(1300, 550, displayWidth, displayHeight);
  background_img.scale = 0.9;

  //button = new Button(); // Uncomment this line if you are using a button class
}

function draw() {
  background("black");
  spawnBackground();
  drawSprites();

  fill("orange");
  textSize(200);
  textAlign(CENTER, CENTER);
  text(count + "+", displayWidth / 2 - 600, displayHeight / 2 - 150);
  textSize(40);
  fill("white");
  text("Endangered Species in India", displayWidth / 2 - 600, displayHeight / 2 - 50);

  // Update counter every second until it reaches 300
  count_increment();
}

function count_increment() {
  // Update counter every second until it reaches 300
  if (frameCount % 5 === 0 && count < 300) { // Assuming 30 frames per second
    count++;
  }
}

function spawnBackground() {
  if (frameCount % 150 === 0) {
    var img = Math.round(random(1, 6));

    switch (img) {
      case 1:
        background_img.addImage(bg1);
        break;
      case 2:
        background_img.addImage(bg2);
        break;
      case 3:
        background_img.addImage(bg3);
        break;
      case 4:
        background_img.addImage(bg4);
        break;
      case 5:
        background_img.addImage(bg5);
        break;
      case 6:
        background_img.addImage(bg6);
        break;
      default:
        break;
    }
  }
}



// Add event listeners for buttons
document.getElementById("campaignButton").addEventListener("click", function() {
  window.location.href = 'campaign.html';
});

document.getElementById("articlesButton").addEventListener("click", function() {
  window.location.href = 'articles.html';
});

document.getElementById("aboutUsButton").addEventListener("click", function() {
  window.location.href = 'about_us.html';
});

document.getElementById("laws_button").addEventListener("click", function() {
  window.location.href = 'laws.html';
});