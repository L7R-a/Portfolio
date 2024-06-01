import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const Tanks = () => {

    return (
        <ProjectDisplay
          title="Basic Game"
          subtitle="Toon Tanks!"
          videoSrc="https://www.youtube.com/embed/LpU3NM23JdQ"
          githubLink="https://github.com/L7R-a/Toon-Tanks"
          downloadLink="https://drive.google.com/drive/folders/1DdWM8BjMMOltB1QF06r5H-SbE0OXNhxa?usp=drive_link"
          storyText={[
            "This project, a simple tanks game, began as a Udemy course. The course was designed to teach the fundamentals of the Unreal Engine blueprints, C++, and object oriented programming in game development. I chose this tutorial to gain hands-on experience with the Unreal Engine editor and C++.",
            "In this course, I used the tutorials as guide to implement aspects that any game should have such as having a pawn, game controller, input bindings, and game modes and put them together to make a cohesive game. ",
            "Completing this project provided me confidence working with Unreal Engine editor and its classess and it also gave me a better understanding of the usage of blueprints. Additionally, this project show me how games are developed and how they can be expanded. This game gave me the fundamentals that I would need in order to make the single shooter game I developed afterwards.",
  
          ]}
          const learningText = {[
            {
              title: "C++",
              details: [
                "Created a class BasePawn that was the parent class of both player and enemy classes",
                "Used constructor, tick, destroy, and begin play functions inside classes",
                "Designed my own functions such as move, rotate, or fire",
                "Basics of AI, shooting, health, win, and loose conditions"
              ]
            },
            {
              title: "Blueprints",
              details: [
                "Designed a simple widget that counts down the time before starting the game",
                "Created object instances using blueprints references that had both a mesh and a class",
                "Implemented a blueprint that shake the camera when shooting",
                "Used a game mode that shows the widget blueprint at the beginning and at the end"
              ]
            },

          ]}

          // storyText={[
          //   "This was my second game developed in Unreal Engine after the words game. This project help me get more used to blueprints, C++, the Unreal Engine editor, and the three of them together. Overall, this project is what made me realize I was ready to start a bigger project which was the single player game I did afterwards."
          // ]}
          // learningText={[
          //   "Unreal Engine Frameworks",
          //   "Blueprints",
          //   "Basic AI system",
          //   "OOP principles in game design",
          //   "Basic interface",
          //   "Game states"
          // ]}
        />
      );
};

export default Tanks;
