import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const VRProjects = () => {
  return (
    <ProjectDisplay
      title="Class Project"
      subtitle="VR Principles"
      videoSrc="https://www.youtube.com/embed/GbDM8OHtUZI"
      storyText={["This VR demostration, a classroom with a classmate, was a long project for one of my elective courses in my university. The application is using Unity as the engine, its XR framework, and a XR simulation toolkit to simulate the usage of a VR headset inside the editor.",
                  "The purpose of this project is to apply in Unity the fundamentals that are needed for VR applications to be successful such as cohesive environment, travel, interaction, physics, agents, animations, and UI. For each one of those principles I was required to make a video for the project and explain how I implemented all those features",
                  "This project have me a solid understanding of how to implement VR functionality to games and all the challenges that it involves. It left me ready to work on any video game that plans to use any VR in it.  ",
                  "NOTE: The video on the left is the last video of the project, but the link below will open youtube with a playlist with all the other videos.",
                  "https://www.youtube.com/playlist?list=PL3iIJSj1QvkGpFa6T8VCH-aWmwKHdwLh7"

      ]}

const learningText = {[
  {
    title: "Virtual Environments",
    details: [
      "Apply appropriate lightning and audio to the scene",
      "Properly scale objects to make them realistic",
      "Correctly place objects and materials in a logical and coherent way"
    ]
  },
  {
    title: "Travel",
    details: [
      "Used travel-based, walking-based, and steering-based travel techniques",
      "Included different types of wayfinding aids"
    ]
  },
  {
    title: "Interactions",
    details: [
      "Used ray-casting and virtual hand manipulation techniques",
      "Applied feedbacks such as sound, subtle, and emphasized when selecting an object"
    ]
  },
  {
    title: "Physics",
    details: [
      "Created realistic compound colliders for objects",
      "Used different types of physic constraints such as complete, heavy, slide, swing, and hierarchical constrains"
    ]
  },
  {
    title: "Virtual Agents",
    details: [
      "Used keyframe animations",
      "Designed an inverse kinematic animation as procedural animation",
      "Created an AI that follows user and also looks at them"
    ]
  },
  {
    title: "User Interface",
    details: [
      "Implemented an UI that works with the user controller",
      "Created UI options to manipulate virtual agent",
      "Allowed users to hide and display the UI as needed",
      "Designed the UI so that it will always follow the player"
    ]
  },


]}
challenges={[
  {
    title: "High quality points",
    challenge: [
      "In all the videos, on top of applying the principles of VR, I was required to think and implement something additional to the project  would consider the project high quality, meaning something that makes the application more pleasant for VR users.",
],
    solution:[
      "Some exapmples that I implemented to solve the problem were adding more features to the UI menu, allowing the virtual agent to follow the player with AI, making objects to be movable only if both hands grab it, or change the color of wayfinding aids if the teleported to that point. "
    ]
  },
  
]}
      showGitHubButton={false} 
      showKnownBugs = {false}
    />
  );
};

export default VRProjects;
