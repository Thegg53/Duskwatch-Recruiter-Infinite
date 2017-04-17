function sort(sD,P1, P2, P3){
      //sD = size of deck (number remaining cards)
      //P1 = initial position of the card we want on top. Top position is 1
      //P2 = initial position of the card we want 2nd. Top position is 1
      //P3 = initial position of the card we want 3rd. Top position is 1
     
//    alert("Size: " + sD + " \n starting position of top C: " + P1
//    + " \n starting position of C wanted 2nd: " + P2
//    + " \n starting position of C wanted 3rd: "+ P3);
 
      var aIterations = [];
      var iterationCounter = 0;
 
      var haveWantedC = false; //control if we have found a card we wanted in the previous iteration
      if(sD % 3 == 0){
            alert("Divisible by 3. This only works if not divisible by 3");
      } else {
            var aD = [];
            for (var j = 0; j < sD; j++){
                  aD[j] = 0;
            }
            aD[P1 - 1] = 1;
            aD[P2 - 1] = 2;
            aD[P3 - 1] = 3;
                 
            var jj;
			// model to bring 3 cards to the top, accepting random order of top 3
            while( aD[0] == 0 || aD[1] == 0 || aD[2] == 0){ // while the top 3 cards are not the 3 chosen
                  j = [aD[0], aD[1], aD[2]]; //temporary store of top 3
                  aD.splice(0,3); // remove the top 3
                  jj = j.sort(); //sort top 3 (Unneeded -> Needed on top (1st) -> Needed 2nd -> Needed 3rd)
                  if(haveWantedC == true){ //if we have found a card we want in the previous iteration, we now put the new cards found in the top of the bottom 3. This way, the newly found cards will group with the cards that were in the bottom of the previous pile.
                        aD.push(jj[2]);
                        aD.push(jj[1]);
                        aD.push(jj[0]);
                        var tempDeck = aD.slice();
                        aIterations.push(tempDeck);
                        iterationCounter++;
                  } else {
                        if(jj[0] == 1 || jj[1] == 1 || jj[2] == 1 ){ //if we found a single card, send it to the bottom of the pile.
                              aD.push(jj[0]);
                              aD.push(jj[1]);
                              aD.push(jj[2]);
                              var tempDeck2 = aD.slice();
                              aIterations.push(tempDeck2);
                              iterationCounter++;
                        } else { //in any other case (found 2 cards, 3 cards or none at all) put the cards we want on top of the pile and the remainder on bottom of pile. 
                              aD.push(jj[2]);
                              aD.push(jj[1]);
                              aD.push(jj[0]);
                              var tempDeck3 = aD.slice();
                              aIterations.push(tempDeck3);
                              iterationCounter++;
                        }
                  }
 
                  if(aD[sD-3] != 0 || aD[sD-2] != 0 || aD[sD-1] != 0 ){
                        haveWantedC = true;
                  } else {haveWantedC = false;}
 
                  console.log(iterationCounter);
                  if(iterationCounter > 50000){
                        break
                  }
            }
            alert("finished in " + iterationCounter + "iterations \n");
      }
 for(var i = 0; i < iterationCounter; i++){
	console.log("\n\n iteration number " + i + " deck order:" + aIterations[i])	
}
 
}
