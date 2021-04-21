function isTouching(feet1,feet2){
    if (feet1.x - feet2.x < feet2.width/2 + feet1.width/2
      && feet2.x - feet1.x < feet2.width/2 + feet1.width/2
      && feet1.y - feet2.y < feet2.height/2 + feet1.height/2
      && feet2.y - feet1.y < feet2.height/2 + feet1.height/2) {
  return true;
  
  }
    else {
      return false;
  
    }
  }
  function bounceOff(feet1,feet2){
    if (feet1.x - feet2.x < feet2.width/2 + feet1.width/2
      && feet2.x - feet1.x < feet2.width/2 + feet1.width/2
      && feet1.y - feet2.y < feet2.height/2 + feet1.height/2
      && feet2.y - feet1.y < feet2.height/2 + feet1.height/2) {
feet1.velocityX = feet1.velocityX*(-1);
feet2.velocityX = feet2.velocityX*(-1);
  }
    else {
        feet1.velocityY = feet1.velocityY*(-1);
        feet2.velocityY = feet2.velocityY*(-1);
  
    }
  }