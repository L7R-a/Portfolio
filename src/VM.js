import React from "react";
import OtherProjectDisplay from "./OtherProjectDisplay";


const VM = ({title, subtitle, githubLink, storyText, challenges, learningText,}) => {
    return(

        <OtherProjectDisplay
        title="The Simulation of a"
        subtitle="Tiny Virtual Machine"
        githubLink="https://github.com/L7R-a/TinyHarvardMachine"
        storyText={[
          "This was my final project for my Computer Logic and Organization class. The task was to develop a C program that simulates the Tiny Harvard Virtual Machine, reads input instructions from various text files, and displays the results of the calculations.",
          "This project was particularly significant to me as it deepened my understanding of the fetch and execute cycle in computer architecture. It also provided valuable insights into how most programs are executed by computers."
        ]}
        challenges=
      {[
        {
          challenge: [
            "Understand the parts and functions of the VM and how to simulate them in C."
          ],
          solution:[
            "I had to do more research about the VM architecture until I gathered all the pieces and put them together in C."
          ]
        }
        
      ]}

        learningText={["Have a better understanding of the VM parts, functions, and execution cycle as well as how easily with arrays, integers, and switch cases it can be simulated."           
        ]}
      />
    );

};

export default VM