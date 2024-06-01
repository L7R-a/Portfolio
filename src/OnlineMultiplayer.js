import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const OnlineMultiplayer = () => {
  return (
    <ProjectDisplay
      title="Online Multiplayer"
      subtitle="Blaster!"
      videoSrc="https://www.youtube.com/embed/Ej-QJFxmptw"
      githubLink="https://github.com/L7R-a/Shooter-Multiplayer"
      downloadLink="https://drive.google.com/drive/folders/12cMtA2tTqmIFrdeMuVeIk-e9s0QSsmq1?usp=drive_link"
      storyText={[
                  "This project, an online multiplayer 3D shooter game, was the last Udemy course I did on game development. The course was designed to teach the fundamentals of online development in Unreal Engine and C++ by guiding students through both the theory and practical implementation of such games. I chose this tutorial to gain hands-on experience in developing games with networking components, which are crucial for many modern software systems.",
                  "Throughout the course, I followed the tutorials to implement various technical aspects of shooter games as well as online features. To personalize the game, I designed all the scenes, balanced the weapons and power-ups according to my preferences, and added a unique feature where players die and respawn if they fall off the main map. These modifications not only enhanced the gameplay but also allowed me to get deeper into programming and design aspects, making the project a comprehensive learning experience.",
                  "Completing this project provided me with valuable insights into developing online video games,  as well as managing complex projects with multiple files and dependencies. It taught me how to use C++ and Unreal Engine in ways that expanded my previous knowledge and challenged me to solve problems creatively. This experience has increased my interest in tackling more complex projects, especially those involving networking, and has laid a strong foundation for my future endeavors in programming."]}
      const learningText = {[
                    {
                      title: "Online Video Game Development",
                      details: [
                        "Created a plugin using Unreal Engine Online Subsytem to connect to Steam services to allow multiplayer",
                        "Assigned networking roles and their authorities to each player",
                        "Synced client's time with server's time to make the experience consistent ",
                        "Applied algorithms such as Server Side Rewind and Client Side prediction to reduce lag"
                      ]
                    },
                    {
                      title: "Weapons",
                      details: [
                        "Implemented snipers, bazookas, shotguns, and grenades using hit-scan and projectile techniques",
                        "Designed an algortihm that randomly scatters the bullets for automatic and shotgun weapons",
                        "Allowed players to carry two weapons at once"
                      ]
                    },
                    {
                      title: "Design & Effects",
                      details: [
                        "Applied a VFX when player dies similar to Fortnite",
                        "Created a fantasy shooter map design",
                        "Added music to maps",
                        "Implemented multiple game modes",
                        "Designed a UI menu and a HUD that shows the player's status, even the latency"
                      ]
                    },
                  ]}
      challenges={[
        {
          title: "Server Side Reinwind",
          challenge: [
            "A bug that would crash the editor without leaving any report after testing it. It took many hours to solve."
          ],
          solution:[
            "There was a mistake in the while loop that I had in charge of removing the nodes from the frame history. Since it never ran that while loop, the frame history was filling up of nodes every tick, causing it to crash."
          ]
        },
        {
          title: "Shotgun bullets",
          challenge: [
            "Applying damage from the shotgun was hard because this was the only weapon that shoots multiple bullets at once, meaning that all bullets needed to check specifically what players got hit and where many times at once. Even with a tutorial it was hard to get it right"
          ],
          solution:[
            " Adding multiple TArrays and TMaps that would store the characters that got hit and where to then distribute the damage using multiple for loops. "
          ]

        },
        {
          title: "Build the game",
          challenge: [
            "The build and editor version behaved differently sometimes. This involved things such as assets having different physics proportions to game states not working correctly.",
          ],
          solution:[
            "There were many solutions for this. Sometimes I had to build the game again, other times change the asset, and for the game mode I had to remove it from the build version completely."
          ]

        },
      ]}
      showKnownBugs = {true}
      knownBugs={[        "In order to find matches, the user must open Steam manually and then open the game.",
      "Sometimes the game session doesn't end, needing to close the game to join a session later.","Sometimes timer doesn't display.", "If player receives damage while throwing a grenade, they can't shoot until they respawn."]}
    />
  );
};

export default OnlineMultiplayer;
