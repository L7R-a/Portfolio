import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const GameJam = () => {
  return (
      <ProjectDisplay
      title="GameJam Project"
      subtitle="Sun Striker"
      videoSrc="https://www.youtube.com/embed/jaKzexsxgRc"
      githubLink="https://github.com/L7R-a/SunStriker"
      downloadLink="https://drive.google.com/drive/folders/1m8cQpxdWOlBmq7e29ebsuY19pdoMULAE?usp=drive_link"
      storyText={["This project, an arcade space shooter game, is what I presented at the UCF GameJam in January 2024 with two other teammates. This was the first Game Jam that I have participated in which we had less than 48 hours and the theme of the game had to be about sunshine. It was a completely difference experience than any other project that I have done so far. We were working together while being in a discord call just coding the game all the time.",
        "This game has also something unique from all the other games I have made so far, and that is that absolutely every asset other than the fonts, were developed by ourselves just for that game, including the music, background, and characters. Although we did not win in that GameJam, I learned many things in this competition, and that adrenaline of coding as a group in a short time motivates me to look forward for my next Game Jam project."
      ]}
      const learningText = {[
        {
          title: "Teamwork",
          details: [
            "Working under time pressure with a team"
          ]
        },
        {
          title: "Technical",
          details: [
            "Made a functional timer",
            "Used the keyboard as both controller input and as text input",
            "Designed the character movement and also shooting projectiles",
            "Included the power-ups system of the sun (player) by typing"
          ]
        },
        
      ]}
    challenges={[
      {
        title: "Repository not working",
        challenge: [
          "Github was causing trouble every time we pushed something into a branch"
        ],
        solution:[
          "We created different scenes were each one of us would do our work and then only one designated person was allowed to put everything together in one scene that will then be pushed into main"
        ]
      },
      {
        title: "Eliminations counter",
        challenge: [
          "We wanted to display how many enemies the user had eliminated but it wouldn't display to the screen"
        ],
        solution:[
          "Instead of display the elimination counter we had to display was a timer to track the performance of the player"
        ]
      },
      {
        title: "Enemy spawners were static",
        challenge: [
          "The spawner of enemies were fixed, meaning that they would always stay in that place. Because the map was too big, if the player moved far enough, it would take too much for the enemies to spawn"
        ],
        solution:[
          "We decided to attach the spawners to the player object, so  that when the player moves, so do will the spawners"
        ]
      },

    ]}
    
       showKnownBugs = {true}

    knownBugs={["Sometimes the UI for return to menu doesn't show up after the match ends.", "The music takes some time to start.", "The UI displays the timer 3 times."]}
      />
  );

};

export default GameJam