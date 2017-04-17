# Duskwatch-Recruiter-Infinite
A quick description on the how and why deck stacking with Duskwatch recruiter is possible

Assumption 1: Your deck size is non-Divisible by 3
Note: If deck size is divisible by 3, do a few steps just until you hit a creature, take it to your hand and proceed.
Assumption 2: You can do as many iterations as needed

As long as those are true, full deck reordering is possible (without revealing anything to the opponent at any moment).

I have a source code that allows you to put 3 chosen cards to the top of your library (as of 2017-04-18, they will come in a random order. It can be proven that after N iterations, where N is the number of cards in library, reordering of groups of 3 is achieved and you get the top 3 to be what you want).

How to use:

call the sort function in any JavaScript environment (I use the chrome console). It expects 4 parameters, the first being the deck size, the 2nd being the starting position from the 1st card you want (starting from the top, and the top card being number 1. Therefore, if our card is the tenth from the top, pass in a 10 as an input). The 3rd and 4th parameter are the positions of the 2nd and 3rd card you want to get to the top. 

Disclaimer: this is nowhere close to refined, and the code is a mess, but it works. It just serves to prove that it is possible.
