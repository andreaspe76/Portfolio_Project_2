# Ultimate Rock, scissors, paper, lizard, Spock game 

Ultimate Rock, scissors, paper, lizard, Spock, is a game designed for adults and children alike, 
to help them make decisions and have fun against an opponent who makes a truly random choices.
The game is based on the classic rock, paper scissors game, but "enhanced" based on the expanded rules 
introduced by the popular "The Big Bang Theory" sitcom during episode 8 of season 2. 

<p align="center">
<img src="assets/readme_images/all-devices-black.png">
</p>


## Features

- __Header__

- The header presents the title of the game, with a cartoonish font to make it playfull.

<p align="center">
<img src="assets/readme_images/title.png">
</p>


- __Game Options__

- The game options include a clear instruction and then a choice of options to choose from: Rock, Paper, Scissors, Lizard, Spock. 
  The choices are buttons the player can click to make their choice.

<p align="center">
<img src="assets/readme_images/user_options.png">
</p>


- __Game Result__

- When the player makes a choice, a corresponding image is shown on their side of the game board.
- Then Javascript makes a random choice for the computer player, displays a corresponding image on the computer player's side of the game board,
  and decides who the winner is.
- The winner is announced under the choice buttons, and the score of the player or the computer is updated depending on who won.
- The score and the result is clear to the user, making it easy to understand who won and what the current score standings are.

<p align="center">
<img src="assets/readme_images/computer_wins.png">
</p>


- __Background Color__

- Using javascript, after each turn, the background color of the game area is changing, depending on who won. 
- This makes it easier for the player to register the winner of each turn.

<p align="center">
<img src="assets/readme_images/player_wins.png">
</p>

<p align="center">
<img src="assets/readme_images/computer_wins.png">
</p>

<p align="center">
<img src="assets/readme_images/tie.png">
</p>


- __Turns left counter__

- Under the choice images, there is a counter that shows the turns that are left until the end of the current game.
- Using javascript, after each turn, one is detacted from the total.

<p align="center">
<img src="assets/readme_images/turns_left.png">
</p>


- __Winner of the game round__

- After the 10 turns that each game round lasts are spent, the game ends.
- Javascript compares the total wins of the player and the computer and declares the round winner.
- The available messages cover all possible results. Player or computer victory and the result of a tie.

<p align="center">
<img src="assets/readme_images/round_winner.png">
</p>


- __Reset of gameboard button__

- When the game ends, a reset button which is normally hidden appears using javascript.
- The player choice buttons stop to function, so that the player cannot continue playing.
- Upon pressing the reset button, the gameboard resets and is ready for another game of 10 turns.

<p align="center">
<img src="assets/readme_images/reset_btn.png">
</p>


- __The Footer__

- The footer consists of the rules of the game.
- The footer makes it easy for the player to understand the relations between the various choices presented to them.

<p align="center">
<img src="assets/readme_images/game_footer.png">
</p>


## Bugs

- __Solved bugs__

- Initialy upon deployment, I saw that the h2 element containing the turns left counter, was not aligning correctly in the game area.
  I solved the issue by moving the whole section containing the turns left counter, final winner message and reset button, outside the main element.

- In the javascript, after the end of the game, while trying to compare the playerScore and computerScore variables, the code was not working.
  I realised that because both variables were initialy declared inside their corresponding functions, the decrementTurns function, which in the event of no more turns left,
  compares both variables and declares the game winner, could not call them. By moving them outside of their corresponding functions, in the beginning of the file under the constants, the problem was solved.

- __Unfixed bugs__

- There are no known unfixed bugs.


## HTML, CSS, JavaScript validation & testing

- __HTML__

- The HTML code was validated using the official W3C validator with no errors.

<p align="center">
<img src="assets/readme_images/html_check.png">
</p>


- __CSS__

- The CSS code was validated using the official Jigsaw validator with no errors.

<p align="center">
<img src="assets/readme_images/css_check.png">
</p>


- __JavaScript__

- The JavaScript code was validated using the Jshint validator with no errors.

<p align="center">
<img src="assets/readme_images/java_script_check.png">
</p>


- __Testing__

- The game was tested using both desktop and mobile devices.
- I have confirmed that the results are always correct.
- I have confirmed that the accessibility, readability and performance of the game in both desktop and mobile devices is good, 
  using the lighthouse dev tools.

<p align="center">
<img src="assets/readme_images/lighthouse_desktop_check.png">
</p>

<p align="center">
<img src="assets/readme_images/lighthouse_mobile_check.png">
</p>


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are the following:
   - In the GitHub repository, navigate to the Settings tab.
   - From the source section drop-down menu, select the Master Branch.
   - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://andreaspe76.github.io/Portfolio_Project_2/


## Credits 

### Content 

- The idea for the layout of the game was taken from the Code Institute game proposal for portfolio project 2.
- The idea to add the lizard & Spock choices was taken from the "The Big Bang Theory" sitcom.


### Media

- The photos used for the game, were found with during a web search and fall under the free to use and share license.


