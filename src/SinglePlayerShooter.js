import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const SinglePlayerShooter = () => {
  return (
      <ProjectDisplay
        title="Single Player"
        subtitle="Belica"
        videoSrc="https://www.youtube.com/embed/IIV4BUmDSEQ"
        githubLink="https://github.com/L7R-a/Single-Shooter"
        downloadLink="https://drive.google.com/drive/folders/1yITEA2PAQgaUu0hhOGMJg8QcRHCys5rg?usp=drive_link"
        storyText={[
          "This project, an single player 3D shooter game, began as a Udemy course. The course was designed to teach the fundamentals of shooter games in Unreal Engine and C++ by showing students the capabilities of both blueprints and coding together. I chose this tutorial to gain hands-on experience in vectors and AI in Unreal Engine.",
          "Over the course, I utilized the tutorials to create different technical features of shooter games while at the same time trying to make it look like games that I have played. For example, the realistic and futuristic character is similar to Call Of Duty Black Ops 3 characters while the HUD, weapon slots, and character movement were similar to Fortnite.",
          "Finishing this project provided me confidence working with blueprints, AI, and 3D math in Unreal Engine. It made me realize the potential that this engine has and an idea of how AAA shooter games are developed these days. This game made me want to start my next project right away, but this time with a bigger challenge.",

        ]}
                    const learningText = {[
                      {
                        title: "Weapons",
                        details: [
                          "Implemented aiming, shooting, reloading, and grabbing weapons",
                          "Added recoiling, sounds, and particle effects to shooting",
                          "Used data tables to facilitate creating new weapons and rarities",
                          "Created headshot functionality",
                          "Added a weapon inventory similar to Fortnite",
                        ]
                      },
                      {
                        title: "AI",
                        details: [
                          "Used blackboard with multiple keys and a behavior tree to make the enemy behavior",
                          "Developed an enemy controller class that initializes the blackboard",
                          "Designed an enemy class that will manipulate the keys' states of the blackboard"
                        ]
                      },
                      {
                        title: "Blueprints",
                        details: [
                          "Created the complex glow effect of the weapons using multiple nodes",
                          "Used a blueprint to create the HUD and widgets of the game",
                          "Made animation blueprints for player and enemies"
                        ]
                      },
                      {
                        title: "Character",
                        details: [
                          "Worked with character movement, position, and rotation",
                          "Implemented footstep sounds",
                          "Character's sigth zoom's in and out when aiming"
                        ]
                      },
                    ]}
        challenges={[
          {
            title: "Dynamic glow effect material",
            challenge: [
              "Designing the glow effect of the weapon rarity required creating a complex blueprint with multiple nodes and wires"
            ],
            solution:[
              "Going one by one on each node and commenting them until finding the miss connected wire was the solution"
            ]
          },
          
        ]}
      
        showKnownBugs = {true}
      knownBugs={["Sometimes it might be hard to pick up weapons","Sometimes the enemies wont move while they are getting shoot"]}
      />
  );

};

export default SinglePlayerShooter