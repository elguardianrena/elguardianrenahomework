var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3579f873-9206-4b75-9ca1-3a6933ad5258","608a1c79-021f-4a0b-88c4-962f5e0818bd","8090858a-02ea-4f78-9ef8-df38b3d7308e","a2b7cad4-a96c-4846-9f9c-7774a7f07c05"],"propsByKey":{"3579f873-9206-4b75-9ca1-3a6933ad5258":{"name":"e1","sourceUrl":"assets/api/v1/animation-library/gamelab/kFop4pk9J7NCJ3PSYnb4OUSlgcVocboR/category_video_games/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"kFop4pk9J7NCJ3PSYnb4OUSlgcVocboR","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kFop4pk9J7NCJ3PSYnb4OUSlgcVocboR/category_video_games/sun.png"},"608a1c79-021f-4a0b-88c4-962f5e0818bd":{"name":"e2","sourceUrl":"assets/api/v1/animation-library/gamelab/6GgbaHnE0LaRZG2g1z49869GFaqb4dl4/category_video_games/sun2.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"6GgbaHnE0LaRZG2g1z49869GFaqb4dl4","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6GgbaHnE0LaRZG2g1z49869GFaqb4dl4/category_video_games/sun2.png"},"8090858a-02ea-4f78-9ef8-df38b3d7308e":{"name":"m1","sourceUrl":"assets/api/v1/animation-library/gamelab/MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh/category_fantasy/rpgcharacter_19.png","frameSize":{"x":258,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":258,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh/category_fantasy/rpgcharacter_19.png"},"a2b7cad4-a96c-4846-9f9c-7774a7f07c05":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("m1");
hero.scale=.2;
enemy1.setAnimation("e1");
enemy1.scale=.1;
enemy2.setAnimation("e2");
enemy2.scale=.1;
enemy3.setAnimation("e1");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//fondo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+4
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-4
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+4
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_male_voiceover/wrong_male.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_male_voiceover/congratulations_male.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
