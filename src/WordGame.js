import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const WordGame = () => {
  return (
    <ProjectDisplay
    title="Word Game"
    subtitle="Bull Cow"
    videoSrc="https://www.youtube.com/embed/4HEFiY_iMPw"
    githubLink="https://github.com/L7R-a/BullCows"
    downloadLink="https://drive.google.com/drive/folders/1EUfCyEqDDAVL4qtJG1SnMeV3TXcNYZM_?usp=drive_link"
    storyText={[
      "This project, a word game, began as a Udemy course. The course was designed to teach the basics of the Unreal Engine editor and C++ for students with no prior experience with the engine.  I chose this tutorial to start my journey using Unreal Engine.",
      "In the tutorials, I learned the basics of the Unreal Engine editor such as moving the camera, placing objects, lightning, foliage, and shortcut keys. I also created my first classes here in C++ which was a cartridge class for the text to display.",
      "This project gave me an idea of what is working with Unreal Engine editor and C++ and it also prepared me to the next step which is learning about blueprints. Overall for being the first project in Unreal Engine it accomplished its goal.",

    ]}
    const learningText = {[
      {
        title: "C++",
        details: [
          "Created a class that will receive all the input key from the use and compare it with an isogram word at random",
          "Assigned lives to players",
          "Gave hints to players if they didn't guess right"
        ]
      },
      {
        title: "Unreal Engine",
        details: [
          "Worked with the foliage and lightning of the scene",
          "Placed objects in the level and changed their transform values",
          "Placed classes in objects so that they can be used on the level",
          "Used shortcuts such as move camera, transform, focus object, or select multiple objects"
        ]
      },

    ]}
    />
  );
};

export default WordGame;