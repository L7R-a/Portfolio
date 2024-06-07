import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const RPG = () => {
  return (
      <ProjectDisplay
        title="Group Project"
        subtitle="Magic Gears"
        videoSrc="https://www.youtube.com/embed/lFep0d5Aa_o"
        githubLink="https://github.com/L7R-a/AI-Videogame"
        downloadLink="https://drive.google.com/drive/folders/1hOAaPn5srSPBzYndACkw2haWviQZEGuk?usp=drive_link"
        storyText={[
          "This project, a fantasy RPG by turns, was a group project from one of my university's courses. I choose this course because I only had experience in Unreal Engine and not Unity, so I considered a good chance to learn it as well as C#. ", 
        "My role in this project was to do the character movement, enemy AI, the movement of both enemies and playable characters, animations, combat system, link all the scenes together, implement the dialog mechanic of the game, some designing, and test all the game. In the other hand, my teammates created the story, most of the design, the UI, and the special effects.",
        "Aside from my participation in coding, I would also say that I had to be the leader of the team throughout the project, keeping an eye on everybody's work, helping debugging issues with the UI and design, helping in the slides presentation, and scheduling the group meetings.",
        "In the end, this project made me realize the challenges and advantages that is making a game project with other people people and that Unreal Engine and Unity are very similar engines overall, making it easy to learn Unity by myself. This project left me confident with my experience with Unity and prepared for the Game Jam that I would participate later on."]}
        const learningText = {[
          {
            title: "Unity engine",
            details: [
              "Used shortcuts that the editor has",
              "Designed multiple scenes",
              "Created an animator for all characters"
            ]
          },
          {
            title: "AI",
            details: [
              "Made 2 state machines for the enemies in combat",
              "Included an unique dialogue for each character that changes throughout the game"
            ]
          },
          {
            title: "C#",
            details: [
              "Implemented character movement inside the hub",
              "Created a parent script for characters to inherit from",
              "Designed combats rules and states",
              "Implemented all characters' unique attacks",
              "Used a static integer to update the level that the player completed to update the hub area ",
              "Allowed users to change to different characters in combat"
            ]
          },
          {
            title: "Teamwork",
            details: [
              "Worked with Git source control with the team",
              "Assigned roles to each memeber",
              "Combined ideas and find solutions together",
              "Helped debug other people's code",
              "Presented the project to an audience"
            ]
          },
        
        ]}
        challenges={[
        {
          title: "Teammate couldn't complete combat task",
          challenge: [
           "Originally the combat mechanic was assigned to another team member and the game would allow the player to control all 3 playable characters at once in battle, however, due to certain reasons, the team member couldn't make that feature in combat to happen on time.",          ],
          solution:[
            "Due to time constraints, instead of controlling 3 characters at once, we will allow the players to controll 3 characters one by one, and I would be in charge on the combat system afterwards to implement that feature."
          ]
        },
        {
          title: "Final boss bug",
          challenge: [
            "In some build versions of the game the healer won't heal the tank character, making the final boss impossible to beat"
          ],
          solution:[
            "Due to time constraints,  we had to nerf tremendously the final boss fight, making it simpler than expected, but assuring that the game can be beat."
          ]
        },

]}
       showKnownBugs = {true}
       
      knownBugs={["The animations of the enemy Cactus doesn't work.","In the final boss fight, in some build versions the healer move doesn't work with the tank character."]}
      />
  );

};

export default RPG