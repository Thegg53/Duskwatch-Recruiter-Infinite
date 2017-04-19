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
			
            for ( j = 0; j < sD; j++){
                  aD[j] = (j + 1)/1000;
            }
            aD[P1 - 1] = 1;
            aD[P2 - 1] = 2;
            aD[P3 - 1] = 3;
                 
            var jj;
			// model to bring 3 cards to the top, accepting random order of top 3
            while( aD[0] < 1 || aD[1] < 1 || aD[2] < 1){ // while the top 3 cards are not the 3 chosen
                  j = [(aD[0]), (aD[1]), (aD[2])]; //temporary store of top 3
                  aD.splice(0,3); // remove the top 3
                  
				  jj = j.sort(); //sort top 3 (Unneeded -> Needed 1st -> needed 2nd -> needed 3rd)

                 console.log(jj);
				  
             
					if(jj[0] == 1|| jj[1] == 1 || jj[2] == 1 ){ //if we found card number 1, send it to the bottom of the pile.
                              aD.push(jj[0]);
                              aD.push(jj[1]);
                              aD.push(jj[2]);
                              var tempDeck2 = aD.slice();
                              aIterations.push(tempDeck2);
							  console.log("\n\n iteration number " + iterationCounter + " deck order:" + aIterations[iterationCounter])
                              iterationCounter++;
                        } else { //in any other case put the cards we want on top of the pile and the remainder on bottom of pile. 
                              aD.push(jj[2]);
                              aD.push(jj[1]);
                              aD.push(jj[0]);
                              var tempDeck3 = aD.slice();
                              aIterations.push(tempDeck3);
							  console.log("\n\n iteration number " + iterationCounter + " deck order:" + aIterations[iterationCounter])
                              iterationCounter++;
                        }
                
                  if(iterationCounter > 5000){
                        break
                  }
            }
            alert("finished in " + iterationCounter + "iterations \n");
      }
}
